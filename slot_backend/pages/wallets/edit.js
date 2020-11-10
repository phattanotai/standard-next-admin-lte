import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect, Component } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceAgent, ServiceUserAgent, ServiceBrand, ServiceMember, ServiceGameService, ServiceWallets } from "../../service";
import Dialog from 'react-bootstrap-dialog';

export default class EditWallets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //auth: { username: "", password: "", role: "3", rolename: "User" },            
            user_name: "",
            user_email: "",
            user_pass: "",
            add_date: "",
            user_level: "3",
            user_status: "", //1=enable , 0=disable
            switch1: true,
            walletid: Cookies.get("walletid"),

            errorMessage: "",
            datas: [],
            role_data: [],
            mydatas: {},
            //value: "Master",
            data_service: [],
            data_agent: [],
            data_brand: [],
            data_member: [],
            brand: "",
            mem: "",
            agent: "",
            isDownLine: false,
            game_username: "",
            game_password: "",
            agent_code: "",
            brand_code: "",
            credit: "0",
            // role: "3",
            // rolename: "User",

        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        //this.onClick = this.onClick.bind(this);
        //this.onConfirmClick = this.onConfirmClick.bind(this)

        this.handleResetSubmit = this.handleResetSubmit.bind(this);
        //this.onSearchLevel = this.onSearchLevel.bind(this);
        this.onSearchAgentCode = this.onSearchAgentCode.bind(this);

        this.handleSelectMemberChange = this.handleSelectMemberChange.bind(this);
        //this.SearchAgent = this.SearchAgent.bind(this);
        this.handleSelectBrandChange = this.handleSelectBrandChange.bind(this);
    }

    handleSelectBrandChange(e) {
        e.preventDefault();
        console.log('e.target.value =>' + e.target.value);
        this.setState({ brand: e.target.value });
    }

    handleSelectMemberChange(e) {
        e.preventDefault();
        console.log('e.target.value =>' + e.target.value);
        const agent_code = this.onSearchAgentCode(e.target.value)[0];
        this.setState({ mem: e.target.value, agent_code: agent_code });
        ServiceBrand.listBrands().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);
                //this.setState({ data_brand: data });
                let data_brand = data;
                const agent_lineup = this.SearchAgent_LineUp(agent_code)[0];

                console.log('agent_lineup =>' + agent_lineup);
                console.log('agent_code =>' + agent_code);
                Cookies.set("serviceagent", agent_code);
                var agent_param = "";
                if (agent_lineup === "" || agent_lineup === "-") {
                    this.setState({ isDownLine: false });
                    agent_param = agent_code;
                } else {
                    this.setState({ isDownLine: true });
                    agent_param = agent_lineup;
                }
                ServiceGameService.listServiceFromAgent(agent_param).then((res) => {
                    console.log(res.data);
                    const { data, status } = res.data;
                    if (status === 2000) {
                        console.log("data service length : " + data.length);
                        this.setState({ data_service: data });

                        let my_data_brand = [];
                        var i;
                        for (i = 0; i < data.length; i++) {
                            //data_brand.filter()
                            const brands = data_brand.filter((brand) => {
                                return brand.brand_code == data[i].brand_code;
                            })
                            //console.log('brands : ' + brands);
                            const brand_name = brands.map((brand, index) => {
                                return brand.brand_name;
                            })
                            console.log('brand_name : ' + brand_name[0]);
                            my_data_brand.push({ brand_name: brand_name[0], brand_code: data[i].brand_code });
                        }
                        console.log('data_brand : ' + JSON.stringify(my_data_brand));
                        this.setState({ data_brand: my_data_brand });
                        this.setState({ brand: my_data_brand[0].brand_name });
                        this.setState({ brand_code: my_data_brand[0].brand_code });
                    } else {
                        this.setErrorMsg(res.data.msg);
                    }
                });

            }
            else {
                this.setErrorMsg(res.data.msg);
            }
        });

    }

    onSearchAgentCode(mem_username) {
        console.log('get Agent Code');
        const mems = this.state.data_member.filter((mem) => {
            return mem.mem_username == mem_username;
        })

        const agentCode = mems.map((mem, index) => {
            return mem.agent_code
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

    handleResetSubmit() {
        Router.push("/wallets");
    }

    SearchAgent_LineUp(agent_code) {
        console.log('get agent_code');
        const agents = this.state.data_agent.filter((agent) => {
            return agent.agent_code == agent_code;
        })

        const agent_lineup = agents.map((agent, index) => {
            return agent.agent_lineup;
        })
        //console.log('myrole:' + myrole);
        return agent_lineup;
    }

    SearchAgent_LineUp2(data_agent, agent_code) {
        console.log('get agent_code');
        const agents = data_agent.filter((agent) => {
            return agent.agent_code == agent_code;
        })
        console.log('agents : ' + JSON.stringify(agents));
        const agent_lineup = agents.map((agent, index) => {
            return agent.agent_lineup;
        })
        //console.log('myrole:' + myrole);
        return agent_lineup;
    }



    async handleSubmit() {
        try {
            if (this.state.agent_code !== "" && this.state.brand_code !== "" && this.state.game_username !== "" && this.state.game_password !== "" && this.state.credit !== "") {
                const a = {
                    agent_code: this.state.agent_code, mem_username: this.state.mem,
                    brand_code: this.state.brand_code, game_username: this.state.game_username, game_password: this.state.game_password,
                };
                const res = await ServiceWallets.editWallets(a,this.state.walletid);
                console.log('res : ' + res.data);
                if (res.data.status === 2000) {
                    const b = { mem_balance: this.state.credit };
                    const res_member = await ServiceMember.editMember(b,this.state.mem);
                    console.log('res : ' + res_member.data);
                    if (res_member.data.status === 2000) {
                        console.log('Edit Member : ' + this.state.mem + ' wallets Successfully!!!');
                        this.dialog.show({
                            title: 'Slot Admin information',
                            body: 'Edit Member : ' + this.state.mem + ' wallets to system is successfully.',
                            actions: [
                                Dialog.OKAction(() => {
                                    Router.push("/wallets");
                                })
                            ]
                        });
                    } else {
                        this.dialog.showAlert(res_member.data.message);
                        this.setErrorMsg(res_member.data.msg);
                    }
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

        ServiceWallets.getWalletsFromId(Cookies.get("walletid")).then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);
                const {mem_username,brand_code,game_username,game_password,agent_code} = data[0];
                this.setState({mem: mem_username,brand_code: brand_code, game_username:game_username, game_password:game_password,agent_code:agent_code });

                ServiceMember.getBalance(mem_username).then((res) => {
                    console.log("res : " + JSON.stringify(res.data));
                    const { data, status } = res.data;
                    if (status === 2000) {
                        const { mem_balance } = data;
                        this.setState({credit: mem_balance});
                    } else {
                        this.setErrorMsg(res.data.msg);
                    }
                }).catch((error) => {
                    this.setErrorMsg(error);
                })
            } else {
                this.setErrorMsg(res.data.msg);
            }
        }).catch((error) => {
            this.setErrorMsg(error);
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

        return <AdminLayoutHoc contentTitle={'Edit Wallets'} contentTitleButton={<i className="fa fa-2x fa-money" />} url={this.props.url}>
            <div className="offset-md-0">
                <div className="card">
                    <div className="card-header">
                        {/* <h3 className="card-title">New User Form</h3> */}
                    </div>
                    <form className="form-horizontal">
                        <div className="card-body">

                            <div className="form-group">
                                <div className="col-sm-10">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Member</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex2"
                                            //placeholder="agent lineup"
                                            onChange={(e) => this.setState({ mem: e.target.value })}
                                            value={this.state.mem}
                                            required
                                            disabled={true} />
                                    </div>

                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-10">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">agent code</span>
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
                                <div className="col-sm-10">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">brand code</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex2"
                                            //placeholder="agent lineup"
                                            onChange={(e) => this.setState({ brand_code: e.target.value })}
                                            value={this.state.brand_code}
                                            required
                                            disabled={true} />
                                    </div>

                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-10">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">game username</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ game_username: e.target.value })}
                                            value={this.state.game_username}
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-10">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">game password</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex4"
                                            //placeholder="agent detail"
                                            onChange={(e) => this.setState({ game_password: e.target.value })}
                                            value={this.state.game_password}
                                            required />
                                    </div>

                                </div>
                            </div>

                            <div className="form-group">
                                {/* <label htmlFor="validation-ex" className="col-sm-3">Password</label> */}
                                <div className="col-sm-10">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">credit</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="Password"
                                            onChange={(e) => this.setState({ credit: e.target.value })}
                                            value={this.state.credit}
                                            required />
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