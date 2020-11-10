import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect, Component } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceAgent, ServiceUserAgent, ServiceUser, ServiceMember, ServiceMemberBonus } from "../../service";
import Dialog from 'react-bootstrap-dialog';

export default class EditNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //auth: { username: "", password: "", role: "3", rolename: "User" },
            redeemId: Cookies.get("redeemId"),
            agent_code: Cookies.get("agentcode"),
            bonus_id: "",
            bonus_name: "",
            bonus_type: "",
            bonus_value: "",
            member_name: "",
            add_date: "",
            member_bonus_redeem: "",
            deposit: "",
            topup: "",
            member_bonus_status: "", //1=redeem , 0=used
            switch1: true,
            agent: "",
            note: "",

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
        Router.push("/member_bonus");
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
            if (this.state.deposit !== "" && this.state.note != "") {
                const a = {
                    mem_balance: this.state.deposit,
                    trans_type: "user",
                    note: this.state.note,
                    user_admin: Cookies.get("userid")
                };
                console.log('data : ' + JSON.stringify(a));
                console.log('mem name : ' + this.state.member_name);
                const res = await ServiceMember.deposit(a, this.state.member_name);
                console.log('res : ' + JSON.stringify(res.data));
                if (res.data.status === 2000) {
                    console.log('deposit Member ' + this.state.member_name + ' Success!!!');
                    if (this.state.topup !== "") {
                        const a = {
                            mem_balance: this.state.topup,
                            trans_type: "user",
                            note: this.state.note,
                            user_admin: Cookies.get("userid")
                        };
                        const res = await ServiceMember.topup(a, this.state.member_name);
                        console.log('res : ' + res.data);
                        if (res.data.status === 2000) {
                            console.log('topup Member ' + this.state.member_name + ' Success!!!');
                            let a = { member_bonus_status: 0 };

                            const res = await ServiceMemberBonus.editMemberBonus(a, this.state.redeemId);
                            console.log('res : ' + res.data);
                            if (res.data.status === 2000) {
                                console.log('Redeem bonus member ' + this.state.member_name + ' Success!!!');
                                this.dialog.show({
                                    title: 'Slot Admin information',
                                    body: 'Redeem bonus is successfully.',
                                    actions: [
                                        Dialog.OKAction(() => {
                                            Router.push("/member_bonus");
                                        })
                                    ]
                                })
                            } else {
                                this.dialog.showAlert(res.data.message);
                                this.setErrorMsg(res.data.msg);
                            }
                        } else {
                            this.dialog.showAlert(res.data.message);
                            this.setErrorMsg(res.data.msg);
                        }
                    } else {
                        let a = { member_bonus_status: 0 };

                        const res = await ServiceMemberBonus.editMemberBonus(a, this.state.redeemId);
                        console.log('res : ' + res.data);
                        if (res.data.status === 2000) {
                            console.log('Redeem bonus Success!!!');
                            this.dialog.show({
                                title: 'Slot Admin information',
                                body: 'Redeem bonus is successfully.',
                                actions: [
                                    Dialog.OKAction(() => {
                                        Router.push("/member_bonus");
                                    })
                                ]
                            })
                        } else {
                            this.dialog.showAlert(res.data.message);
                            this.setErrorMsg(res.data.msg);
                        }
                    }

                } else {
                    this.dialog.showAlert(res.data.message);
                    this.setErrorMsg(res.data.msg);
                }
            } else {
                this.dialog.showAlert('กรุณาใส่ข้อมูลให้ครบ ก่อนกดปุ่ม Redeem!');
            }


            /* let a = { member_bonus_status: 0 };

            const res = await ServiceMemberBonus.editMemberBonus(a, this.state.redeemId);
            console.log('res : ' + res.data);
            if (res.data.status === 2000) {
                console.log('Redeem bonus Success!!!');
                this.dialog.show({
                    title: 'Slot Admin information',
                    body: 'Redeem bonus is successfully.',
                    actions: [
                        Dialog.OKAction(() => {
                            Router.push("/member_bonus");
                        })
                    ]
                })
            } else {
                this.dialog.showAlert(res.data.message);
                this.setErrorMsg(res.data.msg);
            } */


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

        ServiceMemberBonus.getMemberBonusFromId(this.state.redeemId).then((res) => {
            //console.log("res data=>" + res.data);
            const { data, status } = res.data;
            //console.log("status=>" + status);
            if (status === 2000) {
                //this.setState({ data: data });
                console.log("edit data =>" + JSON.stringify(data));
                const { bonus_id, bonus_name, member_name, member_bonus_redeem, bonus_type, bonus_value } = data[0];
                this.setState({
                    bonus_id: bonus_id, bonus_name: bonus_name, member_name: member_name, note: bonus_name + " => " + member_bonus_redeem,
                    member_bonus_redeem: member_bonus_redeem, bonus_value: bonus_value, bonus_type: bonus_type
                });

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

        return <AdminLayoutHoc contentTitle={'Redeem Bonus'} contentTitleButton={<i className="fa fa-2x fa-street-view" />} url={this.props.url}>
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
                                            <span className="input-group-text bg-dark col-12">bonus</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ bonus_name: e.target.value })}
                                            value={this.state.bonus_name}
                                            required
                                            disabled={true} />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">bonus type</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ bonus_type: e.target.value })}
                                            value={this.state.bonus_type}
                                            required
                                            disabled={true} />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">bonus value</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ bonus_value: e.target.value })}
                                            value={this.state.bonus_value}
                                            required
                                            disabled={true} />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">member</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ member_name: e.target.value })}
                                            value={this.state.member_name}
                                            required
                                            disabled={true} />
                                    </div>
                                </div>
                            </div>



                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">redeem</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ member_bonus_redeem: e.target.value })}
                                            value={this.state.member_bonus_redeem}
                                            required
                                            disabled={true} />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">deposit</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ deposit: e.target.value })}
                                            value={this.state.deposit}
                                            required
                                            />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend col-2">
                                            <span className="input-group-text bg-dark col-12">topup</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="agent name"
                                            onChange={(e) => this.setState({ topup: e.target.value })}
                                            value={this.state.topup}
                                            required
                                            />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                {/* <label htmlFor="validation-ex" className="col-sm-3">Password</label> */}
                                <div className="col-sm-12">
                                    <div className="input-group mb-3 input-group-sm">
                                    <div className="input-group-prepend col-2">
                                            <span className="input-group-text col-12 bg-dark ">note</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex3"
                                            //placeholder="Password"
                                            onChange={(e) => this.setState({ note: e.target.value })}
                                            value={this.state.note}
                                            required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="card-footer">
                        <div className="d-inline-block btn-block">
                            <button className="btn btn-danger" onClick={this.handleResetSubmit} title='Back' style={{ width: 45 }}><i class="fa fa-mail-reply"></i></button>
                            <button className="btn btn-primary" onClick={this.handleSubmit} title='Redeem' style={{ marginLeft: 5, width: 45 }}><i class="fa fa-diamond"></i></button>
                        </div>
                    </div>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>
        </AdminLayoutHoc>
    }
}