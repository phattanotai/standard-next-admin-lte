import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect, Component } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceAgent, ServiceUserAgent, ServiceUser, ServiceMember } from "../../service";
import Dialog from 'react-bootstrap-dialog';

export default class DepositMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //auth: { username: "", password: "", role: "3", rolename: "User" },
            mem_id: Cookies.get("memberid"),
            agent_code: Cookies.get("agentcode"),
            mem_date_add: "",
            mem_username: "",
            mem_password: "",
            mem_name: "",
            mem_tel: "",
            mem_status: "1", //1=enable , 0=disable            
            mem_balance: "0",
            mem_line: "",
            last_login: "",
            register_type: "APP",
            external_id: "",

            switch1: true,
            agent: "",

            errorMessage: "",
            datas: [],
            role_data: [],
            mydatas: {},
            value: "Master",
            data_agent: [],

            role: "3",
            rolename: "User",
            deposit: "0",
            note: "",
            admin: Cookies.get("user"),

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
        Router.push("/member");
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
            if (this.state.agent_code !== "" && this.state.mem_name !== "" && this.state.mem_balance !== "" && this.state.deposit !== "" && this.state.note !== "") {

                let mem_status = 0;
                if (this.state.switch1) {
                    mem_status = 1;
                }

                const a = {
                    mem_balance: this.state.deposit,
                    trans_type: "user",
                    note: this.state.note,
                    user_admin: Cookies.get("userid")
                };
                const res = await ServiceMember.deposit(a,this.state.mem_username);
                console.log('res : ' + res.data);
                if (res.data.status === 2000) {
                    console.log('deposit Member Success!!!');
                    this.dialog.show({
                        title: 'Slot Admin information',
                        body: 'deposit a Member : ' + this.state.mem_username + ' is successfully.',
                        actions: [
                            Dialog.OKAction(() => {
                                Router.push("/member");
                            })
                        ]
                    })
                } else {
                    this.dialog.showAlert(res.data.message);
                    this.setErrorMsg(res.data.msg);
                }
            } else {
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
        
        this.setState({admin: Cookies.get("user")});

        ServiceMember.getMember(Cookies.get("memberid")).then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            var data_service = [];
            if (status === 2000) {
                console.log("data agent length : " + data.length);
                //this.setState({ data_agent: data });
                const { mem_username, mem_password, mem_name, mem_tel, mem_line, mem_balance } = data[0];
                this.setState({ mem_username:mem_username, mem_password: mem_password, mem_name: mem_name, mem_tel: mem_tel, 
                    mem_line: mem_line, mem_balance: mem_balance });


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

        return <AdminLayoutHoc contentTitle={'Deposit Member'} contentTitleButton={<i className="fa fa-2x fa-money" />} url={this.props.url}>
            <div className="offset-md-0">
                <div className="card">
                    <div className="card-header">
                        {/* <h3 className="card-title">New User Form</h3> */}
                    </div>
                    <form className="form-horizontal">
                        <div className="card-body">

                            {/* <div className="form-group">
                                <div className="col-sm-12">
                                    <label htmlFor="select-1" className="col-sm-12 control-label">Select Agent</label>
                                    <div className="col-sm-offset-2 col-sm-12">
                                        <select id="select-3" className="form-control" value={this.state.agent} onChange={this.handleSelectAgentChange}>
                                            {
                                                this.state.data_agent.map((agent, index) => {
                                                    return (
                                                        <option value={agent.agent_name} key={index}>{agent.agent_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div> */}
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">member username</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex2"
                                            //placeholder="agent lineup"
                                            onChange={(e) => this.setState({ mem_username: e.target.value })}
                                            value={this.state.mem_username}
                                            required
                                            disabled={true}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">member password</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex2"
                                            //placeholder="agent lineup"
                                            onChange={(e) => this.setState({ mem_password: e.target.value })}
                                            value={this.state.mem_password}
                                            required
                                            disabled={true}
                                        />
                                    </div>
                                </div>
                            </div> */}
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">member name</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex2"
                                            //placeholder="agent lineup"
                                            onChange={(e) => this.setState({ mem_name: e.target.value })}
                                            value={this.state.mem_name}
                                            required  
                                            disabled={true}                                         
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">tel</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ mem_tel: e.target.value })}
                                            value={this.state.mem_tel}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">line</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex4"
                                            //placeholder="agent detail"
                                            onChange={(e) => this.setState({ mem_line: e.target.value })}
                                            value={this.state.mem_line}
                                            required />
                                    </div>

                                </div>
                            </div> */}

                            <div className="form-group">
                                {/* <label htmlFor="validation-ex" className="col-sm-3">Password</label> */}
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">balance</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="Password"
                                            onChange={(e) => this.setState({ mem_balance: e.target.value })}
                                            value={this.state.mem_balance}
                                            required 
                                            disabled={true} />
                                    </div>

                                </div>
                            </div>

                            <div className="form-group">
                                {/* <label htmlFor="validation-ex" className="col-sm-3">Password</label> */}
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">deposit</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="Password"
                                            onChange={(e) => this.setState({ deposit: e.target.value })}
                                            value={this.state.deposit}
                                            
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="validation-ex" className="col-sm-3">Password</label> */}
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">note</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="Password"
                                            onChange={(e) => this.setState({ note: e.target.value })}
                                            value={this.state.note}
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="validation-ex" className="col-sm-3">Password</label> */}
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">admin</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="Password"
                                            onChange={(e) => this.setState({ admin: e.target.value })}
                                            value={this.state.admin}
                                            required 
                                            disabled={true}  />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="form-group">
                                <div className="col-sm-12">
                                    <label class="switch">
                                        <input type="checkbox" onChange={this.handleSwitchChange(1)} checked={this.state.switch1} />
                                        <span class="slider round"></span>
                                    </label>
                                    <label className="control-label">&nbsp;&nbsp;Enabled</label>
                                </div>
                            </div> */}

                        </div>
                    </form>

                    <div className="card-footer">
                        <div className="d-inline-block btn-block">
                            <button className="btn btn-danger" onClick={this.handleResetSubmit}>Back</button>
                            <button className="btn btn-info float-right" onClick={this.handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>
        </AdminLayoutHoc>
    }
}