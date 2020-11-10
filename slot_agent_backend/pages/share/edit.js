import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect, Component } from "react";
import Router from "next/router";
import Cookies from "js-cookie";
import { ServiceBonus, ServiceImage,ServiceShare } from "../../service";
import { ServiceAgent, ServiceUserAgent, ServiceUser, ServiceNews } from "../../service";
import Dialog from 'react-bootstrap-dialog';

export default class EditNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //auth: { username: "", password: "", role: "3", rolename: "User" },
            shareid: Cookies.get("shareid"),
            agent_code: Cookies.get("agentcode"),
            share_img: "",
            share_message: "",
            add_date: "",
            bonus_type: 1, //1=เติมเงินครั้งแรก , 2=ภาระกิจมือใหม่
            bonus_type_text: "เติมเงินครั้งแรก",
            bonus_status: 1, //1=enable , 0=disable
            switch1: true,
            agent: "",
            imagePreviewUrl: ServiceImage.imageshow("1594692624651-no-image-available.png"),
            file: "",
            image: "",

            errorMessage: "",
            datas: [],
            role_data: [],
            mydatas: {},
            value: "Master",
            data_agent: [],

            role: "3",
            rolename: "User",

        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this)

        this.handleResetSubmit = this.handleResetSubmit.bind(this);
        this.onSearchLevel = this.onSearchLevel.bind(this);
        this.onSearchAgentCode = this.onSearchAgentCode.bind(this);

        this.handleSelectAgentChange = this.handleSelectAgentChange.bind(this);
        this.SearchAgent = this.SearchAgent.bind(this);
        this.onSearchLevelname = this.onSearchLevelname.bind(this);

        this.onFileChange = this.onFileChange.bind(this);
    }

    onFileChange(e) {
        const file = e.target.files[0]
        const reader = new FileReader();
        if (file) {
            reader.onloadend = () => {
                this.setState({ file: file, imagePreviewUrl: reader.result });
            }
            reader.readAsDataURL(file);
        }
        else {
            this.setState({ imagePreviewUrl: ServiceImage.imageshow("1594692624651-no-image-available.png") });
        }
    }

    SearchAgent(agent_name) {
        console.log('get agent_code');
        const agents = this.state.data_agent.filter((agent) => {
            return agent.agent_name == agent_name;
        })

        const agent_code = agents.map((agent, index) => {
            return agent.agent_code;
        })
        //console.log('myrole:' + myrole);
        return agent_code[0];
    }

    handleSelectAgentChange(e) {
        e.preventDefault();
        console.log('e.target.value =>' + e.target.value);
        this.setState({ agent: e.target.value });
        const agent_code = this.SearchAgent(e.target.value);
        Cookies.set('_Agent', e.target.value);
        this.setState({ agent_code: agent_code });
    }

    onSearchLevelname(level) {
        console.log('get myrole');
        const myrole = this.state.role_data.filter((role) => {
            return role.user_level_id == level;
        })

        const user_level = myrole.map((role, index) => {
            return role.user_level_name
        })
        return user_level[0];
    }

    onSearchLevel(level_name) {
        console.log('get myrole');
        const myrole = this.state.role_data.filter((role) => {
            return role.user_level_name == level_name;
        })

        const user_level_id = myrole.map((role, index) => {
            return role.user_level_id
        })
        return user_level_id[0];
    }

    onSearchAgentCode(agent_name) {
        console.log('get Agent Code');
        const agents = this.state.agentdata.filter((agent) => {
            return agent.agent_name == agent_name;
        })

        const agentCode = agents.map((agent, index) => {
            return agent.agent_code
        })
        //console.log('myrole:' + myrole);
        return agentCode;
    }

    onSearchAgentName(agent_code) {
        console.log('get Agent Name');
        const agents = this.state.agentdata.filter((agent) => {
            return agent.agent_code == agent_code;
        })

        const agentName = agents.map((agent, index) => {
            return agent.agent_name
        })
        //console.log('myrole:' + myrole);
        return agentName;
    }

    handleSwitchChange = nr => () => {
        let switchNumber = `switch${nr}`;
        this.setState({
            [switchNumber]: !this.state[switchNumber]
        });
    }

    onClick() {
        this.dialog.showAlert('Hello Dialog!')
    }

    handleResetSubmit() {
        Router.push("/share");
    }

    onConfirmClick() {
        this.dialog.show({
            title: 'Spiderbot confirm',
            body: 'Are you sure?',
            actions: [
                Dialog.CancelAction(() => {
                    dialog.hide();
                }),
                Dialog.OKAction(() => {

                })
            ],
            bsSize: 'small',
            onHide: (dialog) => {
                dialog.hide()
                console.log('closed by clicking background.')
            }
        })
    }

    async handleSubmit() {
        try {
            if (this.state.bonus_name !== "") {
                if (this.state.file) {
                    const formData = new FormData();
                    formData.append('file', this.state.file);
                    //console.log('image file name : ' + filename);
                    const res = await ServiceImage.imageUpload(formData);
                    if (res.data.status === 2000) {
                        const { filename } = res.data.data;
                        console.log('image file name : ' + filename);
                        this.setState({ share_img: filename });
                        this.EditShare();
                    } else {
                        this.dialog.showAlert('บันทึกข้อมูล Bonus ไม่สำเร็จ กรุณาตรวจสอบข้อมูลบันทึกใหม่อีกครั้ง!!!');
                    }
                } else {
                    this.EditShare();
                }
            }
            else {
                this.dialog.showAlert('กรุณาใส่ข้อมูลให้ครบ ก่อนกดปุ่ม Save!');
            }

        } catch (error) {
            this.dialog.showAlert(error);
            console.error("An unexpected error happened occurred:", error);
            this.setErrorMsg(error.message);
        }
        //e.preventDefault();
    }

    async EditShare() {
        
        const a = {
            share_message: this.state.share_message,
            share_img: this.state.share_img
        };
        console.log('Edit share start...');
        const res2 = await ServiceShare.editShare(a, this.state.shareid);
        console.log('res : ' + res2.data);
        if (res2.data.status === 2000) {
            console.log('Edit share Success!!!');
            this.dialog.show({
                title: 'Slot Admin information',
                body: 'บันทึก Share Setting เรียบร้อยแล้ว',
                actions: [
                    Dialog.OKAction(() => {
                        Router.push("/share");
                    })
                ]
            })
        } else {
            this.dialog.showAlert(res2.data.message);
            this.setErrorMsg(res2.data.msg);
        }
    }

    handleSelectChange(e) {
        console.log("e.target.value :" + e.target.value);
        this.setState({ bonus_type_text: e.target.value });
    }

    handleToggleChange(e) {
        console.log("e.target.value :" + e.target.value);
        this.setState({ user_enable: e.target.value });
    }

    setErrorMsg(msg) {
        console.log(msg);
        this.setState({ errorMessage: msg });
    }

    componentDidMount() {
        if (!Cookies.get("user")) {
            Router.push("/");
        }

        console.log('share ID : ' + this.state.shareid);

        ServiceShare.getShare(this.state.shareid).then((res) => {
            //console.log("res data=>" + res.data);
            const { data, status } = res.data;
            //console.log("status=>" + status);
            if (status === 2000) {
                //this.setState({ data: data });
                console.log("edit data =>" + JSON.stringify(data));
                const { share_message, share_img } = data[0];
                if (share_img !== '') {
                    this.setState({ imagePreviewUrl: ServiceImage.imageshow(share_img), share_img: share_img });
                } else {
                    this.setState({ imagePreviewUrl: ServiceImage.imageshow("1594692624651-no-image-available.png") });
                }

                this.setState({ share_message: share_message });
            } else {
                this.setErrorMsg(res.data.message);
                this.dialog.showAlert(res.data.message);
            }
        });


    }

    render() {
        const element = (
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    data-toggle="toggle"
                    data-on="Ready"
                    data-off="Not Ready"
                    data-onstyle="success"
                    data-offstyle="danger"
                />
            </div>
        );

        return <AdminLayoutHoc contentTitle={'Edit Share Setting'} contentTitleButton={<i className="fa fa-2x fa-share-alt" />} url={this.props.url}>
            <div className="offset-md-0">
                <div className="card">
                    <form className="form-horizontal">
                        <div className="card-body mt-3">
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">agent code</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex2"
                                            //placeholder="agent lineup"
                                            onChange={(e) => this.setState({ agent_code: e.target.value })}
                                            value={this.state.agent_code}
                                            required
                                            disabled={true} />
                                    </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">Message</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ share_message: e.target.value })}
                                            value={this.state.share_message}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="form-group">
                                                <h5>Share Image File Upload</h5>
                                                <br />
                                                <img
                                                    src={this.state.imagePreviewUrl}
                                                    style={{
                                                        flex: 1,
                                                        width: "150px",
                                                        height: null,
                                                        resizeMode: 'contain'
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mt-10">
                                                <input type="file" onChange={this.onFileChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>

                    <div className="card-footer">
                        <div className="d-inline-block btn-block">
                            <button className="btn btn-danger" onClick={this.handleResetSubmit} title='Back' style={{ width: 45 }}><i class="fa fa-mail-reply"></i></button>
                            <button className="btn btn-info" onClick={this.handleSubmit} title='Save' style={{ marginLeft: 5, width: 45 }}><i class="fa fa-floppy-o"></i></button>
                        </div>
                    </div>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>
        </AdminLayoutHoc>
    }
}