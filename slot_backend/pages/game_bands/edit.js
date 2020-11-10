import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect, Component } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceBrand } from "../../service";
import { ServiceImage } from "../../service";

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
            play_url: "",
            switch1: true,

            errorMessage: "",
            datas: [],
            role_data: [],
            mydatas: {},
            value: "Master",

            image: "",
            imagePreviewUrl: ServiceImage.imageshow("1594692624651-no-image-available.png"),
            file: "",
            Brandid: Cookies.get("brandId"),
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
        Router.push("/game_bands");
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

    async EditBrand() {
        let brand_status = 0;
        if (this.state.switch1) {
            brand_status = 1;
        }
        const a = {
            brand_code: this.state.brand_code, brand_name: this.state.brand_name,
            brand_banner: this.state.brand_img, brand_key: this.state.brand_key, brand_img: this.state.brand_img,
            brand_status: brand_status, play_url: this.state.play_url, original_brand_img: this.state.original_brand_img
        };
        console.log('Add brand start...');
        const res2 = await ServiceBrand.editBrands(a, this.state.Brandid);
        console.log('res : ' + res2.data);
        if (res2.data.status === 2000) {
            console.log('Edit Brand Success!!!');
            this.dialog.show({
                title: 'Slot Admin information',
                body: 'บันทึกการแก้ไข brand : ' + this.state.brand_name + ' เรียบร้อยแล้ว',
                actions: [
                    Dialog.OKAction(() => {
                        Router.push("/game_bands");
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
            if (this.state.brand_code !== "" && this.state.brand_name !== "" && this.state.brand_key !== "") {
                if (this.state.file) {
                    const formData = new FormData();
                    formData.append('file', this.state.file);
                    const res = await ServiceImage.imageUpload(formData);
                    if (res.data.status === 2000) {
                        const { filename } = res.data.data;
                        console.log('image file name : ' + filename);
                        this.setState({ brand_img: filename });
                        this.EditBrand();
                    } else {
                        this.dialog.showAlert('บันทึกข้อมูล Brand ไม่สำเร็จ กรุณาตรวจสอบข้อมูลบันทึกใหม่อีกครั้ง!!!');
                    }
                } else {
                    this.EditBrand();
                }
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

        console.log("Brand id =>" + this.state.Brandid);
        ServiceBrand.getBrandsFromId(this.state.Brandid).then((res) => {
            //console.log("res data=>" + res.data);
            const { data, status } = res.data;
            //console.log("status=>" + status);
            if (status === 2000) {
                console.log("edit data =>" + JSON.stringify(data));
                const { brand_name, brand_code, brand_banner, brand_key, brand_img, brand_status, play_url } = data[0];
                if (brand_img !== '') {
                    this.setState({ imagePreviewUrl: ServiceImage.imageshow(brand_img) });
                } else {
                    this.setState({ imagePreviewUrl: ServiceImage.imageshow("1594692624651-no-image-available.png") });
                }

                this.setState({
                    brand_name: brand_name, brand_code: brand_code, brand_banner: brand_banner,
                    brand_key: brand_key, play_url: play_url, brand_img: brand_img, original_brand_img: brand_img,
                    switch1: Boolean(Number(brand_status))
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

        return <AdminLayoutHoc contentTitle={'Edit Brand'} contentTitleButton={<i className="fa fa-2x fa-cubes" />} url={this.props.url}>
            <div className="offset-md-0">
                <div className="card">
                    <div className="card-header">
                        {/* <h3 className="card-title">New User Form</h3> */}
                    </div>
                    <form className="form-horizontal">
                        <div className="card-body">
                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">brand code</span>
                                </div>
                                <input type="text" className="form-control"
                                    ////placeholder="brand code"
                                    id="validation-ex1"
                                    onChange={(e) => this.setState({ brand_code: e.target.value })}
                                    value={this.state.brand_code}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">brand name</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex2"
                                    ////placeholder="brand name"
                                    onChange={(e) => this.setState({ brand_name: e.target.value })}
                                    value={this.state.brand_name}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">brand api key</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex4"
                                    ////placeholder="brand api key"
                                    onChange={(e) => this.setState({ brand_key: e.target.value })}
                                    value={this.state.brand_key}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">play url</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex5"
                                    ////placeholder="play url"
                                    onChange={(e) => this.setState({ play_url: e.target.value })}
                                    value={this.state.play_url}
                                    required />
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="form-group">
                                                <h5>Logo File Upload</h5>
                                                <br />
                                                <img
                                                    src={this.state.imagePreviewUrl}
                                                    style={{
                                                        flex: 1,
                                                        width: "150px",
                                                        height: null,
                                                        resizeMode: 'contain'
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mt-10">
                                                <input type="file" onChange={this.onFileChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="form-group">
                                <div className="col-sm-12">
                                    <label className="control-label">Brand status&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                    <label class="switch">
                                        <input type="checkbox" onChange={this.handleSwitchChange(1)} checked={this.state.switch1} />
                                        <span class="slider round"></span>
                                    </label>
                                    <label className="control-label">&nbsp;&nbsp;Enabled</label>
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
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>
        </AdminLayoutHoc>
    }
}