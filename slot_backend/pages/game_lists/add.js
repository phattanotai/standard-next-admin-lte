import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect, Component } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

import { ServiceBrand } from "../../service";
import { ServiceImage } from "../../service";
import { ServiceGameList } from "../../service";

import Dialog from 'react-bootstrap-dialog';
import FilesUploadComponent from '../../components/files-upload-component';

export default class AddGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game_code: "",
            game_id: "",
            game_id2: "",
            game_id3: "",
            game_id4: "",
            game_name: "",
            game_brand: "",
            game_type: "Slot",
            game_img: "",
            game_img_app: "",
            game_line: "",
            game_new: "",
            game_jackpot: "",
            game_free: "",
            game_provider: "",
            game_status: 0,//1=enable , 0=disable
            switch1: true,
            switch2: true,
            switch3: true,
            switch4: true,

            data_brand: [],

            errorMessage: "",
            datas: [],
            role_data: [],
            mydatas: {},
            value: "Master",

            brand: "",
            image: "",
            imagePreviewUrl: ServiceImage.imageshow("1594692624651-no-image-available.png"),
            imageAppPreviewUrl: ServiceImage.imageshow("1594692624651-no-image-available.png"),
            file: "",
            appfile: "",
        };

        this.onFileChange = this.onFileChange.bind(this);
        this.onFileAppChange = this.onFileAppChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this)

        this.handleResetSubmit = this.handleResetSubmit.bind(this);
        this.onSearchLevel = this.onSearchLevel.bind(this);

        this.handleSelectBrandChange = this.handleSelectBrandChange.bind(this);
        this.handleSelectTypeChange = this.handleSelectTypeChange.bind(this);
    }

    handleSelectBrandChange(e) {
        e.preventDefault();
        console.log('e.target.value =>' + e.target.value);
        this.setState({ brand: e.target.value });
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

    handleSelectTypeChange(e) {
        e.preventDefault();
        console.log('e.target.value =>' + e.target.value);
        this.setState({ game_type: e.target.value });
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

    onFileAppChange(e) {
        const file = e.target.files[0]
        const reader = new FileReader();
        if (file) {
            reader.onloadend = () => {
                this.setState({ appfile: file, imageAppPreviewUrl: reader.result });
            }
            reader.readAsDataURL(file);
        }
        else {
            this.setState({ imageAppPreviewUrl: ServiceImage.imageshow("1594692624651-no-image-available.png") });
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
        Router.push("/game_lists");
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

    async AddGame() {
        let game_status = 0;
        if (this.state.switch1) {
            game_status = 1;
        }

        let game_new = "No";
        if (this.state.switch2) {
            game_new = "Yes";
        }

        let game_free = "No";
        if (this.state.switch3) {
            game_free = "Yes";
        }

        let game_jackpot = "No";
        if (this.state.switch4) {
            game_jackpot = "Yes";
        }

        console.log('game_brand : ' + this.SearchBrand(this.state.brand));
        console.log('game_type : ' + this.state.game_type);
        const a = {
            game_code: this.state.game_code, game_id: this.state.game_id, game_id2: this.state.game_id2, game_id3: this.state.game_id3,
            game_id4: this.state.game_id4, game_name: this.state.game_name, game_brand: this.SearchBrand(this.state.brand), game_type: this.state.game_type,
            game_img: this.state.game_img, game_line: this.state.game_line, game_new: game_new, game_jackpot: game_jackpot,
            game_free: game_free, game_provider: this.state.game_provider, game_status: game_status, game_img_app: this.state.game_img_app
        };
        console.log('Add Game start...');
        const res2 = await ServiceGameList.createGames(a);
        console.log('res : ' + res2.data);
        if (res2.data.status === 2000) {
            console.log('Add Game Success!!!');
            this.dialog.show({
                title: 'Slot Admin information',
                body: 'บันทึก Game : ' + this.state.game_name + ' เรียบร้อยแล้ว',
                actions: [
                    Dialog.OKAction(() => {
                        Router.push("/game_lists");
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
            if (this.state.game_code !== "" && this.state.game_name !== "") {
                if (this.state.file) {
                    const formData = new FormData();
                    formData.append('file', this.state.file);
                    //console.log('image file name : ' + filename);
                    const res = await ServiceImage.imageUpload(formData);
                    if (res.data.status === 2000) {
                        const { filename } = res.data.data;
                        console.log('image file name : ' + filename);
                        this.setState({ game_img: filename });
                        if (this.state.appfile) {
                            const formData = new FormData();
                            formData.append('file', this.state.appfile);
                            const res = await ServiceImage.imageUpload(formData);
                            if (res.data.status === 2000) {
                                const { filename } = res.data.data;
                                console.log('image app file name : ' + filename);
                                this.setState({ game_img_app: filename });
                                this.AddGame();
                            } else {
                                this.dialog.showAlert('บันทึกข้อมูล Game ไม่สำเร็จ กรุณาตรวจสอบข้อมูลบันทึกใหม่อีกครั้ง!!!');
                            }
                        } else {
                            this.AddGame();
                        }
                    } else {
                        this.dialog.showAlert('บันทึกข้อมูล Game ไม่สำเร็จ กรุณาตรวจสอบข้อมูลบันทึกใหม่อีกครั้ง!!!');
                    }
                } else {
                    if (this.state.appfile) {
                        const formData = new FormData();
                        formData.append('file', this.state.appfile);
                        const res = await ServiceImage.imageUpload(formData);
                        if (res.data.status === 2000) {
                            const { filename } = res.data.data;
                            console.log('image app file name : ' + filename);
                            this.setState({ game_img_app: filename });
                            this.AddGame();
                        } else {
                            this.dialog.showAlert('บันทึกข้อมูล Game ไม่สำเร็จ กรุณาตรวจสอบข้อมูลบันทึกใหม่อีกครั้ง!!!');
                        }
                    } else {
                        this.AddGame();
                    }
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

        ServiceBrand.listBrands().then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);
                this.setState({ data_brand: data });
                if (data.length > 0) {
                    const { brand_name } = data[0];
                    this.setState({ brand: brand_name });
                    console.log('Brand name:' + brand_name);
                }

                if (Cookies.get("brand")) {
                    this.setState({ brand: Cookies.get("brand") });
                }

            } else {
                this.setErrorMsg(res.data.msg);
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

        return <AdminLayoutHoc contentTitle={'Add Game'} contentTitleButton={<i className="fa fa-2x fa-cubes" />} url={this.props.url}>
            <div className="offset-md-0">
                <div className="card">
                    <div className="card-header">
                        {/* <h3 className="card-title">New User Form</h3> */}
                    </div>
                    <form className="form-horizontal">
                        <div className="card-body">
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
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <label htmlFor="select-1" className="col-sm-12 control-label">Select game type</label>
                                    <div className="col-sm-offset-2 col-sm-12">
                                        <select id="select-3" className="form-control" value={this.state.game_type} onChange={this.handleSelectTypeChange}>
                                            <option value="Slot" >Slot</option>
                                            <option value="Fish" >Fish</option>
                                            <option value="Livecasino" >Livecasino</option>
                                            <option value="Card" >Card</option>
                                            <option value="Accord" >Accord</option>
                                            <option value="Sportbook" >Sportbook</option>
                                            <option value="SCRATCH" >SCRATCH</option>
                                            <option value="N/A" >N/A</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">game code</span>
                                </div>
                                <input type="text" className="form-control"
                                    //placeholder="game code"
                                    id="validation-ex1"
                                    onChange={(e) => this.setState({ game_code: e.target.value })}
                                    value={this.state.game_code}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">game name</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex2"
                                    //placeholder="game name"
                                    onChange={(e) => this.setState({ game_name: e.target.value })}
                                    value={this.state.game_name}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">game id 1</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex4"
                                    //placeholder="game id 1"
                                    onChange={(e) => this.setState({ game_id: e.target.value })}
                                    value={this.state.game_id}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">game id 2</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex5"
                                    //placeholder="game id 2"
                                    onChange={(e) => this.setState({ game_id2: e.target.value })}
                                    value={this.state.game_id2}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">game id 3</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex5"
                                    //placeholder="game id 3"
                                    onChange={(e) => this.setState({ game_id3: e.target.value })}
                                    value={this.state.game_id3}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">game id 4</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex5"
                                    //placeholder="game id 4"
                                    onChange={(e) => this.setState({ game_id4: e.target.value })}
                                    value={this.state.game_id4}
                                    required />
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">game line</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex5"
                                    //placeholder="game line"
                                    onChange={(e) => this.setState({ game_line: e.target.value })}
                                    value={this.state.game_line}
                                    required />
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <label className="control-label">Game Jackpot&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                    <label class="switch">
                                        <input type="checkbox" onChange={this.handleSwitchChange(4)} checked={this.state.switch4} />
                                        <span class="slider round"></span>
                                    </label>
                                    {/* <label className="control-label">&nbsp;&nbsp;New</label> */}
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <label className="control-label">Game Free&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                    <label class="switch">
                                        <input type="checkbox" onChange={this.handleSwitchChange(3)} checked={this.state.switch3} />
                                        <span class="slider round"></span>
                                    </label>
                                    {/* <label className="control-label">&nbsp;&nbsp;New</label> */}
                                </div>
                            </div>

                            <div className="input-group mb-3 input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">game provider</span>
                                </div>
                                <input type="text" className="form-control " id="validation-ex5"
                                    //placeholder="game provider"
                                    onChange={(e) => this.setState({ game_provider: e.target.value })}
                                    value={this.state.game_provider}
                                    required />
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="form-group">
                                                <h5>Game Image File Upload</h5>
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
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="form-group">
                                                <h5>Game Image App File Upload</h5>
                                                <br />
                                                <img
                                                    src={this.state.imageAppPreviewUrl}
                                                    style={{
                                                        flex: 1,
                                                        width: "150px",
                                                        height: null,
                                                        resizeMode: 'contain'
                                                    }}
                                                />
                                            </div>
                                            <div className="form-group mt-10">
                                                <input type="file" onChange={this.onFileAppChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <label className="control-label">Game New&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                    <label class="switch">
                                        <input type="checkbox" onChange={this.handleSwitchChange(2)} checked={this.state.switch2} />
                                        <span class="slider round"></span>
                                    </label>
                                    {/* <label className="control-label">&nbsp;&nbsp;New</label> */}
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