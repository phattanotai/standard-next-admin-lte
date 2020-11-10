import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect, Component } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceAgent, ServiceUserAgent, ServiceUser,ServiceNews } from "../../service";
import Dialog from 'react-bootstrap-dialog';

export default class EditNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //auth: { username: "", password: "", role: "3", rolename: "User" },
            newsid: Cookies.get("newsid"),
            agent_code: Cookies.get("agentcode"),
            news_text: "",
            add_date: "",
            news_status: "1", //1=enable , 0=disable
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
        Router.push("/news");
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
            if (this.state.news_text) {
                //if (this.state.user_pass === this.state.confirmpassword) {
                    //const urole = this.onSearchLevel(this.state.rolename);
                    //this.setState({ user_level: urole,role: urole });

                    let news_status = 0;
                    if (this.state.switch1) {
                        news_status = 1;
                    }

                    let a = {news_text: this.state.news_text, news_status: news_status,};
                    
                    const res = await ServiceNews.editNews(a, this.state.newsid);
                    console.log('res : ' + res.data);
                    if (res.data.status === 2000) {
                        console.log('Edit News Success!!!');
                        this.dialog.show({
                            title: 'Slot Admin information',
                            body: 'Edit News is successfully.',
                            actions: [
                                Dialog.OKAction(() => {
                                    Router.push("/news");
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
        this.setState({ rolename: e.target.value });
        const v = this.onSearchLevel(e.target.value);
        this.setState({ role: v,user_level: v});
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
        
        ServiceNews.getNewsFromId(this.state.newsid).then((res) => {
            //console.log("res data=>" + res.data);
            const { data, status } = res.data;
            //console.log("status=>" + status);
            if (status === 2000) {
                //this.setState({ data: data });
                console.log("edit data =>" + JSON.stringify(data));                
                const { news_text, news_status } = data[0];  
                this.setState({ news_text: news_text, switch1: Boolean(Number(news_status)) });
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

        return <AdminLayoutHoc contentTitle={'Edit Agent Users'} contentTitleButton={<i className="fa fa-2x fa-address-card" />} url={this.props.url}>
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
                                    <span className="input-group-text bg-dark col-12">news</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ news_text: e.target.value })}
                                            value={this.state.news_text}
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