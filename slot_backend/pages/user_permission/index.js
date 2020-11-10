import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';

import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies, { getJSON } from "js-cookie";
import { ServiceUser } from "../../service/";
//import '../../styles/styles.scss';
import Dialog from 'react-bootstrap-dialog';

import { MDBContainer } from 'mdbreact';
import { route } from "next/dist/next-server/server/router";

export default class UserPermission extends React.Component {
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
            role: "",

            data2: [],
            rawdata2: [],
            searchtxt2: "",
            switch_arr: [],
            uid: "1",
            upermiss: "1-1-1-1-1-1-1",
            u_id: "",

        };
        //this.deleteUser = this.deleteUser.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);

        this.handleSwitchChange = this.handleSwitchChange.bind(this);


        this.onSearchClick = this.onSearchClick.bind(this);

        this.onSearchClick2 = this.onSearchClick2.bind(this);

        this.onSearchLevel = this.onSearchLevel.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit() {
        try {

            let agent_status = 0;
            if (this.state.switch1) {
                agent_status = 1;
            }
            var arr = this.state.switch_arr;
            var i;
            var permiss = "";
            for (i = 0; i < arr.length; i++) {
                if (i == 0) {
                    if (arr[i]) {
                        permiss = '1';
                    } else {
                        permiss = '0';
                    }

                } else {
                    if (arr[i]) {
                        permiss += '-1';
                    } else {
                        permiss += '-0';
                    }

                }
            }
            const a = { user_level_permission: permiss };
            console.log('permission : ' + permiss);
            const res = await ServiceUser.editSystemRole(a, this.state.u_id);
            console.log('res : ' + res.data);
            if (res.data.status === 2000) {
                console.log('Edit Permissin Success!!!');
                //const mydata = ths.state.data;
                this.dialog.show({
                    title: 'Slot Admin information',
                    body: 'Edit a permission : ' + this.state.role + ' is successfully.',
                    actions: [
                        Dialog.OKAction(() => {
                            ServiceUser.listSystemRole().then((res) => {
                                console.log(res.data);
                                const { data, status } = res.data;
                                if (status === 2000) {
                                    console.log("data length : " + data.length);
                                    this.setState({ data: data });
                                    this.setState({ rawdata: data });                                  
                    
                                } else {
                                    this.setErrorMsg(res.data.msg);
                                }
                            });
                        })
                    ]
                })
            } else {
                this.dialog.showAlert(res.data.message);
                this.setErrorMsg(res.data.msg);
            }



        } catch (error) {
            this.dialog.showAlert(error);
            console.error("An unexpected error happened occurred:", error);
            this.setErrorMsg(error.message);
        }
        //e.preventDefault();
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

    handleSwitchChange = nr => () => {
        //Cookies.set('service_index', nr);
        const ind = nr;
        //Cookies.remove('service_index');
        console.log('ind=>' + ind);
        var arr = this.state.switch_arr;
        arr[ind] = !arr[ind];
        this.setState({ switch_arr: arr });
        console.log('handleSwitchChange=>' + arr);
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
        //Router.push("/user_permission/add");
    }

    

    async ShowPermission() {
        if (this.state.errorMessage) this.setErrorMsg("");
        try {
            const res = await ServiceUser.listMenu();
            const { data, status } = res.data;
            if (res.data.status === 2000) {
                this.setState({ data2: data });
                this.setState({ rawdata2: data });
                var str = this.state.upermiss;
                console.log('str:' + str);
                var perm_arr = [];
                if (str) {
                    perm_arr = str.split('-');

                } else {
                    var i;
                    for (i = 0; i < data.length; i++) {
                        perm_arr.push(0);
                    }
                    //perm_arr =[]
                }
                console.log('perm_arr:' + perm_arr);

                var sw_arr = [];
                var j;
                for (j = 0; j < perm_arr.length; j++) {
                    const ser_status = perm_arr[j];
                    if (ser_status == '1') {
                        sw_arr.push(true);
                    } else {
                        sw_arr.push(false);
                    }
                }
                console.log('sw_arr : ' + sw_arr);
                this.setState({ switch_arr: sw_arr });
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
                data: this.state.rawdata.filter((data) => {
                    return data.user_level_name.indexOf(name) !== -1;
                })
            });
            datalength = this.state.rawdata.filter((data) => {
                return data.user_level_name.indexOf(name) !== -1;
            }).length;
        } else {
            this.setState({
                data: this.state.rawdata
            });
        }

    }

    onSearchClick2() {
        var name = this.state.searchtxt2;
        var datalength = this.state.rawdata2.length;
        if (name != "") {
            this.setState({
                data: this.state.rawdata2.filter((data) => {
                    return data.menu_name.indexOf(name) !== -1;
                })
            });
            datalength = this.state.rawdata2.filter((data) => {
                return data.menu_name.indexOf(name) !== -1;
            }).length;
        } else {
            this.setState({
                data2: this.state.rawdata2
            });
        }
    }

    componentDidMount() {
        if (!Cookies.get("user")) {
            Router.push("/");
        }
        ServiceUser.listSystemRole().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);
                this.setState({ data: data });
                this.setState({ rawdata: data });

                var i;
                var _id  = '';
                for (i = 0; i < data.length; i++) {
                    if (data[i].user_level_name == 'Admin') _id=data[i]._id;
                }
                                
                console.log('u_id' + _id);
                this.setState({ role: "Admin", u_id: _id });
                this.ShowPermission();

            } else {
                this.setErrorMsg(res.data.msg);
            }
        });
    }

    setErrorMsg(msg) {
        this.setState({ errorMessage: msg });
    }



    render() {
        return <AdminLayoutHoc
            contentTitle={'Users'}
            contentTitleButton={<Link href="/users/add">
                <button type="button" className="btn btn-outline-success btn-sm"><i className="fa fa-user-plus fa-fw" /> Add a new user</button>
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
                                                            data: this.state.rawdata.filter((user) => {
                                                                return user.user_name.indexOf(name) !== -1;
                                                            })
                                                        });
                                                        datalength = this.state.rawdata.filter((user) => {
                                                            return user.user_name.indexOf(name) !== -1;
                                                        }).length;
                                                    } else {
                                                        this.setState({
                                                            data: this.state.rawdata
                                                        });
                                                    }
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
                                        <th>User role id</th>
                                        <th>User role name</th>
                                        <th style={{ textAlign: "right" }}>Edit Permission</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((user, index) => {

                                        if (user)
                                            //console.log("userid" + user.id);
                                            return (
                                                <tr key={index}>
                                                    <td className="py-1">{user.user_level_id}</td>
                                                    <td className="py-1">{user.user_level_name}</td>
                                                    <td className="py-1" style={{ textAlign: "right" }}>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn-icon-text"
                                                            onClick={() => {
                                                                /* console.log("edit userid" + user._id);
                                                                Cookies.set("userid", user._id);
                                                                Router.push("/users/edit"); */
                                                                Cookies.set("userid", user._id);
                                                                //Cookies.set("user_level_name", user.user_level_name);
                                                                console.log('user_level_permission : ' + user.user_level_permission);
                                                                this.setState({ role: user.user_level_name, upermiss: user.user_level_permission, u_id: user._id });


                                                                //Cookies.set("userpermission", user.user_level_permission);
                                                                this.ShowPermission();
                                                            }}

                                                        >
                                                            Edit Permission
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
                                    <h4>User Permission : {this.state.role}</h4>
                                    <div className="card-tools d-inline-block">
                                        <div className="input-group input-group-sm" style={{ width: '100%' }}>
                                            <input type="text" name="table_search"
                                                className="form-control float-right"
                                                placeholder="Search menu name"
                                                onChange={(e) => {
                                                    this.setState({ searchtxt2: e.target.value });
                                                    var name = e.target.value;
                                                    var datalength = this.state.rawdata2.length;
                                                    if (name != "") {
                                                        this.setState({
                                                            data2: this.state.rawdata2.filter((data) => {
                                                                return data.menu_name.indexOf(name) !== -1 || data.game_code.indexOf(name) !== -1;
                                                            })
                                                        });
                                                        datalength = this.state.rawdata2.filter((data) => {
                                                            return data.menu_name.indexOf(name) !== -1 || data.game_code.indexOf(name) !== -1;
                                                        }).length;
                                                    } else {
                                                        this.setState({
                                                            data2: this.state.rawdata2
                                                        });
                                                    }
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
                            <table className="table table-hover  table-striped table-bordered">
                                <thead>
                                    <tr >
                                        <th>Menu</th>
                                        <th>Permission</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data2.map((menu, index) => {
                                        if (menu)
                                            //console.log("userid" + user.id);
                                            return (
                                                <tr key={index}>

                                                    <td className="py-1">{menu.menu_name}</td>
                                                    <td className="py-1">
                                                        <label class="switch">
                                                            <input type="checkbox" onChange={this.handleSwitchChange(index)} checked={this.state.switch_arr[index]} />
                                                            <span class="slider round"></span>
                                                        </label>
                                                        <label className="control-label">&nbsp;Enable</label>
                                                    </td>

                                                </tr>
                                            );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer" style={{ display: this.state.data2 ? 'block' : 'none' }}>
                            <div className="d-inline-block btn-block">
                                <button className="btn btn-info float-right" onClick={this.handleSubmit}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Dialog ref={(el) => { this.dialog = el }} />
            </div>

        </AdminLayoutHoc>
    }
} 