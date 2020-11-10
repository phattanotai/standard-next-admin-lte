import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';

import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies, { getJSON } from "js-cookie";
import { ServiceBrand } from "../../service";
import { ServiceImage } from "../../service";
import Dialog from 'react-bootstrap-dialog';

import { MDBContainer } from 'mdbreact';

export default class Brand extends React.Component {
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

        };
        this.deleteBrand = this.deleteBrand.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        //this.onClick = this.onClick.bind(this);
        //this.onConfirmClick = this.onConfirmClick.bind(this);

        this.handleSelectRowPerPageChange = this.handleSelectRowPerPageChange.bind(this);
        this.handleSelectPageNumberChange = this.handleSelectPageNumberChange.bind(this);


        this.onSearchClick = this.onSearchClick.bind(this);

        //this.onSearchLevel = this.onSearchLevel.bind(this);
    }

    /* onSearchLevel(level_id) {
        console.log('get myrole');
        const myrole = this.state.role_data.filter((role) => {
            return role.user_level_id == level_id;
        })

        const user_level_name = myrole.map((role, index) => {
            return role.user_level_name
        })
        //console.log('myrole:' + myrole);
        return user_level_name;
    } */

    /* onClick() {
        this.dialog.showAlert('Hello Dialog!')
    } */

    /* onConfirmClick() {
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
    } */


    /* fetchUsers() {
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
    } */

    /* clickButton() {
        Router.push("/user/create");
    } */

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

    onSearchClick() {
         var name = this.state.searchtxt;
         var datalength = this.state.rawdata.length;
         if (name != "") {
             this.setState({
                 data: this.state.rawdata.filter((brand) => {
                     return brand.brand_name.indexOf(name) !== -1;
                 })
             });
             datalength = this.state.rawdata.filter((brand) => {
                 return brand.brand_name.indexOf(name) !== -1;
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
        ServiceBrand.listBrands().then((res) => {
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
            contentTitle={'Game Brand'}
            contentTitleButton={<Link href="/game_bands/add">
                <button type="button" className="btn btn-outline-success btn-sm"><i className="fa fa fa-cubes fa-fw" /> Add a new brand</button>
            </Link>}
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
                                                    //console.log(name);
                                                    var datalength = this.state.rawdata.length;
                                                    if (name != "") {
                                                        //console.log('rawdata' + JSON.stringify(this.state.rawdata));
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
                                    <tr >
                                        <th>Stauts</th>
                                        <th>Img</th>
                                        <th>Code</th>
                                        <th>Name</th>
                                        {/* <th>Banner</th> */}
                                        <th>Key</th>
                                        <th>Play URL</th>
                                        <th style={{ textAlign: "right" }}>AddGame / Edit / Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((brand, index) => {
                                        let classBadge = 'danger';
                                        let mystatus = 'disable';
                                        if (brand.brand_status === '1') {
                                            classBadge = 'success';
                                            mystatus = 'enable';
                                        }
                                        if (index >= this.state.startrow && index < this.state.endrow) {
                                            //console.log("userid" + user.id);
                                            //let tr_class= 'success';
                                            
                                            return (
                                                <tr key={index}>
                                                    <td className="py-1"><label className={`badge badge-${classBadge}`}>{mystatus}</label></td>
                                                    <td className="py-1">
                                                        <img
                                                            src={brand.brand_img ? ServiceImage.imageshow(brand.brand_img) : ServiceImage.imageshow("1594692624651-no-image-available.png")}
                                                            style={{flex: 1,
                                                                width: null, 
                                                                height: "50px", 
                                                                resizeMode: 'contain' }} 
                                                        />

                                                    </td>
                                                    <td className="py-1">{brand.brand_code}</td>
                                                    <td className="py-1">{brand.brand_name}</td>
                                                    {/* <td className="py-1">{brand.brand_banner}</td> */}
                                                    <td className="py-1">{brand.brand_key}</td>
                                                    <td className="py-1">{brand.play_url}</td>
                                                    <td className="py-1" style={{ textAlign: "right" }}>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn-icon-text"
                                                            onClick={() => {
                                                                console.log("Add Game in Brand name:" + brand.brand_name);
                                                                Cookies.set("brand", brand.brand_name);
                                                                Router.push("/game_lists/add");
                                                            }}
                                                            style={{ marginLeft: 5,width: 120 }}
                                                        //onClick={this.onClick}
                                                        >
                                                            Add Game
                                                        </button>&nbsp;
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning btn-icon-text"
                                                            onClick={() => {
                                                                console.log("edit Brand id:" + brand._id);
                                                                Cookies.set("brandId", brand._id);
                                                                Router.push("/game_bands/edit");

                                                            }}
                                                            style={{ width: 80 }}
                                                        //onClick={this.onClick}
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
                                                                            console.log("delete Brand id:" + brand._id);
                                                                            this.deleteBrand(brand._id);
                                                                        })
                                                                    ],
                                                                    bsSize: 'small',
                                                                    onHide: (dialog) => {
                                                                        this.dialog.hide()
                                                                        console.log('closed by clicking background.')
                                                                    }
                                                                })
                                                            }}
                                                            style={{ marginLeft: 5,width: 80 }}
                                                            className="btn btn-danger btn-icon-text"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        }
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