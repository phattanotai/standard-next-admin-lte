import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';

import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";
import { ServiceWeb } from "../../service/";
//import '../../styles/styles.scss';
import Dialog from 'react-bootstrap-dialog';

import { MDBContainer } from 'mdbreact';

export default class MobileConfig extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            datas: [],
            rawdata: [],
            errorMessage: "",

            pagetotal: 0,
            pagenumber: 0,
            recordtotal: 0,
            rowperpage: 10,
            pagearr: [],
            startrow: 0,
            endrow: 0,
            searchtxt: "",

            postTime_queue_available_same_mob: 0,
            postTime_queue_available_other_mob: 0,
            postApp_time_getqueue: 0,
            postApp_time_show_webview: 0,
            postTime_update_mobile_offline: 0,
            postApp_version: 0,
        };
        //this.deleteUserFake = this.deleteUserFake.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);

        this.handleSelectRowPerPageChange = this.handleSelectRowPerPageChange.bind(this);
        this.handleSelectPageNumberChange = this.handleSelectPageNumberChange.bind(this);


        this.onSearchClick = this.onSearchClick.bind(this);

        this.Signal_Loadconfig = this.Signal_Loadconfig.bind(this);
    }

    onClick() {

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

    clickButton() {
        Router.push("/create");
    }

    async Signal_Loadconfig() {
        if (this.state.errorMessage) this.setErrorMsg("");
        try {
            const res = await ServiceWeb.sig_mobileloadConfig();
            if (res.data.status === 2000) {
                this.dialog.showAlert("Send signal to online mobile for load new config successfully.");
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
                datas: this.state.rawdata.filter((data) => {
                    return data.postName.indexOf(name) !== -1;
                })
            });
            datalength = this.state.rawdata.filter((user) => {
                return data.postName.indexOf(name) !== -1;
            }).length;
        } else {
            this.setState({
                datas: this.state.rawdata
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
        ServiceWeb.listconfig().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);
                const { postTime_queue_available_same_mob, postTime_queue_available_other_mob, postApp_time_getqueue, postApp_time_show_webview, postTime_update_mobile_offline, postApp_version } = data[0]
                this.setState({ postTime_queue_available_same_mob: postTime_queue_available_same_mob, postTime_queue_available_other_mob: postTime_queue_available_other_mob, postApp_time_getqueue: postApp_time_getqueue, postApp_time_show_webview: postApp_time_show_webview, postTime_update_mobile_offline: postTime_update_mobile_offline, postApp_version: postApp_version });
                console.log("postTime_queue_available_same_mob : " + this.state.postTime_queue_available_same_mob);
                this.setState({ datas: data });
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
        this.setState({ datas: this.state.datas, pagetotal: page_remain, pagenumber: 1, pagearr: arr, startrow: startrow, endrow: endrow });
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
            contentTitle={'Mobile Config'}
            /* contentTitleButton={<Link href="/userfake/create">
                <button type="button" className="btn btn-outline-success btn-sm"><i className="fa fa-id-badge fa-fw" /> Add a new UserFake</button>
            </Link>} */
            url={this.props.url}
        >
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">

                        </div>
                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover">
                                <thead>
                                    <tr >
                                        <th style={{ textAlign: "left" }}><h5>Config</h5></th>
                                        <th style={{ textAlign: "center" }}><h5>Value</h5></th>
                                        <th style={{ textAlign: "center" }}><h5>Edit</h5></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-1">เวลาที่ mobile เดิมสามารถรับ web-id ที่ถูกpostได้(วินาที)</td>
                                        <td className="py-1" style={{ textAlign: "center" }}>{this.state.postTime_queue_available_same_mob}</td>
                                        <td className="py-1" style={{ textAlign: "center" }}>
                                            <button
                                                type="button"
                                                className="btn btn-warning btn-icon-text"
                                                onClick={() => {
                                                    Cookies.set("configname", "เวลาที่ mobile เดิมสามารถรับ web-id ที่ถูกpostได้(วินาที)");
                                                    Cookies.set("configid", "Time_queue_available_same_mob");
                                                    Router.push("/mobileconfig/edit");
                                                }}

                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">เวลาที่ mobile อื่นสามารถรับ web-id ที่ถูกpostได้(วินาที)</td>
                                        <td className="py-1" style={{ textAlign: "center" }}>{this.state.postTime_queue_available_other_mob}</td>
                                        <td className="py-1" style={{ textAlign: "center" }}>
                                            <button
                                                type="button"
                                                className="btn btn-warning btn-icon-text"
                                                onClick={() => {
                                                    Cookies.set("configname", "เวลาที่ mobile อื่นสามารถรับ web-id ที่ถูกpostได้(วินาที)");
                                                    Cookies.set("configid", "Time_queue_available_other_mob");
                                                    Router.push("/mobileconfig/edit");
                                                }}

                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">เวลาที่เรียกรับคิว(วินาที)</td>
                                        <td className="py-1" style={{ textAlign: "center" }}>{this.state.postApp_time_getqueue}</td>
                                        <td className="py-1" style={{ textAlign: "center" }}>
                                            <button
                                                type="button"
                                                className="btn btn-warning btn-icon-text"
                                                onClick={() => {
                                                    Cookies.set("configname", "เวลาที่เรียกรับคิว(วินาที)");
                                                    Cookies.set("configid", "App_time_getqueue");
                                                    Router.push("/mobileconfig/edit");
                                                }}

                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">เวลาที่ App แสดง webview (วินาที)</td>
                                        <td className="py-1" style={{ textAlign: "center" }}>{this.state.postApp_time_show_webview}</td>
                                        <td className="py-1" style={{ textAlign: "center" }}>
                                            <button
                                                type="button"
                                                className="btn btn-warning btn-icon-text"
                                                onClick={() => {
                                                    Cookies.set("configname", "เวลาที่ App แสดง webview (วินาที)");
                                                    Cookies.set("configid", "App_time_show_webview");
                                                    Router.push("/mobileconfig/edit");
                                                }}

                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">เวลาที่ API update สถานะ offline ของ mobile (วินาที)</td>
                                        <td className="py-1" style={{ textAlign: "center" }}>{this.state.postTime_update_mobile_offline}</td>
                                        <td className="py-1" style={{ textAlign: "center" }}>
                                            <button
                                                type="button"
                                                className="btn btn-warning btn-icon-text"
                                                onClick={() => {
                                                    Cookies.set("configname", "เวลาที่ API update สถานะ offline ของ mobile (วินาที)");
                                                    Cookies.set("configid", "Time_update_mobile_offline");
                                                    Router.push("/mobileconfig/edit");
                                                }}

                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">App version</td>
                                        <td className="py-1" style={{ textAlign: "center" }}>{this.state.postApp_version}</td>
                                        <td className="py-1" style={{ textAlign: "center" }}>
                                            <button
                                                type="button"
                                                className="btn btn-warning btn-icon-text"
                                                onClick={() => {
                                                    Cookies.set("configid", "App_version");
                                                    Cookies.set("configname", "App version");
                                                    Router.push("/mobileconfig/edit");
                                                }}

                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        
                    </div><div className="mt-30 w-100" style={{ textAlign: "center" }}>
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={() => {
                                    this.Signal_Loadconfig();
                                }}
                            >
                                Send signal to online mobile for Load new config
                                        </button>
                        </div>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>

        </AdminLayoutHoc>
    }
} 