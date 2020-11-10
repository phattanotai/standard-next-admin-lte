import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';

import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies, { getJSON } from "js-cookie";
import { ServiceBrand } from "../../service";
import { ServiceImage } from "../../service";
import { ServiceGameLucky } from "../../service";
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
        ServiceGameLucky.listGameslucky().then((res) => {
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
            contentTitle={'Free Games Setting'}
            
            url={this.props.url}
        >
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        {/* <div className="card-header">
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

                        </div> */}
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
                                                            if (data.agent_code.indexOf(name) !== -1) {
                                                                return data.agent_code.indexOf(name) !== -1;
                                                            } else if (data.agent_name.indexOf(name) !== -1) {
                                                                return data.agent_name.indexOf(name) !== -1;
                                                            } 
                                                        })
                                                    });
                                                    datalength = this.state.rawdata.filter((data) => {
                                                        if (data.agent_code.indexOf(name) !== -1) {
                                                            return data.agent_code.indexOf(name) !== -1;
                                                        } else if (data.agent_name.indexOf(name) !== -1) {
                                                            return data.agent_name.indexOf(name) !== -1;
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
                                        <th width={'18%'}>Url1</th>
                                        <th width={'18%'}>Url2</th>
                                        <th width={'18%'}>Url3</th>
                                        <th width={'18%'}>Url4</th>
                                        <th width={'18%'}>Url5</th>
                                        <th style={{ textAlign: "center" }}>Command</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((game, index) => {
                                        
                                        if (index >= this.state.startrow && index < this.state.endrow) {
                                            //console.log("userid" + user.id);
                                            //let tr_class= 'success';
                                            
                                            return (
                                                <tr key={index}>
                                                    <td className="py-1">{game.play_url1}</td>
                                                    <td className="py-1">{game.play_url2}</td>
                                                    {/* <td className="py-1">{brand.brand_banner}</td> */}
                                                    <td className="py-1">{game.play_url3}</td>
                                                    <td className="py-1">{game.play_url4}</td>
                                                    <td className="py-1">{game.play_url5}</td>
                                                    <td className="py-1" style={{ textAlign: "center" }}>
                                                       {/*  <button
                                                            type="button"
                                                            className="btn btn-info btn-icon-text"
                                                            onClick={() => {
                                                                console.log("Add Game in Brand name:" + brand.brand_name);
                                                                Cookies.set("brand", brand.brand_name);
                                                                Router.push("/game_lists/add");
                                                            }}
                                                            title='Add'
                                                            style={{ marginLeft: 5, width: 45 }}
                                                        >
                                                            <i class="fa fa-plus"></i>
                                                        </button>&nbsp; */}
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning btn-icon-text"
                                                            onClick={() => {
                                                                console.log("edit game id:" + game._id);
                                                                Cookies.set("gameId", game._id);
                                                                Router.push("/game_lucky/edit");

                                                            }}
                                                            title='Edit'
                                                            style={{ marginLeft: 5, width: 45 }}
                                                        >
                                                            <i class="fa fa-edit"></i>
                                                        </button>
                                                        {/* <button
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
                                                            className="btn btn-danger btn-icon-text"
                                                            title='Delete'
                                                            style={{ marginLeft: 5, width: 45 }}
                                                        >
                                                            <i class="fa fa-close"></i>
                                                        </button> */}
                                                    </td>
                                                </tr>
                                            );
                                        }
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