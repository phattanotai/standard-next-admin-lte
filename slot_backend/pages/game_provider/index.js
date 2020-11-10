import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';

import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies, { getJSON, set } from "js-cookie";
import { ServiceGameList } from "../../service";
import { ServiceImage } from "../../service";
import { ServiceBrand } from "../../service";
import { ServiceGameProvider } from "../../service";
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

            data_brand: [],
            brand: "QTech",

        };
        this.deleteGame = this.deleteGame.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.handleSelectRowPerPageChange = this.handleSelectRowPerPageChange.bind(this);
        this.handleSelectPageNumberChange = this.handleSelectPageNumberChange.bind(this);

        this.handleSelectBrandChange = this.handleSelectBrandChange.bind(this);

    }    

    deleteGame(id) {
        if (this.state.errorMessage) this.setErrorMsg("");
        try {
            ServiceGameProvider.deleteGames(id).then(res => {
                console.log('res.data : ' + res.data);
                if (res.data.status === 2000) {
                    console.log('delete brand successfully.');
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
                   /*  ServiceGameProvider.listGames().then((res) => {
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
                    }); */
                } else {
                    this.setErrorMsg(res.data.message);
                    //this.dialog.showAlert(res.data.message);
                }
            })
            
        } catch (error) {
            console.error("An unexpected error happened occurred:", error);
            this.setErrorMsg(error.message);
            //this.dialog.showAlert(error);
        }
    }    

    componentDidMount() {
        if (!Cookies.get("user")) {
            Router.push("/");
        }

        //var b = "";
        /* ServiceBrand.listBrands().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);
                this.setState({ data_brand: data });
                b = this.SearchBrand2(Cookies.get("brand"),data);
                if (Cookies.get("brand")) {
                    //console.log("have brand");
                    let mycookie = Cookies.get("brand");
                    this.setState({brand: mycookie,brand_name: mycookie});
                    console.log("have brand : " + mycookie);
                    console.log("brand code: " + b );
                    ServiceGameList.listGamesFromBrand(b).then((res) => {
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
                    ServiceGameList.listGames().then((res) => {
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
            } else {
                this.setErrorMsg(res.data.msg);
            }
        }); */
        ServiceGameProvider.listGames().then((res) => {
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

    SearchBrand2(brandname,data_brand) {
        console.log('get brand code');
        const brands = data_brand.filter((brand) => {
            return brand.brand_name == brandname;
        })

        const brand_code = brands.map((brand, index) => {
            return brand.brand_code;
        })

        return brand_code[0];
    }

    handleSelectBrandChange(e) {
        e.preventDefault();
        console.log('e.target.value =>' + e.target.value);
        this.setState({ brand: e.target.value });
        if (e.target.value !== 'All') {
            Cookies.set("brand", e.target.value);
            ServiceGameList.listGamesFromBrand(this.SearchBrand(e.target.value)).then((res) => {
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
            Cookies.remove('brand');
            ServiceGameList.listGames().then((res) => {
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

    render() {
        return <AdminLayoutHoc
            contentTitle={'Game Provider'}
            contentTitleButton={<Link href="/game_provider/add">
                <button type="button" className="btn btn-outline-success btn-sm"><i className="fa fa fa-navicon fa-fw" />Add a new game</button>
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
                                                                return data.game_name.indexOf(name) !== -1;
                                                            })
                                                        });
                                                        datalength = this.state.rawdata.filter((data) => {
                                                            return data.game_name.indexOf(name) !== -1;
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
                                                            if (data.game_code.indexOf(name) !== -1) {
                                                                return data.game_code.indexOf(name) !== -1;
                                                            } else if (data.game_name.indexOf(name) !== -1) {
                                                                return data.game_name.indexOf(name) !== -1;
                                                            } 
                                                        })
                                                    });
                                                    datalength = this.state.rawdata.filter((data) => {
                                                        if (data.game_code.indexOf(name) !== -1) {
                                                            return data.game_code.indexOf(name) !== -1;
                                                        } else if (data.game_name.indexOf(name) !== -1) {
                                                            return data.game_name.indexOf(name) !== -1;
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
                                    <tr>
                                        <th width={'5%'}>Stauts</th>
                                        {/* <th width={'5%'}>New</th> */}
                                        <th width={'20%'}>Img</th>
                                        <th width={'20%'}>Code</th>
                                        <th width={'20%'}>Name</th>                                                                                                                    
                                        <th style={{ textAlign: "center" }}>Command</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((game, index) => {
                                        let classBadge = 'danger';
                                        let classBadge2 = 'danger';
                                        let mystatus = 'disable';
                                        if (game.game_status == 1) {
                                            classBadge = 'success';
                                            mystatus = 'enable';
                                        }
                                        if (game.game_new == 'Yes') {
                                            classBadge2 = 'success';
                                        }
                                        if (index >= this.state.startrow && index < this.state.endrow)
                                            //console.log("userid" + user.id);
                                            return (
                                                <tr key={index}>
                                                    <td className="py-1"><label className={`badge badge-${classBadge}`}  style={{ display: 'block' }}>{mystatus}</label></td>
                                                    {/* <td className="py-1"><label className={`badge badge-${classBadge2}`} style={{ display: 'block' }}>{game.game_new}</label></td> */}
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
                                                    <td className="py-1" style={{ textAlign: "center" }}>
                                                        {/* <button
                                                            type="button"
                                                            className="btn btn-success btn-icon-text"
                                                            onClick={() => {
                                                                console.log("Detail game id:" + game._id);
                                                                Cookies.set("gameId", game._id);
                                                                Router.push("/game_lists/description");
                                                            }}
                                                            title='Detail'
                                                            style={{ width: 45 }}
                                                        
                                                        >
                                                            <i class="fa fa-eye"></i>
                                                        </button>&nbsp; */}
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning btn-icon-text"
                                                            onClick={() => {
                                                                console.log("edit game id:" + game._id);
                                                                Cookies.set("gameId", game._id);
                                                                Router.push("/game_provider/edit");

                                                            }}
                                                            title='Edit'
                                                            style={{  width: 45 }}
                                                            //style={{ width: 100 }}
                                                            //onClick={this.onClick}
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
                                                                            console.log("delete Game id:" + game._id);
                                                                            this.deleteGame(game._id);
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
                                                            style={{ marginLeft: 5,  width: 45 }}
                                                            //style={{ width: 100 }}
                                                            //onClick={this.onClick}
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