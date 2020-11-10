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
import moment  from 'moment-timezone';

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
            rowperpage: 15,
            pagearr: [],
            startrow: 0,
            endrow: 0,
            searchtxt: "",
            agent: "",
            agentdata: [],
            slt: "All",
            txt_date: 'Report for Every times',

            fsort1: false,
            fsort2: false,
            fsort3: false,
            fsort4: false,
            fsort5: false,
            fsort6: false,
            fsort7: false,
            fsort8: false,
            fsort9: false,
            fsort10: false,

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
        var dateFormat = require('dateformat');
        const a = { "selecttime": param };
        if (param === 'All') {
            this.setState({ txt_date: 'Report for Every times' });
        } else if (param === 'Today') {
            var enddate = moment.tz('Asia/Bangkok').format('DD-MM-YYYY');
            this.setState({ txt_date: 'Report for Date ' + enddate });
        }
        else if (param === 'Yesterday') {
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var date = new Date(nDate);
            var enddate = new Date(nDate);
            //var enddate_stp = moment.tz('Asia/Bangkok').format('DD-MM-YYYY 00:00:00');
            date.setDate(date.getDate() - 1);
            this.setState({ txt_date: 'Report form Date ' + dateFormat(date, 'dd-mm-yyyy') + ' to ' + dateFormat(enddate, 'dd-mm-yyyy') });
        }
        else if (param === 'ThisWeek') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var date = new Date(this.getMonday(nDate));
            console.log('get monday:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            var startdate_stp = new Date(nDate);
            console.log('start date:' + startdate_stp);
            this.setState({ txt_date: 'Report form Date ' + dateFormat(date, 'dd-mm-yyyy') + ' to ' + dateFormat(startdate_stp, 'dd-mm-yyyy') });
        }
        else if (param === 'LastWeek') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var enddate = new Date(this.getMonday(nDate));
            var date = new Date();
            console.log('get monday:' + dateFormat(enddate, 'yyyy-mm-dd 00:00:00'));
            //console.log('start date:' + startdate_stp);
            date.setDate(enddate.getDate() - 7);
            console.log('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            console.log('end date:' + dateFormat(enddate, 'yyyy-mm-dd 00:00:00'));
            //var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
            //var enddate_stp = Number(new Date(dateFormat(enddate, 'yyyy-mm-dd 00:00:00')));
            this.setState({ txt_date: 'Report form Date ' + dateFormat(date, 'dd-mm-yyyy') + ' to ' + dateFormat(enddate, 'dd-mm-yyyy') });
        }
        else if (param === 'LastMonth') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var d = new Date(nDate);
            var enddate = new Date(d.getFullYear() + '-' + (d.getMonth() + 1) + '-01');
            enddate.setDate(enddate.getDate() - 1);
            console.log('end date:' + dateFormat(enddate, 'yyyy-mm-dd 00:00:00'));
            var date = new Date(d.getFullYear() + '-' + d.getMonth() + '-01');
            console.log('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            this.setState({ txt_date: 'Report form Date ' + dateFormat(date, 'dd-mm-yyyy') + ' to ' + dateFormat(enddate, 'dd-mm-yyyy') });
        }
        else if (param === 'ThisMonth') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var d = new Date(nDate);
            var date = new Date(d.getFullYear() + '-' + (d.getMonth() + 1) + '-01');
            console.log('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            this.setState({ txt_date: 'Report form Date ' + dateFormat(date, 'dd-mm-yyyy') + ' to ' + dateFormat(d, 'dd-mm-yyyy') });
        }
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

    getMonday(d) {
        d = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
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
                        <div className="card-header bg-secondary">
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
                                <label style={{ marginLeft: 20}}><h5>{this.state.txt_date}</h5></label>
                            </MDBContainer>

                        </div>
                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover table-striped table-bordered">
                                <thead class="table-dark">
                                    <tr >
                                        <th class="sortable" onClick={() => {
                                            this.setState({
                                                data: this.state.rawdata.sort((x, y) => {
                                                    let a = new Date(x.move_date + ' ' + x.move_time),
                                                        b = new Date(y.move_date + ' ' + y.move_time);
                                                    if (this.state.fsort6) {
                                                        return a - b;
                                                    } else {
                                                        return b - a;
                                                    }

                                                }), fsort6: !this.state.fsort6
                                            });
                                        }} style={{ width: '13%' }}>date-time</th>
                                        <th style={{ width: '6%' }}>agent</th>
                                        <th class="sortable" onClick={() => {
                                            this.setState({
                                                data: this.state.rawdata.sort((x, y) => {
                                                    let a = x.mem_username.toUpperCase(),
                                                        b = y.mem_username.toUpperCase();
                                                    if (this.state.fsort1) {
                                                        return a == b ? 0 : a > b ? 1 : -1;
                                                    } else {
                                                        return a == b ? 0 : a < b ? 1 : -1;
                                                    }

                                                }), fsort1: !this.state.fsort1
                                            });
                                        }} style={{ width: '9%' }}>username</th>
                                        <th class="sortable" onClick={() => {
                                            this.setState({
                                                data: this.state.rawdata.sort((x, y) => {
                                                    let a = x.mem_name.toUpperCase(),
                                                        b = y.mem_name.toUpperCase();
                                                    if (this.state.fsort2) {
                                                        return a == b ? 0 : a > b ? 1 : -1;
                                                    } else {
                                                        return a == b ? 0 : a < b ? 1 : -1;
                                                    }

                                                }), fsort2: !this.state.fsort2
                                            });
                                        }} style={{ width: '9%' }}>name</th>
                                        <th class="sortable" onClick={() => {
                                            this.setState({
                                                data: this.state.rawdata.sort((x, y) => {
                                                    let a = x.move_type.toUpperCase(),
                                                        b = y.move_type.toUpperCase();
                                                    if (this.state.fsort3) {
                                                        return a == b ? 0 : a > b ? 1 : -1;
                                                    } else {
                                                        return a == b ? 0 : a < b ? 1 : -1;
                                                    }

                                                }), fsort3: !this.state.fsort3
                                            });
                                        }} style={{ width: '5%' }}>type</th>
                                        <th class="sortable" onClick={() => {
                                            this.setState({
                                                data: this.state.rawdata.sort((x, y) => {
                                                    let a = x.move_from.toUpperCase(),
                                                        b = y.move_from.toUpperCase();
                                                    if (this.state.fsort4) {
                                                        return a == b ? 0 : a > b ? 1 : -1;
                                                    } else {
                                                        return a == b ? 0 : a < b ? 1 : -1;
                                                    }

                                                }), fsort4: !this.state.fsort4
                                            });
                                        }} style={{ width: '6%' }}>from</th>
                                        <th class="sortable" onClick={() => {
                                            this.setState({
                                                data: this.state.rawdata.sort((x, y) => {
                                                    let a = x.move_to.toUpperCase(),
                                                        b = y.move_to.toUpperCase();
                                                    if (this.state.fsort5) {
                                                        return a == b ? 0 : a > b ? 1 : -1;
                                                    } else {
                                                        return a == b ? 0 : a < b ? 1 : -1;
                                                    }

                                                }), fsort5: !this.state.fsort5
                                            });
                                        }} style={{ width: '6%' }}>to</th>
                                        <th class="sortable" onClick={() => {
                                            this.setState({
                                                data: this.state.rawdata.sort((x, y) => {
                                                    let a = x.move_to_game.toUpperCase(),
                                                        b = y.move_to_game.toUpperCase();
                                                    if (this.state.fsort7) {
                                                        return a == b ? 0 : a > b ? 1 : -1;
                                                    } else {
                                                        return a == b ? 0 : a < b ? 1 : -1;
                                                    }

                                                }), fsort7: !this.state.fsort7
                                            });
                                        }}>to game</th>
                                        <th class="sortable" onClick={() => {
                                            this.setState({
                                                data: this.state.rawdata.sort((x, y) => {
                                                    if (this.state.fsort8) {
                                                        return x.amount - y.amount;
                                                    } else {
                                                        return y.amount - x.amount;
                                                    }

                                                }), fsort8: !this.state.fsort8
                                            });
                                        }} style={{ width: '7%' }}>amount</th>
                                        <th style={{ width: '7%' }}>current</th>
                                        <th style={{ width: '7%' }}>update</th>
                                        <th class="sortable" onClick={() => {
                                            this.setState({
                                                data: this.state.rawdata.sort((x, y) => {
                                                    let a = x.move_msg.toUpperCase(),
                                                        b = y.move_msg.toUpperCase();
                                                    if (this.state.fsort9) {
                                                        return a == b ? 0 : a > b ? 1 : -1;
                                                    } else {
                                                        return a == b ? 0 : a < b ? 1 : -1;
                                                    }

                                                }), fsort9: !this.state.fsort9
                                            });
                                        }} style={{ width: '6%' }}>message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((report, index) => {
                                         var dateFormat = require('dateformat');
                                        var dd = new Date(report.move_date + ' ' + report.move_time);
                                        if (index >= this.state.startrow && index < this.state.endrow)
                                            return (
                                                <tr key={index}>
                                                    <td className="py-1">{dateFormat(dd, 'dd-mm-yyyy HH:MM:ss')}</td>
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
                        <div className="card-footer" style={{ textAlign: "right", width: '100%' }}>
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
                                                                if (data.mem_username.indexOf(name) !== -1) {
                                                                    return data.mem_username.indexOf(name) !== -1;
                                                                } else if (data.mem_name.indexOf(name) !== -1) {
                                                                    return data.mem_name.indexOf(name) !== -1;
                                                                } else if (data.move_from.indexOf(name) !== -1) {
                                                                    return data.move_from.indexOf(name) !== -1;
                                                                } else if (data.move_to.indexOf(name) !== -1) {
                                                                    return data.move_to.indexOf(name) !== -1;
                                                                } else if (data.move_to_game.indexOf(name) !== -1) {
                                                                    return data.move_to_game.indexOf(name) !== -1;
                                                                } else if (data.move_msg.indexOf(name) !== -1) {
                                                                    return data.move_msg.indexOf(name) !== -1;
                                                                }
                                                            })
                                                        });
                                                        datalength = this.state.rawdata.filter((data) => {
                                                            //return data.user_name.indexOf(name) !== -1;
                                                            if (data.mem_username.indexOf(name) !== -1) {
                                                                return data.mem_username.indexOf(name) !== -1;
                                                            } else if (data.mem_name.indexOf(name) !== -1) {
                                                                return data.mem_name.indexOf(name) !== -1;
                                                            } else if (data.move_from.indexOf(name) !== -1) {
                                                                return data.move_from.indexOf(name) !== -1;
                                                            } else if (data.move_to.indexOf(name) !== -1) {
                                                                return data.move_to.indexOf(name) !== -1;
                                                            } else if (data.move_to_game.indexOf(name) !== -1) {
                                                                return data.move_to_game.indexOf(name) !== -1;
                                                            } else if (data.move_msg.indexOf(name) !== -1) {
                                                                return data.move_msg.indexOf(name) !== -1;
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
                            </MDBContainer>
                        </div>
                    </div>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>

        </AdminLayoutHoc>
    }
} 