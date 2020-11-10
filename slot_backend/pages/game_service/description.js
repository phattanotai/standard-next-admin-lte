import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

//import '../styles/styles.scss';
import { ServiceBrand } from "../../service";
import { ServiceImage } from "../../service";
import { ServiceGameService } from "../../service";
import { ServiceAgent } from "../../service";
import { ServiceGameList } from "../../service";

import Dialog from 'react-bootstrap-dialog';

import { MDBContainer } from 'mdbreact';

export default class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Cookies.get("serid"),
            ser_code: "",
            brand_code: "",
            agent_code: "",
            ser_api_key: "",
            ser_api_secret: "",
            ser_api_username: "",
            ser_api_password: "", //1=enable , 0=disable
            startpass_string: "",
            startuser_string: "",
            ser_date: "",
            ser_status: "",
            user_process: "",
            ser_percent: "",
            ser_comm: "",
            last_turn_date: "",
            last_turn_hour: "",
            /* agent_code: "",
            agent_lineup: "",
            agent_name: "",
            agent_detail: "",
            agent_website: "",
            agent_master: "Master",
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
            agent_status: "", //1=enable , 0=disable */
            /* , created_at: "", userFake: "", ref: "", message: "",
            status: "", web_name: "", url: "", api: "", imei: "", description: "", name: "",
            mobile_number: "", save_place: "", mobile_status: "", */
            errorMessage: "",
            data: [],
            classBadge: "danger",
            servicestatus: 'Off',

            pagetotal: 0,
            pagenumber: 0,
            recordtotal: 0,
            rowperpage: 10,
            pagearr: [],
            startrow: 0,
            endrow: 0,
            searchtxt: "",

            data: [],
            rawdata: [],

            serid: Cookies.get('serid'),
        };

        this.handleResetSubmit = this.handleResetSubmit.bind(this);

        //this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectPageNumberChange = this.handleSelectPageNumberChange.bind(this);

        this.handleSelectChange = this.handleSelectChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        //this.onClick = this.onClick.bind(this);
        //this.onConfirmClick = this.onConfirmClick.bind(this) 
    }

    /* onClick() {
        this.dialog.showAlert('Hello Dialog!')
    } */
    

    handleResetSubmit() {
        Router.push("/game_service");
    }

    getGamelistFromBrand(Brand) {
        ServiceGameList.listGamesFromBrand(Brand).then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data game list length : " + data.length);
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
        //this.setState({  });
        var pagenum = e.target.value;
        var startrow = (pagenum - 1) * this.state.rowperpage;
        var endrow = startrow + this.state.rowperpage;
        this.setState({ startrow: startrow, endrow: endrow, pagenumber: e.target.value });
        
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

    handleSelectChange(e) {
        console.log("e.target.value :" + e.target.value);
        this.setState({ rolename: e.target.value });
    }

    setErrorMsg(msg) {
        console.log(msg);
        this.setState({ errorMessage: msg });
    }

    componentDidMount() {
        if (!Cookies.get("user")) {
            Router.push("/");
        }

        ServiceGameService.getService(this.state.id).then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                const {
                    ser_code,brand_code, agent_code, ser_api_key, ser_api_secret, ser_api_username,
                    ser_api_password, startpass_string, startuser_string,
                    ser_date, user_process, ser_percent, ser_comm,
                    last_turn_date, last_turn_hour, ser_status
                } = data[0];
                var m_ser_percent = '0', m_ser_comm = '0';
                if (ser_percent != '') {
                    m_ser_percent = ser_percent.$numberDecimal;
                }
                if (ser_comm != '') {
                    m_ser_comm = ser_comm.$numberDecimal;
                }

                this.setState({
                    ser_code: ser_code,brand_code: brand_code, agent_code: agent_code,
                    ser_api_key: ser_api_key, ser_api_secret: ser_api_secret, ser_api_username: ser_api_username,
                    ser_api_password: ser_api_password, startpass_string: startpass_string, startuser_string: startuser_string,
                    ser_date: ser_date, user_process: user_process, ser_percent: m_ser_percent, ser_comm: m_ser_comm,
                    last_turn_date: last_turn_date, last_turn_hour: last_turn_hour, ser_status: ser_status
                });

                const brand_name  = Cookies.get('ser_brandname');
                console.log('brand name 417=> ' + brand_name);
                this.setState({ brand: brand_name});
                //console.log('brand name 417=> ' + brand_name);
                this.getGamelistFromBrand(brand_code);

                if (ser_status == 'On') {
                    this.setState({ classBadge: "success", servicestatus: "On" });                    }
                else
                {
                    this.setState({ classBadge: "danger", servicestatus: "Off" });
                }

                /* if (ser_status == "On") {
                    this.setState({ switch1: true });
                } else {
                    this.setState({ switch1: false });
                } */
            } else {
                this.setErrorMsg(res.data.msg);
                Router.push("/game_service");
            }
        });


    }
    render() {

        return <AdminLayoutHoc contentTitle={'Agent Description'} contentTitleButton={<i className="fa fa-2x fa-id-badge" />} url={this.props.url}>
            <div className="row">
                <div className="col-6">
                    <div className="card mt-2">
                        <div className="col-12">
                            <div className="card-body table-responsive p-0">
                                <table className="table table-hover ">
                                <thead class="table-dark">
                                        <tr >
                                            <th><h6>ITEMS</h6></th>
                                            <th><h6>DESCRIPTION</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                         <tr>
                                            <td className="py-1"><h6>Service Status</h6></td>
                                            <td className="py-1"><label className={`badge badge-${this.state.classBadge}`}>{this.state.ser_status}</label> </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 "><h6>Brand code</h6></td>
                                            <td className="py-1">{this.state.brand_code}</td>
                                        </tr>
                                       
                                        <tr>
                                            <td className="py-1"><h6>Agent Code</h6></td>
                                            <td className="py-1">{this.state.agent_code}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Service API Key</h6></td>
                                            <td className="py-1">{this.state.ser_api_key}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Service API Secret</h6></td>
                                            <td className="py-1">{this.state.ser_api_secret}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Service API Username</h6></td>
                                            <td className="py-1">{this.state.ser_api_username}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Service API Password</h6></td>
                                            <td className="py-1">{this.state.ser_api_password}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Start User String</h6></td>
                                            <td className="py-1">{this.state.startuser_string}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Start Password String</h6></td>
                                            <td className="py-1">{this.state.startpass_string}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>User Process</h6></td>
                                            <td className="py-1">{this.state.user_process}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Service Percent</h6></td>
                                            <td className="py-1">{this.state.ser_percent}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Service Commission</h6></td>
                                            <td className="py-1">{this.state.ser_comm}</td>
                                        </tr>                                       

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="bt-tb-page">
                            <button className="btn btn-danger" onClick={this.handleResetSubmit}  title='Back' style={{ width: 45 }}><i class="fa fa-mail-reply"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                        <div className="card">
                            <div className="card-header bg-secondary">
                                {/* <h3 className="card-title">Current users</h3> */}
                                <MDBContainer>
                                    <div className="wrapper">
                                        <h5> Games List for brand : {this.state.brand} </h5>
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
                                                                        return data.brand_name.indexOf(name) !== -1;
                                                                    })
                                                                });
                                                                datalength = this.state.rawdata.filter((data) => {
                                                                    return data.brand_name.indexOf(name) !== -1;
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
                                </MDBContainer>
                            </div>
                            <div className="card-body table-responsive p-0">
                                <table className="table table-hover table-striped table-bordered">
                                <thead class="table-dark">
                                        <tr >
                                        <th width={'5%'}>Status</th>
                                            <th width={'20%'}>Image</th>
                                            <th width={'15%'}>Code</th>
                                            <th width={'15%'}>Name</th>
                                            <th width={'5%'}>Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.data.map((game, index) => {
                                            let classBadge = 'danger';
                                            let mystatus = 'disable';
                                            if (game.game_status == 1) {
                                                classBadge = 'success';
                                                mystatus = 'enable';
                                            }
                                            if (index >= this.state.startrow && index < this.state.endrow)
                                                //console.log("userid" + user.id);
                                                return (
                                                    <tr key={index}>
                                                        <td className="py-1"><label className={`badge badge-info`} style={{ display: game.game_new === 'Yes' ? 'block' : 'none' }}>new</label> <label className={`badge badge-${classBadge}`} style={{ display: 'block' }}>{mystatus}</label></td>
                                                        <td className="py-1">
                                                            <img
                                                                src={game.game_img ? ServiceImage.imageshow(game.game_img) : ServiceImage.imageshow("1594692624651-no-image-available.png")}
                                                                style={{flex: 1,
                                                                    width: "80px", 
                                                                    height: null, 
                                                                    resizeMode: 'contain' }}
                                                            />

                                                        </td>
                                                        <td className="py-1">{game.game_code}</td>
                                                        <td className="py-1">{game.game_name}</td>
                                                        <td className="py-1">{game.game_type}</td>
                                                    </tr>
                                                );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>
        </AdminLayoutHoc>
    }
}