import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect, Component } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceAgent } from "../../service";
import Dialog from 'react-bootstrap-dialog';

export default class EditAgent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //auth: { username: "", password: "", role: "3", rolename: "User" },
            agent_code: "",
            agent_lineup: Cookies.get("agentcode"),
            agent_name: "",
            agent_detail: "",
            agent_website: "",
            agent_master: "",
            agent_type: "", // Master or Agent
            agent_percent: "",
            agent_percent_aff: "",
            agent_percent_aff2: "",
            agent_percent_aff3: "",
            agent_percent_aff4: "",
            agent_percent_aff5: "",
            agent_comm: "",
            agent_line_ad: "",
            agent_line_token1: "",
            agent_line_token2: "",
            agent_line_token3: "",
            agent_api_user: "",
            agent_api_password: "",
            agent_api_key: "",
            withdraw_auto: "",
            agent_status: "", //1=enable , 0=disable
            switch1: true,

            agentid: Cookies.get("agentid"),

            errorMessage: "",
            datas: [],
            role_data: [],
            mydatas: {},
            value: "Master",

        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this)

        this.handleResetSubmit = this.handleResetSubmit.bind(this);
        this.onSearchLevel = this.onSearchLevel.bind(this);
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
        Router.push("/agents");
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
            if (this.state.agent_code !== "" && this.state.agent_name) {
                /* this.setState({ role: this.onSearchLevel(this.state.rolename) });
                console.log('role : ' + this.state.role); */

                let agent_status = 0;
                if (this.state.switch1) {
                    agent_status = 1;
                }
                const a = {
                    agent_code: this.state.agent_code, agent_lineup: this.state.agent_lineup,
                    agent_name: this.state.agent_name, agent_detail: this.state.agent_detail, agent_website: this.state.agent_website,
                    agent_master: this.state.agent_master, agent_type: this.state.agent_type, agent_percent: this.state.agent_percent,
                    agent_percent_aff: this.state.agent_percent_aff, agent_percent_aff2: this.state.agent_percent_aff2,
                    agent_percent_aff3: this.state.agent_percent_aff3, agent_percent_aff4: this.state.agent_percent_aff4, agent_percent_aff5: this.state.agent_percent_aff5,
                    agent_comm: this.state.agent_comm, agent_line_ad: this.state.agent_line_ad, agent_line_token1: this.state.agent_line_token1,
                    agent_line_token2: this.state.agent_line_token2, agent_line_token3: this.state.agent_line_token3, agent_api_user: this.state.agent_api_user,
                    agent_api_password: this.state.agent_api_password, agent_api_key: this.state.agent_api_key, agent_status: agent_status
                };
                //console.log('auth : ' + a.role);
                const res = await ServiceAgent.editAgent(a, this.state.agentid);
                console.log('res : ' + res.data);
                if (res.data.status === 2000) {
                    console.log('Edit Agent Success!!!');
                    this.dialog.show({
                        title: 'Slot Admin information',
                        body: 'Edit a agent : ' + a.agent_code + ' to system is successfully.',
                        actions: [
                            Dialog.OKAction(() => {
                                //action('ok button was clicked!')()
                                Router.push("/agents");
                            })
                        ]
                    })
                } else {
                    this.dialog.showAlert(res.data.message);
                    this.setErrorMsg(res.data.msg);
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

    handleSelectChange(e) {
        console.log("e.target.value :" + e.target.value);
        this.setState({ agent_type: e.target.value });
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
        ServiceAgent.getAgentFromId(this.state.agentid).then((res) => {
            //console.log("res data=>" + res.data);
            const { data, status } = res.data;
            //console.log("status=>" + status);
            if (status === 2000) {
                //this.setState({ data: data });
                console.log("edit data =>" + JSON.stringify(data));
                const { agent_code, agent_lineup,
                    agent_name, agent_detail, agent_website,
                    agent_master, agent_type, agent_percent,
                    agent_percent_aff, agent_percent_aff2,
                    agent_percent_aff3, agent_percent_aff4, agent_percent_aff5,
                    agent_comm, agent_line_ad, agent_line_token1,
                    agent_line_token2, agent_line_token3, agent_api_user,
                    agent_api_password, agent_api_key, agent_status
                } = data[0];
                this.setState({
                    agent_code: agent_code, agent_lineup: agent_lineup,
                    agent_name: agent_name, agent_detail: agent_detail, agent_website: agent_website,
                    agent_master: agent_master, agent_type: agent_type, agent_percent: agent_percent,
                    agent_percent_aff: agent_percent_aff, agent_percent_aff2: agent_percent_aff2,
                    agent_percent_aff3: agent_percent_aff3, agent_percent_aff4: agent_percent_aff4
                    , agent_percent_aff5: agent_percent_aff5,
                    agent_comm: agent_comm, agent_line_ad: agent_line_ad, agent_line_token1: agent_line_token1,
                    agent_line_token2: agent_line_token2, agent_line_token3: agent_line_token3, agent_api_user: agent_api_user,
                    agent_api_password: agent_api_password, agent_api_key: agent_api_key, switch1: Boolean(Number(agent_status))
                })
                //this.setState({ username: user_name, user_email: user_email, rolename: this.onSearchLevelname(user_level), switch1: Boolean(Number(user_status)) });

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

        return <AdminLayoutHoc contentTitle={'Edit Agents'} contentTitleButton={<i className="fa fa-2x fa-id-badge" />} url={this.props.url}>
            <div className="offset-md-0">
                <div className="card">
                    {/* <form className="form-horizontal">
                        <div className="card-body">

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent code</span>
                                </div>
                                <input type="text" className="form-control"
                                    //placeholder="agent code"
                                    id="validation-ex1"
                                    onChange={(e) => this.setState({ agent_code: e.target.value })}
                                    value={this.state.agent_code}
                                    required />
                            </div>
                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent lineup</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex2"
                                    //placeholder="agent lineup"
                                    onChange={(e) => this.setState({ agent_lineup: e.target.value })}
                                    value={this.state.agent_lineup}
                                    required />
                            </div>
                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent name</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex3"
                                    //placeholder="agent name"
                                    onChange={(e) => this.setState({ agent_name: e.target.value })}
                                    value={this.state.agent_name}
                                    required />
                            </div>
                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent detail</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex4"
                                    //placeholder="agent detail"
                                    onChange={(e) => this.setState({ agent_detail: e.target.value })}
                                    value={this.state.agent_detail}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent website</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex5"
                                    //placeholder="agent website"
                                    onChange={(e) => this.setState({ agent_website: e.target.value })}
                                    value={this.state.agent_website}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent master</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex6"
                                    //placeholder="agent master"
                                    onChange={(e) => this.setState({ agent_master: e.target.value })}
                                    value={this.state.agent_master}
                                    required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="select-1" className="col-sm-12 control-label">Select agent type</label>
                                <div className="col-sm-offset-2 col-sm-12">
                                    <select id="select-1" className="form-control" value={this.state.agent_type} onChange={this.handleSelectChange}>
                                        <option value='Master'>Master</option>
                                        <option value='Agent'>Agent</option>
                                    </select>
                                </div>
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent percent</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex7"
                                    //placeholder="agent percent"
                                    onChange={(e) => this.setState({ agent_percent: e.target.value })}
                                    value={this.state.agent_percent}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent percent aff</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex8"
                                    //placeholder="agent percent aff"
                                    onChange={(e) => this.setState({ agent_percent_aff: e.target.value })}
                                    value={this.state.agent_percent_aff}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent percent aff2</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex9"
                                    //placeholder="agent percent aff2"
                                    onChange={(e) => this.setState({ agent_percent_aff2: e.target.value })}
                                    value={this.state.agent_percent_aff2}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent percent aff3</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex10"
                                    //placeholder="agent percent aff3"
                                    onChange={(e) => this.setState({ agent_percent_aff3: e.target.value })}
                                    value={this.state.agent_percent_aff3}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent percent aff4</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex11"
                                    //placeholder="agent percent aff4"
                                    onChange={(e) => this.setState({ agent_percent_aff4: e.target.value })}
                                    value={this.state.agent_percent_aff4}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent percent aff5</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex12"
                                    //placeholder="agent percent aff5"
                                    onChange={(e) => this.setState({ agent_percent_aff5: e.target.value })}
                                    value={this.state.agent_percent_aff5}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent comm</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex13"
                                    //placeholder="agent comm"
                                    onChange={(e) => this.setState({ agent_comm: e.target.value })}
                                    value={this.state.agent_comm}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent line ad</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex14"
                                    //placeholder="agent line ad"
                                    onChange={(e) => this.setState({ agent_line_ad: e.target.value })}
                                    value={this.state.agent_line_ad}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent line token1</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex15"
                                    //placeholder="agent line token1"
                                    onChange={(e) => this.setState({ agent_line_token1: e.target.value })}
                                    value={this.state.agent_line_token1}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent line token2</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex16"
                                    //placeholder="agent line token2"
                                    onChange={(e) => this.setState({ agent_line_token2: e.target.value })}
                                    value={this.state.agent_line_token2}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent line token3</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex16"
                                    //placeholder="agent line token3"
                                    onChange={(e) => this.setState({ agent_line_token3: e.target.value })}
                                    value={this.state.agent_line_token3}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent api user</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex17"
                                    //placeholder="agent api user"
                                    onChange={(e) => this.setState({ agent_api_user: e.target.value })}
                                    value={this.state.agent_api_user}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent api password</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex18"
                                    //placeholder="agent api password"
                                    onChange={(e) => this.setState({ agent_api_password: e.target.value })}
                                    value={this.state.agent_api_password}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">agent api key</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex19"
                                    //placeholder="agent api key"
                                    onChange={(e) => this.setState({ agent_api_key: e.target.value })}
                                    value={this.state.agent_api_key}
                                    required />
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <label className="control-label">Agent status&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                    <label class="switch">
                                        <input type="checkbox" onChange={this.handleSwitchChange(1)} checked={this.state.switch1} />
                                        <span class="slider round"></span>
                                    </label>
                                    <label className="control-label">&nbsp;&nbsp;Enabled</label>
                                </div>
                            </div>

                        </div>
                    </form> */}

<form className="form-horizontal">
                        <div className="card-body">
                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent code</span>
                                </div>
                                <input type="text" className="form-control"
                                    //placeholder="agent code"
                                    id="validation-ex1"
                                    onChange={(e) => this.setState({ agent_code: e.target.value })}
                                    value={this.state.agent_code}
                                    required />
                            </div>
                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent lineup</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex2"
                                    //placeholder="agent lineup"
                                    onChange={(e) => this.setState({ agent_lineup: e.target.value })}
                                    value={this.state.agent_lineup}
                                    required 
                                    disabled={true}/>
                            </div>
                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent name</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex3"
                                    //placeholder="agent name"
                                    onChange={(e) => this.setState({ agent_name: e.target.value })}
                                    value={this.state.agent_name}
                                    required />
                            </div>
                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent detail</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex4"
                                    //placeholder="agent detail"
                                    onChange={(e) => this.setState({ agent_detail: e.target.value })}
                                    value={this.state.agent_detail}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent website</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex5"
                                    //placeholder="agent website"
                                    onChange={(e) => this.setState({ agent_website: e.target.value })}
                                    value={this.state.agent_website}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent master</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex6"
                                    //placeholder="agent master"
                                    onChange={(e) => this.setState({ agent_master: e.target.value })}
                                    value={this.state.agent_master}
                                    required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="select-1" className="col-sm-12 control-label">Select agent type</label>
                                <div className="col-sm-offset-2 col-sm-12">
                                    <select id="select-1" className="form-control" value={this.state.agent_type} onChange={this.handleSelectChange}>
                                        {/* <option value='Master'>Master</option> */}
                                        <option value='Agent'>Agent</option>
                                    </select>
                                </div>
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent percent</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex7"
                                    //placeholder="agent percent"
                                    onChange={(e) => this.setState({ agent_percent: e.target.value })}
                                    value={this.state.agent_percent}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent percent aff</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex8"
                                    //placeholder="agent percent aff"
                                    onChange={(e) => this.setState({ agent_percent_aff: e.target.value })}
                                    value={this.state.agent_percent_aff}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent percent aff2</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex9"
                                    //placeholder="agent percent aff2"
                                    onChange={(e) => this.setState({ agent_percent_aff2: e.target.value })}
                                    value={this.state.agent_percent_aff2}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent percent aff3</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex10"
                                    //placeholder="agent percent aff3"
                                    onChange={(e) => this.setState({ agent_percent_aff3: e.target.value })}
                                    value={this.state.agent_percent_aff3}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent percent aff4</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex11"
                                    //placeholder="agent percent aff4"
                                    onChange={(e) => this.setState({ agent_percent_aff4: e.target.value })}
                                    value={this.state.agent_percent_aff4}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent percent aff5</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex12"
                                    //placeholder="agent percent aff5"
                                    onChange={(e) => this.setState({ agent_percent_aff5: e.target.value })}
                                    value={this.state.agent_percent_aff5}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent comm</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex13"
                                    //placeholder="agent comm"
                                    onChange={(e) => this.setState({ agent_comm: e.target.value })}
                                    value={this.state.agent_comm}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent line ad</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex14"
                                    //placeholder="agent line ad"
                                    onChange={(e) => this.setState({ agent_line_ad: e.target.value })}
                                    value={this.state.agent_line_ad}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent line token1</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex15"
                                    //placeholder="agent line token1"
                                    onChange={(e) => this.setState({ agent_line_token1: e.target.value })}
                                    value={this.state.agent_line_token1}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent line token2</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex16"
                                    //placeholder="agent line token2"
                                    onChange={(e) => this.setState({ agent_line_token2: e.target.value })}
                                    value={this.state.agent_line_token2}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent line token3</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex16"
                                    //placeholder="agent line token3"
                                    onChange={(e) => this.setState({ agent_line_token3: e.target.value })}
                                    value={this.state.agent_line_token3}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent api user</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex17"
                                    //placeholder="agent api user"
                                    onChange={(e) => this.setState({ agent_api_user: e.target.value })}
                                    value={this.state.agent_api_user}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent api password</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex18"
                                    //placeholder="agent api password"
                                    onChange={(e) => this.setState({ agent_api_password: e.target.value })}
                                    value={this.state.agent_api_password}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-2">
                                    <span className="input-group-text bg-dark col-12">agent api key</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex19"
                                    //placeholder="agent api key"
                                    onChange={(e) => this.setState({ agent_api_key: e.target.value })}
                                    value={this.state.agent_api_key}
                                    required />
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <label className="control-label">Agent status&nbsp;&nbsp;&nbsp;&nbsp;</label>
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
                            <button className="btn btn-info" onClick={this.handleSubmit} title='Save' style={{marginLeft: 5,  width: 45 }}><i class="fa fa-floppy-o"></i></button>
                        </div>
                    </div>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>
        </AdminLayoutHoc>
    }
}