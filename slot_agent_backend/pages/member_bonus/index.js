import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';

import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies, { getJSON } from "js-cookie";
import { ServiceAgent } from "../../service";
import { ServiceUserAgent } from "../../service";
import { ServiceUser } from "../../service";
import { ServiceNews } from "../../service";
import { ServiceMemberBonus } from "../../service";
//import '../../styles/styles.scss';
import Dialog from 'react-bootstrap-dialog';

import { MDBContainer } from 'mdbreact';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            rawdata: [],
            errorMessage: "",

            role_data: [],

            pagetotal: 0,
            pagenumber: 0,
            recordtotal: 0,
            rowperpage: 10,
            pagearr: [],
            startrow: 0,
            endrow: 0,
            searchtxt: "",
            agent: "",
            agentdata: [],
            newsdata: [],
            news: "",

        };
        this.deleteUserAgent = this.deleteUserAgent.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);

        this.handleSelectRowPerPageChange = this.handleSelectRowPerPageChange.bind(this);
        this.handleSelectPageNumberChange = this.handleSelectPageNumberChange.bind(this);


        this.onSearchClick = this.onSearchClick.bind(this);

        this.handleSelectAgentChange = this.handleSelectAgentChange.bind(this);

        this.onSearchLevel = this.onSearchLevel.bind(this);
        this.onSearchAgentCode = this.onSearchAgentCode.bind(this);
    }

    handleSelectAgentChange(e) {
        e.preventDefault();
        console.log('e.target.value =>' + e.target.value);
        this.setState({ agent: e.target.value });
        if (e.target.value !== 'All') {
            var acode = this.onSearchAgentCode(e.target.value);
            Cookies.set("_Agent", e.target.value);
            ServiceUserAgent.getUserAgentFromAgentCode(acode).then((res) => {
                console.log(res.data);
                const { data, status } = res.data;
                if (status === 2000) {
                    console.log("data length : " + data.length);
                    this.setState({ data: data });
                    this.setState({ rawdata: data });

                    var page_remain = Math.floor(data.length / this.state.rowperpage);
                    var num = data.length % this.state.rowperpage;
                    if (num > 0) {
                        page_remain++;
                    }

                    var arr = [];
                    var i;
                    for (i = 0; i < page_remain; i++) {
                        arr.push(i + 1);
                    }
                    var pagenum = 1;
                    var startrow = (pagenum - 1) * this.state.rowperpage;
                    var endrow = startrow + this.state.rowperpage;
                    this.setState({ recordtotal: data.length, pagetotal: page_remain, pagenumber: pagenum, pagearr: arr, startrow: startrow, endrow: endrow });
                } else {
                    this.setErrorMsg(res.data.msg);
                }
            });
        } else {
            Cookies.remove('_Agent');
            ServiceUserAgent.listUserAgent().then((res) => {
                console.log(res.data);
                const { data, status } = res.data;
                if (status === 2000) {
                    console.log("data length : " + data.length);
                    this.setState({ data: data });
                    this.setState({ rawdata: data });

                    var page_remain = Math.floor(data.length / this.state.rowperpage);
                    var num = data.length % this.state.rowperpage;
                    if (num > 0) {
                        page_remain++;
                    }

                    var arr = [];
                    var i;
                    for (i = 0; i < page_remain; i++) {
                        arr.push(i + 1);
                    }
                    var pagenum = 1;
                    var startrow = (pagenum - 1) * this.state.rowperpage;
                    var endrow = startrow + this.state.rowperpage;
                    this.setState({ recordtotal: data.length, pagetotal: page_remain, pagenumber: pagenum, pagearr: arr, startrow: startrow, endrow: endrow });
                } else {
                    this.setErrorMsg(res.data.msg);
                }
            });
        }
    }

    onSearchLevel(level_id) {
        console.log('get myrole');
        const myrole = this.state.role_data.filter((role) => {
            return role.user_level_id == level_id;
        })

        const user_level_name = myrole.map((role, index) => {
            return role.user_level_name
        })
        //console.log('myrole:' + myrole);
        return user_level_name;
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

    onClick() {
        this.dialog.showAlert('Hello Dialog!')
    }

    onConfirmClick() {
        this.dialog.show({
            title: 'Spiderbot confirm',
            body: 'Are you sure?',
            actions: [
                Dialog.CancelAction(() => {
                    this.dialog.hide();
                }),
                Dialog.OKAction(() => {

                })
            ],
            bsSize: 'small',
            onHide: (dialog) => {
                this.dialog.hide()
                console.log('closed by clicking background.')
            }
        })
    }


    fetchUsers() {
        console.log("fetchUsers");
        ServiceUser.listUserrole().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log(data);
                //setUsers(data);
                this.state.data = data;
            } else {
                setErrorMsg(res.data.msg);
            }
        });
    }

    clickButton() {
        Router.push("/user/create");
    }

    async deleteUserAgent(id) {
        if (this.state.errorMessage) this.setErrorMsg("");
        try {
            const res = await ServiceUserAgent.deleteUserAgent(id);
            if (res.data.status === 2000) {
                this.setState({
                    data: this.state.data.filter((uagent) => {
                        return uagent._id !== id;
                    })
                });
                this.setState({
                    rawdata: this.state.rawdata.filter((uagent) => {
                        return uagent._id !== id;
                    })
                });
            } else {
                this.setErrorMsg(res.data.message);
                this.dialog.showAlert(res.data.message);
            }
        } catch (error) {
            console.error("An unexpected error happened occurred:", error);
            this.setErrorMsg(error.message);
            this.dialog.showAlert(error);
        }
    }

    onSearchClick() {
        var name = this.state.searchtxt;
        var datalength = this.state.rawdata.length;
        if (name != "") {
            this.setState({
                data: this.state.rawdata.filter((bonus) => {
                    return bonus.member_bonus_redeem.indexOf(name) !== -1;
                })
            });
            datalength = this.state.rawdata.filter((bonus) => {
                return bonus.member_bonus_redeem.indexOf(name) !== -1;
            }).length;
        } else {
            this.setState({
                data: this.state.rawdata
            });
        }

        var page_remain = Math.floor(datalength / this.state.rowperpage);
        var num = datalength % this.state.rowperpage;
        if (num > 0) {
            page_remain++;
        }

        var arr = [];
        var i;
        for (i = 0; i < page_remain; i++) {
            arr.push(i + 1);
        }
        var pagenum = 1;
        var startrow = (pagenum - 1) * this.state.rowperpage;
        var endrow = startrow + this.state.rowperpage;
        this.setState({ recordtotal: datalength, pagetotal: page_remain, pagenumber: pagenum, pagearr: arr, startrow: startrow, endrow: endrow });
    }

    componentDidMount() {
        if (!Cookies.get("user")) {
            Router.push("/");
        }

        ServiceMemberBonus.listMemberBonus(Cookies.get("agentcode")).then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);
                this.setState({ data: data });
                this.setState({ rawdata: data });

                var page_remain = Math.floor(data.length / this.state.rowperpage);
                var num = data.length % this.state.rowperpage;
                if (num > 0) {
                    page_remain++;
                }

                var arr = [];
                var i;
                for (i = 0; i < page_remain; i++) {
                    arr.push(i + 1);
                }
                var pagenum = 1;
                var startrow = (pagenum - 1) * this.state.rowperpage;
                var endrow = startrow + this.state.rowperpage;
                this.setState({ recordtotal: data.length, pagetotal: page_remain, pagenumber: pagenum, pagearr: arr, startrow: startrow, endrow: endrow });
            } else {
                this.setErrorMsg(res.data.msg);
            }
        });
    }

    setErrorMsg(msg) {
        this.setState({ errorMessage: msg });
    }

    handleSelectRowPerPageChange(e) {
        e.preventDefault();
        console.log("e.target.value :" + e.target.value);
        this.setState({ rowperpage: e.target.value });
        var page_remain = Math.floor(this.state.recordtotal / e.target.value);
        console.log("pagetotal : " + page_remain);
        var num = this.state.recordtotal % e.target.value;
        console.log("num : " + num);
        if (num > 0) {
            page_remain++;
        }
        var arr = [];
        var i;
        for (i = 0; i < page_remain; i++) {
            arr.push(i + 1);
        }
        console.log("arr : " + arr);
        var pagenum = 1;
        var startrow = (pagenum - 1) * e.target.value;
        var endrow = startrow + e.target.value;
        this.setState({ pagearr: [] });
        console.log("startrow : " + startrow);
        console.log("endrow : " + endrow);
        this.setState({ data: this.state.data, pagetotal: page_remain, pagenumber: 1, pagearr: arr, startrow: startrow, endrow: endrow });
        this.forceUpdate();
    }

    handleSelectPageNumberChange(e) {
        e.preventDefault();
        this.setState({ pagenumber: e.target.value });
        var pagenum = e.target.value;
        var startrow = (pagenum - 1) * this.state.rowperpage;
        var endrow = startrow + this.state.rowperpage;
        this.setState({ startrow: startrow, endrow: endrow });
    }

    render() {
        return <AdminLayoutHoc
            contentTitle={'Member Bonus Redeem'}
            url={this.props.url}
        >
            <div className="row">
                <div className="col-12">
                    <div className="card">
                    <div className="card-header bg-secondary">
                            <div className="wrapper float-right">
                                <div className="w-auto h-25 p-3  d-inline-block">
                                    Row per page
                                        <select id="select-1" className="form-control" value={this.state.rowperpage} onChange={this.handleSelectRowPerPageChange}>
                                        <option value='10'>10</option>
                                        <option value='15'>15</option>
                                        <option value='20'>20</option>
                                        <option value='25'>25</option>
                                        <option value='30'>30</option>
                                        <option value='35'>35</option>
                                        <option value='40'>40</option>
                                        <option value='45'>45</option>
                                        <option value='50'>50</option>
                                    </select>
                                </div>
                                <div className="card-tools d-inline-block">
                                    <div className="input-group input-group-sm" style={{ width: '100%' }}>
                                        <input type="text" name="table_search"
                                            className="form-control float-right"
                                            placeholder="Search"
                                            onChange={(e) => {
                                                this.setState({ searchtxt: e.target.value });
                                                var name = e.target.value;
                                                var datalength = this.state.rawdata.length;
                                                if (name != "") {
                                                    this.setState({
                                                        data: this.state.rawdata.filter((data) => {
                                                            //return data.user_name.indexOf(name) !== -1;
                                                            if (data.bonus_name.indexOf(name) !== -1) {
                                                                return data.bonus_name.indexOf(name) !== -1;
                                                            }
                                                        })
                                                    });
                                                    datalength = this.state.rawdata.filter((data) => {
                                                        //return data.user_name.indexOf(name) !== -1;
                                                        if (data.bonus_name.indexOf(name) !== -1) {
                                                            return data.bonus_name.indexOf(name) !== -1;
                                                        }
                                                    }).length;
                                                } else {
                                                    this.setState({
                                                        data: this.state.rawdata
                                                    });
                                                }

                                                var page_remain = Math.floor(datalength / this.state.rowperpage);
                                                var num = datalength % this.state.rowperpage;
                                                if (num > 0) {
                                                    page_remain++;
                                                }

                                                var arr = [];
                                                var i;
                                                for (i = 0; i < page_remain; i++) {
                                                    arr.push(i + 1);
                                                }
                                                var pagenum = 1;
                                                var startrow = (pagenum - 1) * this.state.rowperpage;
                                                var endrow = startrow + this.state.rowperpage;
                                                this.setState({ recordtotal: datalength, pagetotal: page_remain, pagenumber: pagenum, pagearr: arr, startrow: startrow, endrow: endrow });
                                            }}
                                            value={this.state.searchtxt} />
                                        <div className="input-group-append">
                                            <button className="btn btn-default"><i className="fa fa-search" onClick={this.onSearchClick} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover table-striped table-bordered">
                                <thead  class="table-dark">
                                    <tr >
                                        <th style={{ width: '6%' }}>Status</th>
                                        <th style={{ width: '10%' }}>Redeem</th>
                                        <th>bonus</th>
                                        <th style={{ width: '8%' }}>type</th>
                                        <th style={{ width: '8%' }}>value</th>
                                        <th style={{ width: '10%' }}>member</th>
                                        <th style={{ width: '10%',textAlign: "center" }}>Used</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((bonus, index) => {
                                        let classBadge = 'danger';
                                        let mystatus = 'used';
                                        let redeem = true;
                                        if (bonus.member_bonus_status === 1) {
                                            classBadge = 'success';
                                            mystatus = 'new ';
                                            redeem = false;
                                        }
                                        if (index >= this.state.startrow && index < this.state.endrow)
                                            //console.log("userid" + user.id);
                                            return (
                                                <tr key={index}>
                                                    <td className="py-1" ><label className={`badge badge-${classBadge}`}>{mystatus}</label></td>
                                                    <td className="py-1" >{bonus.member_bonus_redeem}</td>
                                                    <td className="py-1" >{bonus.bonus_name}</td>
                                                    <td className="py-1" >{bonus.bonus_type}</td>
                                                    <td className="py-1" >{bonus.bonus_value}</td>
                                                    <td className="py-1" >{bonus.member_name}</td>
                                                    
                                                    <td className="py-1" style={{ textAlign: "center" }}>
                                                        <button
                                                            type="button"
                                                            className= {redeem ? "btn btn-secondary btn-icon-text btn-sm" : "btn btn-primary btn-icon-text btn-sm"}
                                                            onClick={() => {
                                                                console.log("edit mews id " + bonus._id);
                                                                Cookies.set("redeemId", bonus._id);
                                                                Router.push("/member_bonus/edit");
                                                            }}
                                                            
                                                            disabled={redeem}
                                                            title='Redeem'
                                                            style={{ marginLeft: 5, width: 45 }}
                                                        >
                                                            <i class="fa fa-diamond"></i>
                                                        </button>

                                                    </td>
                                                </tr>
                                            );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer" style={{ textAlign: "right", width: '100%' }}>
                            <div className="wrapper float-right">                                
                                <div className="w-auto h-25 p-3  d-inline-block">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item"><a class="page-link" onClick={() => {
                                                if (this.state.pagenumber > 1) {
                                                    let p = this.state.pagenumber - 1;
                                                    this.setState({ pagenumber: p });
                                                    var pagenum = p
                                                    var startrow = (pagenum - 1) * this.state.rowperpage;
                                                    var endrow = startrow + this.state.rowperpage;
                                                    this.setState({ startrow: startrow, endrow: endrow });
                                                }
                                            }}>Previous</a></li>
                                            {
                                                this.state.pagearr.map((p, index) => {
                                                    return (
                                                        <li class={this.state.pagenumber == p ? "page-item active" : "page-item"}><a class="page-link" onClick={() => {
                                                            this.setState({ pagenumber: p });
                                                            var pagenum = p;
                                                            var startrow = (pagenum - 1) * this.state.rowperpage;
                                                            var endrow = startrow + this.state.rowperpage;
                                                            this.setState({ startrow: startrow, endrow: endrow });
                                                        }}>{p}</a></li>
                                                    )
                                                })
                                            }
                                            <li class="page-item"><a class="page-link" onClick={() => {
                                                if (this.state.pagenumber < this.state.pagearr.length) {
                                                    let p = this.state.pagenumber + 1;
                                                    this.setState({ pagenumber: p });
                                                    var pagenum = p;
                                                    var startrow = (pagenum - 1) * this.state.rowperpage;
                                                    var endrow = startrow + this.state.rowperpage;
                                                    this.setState({ startrow: startrow, endrow: endrow });
                                                }
                                            }}>Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>

        </AdminLayoutHoc>
    }
} 