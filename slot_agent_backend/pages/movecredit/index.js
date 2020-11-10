import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';

import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies, { getJSON } from "js-cookie";
import { ServiceAgent, ServiceMember } from "../../service";
import { ServiceUserAgent } from "../../service";
import { ServiceUser } from "../../service";
import { ServiceTurnover } from "../../service";
import { ServiceTransaction } from "../../service";
import { ServiceMoveCredit } from "../../service";
//import '../../styles/styles.scss';
import Dialog from 'react-bootstrap-dialog';

import { MDBContainer } from 'mdbreact';
import { ToastBody } from "reactstrap";

export default class Report extends React.Component {
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
            slt: "All",

        };
        this.deleteMember = this.deleteMember.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);

        this.handleSelectRowPerPageChange = this.handleSelectRowPerPageChange.bind(this);
        this.handleSelectPageNumberChange = this.handleSelectPageNumberChange.bind(this);


        this.onSearchClick = this.onSearchClick.bind(this);

        this.handleSelectAgentChange = this.handleSelectAgentChange.bind(this);

        this.onSearchLevel = this.onSearchLevel.bind(this);
        this.onSearchAgentCode = this.onSearchAgentCode.bind(this);

        this.RenderTable = this.RenderTable.bind(this);
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

    async deleteMember(id) {
        if (this.state.errorMessage) this.setErrorMsg("");
        try {
            const res = await ServiceMember.deleteMember(id);
            if (res.data.status === 2000) {
                this.setState({
                    data: this.state.data.filter((member) => {
                        return member._id !== id;
                    })
                });
                this.setState({
                    rawdata: this.state.rawdata.filter((member) => {
                        return member._id !== id;
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

    RenderTable(param) {
        this.setState({ slt: param });
        const a = { "selecttime": param };
        ServiceMoveCredit.getMoveCreditFromAgentCode(a, Cookies.get("agentcode")).then((res) => {
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

    componentDidMount() {
        if (!Cookies.get("user")) {
            Router.push("/");
        }        

        console.log('agent code : ' + Cookies.get("agentcode"));
        const a = { "selecttime": this.state.slt };
        ServiceMoveCredit.getMoveCreditFromAgentCode(a, Cookies.get("agentcode")).then((res) => {
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
            contentTitle={'MoveCredit Report'}
            /* contentTitleButton={<Link href="/member/add">
                <button type="button" className="btn btn-outline-success btn-sm"><i className="fa fa-group fa-fw" /> Add a new member</button>
            </Link>} */
            url={this.props.url}
        >
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            {/* <h3 className="card-title">Current users</h3> */}
                            <MDBContainer>
                                <div className="wrapper">

                                    <div className="w-auto h-25 p-3  d-inline-block">
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('All');
                                            }}
                                            style={{ width: 100 }}
                                        >
                                            All
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('Today');
                                            }}
                                            style={{ marginLeft: 5, width: 100 }}
                                        >
                                            Today
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('Yesterday');
                                            }}
                                            style={{ marginLeft: 5, width: 100 }}
                                        >
                                            Yesterday
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('ThisWeek');
                                            }}
                                            style={{ marginLeft: 5, width: 100 }}
                                        >
                                            This Week
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('LastWeek');
                                            }}
                                            style={{ marginLeft: 5, width: 100 }}
                                        >
                                            Last Week
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('ThisMonth');
                                            }}
                                            style={{ marginLeft: 5, width: 100 }}
                                        >
                                            This Month
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('LastMonth');
                                            }}
                                            style={{ marginLeft: 5, width: 100 }}
                                        >
                                            Last Month
                                        </button>
                                    </div>

                                </div>
                            </MDBContainer>

                        </div>
                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover table-striped table-bordered">
                                <thead>
                                    <tr >
                                        <th>move date-time</th>
                                        <th>agent code</th>
                                        <th>mem username</th>
                                        <th>mem name</th>
                                        <th>move type</th>
                                        <th>move from</th>
                                        <th>move to</th>
                                        <th>move to game</th>
                                        <th>amount</th>
                                        <th>balance current</th>
                                        <th>balance update</th>
                                        <th>message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((report, index) => {
                                        if (index >= this.state.startrow && index < this.state.endrow)
                                            return (
                                                <tr key={index}>
                                                    <td className="py-1">{report.move_date + ' ' + report.move_time }</td>
                                                    <td className="py-1">{report.agent_code}</td>
                                                    <td className="py-1">{report.mem_username}</td>
                                                    <td className="py-1">{report.mem_name}</td>                                                    
                                                    <td className="py-1">{report.move_type}</td>
                                                    <td className="py-1">{report.move_from}</td>
                                                    <td className="py-1">{report.move_to}</td>
                                                    <td className="py-1">{report.move_to_game}</td>
                                                    <td className="py-1">{report.amount}</td>
                                                    <td className="py-1">{report.balance_current}</td>
                                                    <td className="py-1">{report.balance_update}</td>
                                                    <td className="py-1">{report.move_msg}</td>
                                                    
                                                </tr>
                                            );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <MDBContainer>
                                <div className="wrapper">
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
                        </div>
                    </div>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>

        </AdminLayoutHoc>
    }
} 