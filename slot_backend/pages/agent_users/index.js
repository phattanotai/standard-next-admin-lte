import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';

import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies, { getJSON } from "js-cookie";
import { ServiceAgent } from "../../service/";
import { ServiceUserAgent } from "../../service/";
import { ServiceUser } from "../../service/";
//import '../../styles/styles.scss';
import Dialog from 'react-bootstrap-dialog';

import { MDBContainer } from 'mdbreact';

export default class Agents extends React.Component {
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
                agents: this.state.rawdata.filter((agent) => {
                    return agent.agent_name.indexOf(name) !== -1;
                })
            });
            datalength = this.state.rawdata.filter((agent) => {
                return agent.agent_name.indexOf(name) !== -1;
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
        ServiceAgent.listAgent().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);
                this.setState({ agentdata: data });
            } else {
                this.setErrorMsg(res.data.msg);
            }
        });

        ServiceUser.listSystemRole().then((res) => {
            console.log("res data=>" + res.data);
            const { data, status } = res.data;
            console.log("status=>" + status);
            if (status === 2000) {
                console.log("data :=>" + data);
                this.setState({ role_data: data });
            } else {
                //this.setErrorMsg(res.data.msg);
                this.dialog.showAlert(res.data.message);
            }
        });

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
            contentTitle={'Agent Users'}
            contentTitleButton={<Link href="/agent_users/add">
                <button type="button" className="btn btn-outline-success btn-sm"><i className="fa fa-address-card fa-fw" /> Add a new user agent</button>
            </Link>}
            url={this.props.url}
        >
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        {/* <div className="card-header">
                            <MDBContainer>
                                <div className="wrapper">
                                <div className="w-auto h-25 p-3  d-inline-block">
                                        Agents
                                        <select id="select-3" className="form-control" value={this.state.agent} onChange={this.handleSelectAgentChange}>
                                            <option value='All'>All</option>
                                            {
                                                this.state.agentdata.map((agentrow, index) => {
                                                    return (
                                                        <option value={agentrow.agent_name} key={index}>{agentrow.agent_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
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
                                    <div className="w-auto h-25 p-3  d-inline-block">
                                        PageNumber
                                        <select id="select-1" className="form-control" value={this.state.pagenumber} onChange={this.handleSelectPageNumberChange}>
                                            {
                                                this.state.pagearr.map((p, index) => {
                                                    return (
                                                        <option value={p} key={index}>{p}</option>
                                                    )
                                                })
                                            }
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
                                                                return data.user_name.indexOf(name) !== -1;
                                                            })
                                                        });
                                                        datalength = this.state.rawdata.filter((data) => {
                                                            return data.user_name.indexOf(name) !== -1;
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
                            </MDBContainer>

                        </div> */}
                        <div className="card-header bg-secondary">
                            <div className="wrapper float-right">
                                <div className="w-auto h-25 p-3  d-inline-block">
                                    Agents
                                        <select id="select-3" className="form-control" value={this.state.agent} onChange={this.handleSelectAgentChange}>
                                        <option value='All'>All</option>
                                        {
                                            this.state.agentdata.map((agentrow, index) => {
                                                return (
                                                    <option value={agentrow.agent_name} key={index}>{agentrow.agent_name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
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
                                                            if (data.user_name.indexOf(name) !== -1) {
                                                                return data.user_name.indexOf(name) !== -1;
                                                            } else if (data.user_email.indexOf(name) !== -1) {
                                                                return data.user_email.indexOf(name) !== -1;
                                                            }
                                                        })
                                                    });
                                                    datalength = this.state.rawdata.filter((data) => {
                                                        if (data.user_name.indexOf(name) !== -1) {
                                                            return data.user_name.indexOf(name) !== -1;
                                                        } else if (data.user_email.indexOf(name) !== -1) {
                                                            return data.user_email.indexOf(name) !== -1;
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
                                <thead class="table-dark">
                                    <tr >
                                        <th width={'5%'}>Stauts</th>
                                        <th width={'10%'}>Agent</th>
                                        <th width={'15%'}>UserName</th>
                                        <th width={'15%'}>Email</th>
                                        <th width={'10%'}>Level</th>
                                        <th width={'10%'} style={{ textAlign: "center" }}>Command</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((uagent, index) => {
                                        let classBadge = 'danger';
                                        let mystatus = 'disable';
                                        if (uagent.user_status === '1') {
                                            classBadge = 'success';
                                            mystatus = 'enable';
                                        }
                                        if (index >= this.state.startrow && index < this.state.endrow)
                                            //console.log("userid" + user.id);
                                            return (
                                                <tr key={index}>
                                                    <td className="py-1"><label className={`badge badge-${classBadge}`}>{mystatus}</label></td>
                                                    <td className="py-1">{uagent.agent_code}</td>
                                                    <td className="py-1">{uagent.user_name}</td>
                                                    <td className="py-1">{uagent.user_email}</td>
                                                    <td className="py-1">{this.onSearchLevel(uagent.user_level)}</td>
                                                    <td className="py-1" style={{ textAlign: "center" }}>
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning btn-icon-text"
                                                            onClick={() => {
                                                                console.log("edit user agent id " + uagent._id);
                                                                Cookies.set("uagentid", uagent._id);
                                                                //Cookies.set("uagentid", uagent.agent_code);
                                                                Router.push("/agent_users/edit");

                                                            }}
                                                            title='Edit'
                                                            style={{ marginLeft: 5, width: 45 }}
                                                        >
                                                            <i class="fa fa-edit"></i>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                this.dialog.show({
                                                                    title: 'Slot Admin confirm',
                                                                    body: 'Are you sure?',
                                                                    actions: [
                                                                        Dialog.CancelAction(() => {
                                                                            this.dialog.hide();
                                                                        }),
                                                                        Dialog.OKAction(() => {
                                                                            console.log("delete agent userid " + uagent._id);
                                                                            this.deleteUserAgent(uagent._id);
                                                                        })
                                                                    ],
                                                                    bsSize: 'small',
                                                                    onHide: (dialog) => {
                                                                        this.dialog.hide()
                                                                        console.log('closed by clicking background.')
                                                                    }
                                                                })
                                                            }}
                                                            className="btn btn-danger btn-icon-text"
                                                            title='Delete'
                                                            style={{ marginLeft: 5, width: 45 }}
                                                        >
                                                            <i class="fa fa-close"></i>
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