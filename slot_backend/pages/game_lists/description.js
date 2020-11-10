import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

//import '../styles/styles.scss';
import { ServiceGameList } from "../../service";
import { ServiceImage } from "../../service";
import Dialog from 'react-bootstrap-dialog'

export default class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Cookies.get("gameId"),
            game_code: "",
            game_id: "",
            game_id2: "",
            game_id3: "",
            game_id4: "",
            game_name: "",
            game_brand: "",
            game_type: "Slot",
            game_img: "",
            game_line: "",
            game_new: "",
            game_jackpot: "",
            game_free: "",
            game_provider: "",
            game_status: 0,//1=enable , 0=disable
            switch1: true,
            switch2: true,

            imagePreviewUrl: ServiceImage.imageshow("1594692624651-no-image-available.png"),

            errorMessage: "",
            data: [],
            classBadge: "danger",
            gamestatus: 'disable',
        };

        this.handleResetSubmit = this.handleResetSubmit.bind(this);

        //this.handleSubmit = this.handleSubmit.bind(this);

        /* this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setErrorMsg = this.setErrorMsg.bind(this);

        this.onClick = this.onClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this) */
    }

    /* onClick() {
        this.dialog.showAlert('Hello Dialog!')
    } */


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

    handleSelectChange(e) {
        console.log("e.target.value :" + e.target.value);
        this.setState({ rolename: e.target.value });
    }

    setErrorMsg(msg) {
        console.log(msg);
        this.setState({ errorMessage: msg });
    }

    componentDidMount() {
        if (!Cookies.get("user")) {
            Router.push("/");
        }
        console.log
        ServiceGameList.getGames(this.state.id).then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);
                const { game_code, game_id, game_id2, game_id3, game_id4, game_name, game_brand, game_type, game_img,
                    game_line, game_new, game_jackpot, game_free, game_provider, game_status } = data[0];
                if (game_img !== '') {
                    this.setState({ imagePreviewUrl: ServiceImage.imageshow(game_img) });
                } else {
                    this.setState({ imagePreviewUrl: ServiceImage.imageshow("1594692624651-no-image-available.png") });
                }
                let gamenew = 0;
                if (game_new === "Yes") {
                    gamenew = 1;
                }
                console.log("game_brand: " + game_brand);
                this.setState({
                    game_code: game_code, game_id: game_id, game_id2: game_id2, game_id3: game_id3, game_id4: game_id4,
                    game_name: game_name, game_brand: game_brand, game_type: game_type, original_game_img: game_img, game_line: game_line,
                    game_new: game_new, game_jackpot: game_jackpot, game_free: game_free,
                    game_provider: game_provider, brand: game_brand, game_img: game_img
                });
            } else {
                this.setErrorMsg(res.data.msg);
            }
        });


    }
    render() {

        return <AdminLayoutHoc contentTitle={'Game Description'} contentTitleButton={<i className="fa fa-2x fa-cubes" />} url={this.props.url}>
            <div className="row">
                <div className="col-12">
                    <div className="card mt-2">
                        <div className="col-12">
                            <div className="card-body table-responsive p-0">
                                <table className="table table-hover ">
                                    <thead class="table-dark">
                                        <tr >
                                            <th><h6>ITEMS</h6></th>
                                            <th><h6>DESCRIPTION</h6></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-1 "><h6>Game Logo</h6></td>
                                            <td className="py-1">
                                                <img
                                                    src={this.state.game_img ? ServiceImage.imageshow(this.state.game_img) : ServiceImage.imageshow("1594692624651-no-image-available.png")}
                                                    style={{ width: "120px", height: "120px" }}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1 "><h6>Game code</h6></td>
                                            <td className="py-1">{this.state.game_code}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Game Status</h6></td>
                                            <td className="py-1"><label className={`badge badge-${this.state.classBadge}`}>{this.state.gamestatus}</label> </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Game Name</h6></td>
                                            <td className="py-1">{this.state.game_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Game Brand</h6></td>
                                            <td className="py-1">{this.state.game_brand}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Game Type</h6></td>
                                            <td className="py-1">{this.state.game_type}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Game Line</h6></td>
                                            <td className="py-1">{this.state.game_line}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Game New</h6></td>
                                            <td className="py-1">{this.state.game_new}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Game Jackpot</h6></td>
                                            <td className="py-1">{this.state.game_jackpot}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Game Free</h6></td>
                                            <td className="py-1">{this.state.game_free}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Game Provider</h6></td>
                                            <td className="py-1">{this.state.game_provider}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="bt-tb-page">
                            <button className="btn btn-danger" onClick={this.handleResetSubmit}  title='Back' style={{ width: 45 }}><i class="fa fa-mail-reply"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>
        </AdminLayoutHoc>
    }
}