import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect, Component } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceAgent, ServiceUserAgent, ServiceUser, ServiceNews, ServiceImage, ServiceGameBonus } from "../../service";
import Dialog from 'react-bootstrap-dialog';

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //auth: { username: "", password: "", role: "3", rolename: "User" },
            agent_code: Cookies.get("agentcode"),
            bonus_name: "",
            bonus_status: "1", //1=enable , 0=disable
            member_point: "0",
            switch1: true,
            imagePreviewUrl1: ServiceImage.imageshow("1594692624651-no-image-available.png"),
            imagePreviewUrl2: ServiceImage.imageshow("1594692624651-no-image-available.png"),
            imagePreviewUrl3: ServiceImage.imageshow("1594692624651-no-image-available.png"),
            imagePreviewUrl4: ServiceImage.imageshow("1594692624651-no-image-available.png"),
            imagePreviewUrl5: ServiceImage.imageshow("1594692624651-no-image-available.png"),
            imagePreviewUrl6: ServiceImage.imageshow("1594692624651-no-image-available.png"),
            imagePreviewUrl7: ServiceImage.imageshow("1594692624651-no-image-available.png"),
            file1: "",
            file2: "",
            file3: "",
            file4: "",
            file5: "",
            file6: "",
            file7: "",
            bonus_img1: "",
            bonus_img2: "",
            bonus_img3: "",
            bonus_img4: "",
            bonus_img5: "",
            bonus_img6: "",
            bonus_img7: "",
            bonus_value1: "0",
            bonus_value2: "0",
            bonus_value3: "0",
            bonus_value4: "0",
            bonus_value5: "0",
            bonus_value6: "0",
            bonus_value7: "0",

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

        this.onFileChange1 = this.onFileChange1.bind(this);
        this.onFileChange2 = this.onFileChange2.bind(this);
        this.onFileChange3 = this.onFileChange3.bind(this);
        this.onFileChange4 = this.onFileChange4.bind(this);
        this.onFileChange5 = this.onFileChange5.bind(this);
        this.onFileChange6 = this.onFileChange6.bind(this);
        this.onFileChange7 = this.onFileChange7.bind(this);
    }

    onFileChange1(e) {
        const file = e.target.files[0]
        const reader = new FileReader();
        if (file) {
            reader.onloadend = () => {
                this.setState({ file1: file, imagePreviewUrl1: reader.result });
            }
            reader.readAsDataURL(file);
        }
        else {
            this.setState({ imagePreviewUrl1: ServiceImage.imageshow("1594692624651-no-image-available.png") });
        }
    }

    onFileChange2(e) {
        const file = e.target.files[0]
        const reader = new FileReader();
        if (file) {
            reader.onloadend = () => {
                this.setState({ file2: file, imagePreviewUrl2: reader.result });
            }
            reader.readAsDataURL(file);
        }
        else {
            this.setState({ imagePreviewUrl2: ServiceImage.imageshow("1594692624651-no-image-available.png") });
        }
    }

    onFileChange3(e) {
        const file = e.target.files[0]
        const reader = new FileReader();
        if (file) {
            reader.onloadend = () => {
                this.setState({ file3: file, imagePreviewUrl3: reader.result });
            }
            reader.readAsDataURL(file);
        }
        else {
            this.setState({ imagePreviewUrl3: ServiceImage.imageshow("1594692624651-no-image-available.png") });
        }
    }
    onFileChange4(e) {
        const file = e.target.files[0]
        const reader = new FileReader();
        if (file) {
            reader.onloadend = () => {
                this.setState({ file4: file, imagePreviewUrl4: reader.result });
            }
            reader.readAsDataURL(file);
        }
        else {
            this.setState({ imagePreviewUrl4: ServiceImage.imageshow("1594692624651-no-image-available.png") });
        }
    }
    onFileChange5(e) {
        const file = e.target.files[0]
        const reader = new FileReader();
        if (file) {
            reader.onloadend = () => {
                this.setState({ file5: file, imagePreviewUrl5: reader.result });
            }
            reader.readAsDataURL(file);
        }
        else {
            this.setState({ imagePreviewUrl5: ServiceImage.imageshow("1594692624651-no-image-available.png") });
        }
    }
    onFileChange6(e) {
        const file = e.target.files[0]
        const reader = new FileReader();
        if (file) {
            reader.onloadend = () => {
                this.setState({ file6: file, imagePreviewUrl6: reader.result });
            }
            reader.readAsDataURL(file);
        }
        else {
            this.setState({ imagePreviewUrl6: ServiceImage.imageshow("1594692624651-no-image-available.png") });
        }
    }
    onFileChange7(e) {
        const file = e.target.files[0]
        const reader = new FileReader();
        if (file) {
            reader.onloadend = () => {
                this.setState({ file7: file, imagePreviewUrl7: reader.result });
            }
            reader.readAsDataURL(file);
        }
        else {
            this.setState({ imagePreviewUrl7: ServiceImage.imageshow("1594692624651-no-image-available.png") });
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
        Router.push("/game_random_bonus");
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
        //try {
        try {
            if (this.state.bonus_name !== "") {
                if (this.state.file1) {
                    const formData = new FormData();
                    formData.append('file', this.state.file1);
                    //console.log('image file name : ' + filename);
                    const res = await ServiceImage.imageUpload(formData);
                    if (res.data.status === 2000) {
                        const { filename } = res.data.data;
                        console.log('image file name : ' + filename);
                        this.setState({ bonus_img1: filename });
                        if (this.state.file2) {
                            const formData = new FormData();
                            formData.append('file', this.state.file2);
                            //console.log('image file name : ' + filename);
                            const res = await ServiceImage.imageUpload(formData);
                            if (res.data.status === 2000) {
                                const { filename } = res.data.data;
                                console.log('image file name : ' + filename);
                                this.setState({ bonus_img2: filename });
                                if (this.state.file3) {
                                    const formData = new FormData();
                                    formData.append('file', this.state.file3);
                                    //console.log('image file name : ' + filename);
                                    const res = await ServiceImage.imageUpload(formData);
                                    if (res.data.status === 2000) {
                                        const { filename } = res.data.data;
                                        console.log('image file name : ' + filename);
                                        this.setState({ bonus_img3: filename });
                                        if (this.state.file4) {
                                            const formData = new FormData();
                                            formData.append('file', this.state.file4);
                                            //console.log('image file name : ' + filename);
                                            const res = await ServiceImage.imageUpload(formData);
                                            if (res.data.status === 2000) {
                                                const { filename } = res.data.data;
                                                console.log('image file name : ' + filename);
                                                this.setState({ bonus_img4: filename });
                                                if (this.state.file5) {
                                                    const formData = new FormData();
                                                    formData.append('file', this.state.file5);
                                                    //console.log('image file name : ' + filename);
                                                    const res = await ServiceImage.imageUpload(formData);
                                                    if (res.data.status === 2000) {
                                                        const { filename } = res.data.data;
                                                        console.log('image file name : ' + filename);
                                                        this.setState({ bonus_img5: filename });
                                                        if (this.state.file6) {
                                                            const formData = new FormData();
                                                            formData.append('file', this.state.file6);
                                                            //console.log('image file name : ' + filename);
                                                            const res = await ServiceImage.imageUpload(formData);
                                                            if (res.data.status === 2000) {
                                                                const { filename } = res.data.data;
                                                                console.log('image file name : ' + filename);
                                                                this.setState({ bonus_img6: filename });
                                                                if (this.state.file7) {
                                                                    const formData = new FormData();
                                                                    formData.append('file', this.state.file7);
                                                                    //console.log('image file name : ' + filename);
                                                                    const res = await ServiceImage.imageUpload(formData);
                                                                    if (res.data.status === 2000) {
                                                                        const { filename } = res.data.data;
                                                                        console.log('image file name : ' + filename);
                                                                        this.setState({ bonus_img7: filename });
                                                                        this.AddTopupGame();
                                                                    } else {
                                                                        this.dialog.showAlert('บันทึกข้อมูล Bonus ไม่สำเร็จ กรุณาตรวจสอบข้อมูลบันทึกใหม่อีกครั้ง!!!');
                                                                    }
                                                                } else {
                                                                    this.AddTopupGame();
                                                                }
                                                            } else {
                                                                this.dialog.showAlert('บันทึกข้อมูล Bonus ไม่สำเร็จ กรุณาตรวจสอบข้อมูลบันทึกใหม่อีกครั้ง!!!');
                                                            }
                                                        } else {
                                                            this.AddTopupGame();
                                                        }
                                                    } else {
                                                        this.dialog.showAlert('บันทึกข้อมูล Bonus ไม่สำเร็จ กรุณาตรวจสอบข้อมูลบันทึกใหม่อีกครั้ง!!!');
                                                    }
                                                } else {
                                                    this.AddTopupGame();
                                                }
                                            } else {
                                                this.dialog.showAlert('บันทึกข้อมูล Bonus ไม่สำเร็จ กรุณาตรวจสอบข้อมูลบันทึกใหม่อีกครั้ง!!!');
                                            }
                                        } else {
                                            this.AddTopupGame();
                                        }
                                    } else {
                                        this.dialog.showAlert('บันทึกข้อมูล Bonus ไม่สำเร็จ กรุณาตรวจสอบข้อมูลบันทึกใหม่อีกครั้ง!!!');
                                    }
                                } else {
                                    this.AddTopupGame();
                                }
                            } else {
                                this.dialog.showAlert('บันทึกข้อมูล Bonus ไม่สำเร็จ กรุณาตรวจสอบข้อมูลบันทึกใหม่อีกครั้ง!!!');
                            }
                        } else {
                            this.AddTopupGame();
                        }
                        //
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

        /*         } catch (error) {
                    this.dialog.showAlert(error);
                    console.error("An unexpected error happened occurred:", error);
                    this.setErrorMsg(error.message);
                } */
        //e.preventDefault();
    }

    async AddTopupGame() {

        console.log('bonus_type : ' + this.state.bonus_type);
        let bonus_status = 0;
        if (this.state.switch1) {
            bonus_status = 1;
        }

        const a = {
            bonus_name: this.state.bonus_name, member_point: this.state.member_point, agent_code: this.state.agent_code,
            bonus_img1: this.state.bonus_img1,
            bonus_img2: this.state.bonus_img2,
            bonus_img3: this.state.bonus_img3,
            bonus_img4: this.state.bonus_img4,
            bonus_img5: this.state.bonus_img5,
            bonus_img6: this.state.bonus_img6,
            bonus_img7: this.state.bonus_img7,
            bonus_value1: this.state.bonus_value1,
            bonus_value2: this.state.bonus_value2,
            bonus_value3: this.state.bonus_value3,
            bonus_value4: this.state.bonus_value4,
            bonus_value5: this.state.bonus_value5,
            bonus_value6: this.state.bonus_value6,
            bonus_value7: this.state.bonus_value7,
            bonus_status: bonus_status, create_at: '', update_at: ''
        };
        console.log('Add Topup Game start...');
        const res2 = await ServiceGameBonus.createGamesBonus(a);
        console.log('res : ' + res2.data);
        if (res2.data.status === 2000) {
            console.log('Add Topup Game Success!!!');
            this.dialog.show({
                title: 'Slot Admin information',
                body: 'บันทึก Topup Game : ' + this.state.bonus_name + ' เรียบร้อยแล้ว',
                actions: [
                    Dialog.OKAction(() => {
                        Router.push("/game_random_bonus");
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
        this.setState({ rolename: e.target.value });
        const v = this.onSearchLevel(e.target.value);
        this.setState({ role: v, user_level: v });
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

        return <AdminLayoutHoc contentTitle={'Add Top up game'} contentTitleButton={<i className="fa fa-2x fa-gamepad" />} url={this.props.url}>
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
                                            <span className="input-group-text bg-dark col-12">bonus_name</span>
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
                                    <div className="input-group mb-3 input-group-sm">
                                    <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">Used member point</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ member_point: e.target.value })}
                                            value={this.state.member_point}
                                            required />
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

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="form-group">
                                                <h5>Game Image 1 File Upload</h5>
                                                <br />
                                                <img
                                                    src={this.state.imagePreviewUrl1}
                                                    style={{
                                                        flex: 1,
                                                        width: "150px",
                                                        height: null,
                                                        resizeMode: 'contain'
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mt-10">
                                                <input type="file" onChange={this.onFileChange1} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                    <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">image value 1</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ bonus_value1: e.target.value })}
                                            value={this.state.bonus_value1}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="form-group">
                                                <h5>Game Image 2 File Upload</h5>
                                                <br />
                                                <img
                                                    src={this.state.imagePreviewUrl2}
                                                    style={{
                                                        flex: 1,
                                                        width: "150px",
                                                        height: null,
                                                        resizeMode: 'contain'
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mt-10">
                                                <input type="file" onChange={this.onFileChange2} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                    <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">image value 2</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ bonus_value2: e.target.value })}
                                            value={this.state.bonus_value2}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="form-group">
                                                <h5>Game Image 3 File Upload</h5>
                                                <br />
                                                <img
                                                    src={this.state.imagePreviewUrl3}
                                                    style={{
                                                        flex: 1,
                                                        width: "150px",
                                                        height: null,
                                                        resizeMode: 'contain'
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mt-10">
                                                <input type="file" onChange={this.onFileChange3} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                    <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">image value 3</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ bonus_value3: e.target.value })}
                                            value={this.state.bonus_value3}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="form-group">
                                                <h5>Game Image 4 File Upload</h5>
                                                <br />
                                                <img
                                                    src={this.state.imagePreviewUrl4}
                                                    style={{
                                                        flex: 1,
                                                        width: "150px",
                                                        height: null,
                                                        resizeMode: 'contain'
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mt-10">
                                                <input type="file" onChange={this.onFileChange4} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                    <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">image value 4</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ bonus_value4: e.target.value })}
                                            value={this.state.bonus_value4}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="form-group">
                                                <h5>Game Image 5 File Upload</h5>
                                                <br />
                                                <img
                                                    src={this.state.imagePreviewUrl5}
                                                    style={{
                                                        flex: 1,
                                                        width: "150px",
                                                        height: null,
                                                        resizeMode: 'contain'
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mt-10">
                                                <input type="file" onChange={this.onFileChange5} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                    <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">image value 5</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ bonus_value5: e.target.value })}
                                            value={this.state.bonus_value5}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="form-group">
                                                <h5>Game Image 6 File Upload</h5>
                                                <br />
                                                <img
                                                    src={this.state.imagePreviewUrl6}
                                                    style={{
                                                        flex: 1,
                                                        width: "150px",
                                                        height: null,
                                                        resizeMode: 'contain'
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mt-10">
                                                <input type="file" onChange={this.onFileChange6} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                    <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">image value 6</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ bonus_value6: e.target.value })}
                                            value={this.state.bonus_value6}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="form-group">
                                                <h5>Game Image 7 File Upload</h5>
                                                <br />
                                                <img
                                                    src={this.state.imagePreviewUrl7}
                                                    style={{
                                                        flex: 1,
                                                        width: "150px",
                                                        height: null,
                                                        resizeMode: 'contain'
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mt-10">
                                                <input type="file" onChange={this.onFileChange7} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                    <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">image value 7</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ bonus_value7: e.target.value })}
                                            value={this.state.bonus_value7}
                                            required />
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