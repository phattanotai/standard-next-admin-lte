import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect, Component } from "react";
import Router from "next/router";
import Cookies from "js-cookie";
import { ServiceBonus, ServiceImage } from "../../service";
import { ServiceAgent, ServiceUserAgent, ServiceUser, ServiceNews } from "../../service";
import Dialog from 'react-bootstrap-dialog';

export default class AddNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //auth: { username: "", password: "", role: "3", rolename: "User" },
            agent_code: Cookies.get("agentcode"),
            bonus_img: "",
            bonus_name: "",
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
        Router.push("/bonus");
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
                        this.setState({ bonus_img: filename });
                        this.AddBonus();
                    } else {
                        this.dialog.showAlert('บันทึกข้อมูล Bonus ไม่สำเร็จ กรุณาตรวจสอบข้อมูลบันทึกใหม่อีกครั้ง!!!');
                    }
                }
            }
            else {
                this.dialog.showAlert('กรุณาใส่ข้อมูลให้ครบ ก่อนกดปุ่ม Save!');
            }

        } catch (error) {
            //this.dialog.showAlert(error);
            console.error("An unexpected error happened occurred:", error);
            this.setErrorMsg(error.message);
        }
        //e.preventDefault();
    }

    async AddBonus() {

        console.log('bonus_type : ' + this.state.bonus_type);
        let bonus_status = 0;
        if (this.state.switch1) {
            bonus_status = 1;
        }
        let bonus_type = 1;
        if (this.state.bonus_type_text === 'ภาระกิจมือใหม่') {
            bonus_type = 2;
        }
        const a = {
            bonus_name: this.state.bonus_name, bonus_type: bonus_type, agent_code: this.state.agent_code,
            bonus_img: this.state.bonus_img, bonus_status: bonus_status, create_at: '', update_at: ''
        };
        console.log('Add Bonus start...');
        const res2 = await ServiceBonus.createBonus(a);
        console.log('res : ' + res2.data);
        if (res2.data.status === 2000) {
            console.log('Add Bonus Success!!!');
            this.dialog.show({
                title: 'Slot Admin information',
                body: 'บันทึก Bonus : ' + this.state.bonus_name + ' เรียบร้อยแล้ว',
                actions: [
                    Dialog.OKAction(() => {
                        Router.push("/bonus");
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

        return <AdminLayoutHoc contentTitle={'Add Bonus'} contentTitleButton={<i className="fa fa-2x fa-tachometer" />} url={this.props.url}>
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
                                    <label htmlFor="select-1" className="col-sm-12 control-label">Select Bonus Type</label>
                                    <div className="col-sm-offset-2 col-sm-12">
                                        <select id="select-3" className="form-control" value={this.state.bonus_type_text} onChange={this.handleSelectChange}>
                                            <option value={'เติมเงินครั้งแรก'} key={1}>โปรโมชั่น</option>
                                            <option value={'ภาระกิจมือใหม่'} key={2}>ภาระกิจมือใหม่</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">bonus name</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ bonus_name: e.target.value })}
                                            value={this.state.bonus_name}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="form-group">
                                                <h5>Game Image File Upload</h5>
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

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <label class="switch">
                                        <input type="checkbox" onChange={this.handleSwitchChange(1)} checked={this.state.switch1} />
                                        <span class="slider round"></span>
                                    </label>
                                    <label className="control-label">&nbsp;&nbsp;Enabled</label>
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