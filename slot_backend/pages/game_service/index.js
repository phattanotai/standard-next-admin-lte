import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';

import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies, { getJSON } from "js-cookie";
import { ServiceBrand } from "../../service";
import { ServiceImage } from "../../service";
import { ServiceGameService } from "../../service";
import { ServiceAgent } from "../../service";
import { ServiceGameList } from "../../service";
import Dialog from 'react-bootstrap-dialog';

import { MDBContainer } from 'mdbreact';

export default class Brand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data_agent: [],
            data_brand: [],

            data: [],
            rawdata: [],

            data2: [],
            rawdata2: [],

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

            pagetotal2: 0,
            pagenumber2: 0,
            recordtotal2: 0,
            rowperpage2: 10,
            pagearr2: [],
            startrow2: 0,
            endrow2: 0,
            searchtxt2: "",

            agent: "",

            switch_arr: [],
            brandname_arr: [],
            brandcode_arr: [],
            isDownLine: false,

        };
        this.deleteBrand = this.deleteBrand.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.handleSelectRowPerPageChange = this.handleSelectRowPerPageChange.bind(this);
        this.handleSelectPageNumberChange = this.handleSelectPageNumberChange.bind(this);

        this.handleSelectRowPerPageChange2 = this.handleSelectRowPerPageChange2.bind(this);
        this.handleSelectPageNumberChange2 = this.handleSelectPageNumberChange2.bind(this);

        this.handleSelectAgentChange = this.handleSelectAgentChange.bind(this);

        this.handleSelectServiceRow = this.handleSelectServiceRow.bind(this);


        this.handleSwitchChange = this.handleSwitchChange.bind(this);

        this.onSearchClick = this.onSearchClick.bind(this);

        this.onSearchClick2 = this.onSearchClick2.bind(this);

        this.deleteService = this.deleteService.bind(this);

    }

    onSearchClick() {
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
    }

    onSearchClick2() {
        this.setState({ searchtxt2: e.target.value });
        var name = e.target.value;
        var datalength = this.state.rawdata2.length;
        if (name != "") {
            this.setState({
                data2: this.state.rawdata2.filter((data) => {
                    return data.game_name.indexOf(name) !== -1 || data.game_code.indexOf(name) !== -1;
                })
            });
            datalength = this.state.rawdata2.filter((data) => {
                return data.game_name.indexOf(name) !== -1 || data.game_code.indexOf(name) !== -1;
            }).length;
        } else {
            this.setState({
                data2: this.state.rawdata2
            });
        }

        var page_remain = Math.floor(datalength / this.state.rowperpage2);
        var num = datalength % this.state.rowperpage2;
        if (num > 0) {
            page_remain++;
        }

        var arr = [];
        var i;
        for (i = 0; i < page_remain; i++) {
            arr.push(i + 1);
        }
        var pagenum = 1;
        var startrow = (pagenum - 1) * this.state.rowperpage2;
        var endrow = startrow + this.state.rowperpage2;
        this.setState({ recordtotal2: datalength, pagetotal2: page_remain, pagenumber2: pagenum, pagearr2: arr, startrow2: startrow, endrow2: endrow });
    }

    async editservice(switch_arr, index) {
        let ser_status = 'Off';
        if (switch_arr[index]) {
            ser_status = 'On';
        }
        const { _id } = this.state.data[index];
        console.log('service_id :' + _id)
        const a = { ser_status: ser_status };
        console.log('Set service status start...');
        const res = await ServiceGameService.editService(a, _id);
        console.log('res : ' + res.data);
        if (res.data.status === 2000) {
            console.log('Edit Service Success!!!');
        } else {
            this.dialog.showAlert(res.data.message);
            this.setErrorMsg(res.data.msg);
        }
    }

    async deleteService(id) {
        if (this.state.errorMessage) this.setErrorMsg("");
        try {
            const res = await ServiceGameService.deleteService(id);
            if (res.data.status === 2000) {
                console.log('delete Service successfully.');
                this.setState({
                    data: this.state.data.filter((game) => {
                        return game._id !== id;
                    })
                });
                this.setState({
                    rawdata: this.state.rawdata.filter((game) => {
                        return game._id !== id;
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


    handleSwitchChange = nr => () => {
        Cookies.set('service_index', nr);
        this.dialog.show({
            title: 'Slot Admin confirm',
            body: 'Are you sure?',
            actions: [
                Dialog.CancelAction(() => {
                    this.dialog.hide();
                }),
                Dialog.OKAction(() => {
                    const ind = Cookies.get('service_index');
                    Cookies.remove('service_index');
                    console.log('ind=>' + ind);
                    var arr = this.state.switch_arr;
                    arr[ind] = !arr[ind];
                    this.setState({ switch_arr: arr });
                    console.log('handleSwitchChange=>' + arr);
                    var arr2 = this.state.brandname_arr;
                    console.log('this.state.brandname_arr=>' + arr2);
                    this.ListGame(arr2, arr);

                    this.editservice(arr, ind);
                })
            ],
            bsSize: 'small',
            onHide: (dialog) => {
                this.dialog.hide()
                console.log('closed by clicking background.')
            }
        })

    }


    async deleteBrand(id) {
        if (this.state.errorMessage) this.setErrorMsg("");
        try {
            const res = await ServiceBrand.deleteBrands(id);
            if (res.data.status === 2000) {
                console.log('delete brand successfully.');
                this.setState({
                    data: this.state.data.filter((brand) => {
                        return brand._id !== id;
                    })
                });
                this.setState({
                    rawdata: this.state.rawdata.filter((brand) => {
                        return brand._id !== id;
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

    componentDidMount() {
        if (!Cookies.get("user")) {
            Router.push("/");
        }

        //var data_agent_tmp = [];

        ServiceAgent.listAgent().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data agent length : " + data.length);
                this.setState({ data_agent: data });
                //data_agent_tmp = data;
                if (Cookies.get('serviceagent')) {
                    const agent_code = Cookies.get('serviceagent');
                    console.log('agent_code:' + agent_code);
                    var agent_name = "", m;
                    for (m = 0; m < data.length; m++) {
                        console.log('tmp agent_code:' + data[m].agent_code);
                        if (data[m].agent_code == agent_code) {
                            agent_name = data[m].agent_name;
                        }
                    }
                    console.log('agent name:' + agent_name);
                    this.setState({ agent: agent_name });
                }
            } else {
                this.setErrorMsg(res.data.msg);
            }
        });

        ServiceBrand.listBrands().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data brand length : " + data.length);
                this.setState({ data_brand: data });

            } else {
                this.setErrorMsg(res.data.msg);
            }
        });

        if (Cookies.get('serviceagent')) {
            const agent_code = Cookies.get('serviceagent');
            console.log('agent_code:' + agent_code);
            ServiceGameService.listServiceFromAgent(agent_code).then((res) => {
                console.log(res.data);
                const { data, status } = res.data;
                if (status === 2000) {
                    console.log("data service length : " + data.length);
                    this.setState({ data: data });
                    this.setState({ rawdata: data });
                    var brandcode_arr = [];
                    var brandname_arr = [];
                    var sw_arr = [];
                    var j;
                    for (j = 0; j < data.length; j++) {
                        const { ser_status } = data[j];
                        if (ser_status == 'On') {
                            sw_arr.push(true);
                        } else {
                            sw_arr.push(false);
                        }
                        brandname_arr.push(this.SearchBrand(data[j].brand_code)[0]);
                        brandcode_arr.push(data[j].brand_code);
                    }
                    console.log('sw_arr : ' + sw_arr);
                    this.setState({ switch_arr: sw_arr });
                    this.setState({ brandname_arr: brandname_arr });
                    this.setState({ brandcode_arr: brandcode_arr });
                    this.ListGame2(brandcode_arr, sw_arr);

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

    setErrorMsg(msg) {
        this.setState({ errorMessage: msg });
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
        return agent_code;
    }

    SearchAgent_LineUp(agent_name) {
        console.log('get agent_code');
        const agents = this.state.data_agent.filter((agent) => {
            return agent.agent_name == agent_name;
        })

        const agent_lineup = agents.map((agent, index) => {
            return agent.agent_lineup;
        })
        //console.log('myrole:' + myrole);
        return agent_lineup;
    }

    SearchAgentName(agentcode) {
        console.log('get agent_name');
        console.log('agent_code : ' + agentcode);
        const agents = this.state.data_agent.filter((agent) => {
            return agent.agent_code == agentcode;
        })


        console.log('agents : ' + agents);
        const agent_name = agents.map((agent, index) => {
            return agent.agent_name;
        })
        console.log('agent_name:' + agent_name);
        return agent_name;
    }



    handleSelectServiceRow(bandname) {
        /* ServiceGameList.listGamesFromBrand(bandname).then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data game list length : " + data.length);
                this.setState({ data2: data });
                
            } else {
                this.setErrorMsg(res.data.msg);
            }
        });  */
    }

    ListGame(brandname_arr, switch_arr) {
        console.log('start list game');
        ServiceGameList.listGames().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data game list length : " + data.length);
                var arr_data = [];
                var i, j;
                for (i = 0; i < data.length; i++) {
                    console.log('data[' + i + '].game_brand=>' + data[i].game_brand);
                    for (j = 0; j < brandname_arr.length; j++) {
                        console.log('brandname_arr[' + j + ']=>' + brandname_arr[j]);
                        console.log('game brand : ' + this.SearchBrand(brandname_arr[j])[0]);
                        
                        if (this.SearchBrand(brandname_arr[j])  == data[i].game_brand) {
                            if (switch_arr[j]) {
                                arr_data.push(data[i]);
                            }
                        }
                    }
                }
                console.log('arr_data=>' + arr_data);
                this.setState({ data2: arr_data });
                this.setState({ rawdata2: arr_data });

                var page_remain = Math.floor(arr_data.length / this.state.rowperpage2);
                var num = arr_data.length % this.state.rowperpage2;
                if (num > 0) {
                    page_remain++;
                }

                var arr = [];
                var i;
                for (i = 0; i < page_remain; i++) {
                    arr.push(i + 1);
                }
                var pagenum = 1;
                var startrow = (pagenum - 1) * this.state.rowperpage2;
                var endrow = startrow + this.state.rowperpage2;
                this.setState({ recordtotal2: arr_data.length, pagetotal2: page_remain, pagenumber2: pagenum, pagearr2: arr, startrow2: startrow, endrow2: endrow });
            } else {
                this.setErrorMsg(res.data.msg);
            }
        });
    }

    ListGame2(brandcode_arr, switch_arr) {
        console.log('start list game');
        ServiceGameList.listGames().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data game list length : " + data.length);
                var arr_data = [];
                var i, j;
                for (i = 0; i < data.length; i++) {
                    console.log('data[' + i + '].game_brand=>' + data[i].game_brand);
                    for (j = 0; j < brandcode_arr.length; j++) {
                        //console.log('brandname_arr[' + j + ']=>' + brandcode_arr[j]);
                        console.log('game brand : ' + brandcode_arr[j]);
                        
                        if (brandcode_arr[j]  == data[i].game_brand) {
                            if (switch_arr[j]) {
                                arr_data.push(data[i]);
                            }
                        }
                    }
                }
                console.log('arr_data=>' + arr_data);
                this.setState({ data2: arr_data });
                this.setState({ rawdata2: arr_data });

                var page_remain = Math.floor(arr_data.length / this.state.rowperpage2);
                var num = arr_data.length % this.state.rowperpage2;
                if (num > 0) {
                    page_remain++;
                }

                var arr = [];
                var i;
                for (i = 0; i < page_remain; i++) {
                    arr.push(i + 1);
                }
                var pagenum = 1;
                var startrow = (pagenum - 1) * this.state.rowperpage2;
                var endrow = startrow + this.state.rowperpage2;
                this.setState({ recordtotal2: arr_data.length, pagetotal2: page_remain, pagenumber2: pagenum, pagearr2: arr, startrow2: startrow, endrow2: endrow });
            } else {
                this.setErrorMsg(res.data.msg);
            }
        });
    }

    SearchBrand(brandcode) {
        console.log('get brand name');
        const brands = this.state.data_brand.filter((brand) => {
            return brand.brand_code == brandcode;
        })

        const brand_name = brands.map((brand, index) => {
            return brand.brand_name;
        })
        const brand_img = brands.map((brand, index) => {
            return brand.brand_img;
        })

        return [brand_name, brand_img];
    }

    SearchBrandName(brandcode) {
        console.log('get brand name');
        const brands = this.state.data_brand.filter((brand) => {
            return brand.brand_code == brandcode;
        })

        const brand_name = brands.map((brand, index) => {
            return brand.brand_name;
        })

        return brand_name
    }

    SearchBrandcode(brandname) {
        console.log('get brand code');
        const brands = this.state.data_brand.filter((brand) => {
            return brand.brand_name == brandname;
        })

        const brand_code = brands.map((brand, index) => {
            return brand.brand_code;
        })

        return brand_code;
    }

    handleSelectAgentChange(e) {
        e.preventDefault();
        console.log('e.target.value =>' + e.target.value);
        this.setState({ agent: e.target.value });
        this.setState({ data: [] });
        this.setState({ rawdata: [] });
        this.setState({ data2: [] });
        if (e.target.value !== '---- Select Agent ----') {
            const agent_lineup = this.SearchAgent_LineUp(e.target.value)[0];
            const agent_code = this.SearchAgent(e.target.value)[0];
            console.log('agent_lineup =>' + agent_lineup);
            console.log('agent_code =>' + agent_code);
            Cookies.set("serviceagent", agent_code);
            if (agent_lineup === "" || agent_lineup === "-") {
                this.setState({ isDownLine: false });
                ServiceGameService.listServiceFromAgent(agent_code).then((res) => {
                    console.log(res.data);
                    const { data, status } = res.data;
                    if (status === 2000) {
                        console.log("data length : " + data.length);
                        this.setState({ data: data });
                        this.setState({ rawdata: data });

                        var brandname_arr = [];
                        var brandcode_arr = []
                        var sw_arr = [];
                        var j;
                        for (j = 0; j < data.length; j++) {
                            const { ser_status } = data[j];
                            if (ser_status == 'On') {
                                sw_arr.push(true);
                            } else {
                                sw_arr.push(false);
                            }
                            brandname_arr.push(this.SearchBrand(data[j].brand_code)[0]);
                            brandcode_arr.push(data[j].brand_code);
                        }
                        console.log('sw_arr : ' + sw_arr);
                        this.setState({ switch_arr: sw_arr });
                        this.setState({ brandname_arr: brandname_arr });
                        this.setState({ brandcode_arr: brandcode_arr });
                        console.log('brandname_arr : ' + brandname_arr);
                        console.log('brandcode_arr : ' + brandcode_arr);
                        this.ListGame2(brandcode_arr, sw_arr);


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
                this.setState({ isDownLine: true });
                ServiceGameService.listServiceFromAgent(agent_lineup).then((res) => {
                    console.log(res.data);
                    const { data, status } = res.data;
                    if (status === 2000) {
                        console.log("data length : " + data.length);
                        this.setState({ data: data });
                        this.setState({ rawdata: data });
                        var brandcode_arr = []
                        var brandname_arr = [];
                        var sw_arr = [];
                        var j;
                        for (j = 0; j < data.length; j++) {
                            const { ser_status } = data[j];
                            if (ser_status == 'On') {
                                sw_arr.push(true);
                            } else {
                                sw_arr.push(false);
                            }
                            brandname_arr.push(this.SearchBrand(data[j].brand_code)[0]);
                            brandcode_arr.push(data[j].brand_code);
                        }
                        console.log('sw_arr : ' + sw_arr);
                        this.setState({ switch_arr: sw_arr });
                        this.setState({ brandname_arr: brandname_arr });
                        this.setState({ brandcode_arr: brandcode_arr });
                        console.log('brandname_arr : ' + brandname_arr);
                        this.ListGame2(brandcode_arr, sw_arr);


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

        } else {
            Cookies.remove('serviceagent');
        }

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

    handleSelectRowPerPageChange2(e) {
        e.preventDefault();
        console.log("e.target.value :" + e.target.value);
        this.setState({ rowperpage2: e.target.value });
        var page_remain = Math.floor(this.state.recordtotal2 / e.target.value);
        console.log("pagetotal : " + page_remain);
        var num = this.state.recordtotal2 % e.target.value;
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
        this.setState({ data2: this.state.data2, pagetotal2: page_remain, pagenumber2: 1, pagearr2: arr, startrow2: startrow, endrow2: endrow });
        this.forceUpdate();
    }

    handleSelectPageNumberChange2(e) {
        e.preventDefault();
        this.setState({ pagenumber2: e.target.value });
        var pagenum = e.target.value;
        var startrow = (pagenum - 1) * this.state.rowperpage2;
        var endrow = startrow + this.state.rowperpage2;
        this.setState({ startrow2: startrow, endrow2: endrow });
    }

    render() {
        return <AdminLayoutHoc
            contentTitle={'Game Service'}
            contentTitleButton={<Link href="/game_service/add">
                <button type="button" className="btn btn-outline-success btn-sm"><i className="fa fa fa-exchange fa-fw" /> Add a new Service</button>
            </Link>}
            url={this.props.url}
        >
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            {/* <h3 className="card-title">Current users</h3> */}
                            <MDBContainer>
                                <div className="wrapper">
                                    <div className="w-auto h-25 p-3  d-inline-block">
                                        Select Agents
                                        <select id="select-3" className="form-control" value={this.state.agent} onChange={this.handleSelectAgentChange}>
                                            <option value='All'>---- Select Agent ----</option>
                                            {
                                                this.state.data_agent.map((agent, index) => {
                                                    return (
                                                        <option value={agent.agent_name} key={index}>{agent.agent_name}</option>
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
                                                placeholder="Search brand"
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
                            </MDBContainer>

                        </div>
                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>ON/OFF</th>
                                        <th>Logo</th>
                                        <th>Brand</th>
                                        <th>Agent</th>
                                        <th style={{ textAlign: "right" }}>{this.state.isDownLine ? 'Detail' : 'Detail / Edit / Delete'}  </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((ser, index) => {
                                        let brand = this.SearchBrand(ser.brand_code);

                                        console.log('brand : ' + brand);
                                        let classBadge = 'danger';
                                        let mystatus = 'disable';
                                        if (ser.ser_status === 'On') {
                                            classBadge = 'success';
                                            mystatus = 'enable';
                                        }
                                        if (index >= this.state.startrow && index < this.state.endrow)
                                            return (
                                                <tr key={index} onClick={this.handleSelectServiceRow(ser.brand_code)}>
                                                    <td>
                                                        <div>
                                                            <label class="switch" >
                                                                <input type="checkbox" onChange={this.handleSwitchChange(index)} checked={this.state.switch_arr[index]} disabled={this.state.isDownLine ? true : false}/>
                                                                <span class="slider round"></span>
                                                            </label>
                                                            <label className="control-label">&nbsp;On</label>
                                                        </div>
                                                    </td>
                                                    <td className="py-1">
                                                        <img
                                                            src={brand[1] ? ServiceImage.imageshow(brand[1]) : ServiceImage.imageshow("1594692624651-no-image-available.png")}
                                                            style={{
                                                                flex: 1,
                                                                height: "50px",
                                                                width: null,
                                                                resizeMode: 'contain'
                                                            }}
                                                        />
                                                    </td>
                                                    <td className="py-1">{brand[0]}</td>
                                                    <td className="py-1">{this.SearchAgentName(ser.agent_code)}</td>
                                                    <td className="py-1" style={{ textAlign: "right" }}>

                                                        <button
                                                            type="button"
                                                            className="btn btn-success btn-icon-text"
                                                            onClick={() => {                                                                
                                                                Cookies.set("serid", ser._id);
                                                                const brand = this.SearchBrandName(ser.brand_code);
                                                                console.log('brand name => ' + [0]);
                                                                Cookies.set("ser_brandname", brand[0]);
                                                                Router.push("/game_service/description");

                                                            }}
                                                            style={{ marginLeft: 5, width: 80 }}                                                        
                                                        >
                                                            Detail
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning btn-icon-text"
                                                            onClick={() => {                                                                
                                                                Cookies.set("serid", ser._id);
                                                                const brand = this.SearchBrandName(ser.brand_code);
                                                                console.log('brand name => ' + [0]);
                                                                Cookies.set("ser_brandname", brand[0]);
                                                                Router.push("/game_service/edit");

                                                            }}
                                                            style={{ marginLeft: 5, width: 80 , display: this.state.isDownLine ? 'none' : ''}}                                                        
                                                        >
                                                            Edit
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
                                                                            ///console.log("delete userid" + agent._id);
                                                                            this.deleteService(ser._id);
                                                                        })
                                                                    ],
                                                                    bsSize: 'small',
                                                                    onHide: (dialog) => {
                                                                        this.dialog.hide()
                                                                        console.log('closed by clicking background.')
                                                                    }
                                                                })
                                                            }}
                                                            style={{ marginLeft: 5, width: 80 ,display: this.state.isDownLine ? 'none' : ''}}
                                                            className="btn btn-danger btn-icon-text"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            {/* <h3 className="card-title">Current users</h3> */}
                            <MDBContainer>
                                <div className="wrapper">
                                    <h4>Games List for Agent : {this.state.agent}</h4>

                                    <div className="w-auto h-25 p-3  d-inline-block">
                                        Row per page
                                        <select id="select-1" className="form-control" value={this.state.rowperpage2} onChange={this.handleSelectRowPerPageChange2}>
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
                                        <select id="select-1" className="form-control" value={this.state.pagenumber2} onChange={this.handleSelectPageNumberChange2}>
                                            {
                                                this.state.pagearr2.map((p, index) => {
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
                                                placeholder="Search game code / name"
                                                onChange={(e) => {
                                                    this.setState({ searchtxt2: e.target.value });
                                                    var name = e.target.value;
                                                    var datalength = this.state.rawdata2.length;
                                                    if (name != "") {
                                                        this.setState({
                                                            data2: this.state.rawdata2.filter((data) => {
                                                                return data.game_name.indexOf(name) !== -1 || data.game_code.indexOf(name) !== -1;
                                                            })
                                                        });
                                                        datalength = this.state.rawdata2.filter((data) => {
                                                            return data.game_name.indexOf(name) !== -1 || data.game_code.indexOf(name) !== -1;
                                                        }).length;
                                                    } else {
                                                        this.setState({
                                                            data2: this.state.rawdata2
                                                        });
                                                    }

                                                    var page_remain = Math.floor(datalength / this.state.rowperpage2);
                                                    var num = datalength % this.state.rowperpage2;
                                                    if (num > 0) {
                                                        page_remain++;
                                                    }

                                                    var arr = [];
                                                    var i;
                                                    for (i = 0; i < page_remain; i++) {
                                                        arr.push(i + 1);
                                                    }
                                                    var pagenum = 1;
                                                    var startrow = (pagenum - 1) * this.state.rowperpage2;
                                                    var endrow = startrow + this.state.rowperpage2;
                                                    this.setState({ recordtotal2: datalength, pagetotal2: page_remain, pagenumber2: pagenum, pagearr2: arr, startrow2: startrow, endrow2: endrow });
                                                }}
                                                value={this.state.searchtxt2} />
                                            <div className="input-group-append">
                                                <button className="btn btn-default"><i className="fa fa-search" onClick={this.onSearchClick2} /></button>
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
                                    {this.state.data2.map((game, index) => {
                                        let classBadge = 'danger';
                                        let mystatus = 'disable';
                                        if (game.game_status == 1) {
                                            classBadge = 'success';
                                            mystatus = 'enable';
                                        }
                                        if (index >= this.state.startrow2 && index < this.state.endrow2)
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

                <Dialog ref={(el) => { this.dialog = el }} />
            </div>

        </AdminLayoutHoc>
    }
} 