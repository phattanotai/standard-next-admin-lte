import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect, Component } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceAgent } from "../../service";
import { ServiceBrand } from "../../service";
import { ServiceImage } from "../../service";
import { ServiceGameList } from "../../service";
import { ServiceGameService } from "../../service";

import Dialog from 'react-bootstrap-dialog';
//import FilesUploadComponent from '../../components/files-upload-component';

import { MDBContainer } from 'mdbreact';

export default class AddService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            data_agent: [],
            data_brand: [],
            //data_service: [],

            rawdata: [],

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
            user_process: Cookies.get("user"),
            ser_percent: "",
            ser_comm: "",
            ser_url: "",
            last_turn_date: "",
            last_turn_hour: "",


            switch1: true,

            switch_arr: [],

            errorMessage: "",
            data: [],
            role_data: [],
            mydatas: {},
            value: "Master",

            image: "",
            imagePreviewUrl: ServiceImage.imageshow("1594692624651-no-image-available.png"),
            file: "",

            agent: "",
            brand: "",
            save_row: "",

            pagetotal: 0,
            pagenumber: 0,
            recordtotal: 0,
            rowperpage: 10,
            pagearr: [],
            startrow: 0,
            endrow: 0,
            searchtxt: "",
        };

        this.onFileChange = this.onFileChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this)

        this.handleResetSubmit = this.handleResetSubmit.bind(this);
        //this.onSearchLevel = this.onSearchLevel.bind(this);

        this.handleSelectAgentChange = this.handleSelectAgentChange.bind(this);
        this.handleSelectBrandChange = this.handleSelectBrandChange.bind(this);

        this.handleSelectRowPerPageChange = this.handleSelectRowPerPageChange.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
        this.handleSelectPageNumberChange = this.handleSelectPageNumberChange.bind(this);
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

    onFileChange(e) {
        const file = e.target.files[0]
        const reader = new FileReader();
        if (file) {
            reader.onloadend = () => {
                this.setState({ file: file, imagePreviewUrl: reader.result });
            }
            reader.readAsDataURL(file);
        }
        else {
            this.setState({ imagePreviewUrl: ServiceImage.imageshow("1594692624651-no-image-available.png") });
        }
    }

    handleSwitchChange = nr => () => {
        let switchNumber = `switch${nr}`;
        this.setState({
            [switchNumber]: !this.state[switchNumber]
        });

        if (!this.state[switchNumber] == false) {
            this.setState({ data: [] });
        }
    }

    /*     handleSwitchChangeArr = nr => () => {
            let arr = this.state.switch_arr;
            arr[nr] = !arr[nr];
            //console.log('switch arr = >' + arr)
            this.setState({ switch_arr: arr });
            console.log('state switch arr = >' + this.state.switch_arr);
        } */

    onClick() {
        this.dialog.showAlert('Hello Dialog!')
    }

    handleResetSubmit() {
        Router.push("/game_service");
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

    async AddService() {
        let ser_status = "Off";
        if (this.state.switch1) {
            ser_status = "On";
        }
        const brandcode = this.SearchBrand(this.state.brand);
        const agentcode = this.SearchAgent(this.state.agent);
        var ser_percent = '0', ser_comm = '0';
        if (this.state.ser_percent != '') {
            ser_percent = this.state.ser_percent;
        }
        if (this.state.ser_comm != '') {
            ser_comm = this.state.ser_comm;
        }

        const a = {
            ser_code: agentcode + '-' + brandcode, brand_code: brandcode, agent_code: agentcode,
            ser_api_key: this.state.ser_api_key, ser_api_secret: this.state.ser_api_secret, ser_api_username: this.state.ser_api_username,
            ser_api_password: this.state.ser_api_password, startpass_string: this.state.startpass_string, startuser_string: this.state.startuser_string,
            ser_date: "", user_process: this.state.user_process, ser_percent: ser_percent, ser_comm: ser_comm, ser_url: this.state.ser_url,
            last_turn_date: this.state.last_turn_date, last_turn_hour: this.state.last_turn_hour, ser_status: ser_status
        };
        console.log('Add service start...');
        const res2 = await ServiceGameService.createService(a);
        console.log('res : ' + res2.data);
        if (res2.data.status === 2000) {
            console.log('Add service Success!!!');
            this.dialog.show({
                title: 'Slot Admin information',
                body: 'บันทึก service : ' + agentcode + '-' + brandcode + ' เรียบร้อยแล้ว',
                actions: [
                    Dialog.OKAction(() => {
                        Router.push("/game_service");
                    })
                ]
            })
        } else {
            this.dialog.showAlert(res2.data.message + ' กรุณาเช็ครูปแบบของข้อมูลให้ถูกต้อง(ตัวอักษร/ตัวเลข)');
            this.setErrorMsg(res2.data.msg);
        }

    }

    async handleSubmit() {
        try {
            if (this.state.brand !== "" && this.state.agent !== "" && this.state.ser_api_key !== "" &&
                this.state.ser_api_secret !== "" && this.state.ser_api_username !== "" && this.state.ser_api_password !== "") {
                this.AddService();
            }
            else {
                this.dialog.showAlert('กรุณาใส่ข้อมูลให้ครบ ก่อนกดปุ่ม Save!');
            }

        } catch (error) {
            //this.dialog.showAlert(error);
            console.error("An unexpected error happened occurred:", error);
            this.setErrorMsg(error.message);
        }
        //e.preventDefault();
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

    handleSelectBrandChange(e) {
        e.preventDefault();
        console.log('e.target.value =>' + e.target.value);
        this.setState({ brand: e.target.value });

        this.getGamelistFromBrand(e.target.value);
    }

    handleSelectChange(e) {
        console.log("e.target.value :" + e.target.value);
        this.setState({ agent_type: e.target.value });
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

        ServiceAgent.listAgent().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            var data_service = [];
            if (status === 2000) {
                console.log("data agent length : " + data.length);
                this.setState({ data_agent: data });

                console.log("serviceagent=>" + Cookies.get('serviceagent'));
                if (Cookies.get('serviceagent')) {
                    const agent_code = Cookies.get('serviceagent');
                    this.setState({ agent: this.SearchAgentName(agent_code) });
                    ServiceGameService.listServiceFromAgent(agent_code).then((res) => {
                        console.log(res.data);
                        const { data, status } = res.data;
                        if (status === 2000) {
                            console.log("data service length : " + data.length);
                            //this.setState({ data_service: data });  
                            data_service = data;

                            ServiceBrand.listBrands().then((res) => {
                                console.log(res.data);
                                const { data, status } = res.data;
                                if (status === 2000) {
                                    var data_brand = [];
                                    var i = 0, j = 0;
                                    console.log("data length : " + data.length);
                                    console.log("data service length : " + data_service.length);
                                    if (data_service.length > 0) {
                                        for (i = 0; i < data.length; i++) {
                                            console.log('i:' + i);
                                            loop1:
                                            for (j = 0; j < data_service.length; j++) {
                                                console.log('j:' + j);
                                                const brand_code = data_service[j].brand_code;
                                                console.log('brand_code:' + brand_code);
                                                console.log('data brand_code (' + i + '):' + data[i].brand_code);
                                                if (brand_code == data[i].brand_code) {
                                                    console.log('j:' + j);
                                                    console.log('i:' + i);
                                                    console.log('loop1 return');
                                                    j = data_service.length;
                                                    continue loop1;
                                                } else {
                                                    console.log('j:' + j);
                                                    console.log('i:' + i);
                                                    if ((j == data_service.length - 1) && (brand_code != data[i].brand_code)) {
                                                        console.log('data(' + i + ') push');
                                                        data_brand.push(data[i]);
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        data_brand = data;
                                    }


                                    this.setState({ data_brand: data_brand });

                                    if (data_brand.length > 0) {
                                        const { brand_name } = data_brand[0];
                                        this.setState({ brand: brand_name });
                                        this.getGamelistFromBrand(brand_name);
                                    } else {
                                        this.dialog.show({
                                            title: 'Slot Admin information',
                                            body: 'ไม่สามารถ add service agent:' + agent_code + ' ได้เนื่องจากมี service ครบทุก brand แล้ว',
                                            actions: [
                                                Dialog.OKAction(() => {
                                                    Router.push("/game_service");
                                                })
                                            ]
                                        })
                                    }
                                } else {
                                    this.setErrorMsg(res.data.msg);
                                }
                            });

                        } else {
                            this.setErrorMsg(res.data.msg);
                        }
                    });
                }
                /* else {
                    const { agent_name } = data[0];
                    this.setState({ agent: agent_name });

                    ServiceBrand.listBrands().then((res) => {
                        console.log(res.data);
                        const { data, status } = res.data;
                        if (status === 2000) {
                            console.log("data length : " + data.length);
                            this.setState({ data_brand: data });

                            const { brand_name } = data[0];

                            this.setState({ brand: brand_name });
                            this.getGamelistFromBrand(brand_name);


                        } else {
                            this.setErrorMsg(res.data.msg);
                        }
                    });
                } */

            } else {
                this.setErrorMsg(res.data.msg);
            }
        });




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

    SearchAgentName(agentcode) {
        console.log('get agent_name');
        const agents = this.state.data_agent.filter((agent) => {
            return agent.agent_code == agentcode;
        })

        const agent_name = agents.map((agent, index) => {
            return agent.agent_name;
        })
        //console.log('myrole:' + myrole);
        return agent_name[0];
    }

    SearchBrand(brandname) {
        console.log('get brand code');
        const brands = this.state.data_brand.filter((brand) => {
            return brand.brand_name == brandname;
        })

        const brand_code = brands.map((brand, index) => {
            return brand.brand_code;
        })

        return brand_code[0];
    }

    handleSelectAgentChange(e) {
        e.preventDefault();
        console.log('e.target.value =>' + e.target.value);
        this.setState({ agent: e.target.value });
        const agent_code = this.SearchAgent(e.target.value);
        Cookies.set('serviceagent', agent_code);

        ServiceGameService.listServiceFromAgent(agent_code).then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data service length : " + data.length);
                const data_service = data;

                ServiceBrand.listBrands().then((res) => {
                    console.log(res.data);
                    const { data, status } = res.data;
                    if (status === 2000) {
                        var data_brand = [];
                        var i, j;
                        console.log("data length : " + data.length);
                        for (i = 0; i < data.length; i++) {
                            for (j = 0; j < data_service.length; j++) {
                                if (data_service[i].brand_code == data[j].brand_code) {
                                    return;
                                } else {
                                    if (j == (data_service.length - 1)) {
                                        data_brand.push(data[j]);
                                    }
                                }
                            }
                        }

                        this.setState({ data_brand: data_brand });

                        if (data_brand.length > 0) {
                            const { brand_name } = data_brand[0];
                            this.setState({ brand: brand_name });
                            this.getGamelistFromBrand(brand_name);
                        }
                    } else {
                        this.setErrorMsg(res.data.msg);
                    }
                });

            } else {
                this.setErrorMsg(res.data.msg);
            }
        });
    }

    addSwitchArr() {
        if (!this.state.switch_arr) {
            let arr = [];
            console.log('arr => ' + arr);
            return arr.push(false);
        } else {
            let arr = [this.state.switch_arr];
            console.log('arr => ' + arr);
            return arr.push(false);
        }

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

        return <AdminLayoutHoc contentTitle={'Add Service'} contentTitleButton={<i className="fa fa-2x fa-exchange" />} url={this.props.url}>
            <div className="offset-md-0">
                <div className="row">
                    <div className="col-6">
                        <div className="card">

                            <form className="form-horizontal">
                                <div className="form-group">
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
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-12">

                                        <label htmlFor="select-1" className="col-sm-12 control-label">Select Brand</label>
                                        <div className="col-sm-offset-2 col-sm-12">
                                            <select id="select-3" className="form-control" value={this.state.brand} onChange={this.handleSelectBrandChange}>
                                                {
                                                    this.state.data_brand.map((brand, index) => {
                                                        return (
                                                            <option value={brand.brand_name} key={index}>{brand.brand_name}</option>
                                                        )
                                                    })
                                                }
                                            </select>

                                        </div>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">service api key</span>
                                        </div>
                                        <input type="text" className="form-control"
                                            //placeholder="service api key"
                                            id="validation-ex1"
                                            onChange={(e) => this.setState({ ser_api_key: e.target.value })}
                                            value={this.state.ser_api_key}
                                            required />
                                    </div>

                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">service api secret</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex2"
                                            //placeholder="service api secret"
                                            onChange={(e) => this.setState({ ser_api_secret: e.target.value })}
                                            value={this.state.ser_api_secret}
                                            required />
                                    </div>

                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">service api username</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex4"
                                            //placeholder="service api username"
                                            onChange={(e) => this.setState({ ser_api_username: e.target.value })}
                                            value={this.state.ser_api_username}
                                            required />
                                    </div>

                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">service api password</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex5"
                                            //placeholder="service api password"
                                            onChange={(e) => this.setState({ ser_api_password: e.target.value })}
                                            value={this.state.ser_api_password}
                                            required />
                                    </div>

                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">start user</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex7"
                                            //placeholder="start user"
                                            onChange={(e) => this.setState({ startuser_string: e.target.value })}
                                            value={this.state.startuser_string}
                                            required />
                                    </div>

                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">start password</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex6"
                                            //placeholder="start password"
                                            onChange={(e) => this.setState({ startpass_string: e.target.value })}
                                            value={this.state.startpass_string}
                                            required />
                                    </div>

                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">service percent</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex9"
                                            //placeholder="service percent"
                                            onChange={(e) => this.setState({ ser_percent: e.target.value })}
                                            value={this.state.ser_percent}
                                            required />
                                    </div>

                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">service commission</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex10"
                                            //placeholder="service commission"
                                            onChange={(e) => this.setState({ ser_comm: e.target.value })}
                                            value={this.state.ser_comm}
                                            required />
                                    </div>

                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">service URL</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex10"
                                            //placeholder="service URL"
                                            onChange={(e) => this.setState({ ser_url: e.target.value })}
                                            value={this.state.ser_url}
                                            required />
                                    </div>

                                    <div className="input-group mb-3 input-group-sm">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">user process</span>
                                        </div>
                                        <input type="text" className="form-control " id="validation-ex8"
                                            //placeholder="user process"
                                            onChange={(e) => this.setState({ user_process: e.target.value })}
                                            value={this.state.user_process}
                                            required
                                            disabled={true} />
                                    </div>

                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <label className="control-label">Service status&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                            <label class="switch">
                                                <input type="checkbox" onChange={this.handleSwitchChange(1)} checked={this.state.switch1} />
                                                <span class="slider round"></span>
                                            </label>
                                            <label className="control-label">&nbsp;&nbsp;ON</label>
                                        </div>
                                    </div>

                                </div>
                            </form>

                            <div className="card-footer">
                                <div className="d-inline-block btn-block">
                                    <button className="btn btn-danger" onClick={this.handleResetSubmit}>Back</button>
                                    <button className="btn btn-info float-right" onClick={this.handleSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                {/* <h3 className="card-title">Current users</h3> */}
                                <MDBContainer>
                                    <div className="wrapper">
                                        <h4> Games List for brand : {this.state.brand} </h4>
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
                                    <thead>
                                        <tr >
                                            <th>Status</th>
                                            <th>Image</th>
                                            <th>Code</th>
                                            <th>Name</th>
                                            <th>Type</th>
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
                                                                style={{
                                                                    flex: 1,
                                                                    width: "80px",
                                                                    height: null,
                                                                    resizeMode: 'contain'
                                                                }}
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

                </div>

                <Dialog ref={(el) => { this.dialog = el }} />
            </div>
        </AdminLayoutHoc>
    }
}