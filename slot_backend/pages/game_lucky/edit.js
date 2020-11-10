import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect, Component } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceBrand } from "../../service";
import { ServiceImage } from "../../service";
import { ServiceGameLucky } from "../../service";

import Dialog from 'react-bootstrap-dialog';
import FilesUploadComponent from '../../components/files-upload-component';

export default class EditBrand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //auth: { username: "", password: "", role: "3", rolename: "User" },
            brand_code: "",
            brand_name: "",
            brand_banner: "",
            brand_key: "",
            brand_img: "",
            original_brand_img: "",
            brand_status: "", //1=enable , 0=disable
            play_url1: "",
            play_url2: "",
            play_url3: "",
            play_url4: "",
            play_url5: "",
            switch1: true,

            errorMessage: "",
            datas: [],
            role_data: [],
            mydatas: {},
            value: "Master",

            image: "",
            imagePreviewUrl: ServiceImage.imageshow("1594692624651-no-image-available.png"),
            file: "",
            gameId: Cookies.get("gameId"),
        };

        this.onFileChange = this.onFileChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this)

        this.handleResetSubmit = this.handleResetSubmit.bind(this);
        this.onSearchLevel = this.onSearchLevel.bind(this);
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

    onSearchLevel(level_name) {
        console.log('get myrole');
        const myrole = this.state.role_data.filter((role) => {
            return role.user_level_name == level_name;
        })

        const user_level_id = myrole.map((role, index) => {
            return role.user_level_id
        })
        return user_level_id[0];
    }

    handleSwitchChange = nr => () => {
        let switchNumber = `switch${nr}`;
        this.setState({
            [switchNumber]: !this.state[switchNumber]
        });
    }

    onClick() {
        this.dialog.showAlert('Hello Dialog!')
    }

    handleResetSubmit() {
        Router.push("/game_lucky");
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

    async EditFreeGames() {
        const a = {
            play_url1: this.state.play_url1, play_url2: this.state.play_url2,
            play_url3: this.state.play_url3, play_url4: this.state.play_url4, play_url5: this.state.play_url5,
        };
        console.log('Edit Free game start...');
        const res2 = await ServiceGameLucky.editGameslucky(a, this.state.gameId);
        console.log('res : ' + res2.data);
        if (res2.data.status === 2000) {
            console.log('Edit Free game Success!!!');
            this.dialog.show({
                title: 'Slot Admin information',
                body: 'บันทึกการแก้ไข Free Game เรียบร้อยแล้ว',
                actions: [
                    Dialog.OKAction(() => {
                        Router.push("/game_lucky");
                    })
                ]
            })
        } else {
            this.dialog.showAlert(res2.data.message);
            this.setErrorMsg(res2.data.msg);
        }
    }

    async handleSubmit() {
        try {
            
            this.EditFreeGames();

        } catch (error) {
            //this.dialog.showAlert(error);
            console.error("An unexpected error happened occurred:", error);
            this.setErrorMsg(error.message);
        }
        //e.preventDefault();
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

        ServiceGameLucky.getGamesluckyFromId(this.state.gameId).then((res) => {
            //console.log("res data=>" + res.data);
            const { data, status } = res.data;
            //console.log("status=>" + status);
            if (status === 2000) {
                console.log("edit data =>" + JSON.stringify(data));
                const { play_url1, play_url2, play_url3, play_url4, play_url5 } = data[0];
               
                this.setState({
                    play_url1: play_url1, play_url2: play_url2, play_url3: play_url3,
                    play_url4: play_url4, play_url5: play_url5
                });

            } else {
                this.setErrorMsg(res.data.message);
                this.dialog.showAlert(res.data.message);
            }
        });
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

        return <AdminLayoutHoc contentTitle={'Edit Free Games'} contentTitleButton={<i className="fa fa-2x fa-gamepad" />} url={this.props.url}>
            <div className="offset-md-0">
                <div className="card mt-2">
                <form className="form-horizontal">
                        <div className="card-body">
                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-3">
                                    <span className="input-group-text bg-dark col-12">play_url1</span>
                                </div>
                                <input type="text" className="form-control"
                                    //placeholder="brand code"
                                    id="validation-ex1"
                                    onChange={(e) => this.setState({ play_url1: e.target.value })}
                                    value={this.state.play_url1}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-3">
                                    <span className="input-group-text bg-dark col-12">play_url2</span>
                                </div>
                                <input type="text" className="form-control"
                                    //placeholder="brand code"
                                    id="validation-ex1"
                                    onChange={(e) => this.setState({ play_url2: e.target.value })}
                                    value={this.state.play_url2}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-3">
                                    <span className="input-group-text bg-dark col-12">play_url3</span>
                                </div>
                                <input type="text" className="form-control"
                                    //placeholder="brand code"
                                    id="validation-ex1"
                                    onChange={(e) => this.setState({ play_url3: e.target.value })}
                                    value={this.state.play_url3}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-3">
                                    <span className="input-group-text bg-dark col-12">play_url4</span>
                                </div>
                                <input type="text" className="form-control"
                                    //placeholder="brand code"
                                    id="validation-ex1"
                                    onChange={(e) => this.setState({ play_url4: e.target.value })}
                                    value={this.state.play_url4}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend col-3">
                                    <span className="input-group-text bg-dark col-12">play_url5</span>
                                </div>
                                <input type="text" className="form-control"
                                    //placeholder="brand code"
                                    id="validation-ex1"
                                    onChange={(e) => this.setState({ play_url5: e.target.value })}
                                    value={this.state.play_url5}
                                    required />
                            </div>

                        </div>
                    </form>

                    <div className="card-footer">
                        <div className="d-inline-block btn-block">
                            <button className="btn btn-danger" onClick={this.handleResetSubmit} title='Back' style={{ width: 45 }}><i class="fa fa-mail-reply"></i></button>
                            <button className="btn btn-info float-right" onClick={this.handleSubmit} title='Save' style={{ marginLeft: 5, width: 45 }}><i class="fa fa-floppy-o"></i></button>
                        </div>
                    </div>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>
        </AdminLayoutHoc>
    }
}