import AdminLayoutHoc from '../components/Layout/AdminLayoutHoc';
import { Pie, Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies, { getJSON } from "js-cookie";
import { ServiceBrand } from "../service";
import { ServiceImage } from "../service";
import Dialog from 'react-bootstrap-dialog';

import { ServiceGameList } from "../service";
import { ServiceAgent } from "../service";
import { ServiceGameService } from "../service";
//import { Image } from "react-native";

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data_brand: [],
            data_game: [],
            data_service: [],
            data_agent: [],
            errorMessage: "",

            startrow: 0,
            endrow: 4,

            rawdata_brand: [],
            rawdata_game: [],
            rawdata_service: [],
            rawdata_agent: [],

            searchtxt1: "",
            searchtxt2: "",
            searchtxt3: "",

            img_width: 80,
            img_height: 80,


            dataPie: {
                labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
                datasets: [
                    {
                        data: [300, 50, 100, 40, 120],
                        backgroundColor: [
                            "#F7464A",
                            "#46BFBD",
                            "#FDB45C",
                            "#949FB1",
                            "#4D5360",
                            "#AC64AD"
                        ],
                        hoverBackgroundColor: [
                            "#FF5A5E",
                            "#5AD3D1",
                            "#FFC870",
                            "#A8B3C5",
                            "#616774",
                            "#DA92DB"
                        ]
                    }
                ]
            },

            dataDoughnut: {
                labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
                datasets: [
                    {
                        data: [300, 50, 100, 40, 120],
                        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                        hoverBackgroundColor: [
                            "#FF5A5E",
                            "#5AD3D1",
                            "#FFC870",
                            "#A8B3C5",
                            "#616774"
                        ]
                    }
                ]
            }
        };
        //this.onClick = this.onClick.bind(this);
        this.onSearchClick1 = this.onSearchClick1.bind(this);
        this.onSearchClick2 = this.onSearchClick2.bind(this);
        this.onSearchClick3 = this.onSearchClick3.bind(this);

        this.setErrorMsg = this.setErrorMsg.bind(this);
    }

    onSearchClick1() {
        var name = this.state.searchtxt1;
        //this.setState({ searchtxt1: e.target.value });
        //console.log(name);
        var datalength = this.state.rawdata_brand.length;
        if (name != "") {
            //console.log('rawdata' + JSON.stringify(this.state.rawdata));
            this.setState({
                data_brand: this.state.rawdata_brand.filter((data) => {
                    return data.brand_name.indexOf(name) !== -1;
                })
            });
            datalength = this.state.rawdata_brand.filter((data) => {
                return data.brand_name.indexOf(name) !== -1;
            }).length;
        } else {
            this.setState({
                data_brand: this.state.rawdata_brand
            });
        }
    }

    onSearchClick2() {
        var name = this.state.searchtxt2;
        //this.setState({ searchtxt1: e.target.value });
        //console.log(name);
        var datalength = this.state.rawdata_game.length;
        if (name != "") {
            //console.log('rawdata' + JSON.stringify(this.state.rawdata));
            this.setState({
                data_game: this.state.rawdata_game.filter((data) => {
                    return data.game_name.indexOf(name) !== -1;
                })
            });
            datalength = this.state.rawdata_game.filter((data) => {
                return data.game_name.indexOf(name) !== -1;
            }).length;
        } else {
            this.setState({
                data_game: this.state.rawdata_game
            });
        }
    }

    onSearchClick3() {
        var name = this.state.searchtxt3;
        //this.setState({ searchtxt1: e.target.value });
        //console.log(name);
        var datalength = this.state.rawdata_agent.length;
        if (name != "") {
            //console.log('rawdata' + JSON.stringify(this.state.rawdata));
            this.setState({
                data_agent: this.state.rawdata_agent.filter((data) => {
                    return data.agent_name.indexOf(name) !== -1;
                })
            });
            datalength = this.state.rawdata_agent.filter((data) => {
                return data.agent_name.indexOf(name) !== -1;
            }).length;
        } else {
            this.setState({
                data_agent: this.state.rawdata_agent
            });
        }
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
                this.setState({ data_brand: data });
                this.setState({ rawdata_brand: data });

            } else {
                this.setErrorMsg(res.data.msg);
            }
        });

        ServiceGameList.listGames().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);
                this.setState({ data_game: data });
                this.setState({ rawdata_game: data });

            } else {
                this.setErrorMsg(res.data.msg);
            }
        });

        ServiceAgent.listAgent().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);
                this.setState({ data_agent: data });
                this.setState({ rawdata_agent: data });

            } else {
                this.setErrorMsg(res.data.msg);
            }
        });
    }

    setErrorMsg(msg) {
        this.setState({ errorMessage: msg });
    }
    render() {
        return <AdminLayoutHoc contentTitle={'Dashboard'} contentTitleButton={<i className="fa fa-2x fa-home" />} url={this.props.url}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header  bg-secondary">
                            <h3 className="card-title">
                                <i className="fa fa-cubes" />&nbsp;Game Brand
                            </h3>
                            <div className="card-tools d-inline-block">
                                <div className="input-group input-group-sm" style={{ width: '100%' }}>
                                    <input type="text" name="table_search"
                                        className="form-control float-right"
                                        placeholder="Search"
                                        onChange={(e) => {
                                            this.setState({ searchtxt1: e.target.value });
                                            var name = e.target.value;
                                            //console.log(name);
                                            var datalength = this.state.rawdata_brand.length;
                                            if (name != "") {
                                                //console.log('rawdata' + JSON.stringify(this.state.rawdata));
                                                this.setState({
                                                    data_brand: this.state.rawdata_brand.filter((data) => {
                                                        return data.brand_name.indexOf(name) !== -1;
                                                    })
                                                });
                                                datalength = this.state.rawdata_brand.filter((data) => {
                                                    return data.brand_name.indexOf(name) !== -1;
                                                }).length;
                                            } else {
                                                this.setState({
                                                    data_brand: this.state.rawdata_brand
                                                });
                                            }
                                        }}
                                        value={this.state.searchtxt1} />
                                    <div className="input-group-append">
                                        <button className="btn btn-default"><i className="fa fa-search" onClick={this.onSearchClick1} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body table-responsive p-0 ">
                            <table className="table table-hover table-striped table-bordered">
                                <thead class="table-dark">
                                    <tr >
                                        <th width={'5%'}>Stauts</th>
                                        <th width={'20%'}>Img</th>
                                        <th width={'20%'}>Code</th>
                                        <th width={'20%'}>Name</th>
                                        {/*  <th>Key</th>
                                        <th>Play URL</th> */}
                                        <th  width={'10%'} style={{ textAlign: "center" }}>Command</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data_brand.map((brand, index) => {
                                        let classBadge = 'danger';
                                        let mystatus = 'disable';
                                        if (brand.brand_status === '1') {
                                            classBadge = 'success';
                                            mystatus = 'enable';
                                        }
                                        if (index >= this.state.startrow && index < this.state.endrow)
                                            //console.log("userid" + user.id);
                                            return (
                                                <tr key={index}>
                                                    <td className="py-1"><label className={`badge badge-${classBadge}`}>{mystatus}</label></td>
                                                    <td className="py-1">
                                                        <img
                                                            src={brand.brand_img ? ServiceImage.imageshow(brand.brand_img) : ServiceImage.imageshow("1594692624651-no-image-available.png")}
                                                            style={{flex: 1,
                                                                width: null, 
                                                                height: "60px", 
                                                                resizeMode: 'contain' }} 
                                                        /> 

                                                        

                                                    </td>
                                                    <td className="py-1">{brand.brand_code}</td>
                                                    <td className="py-1">{brand.brand_name}</td>
                                                    {/* <td className="py-1">{brand.brand_banner}</td>
                                                    <td className="py-1">{brand.brand_key}</td> style={{ width: "80px", height: "80px" }}
                                                    <td className="py-1">{brand.play_url}</td> */}
                                                    <td className="py-1" style={{ textAlign: "center" }}>
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning btn-icon-text"
                                                            onClick={() => {
                                                                console.log("edit Brand id:" + brand._id);
                                                                Cookies.set("brandId", brand._id);
                                                                Router.push("/game_bands/edit");

                                                            }}
                                                            title='Edit'
                                                            style={{  width: 45 }}
                                                            //style={{ width: 100 }}
                                                            //onClick={this.onClick}
                                                        >
                                                            <i class="fa fa-edit"></i>
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

                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header bg-secondary">
                            <h3 className="card-title">
                                <i className="fa fa-bars" />&nbsp;Game List
                            </h3>
                            <div className="card-tools d-inline-block">
                                <div className="input-group input-group-sm" style={{ width: '100%' }}>
                                    <input type="text" name="table_search"
                                        className="form-control float-right"
                                        placeholder="Search"
                                        onChange={(e) => {
                                            this.setState({ searchtxt2: e.target.value });
                                            var name = e.target.value;
                                            //console.log(name);
                                            var datalength = this.state.rawdata_game.length;
                                            if (name != "") {
                                                //console.log('rawdata' + JSON.stringify(this.state.rawdata));
                                                this.setState({
                                                    data_game: this.state.rawdata_game.filter((data) => {
                                                        return data.game_name.indexOf(name) !== -1;
                                                    })
                                                });
                                                datalength = this.state.rawdata_game.filter((data) => {
                                                    return data.game_name.indexOf(name) !== -1;
                                                }).length;
                                            } else {
                                                this.setState({
                                                    data_game: this.state.rawdata_game
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
                        {/* <div className="card-body">
                            <MDBContainer>
                                <h3 className="mt-5">Games</h3>
                                <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
                            </MDBContainer>
                        </div> */}
                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover  table-striped table-bordered">
                                <thead  class="table-dark">
                                    <tr >
                                        <th width={'5%'}>Stauts</th>
                                        <th width={'20%'}>Img</th>
                                        <th width={'20%'}>Code</th>
                                        <th width={'20%'}>Name</th>
                                        <th width={'20%'}>Brand</th>
                                        <th width={'10%'} style={{ textAlign: "center" }}>Command</th>
                                        {/* <th>ID</th>
                                        <th>Type</th>
                                        <th>New</th>
                                        <th>Line</th>
                                        <th style={{ textAlign: "right" }}>Detail / Edit / Delete</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data_game.map((game, index) => {
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
                                                    <td className="py-1"><label className={`badge badge-info`} style={{ display: game.game_new === 'Yes' ? 'block' : 'none' }}>new</label><label className={`badge badge-${classBadge}`} style={{ display: 'block' }}>{mystatus}</label></td>
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
                                                    <td className="py-1">{game.game_brand}</td>
                                                    <td className="py-1" style={{ textAlign: "center" }}>
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning btn-icon-text"
                                                            onClick={() => {
                                                                console.log("edit game id:" + game._id);
                                                                Cookies.set("gameId", game._id);
                                                                Router.push("/game_lists/edit");

                                                            }}
                                                        title='Edit'
                                                        style={{  width: 45 }}
                                                    >
                                                        <i class="fa fa-edit"></i>
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
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header bg-secondary">
                            <h3 className="card-title">
                                <i className="fa fa-id-badge" />&nbsp;Agents
                            </h3>
                            <div className="card-tools d-inline-block">
                                <div className="input-group input-group-sm" style={{ width: '100%' }}>
                                    <input type="text" name="table_search"
                                        className="form-control float-right"
                                        placeholder="Search"
                                        onChange={(e) => {
                                            this.setState({ searchtxt3: e.target.value });
                                            var name = e.target.value;
                                            //console.log(name);
                                            var datalength = this.state.rawdata_agent.length;
                                            if (name != "") {
                                                //console.log('rawdata' + JSON.stringify(this.state.rawdata));
                                                this.setState({
                                                    data_agent: this.state.rawdata_agent.filter((data) => {
                                                        return data.agent_name.indexOf(name) !== -1;
                                                    })
                                                });
                                                datalength = this.state.rawdata_agent.filter((data) => {
                                                    return data.agent_name.indexOf(name) !== -1;
                                                }).length;
                                            } else {
                                                this.setState({
                                                    data_agent: this.state.rawdata_agent
                                                });
                                            }
                                        }}
                                        value={this.state.searchtxt3} />
                                    <div className="input-group-append">
                                        <button className="btn btn-default"><i className="fa fa-search" onClick={this.onSearchClick3} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="card-body">
                            <MDBContainer>
                                <h3 className="mt-5">Agents</h3>
                                <Pie data={this.state.dataPie} options={{ responsive: true }} />
                            </MDBContainer>
                        </div> */}

                        <div className="card-body table-responsive p-0">
                            <table className="table table-hover  table-striped table-bordered">
                                <thead  class="table-dark">
                                    <tr >
                                        <th width={'5%'}>Stauts</th>
                                        <th width={'20%'}>Code</th>
                                        <th width={'20%'}>Name</th>
                                        <th width={'20%'}>LineUp</th>
                                        <th width={'10%'}>Type</th>
                                        <th width={'10%'} style={{ textAlign: "center" }}>Command</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data_agent.map((agent, index) => {
                                        let classBadge = 'danger';
                                        let mystatus = 'disable';
                                        if (agent.agent_status === '1') {
                                            classBadge = 'success';
                                            mystatus = 'enable';
                                        }
                                        if (index >= this.state.startrow && index < this.state.endrow)
                                            return (
                                                <tr key={index}>
                                                    <td className="py-1"><label className={`badge badge-${classBadge}`}>{mystatus}</label></td>
                                                    <td className="py-1">{agent.agent_code}</td>
                                                    <td className="py-1">{agent.agent_name}</td>
                                                    <td className="py-1">{agent.agent_lineup}</td>
                                                    <td className="py-1">{agent.agent_type}</td>
                                                    <td className="py-1" style={{ textAlign: "center" }}>
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning btn-icon-text"
                                                            onClick={() => {
                                                                console.log("edit agent id" + agent._id);
                                                                Cookies.set("agentid", agent._id);
                                                                Router.push("/agents/edit");

                                                            }}
                                                            title='Edit'
                                                            style={{  width: 45 }}
                                                        >
                                                            <i class="fa fa-edit"></i>
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
            </div>


        </AdminLayoutHoc>
    }

}


