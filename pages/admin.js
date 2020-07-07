//import "../styles/styles.scss"
import AdminLayoutHoc from '../components/Layout/AdminLayoutHoc';

import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";
import { ServiceWeb } from "../service";
//import '../styles/styles.scss';
import Dialog from 'react-bootstrap-dialog';

import { MDBContainer } from 'mdbreact';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: Cookies.get("user"),
            timecount:0,
            endtimecount:0,

            isLoading: true,
            datas: [],
            rawdata: [],
            errorMessage: "",

            pagetotal: 0,
            pagenumber: 0,
            recordtotal: 0,
            rowperpage: 5,
            pagearr: [],
            startrow: 0,
            endrow: 0,
            searchtxt: "",
            

        };

        this.deleteUser = this.deleteUser.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);

        this.handleSelectRowPerPageChange = this.handleSelectRowPerPageChange.bind(this);
        this.handleSelectPageNumberChange = this.handleSelectPageNumberChange.bind(this);


        this.onSearchClick = this.onSearchClick.bind(this);
    }
    onClick() {
        //this.dialog.showAlert('Hello Dialog!')
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

    async deleteUser(id) {
        if (this.state.errorMessage) this.setErrorMsg("");
        try {
            const res = await ServiceMobile.deleteMobile(id);
            if (res.data.status === 2000) {
                this.setState({
                    datas: this.state.datas.filter((data) => {
                        return user.postId !== id;
                    })
                });
                this.setState({
                    rawdata: this.state.rawdata.filter((data) => {
                        return data.postId !== id;
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
                datas: this.state.rawdata.filter((data) => {
                    return data.web_name.indexOf(name) !== -1;
                })
            });
            datalength = this.state.rawdata.filter((user) => {
                return data.web_name.indexOf(name) !== -1;
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

        this.setState({endtimecount:1000});

        /* setInterval( () => {
            console.log('re-render');
            console.log(this.state.timecount);
              this.setState({timecount: this.state.timecount+1});
            if (this.state.timecount == this.state.endtimecount) {
                ServiceWeb.listHistory().then((res) => {
                    console.log(res.data);
                    const { data, status } = res.data;
                    if (status === 2000) {
                        console.log("data length : " + data.length);
        
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
          }, 1000) */

          ServiceWeb.listHistory().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);

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


    /* componentDidMount() {
        //console.log("admin page : " + this.state.username);
        if (!Cookies.get("user")) {
            Router.push("/");
        }
    } */
    render() {
        return <AdminLayoutHoc contentTitle={'DashBoard'} contentTitleButton={<i className="fa fa-2x fa-home" />} url={this.props.url}>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <MDBContainer>
                                <div className="wrapper">
                                    <div className="w-auto h-25 p-3  d-inline-block">
                                        Row per page
                                        <select id="select-1" className="form-control" value={this.state.rowperpage} onChange={this.handleSelectRowPerPageChange}>
                                            <option value='5'>5</option>
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
                                        <div className="input-group input-group-sm ml-30" style={{ width: '100%' }}>
                                            <input type="text" name="table_search"
                                                className="form-control float-right"
                                                placeholder="Search"
                                                onChange={(e) => {
                                                    this.setState({ searchtxt: e.target.value });
                                                    var name = e.target.value;
                                                    var datalength = this.state.rawdata.length;
                                                    if (name != "") {
                                                        this.setState({
                                                            datas: this.state.rawdata.filter((data) => {
                                                                return data.web_name.indexOf(name) !== -1;
                                                            })
                                                        });
                                                        datalength = this.state.rawdata.filter((data) => {
                                                            return data.web_name.indexOf(name) !== -1;
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
                            <table className="table table-hover">
                                <thead>
                                    <tr >
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>URL</th>
                                        <th>API</th>
                                        <th>Message</th>
                                        <th>UserFake</th>
                                        <th>Mobile</th>                                        
                                        <th>CREATE AT</th>
                                        <th style={{ textAlign: "right" }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.datas.map((data, index) => {
                                        let status = 'pending';
                                        let classBadge = 'danger';
                                        if (data.status === '2') {
                                            classBadge = 'success'
                                            status = 'success'
                                        }
                                        if (index >= this.state.startrow && index < this.state.endrow)
                                            //console.log("userid" + user.id);
                                            return (
                                                <tr key={index}>
                                                    <td className="py-1">{data.id}</td>
                                                    <td className="py-1"><label className={`badge badge-${classBadge}`}>{status}</label> {data.web_name}</td>
                                                    <td className="py-1">{data.url}</td>
                                                    <td className="py-1">{data.api}</td>
                                                    <td className="py-1">{data.message}</td>
                                                    <td className="py-1">{data.userFake}</td>
                                                    <td className="py-1">{data.ref}</td>
                                                    <td className="py-1">{data.created_at}</td>
                                                    <td className="py-1" style={{ textAlign: "right" }}>
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning btn-icon-text"
                                                            onClick={() => {
                                                                /* Router.push({
                                                                    pathname: "/user/edit",
                                                                    query: { id_query: user.id, username_query: user.username, role_query: user.role, rolename_query: user.rolename },
                                                                }); */
                                                                console.log("Description hisId" + data.id);
                                                                Cookies.set("hisId", data.id);
                                                                Router.push("/description");

                                                            }}

                                                        //onClick={this.onClick}
                                                        >
                                                            Description
                                                        </button>
                                                        {/* <button
                                                            type="button"
                                                            onClick={() => {
                                                                this.dialog.show({
                                                                    title: 'Spiderbot confirm',
                                                                    body: 'Are you sure?',
                                                                    actions: [
                                                                        Dialog.CancelAction(() => {
                                                                            this.dialog.hide();
                                                                        }),
                                                                        Dialog.OKAction(() => {
                                                                            console.log("delete userid" + user.id);
                                                                            this.deleteUser(user.id);
                                                                        })
                                                                    ],
                                                                    bsSize: 'small',
                                                                    onHide: (dialog) => {
                                                                        this.dialog.hide()
                                                                        console.log('closed by clicking background.')
                                                                    }
                                                                })
                                                            }}
                                                            style={{ marginLeft: 5 }}
                                                            className="btn btn-danger btn-icon-text"
                                                        >
                                                            Delete
                                                        </button> */}
                                                    </td>
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
            {/* <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fa fa-text-width"/>&nbsp;Headlines
                            </h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                    <i className="fa fa-minus"/>
                                </button>
                                <button type="button" className="btn btn-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                    <i className="fa fa-times"/>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <h1>h1. Bootstrap heading</h1>
                            <h2>h2. Bootstrap heading</h2>
                            <h3>h3. Bootstrap heading</h3>
                            <h4>h4. Bootstrap heading</h4>
                            <h5>h5. Bootstrap heading</h5>
                            <h6>h6. Bootstrap heading</h6>
                        </div>
                        <div className="card-footer text-right text-muted">
                            <small>Card Footer</small>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fa fa-text-width"/>&nbsp;Text Emphasis
                            </h3>
                        </div>
                        <div className="card-body">
                            <p className="lead">Lead to emphasize importance</p>
                            <p className="text-success">Text green to emphasize success</p>
                            <p className="text-info">Text aqua to emphasize info</p>
                            <p className="text-primary">Text light blue to emphasize info (2)</p>
                            <p className="text-danger">Text red to emphasize danger</p>
                            <p className="text-warning">Text yellow to emphasize warning</p>
                            <p className="text-muted">Text muted to emphasize general</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fa fa-text-width"/>&nbsp;Description
                            </h3>
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt>Euismod</dt>
                                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                <dt>Malesuada porta</dt>
                                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fa fa-text-width"/>&nbsp;Description Horizontal
                            </h3>
                        </div>
                        <div className="card-body">
                            <dl className="dl-horizontal">
                                <dt>Description lists</dt>
                                <dd>A description list is perfect for defining terms.</dd>
                                <dt>Euismod</dt>
                                <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                <dt>Felis euismod semper eget lacinia</dt>
                                <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                                    sit amet risus.
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <div className="card card-default color-palette-box">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fa fa-tag"/>&nbsp;Color Palette
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-4 col-md-2">
                                    <h4 className="text-center">Primary</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-primary disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-primary color-palette"><span>#3c8dbc</span></div>
                                    </div>
                                </div>

                                <div className="col-sm-4 col-md-2">
                                    <h4 className="text-center">Info</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-info disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-info color-palette"><span>#00c0ef</span></div>
                                    </div>
                                </div>

                                <div className="col-sm-4 col-md-2">
                                    <h4 className="text-center">Success</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-success disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-success color-palette"><span>#00a65a</span></div>
                                    </div>
                                </div>

                                <div className="col-sm-4 col-md-2">
                                    <h4 className="text-center">Warning</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-warning disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-warning color-palette"><span>#f39c12</span></div>
                                    </div>
                                </div>

                                <div className="col-sm-4 col-md-2">
                                    <h4 className="text-center">Danger</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-danger disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-danger color-palette"><span>#f56954</span></div>
                                    </div>
                                </div>

                                <div className="col-sm-4 col-md-1">
                                    <h4 className="text-center">Gray</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-gray disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-gray color-palette"><span>#d2d6de</span></div>
                                    </div>
                                </div>

                                <div className="col-sm-4 col-md-1">
                                    <h4 className="text-center">Black</h4>

                                    <div className="color-palette-set">
                                        <div className="bg-black disabled color-palette"><span>Disabled</span></div>
                                        <div className="bg-black color-palette"><span>#111111</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </AdminLayoutHoc>
    }
}