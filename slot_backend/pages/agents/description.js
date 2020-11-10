import AdminLayoutHoc from "../../components/Layout/AdminLayoutHoc";
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

//import '../styles/styles.scss';
import { ServiceAgent } from "../../service";
import Dialog from 'react-bootstrap-dialog'

export default class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Cookies.get("agentid"),
            agent_code: "",
            agent_lineup: "",
            agent_name: "",
            agent_detail: "",
            agent_website: "",
            agent_master: "Master",
            agent_type: "", // Master or Agent
            agent_percent: "",
            agent_percent_aff: "",
            agent_percent_aff2: "",
            agent_percent_aff3: "",
            agent_percent_aff4: "",
            agent_percent_aff5: "",
            agent_comm: "",
            agent_line_ad: "",
            agent_line_token1: "",
            agent_line_token2: "",
            agent_line_token3: "",
            agent_api_user: "",
            agent_api_password: "",
            agent_api_key: "",
            withdraw_auto: "",
            agent_status: "", //1=enable , 0=disable
            /* , created_at: "", userFake: "", ref: "", message: "",
            status: "", web_name: "", url: "", api: "", imei: "", description: "", name: "",
            mobile_number: "", save_place: "", mobile_status: "", */
            errorMessage: "",
            data: [],
            classBadge: "danger",
            agentstatus: 'disable',
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
        Router.push("/agents");
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

        //console.log("Histid=>" + this.state.Histid);
        ServiceAgent.getAgentFromId(this.state.id).then((res) => {
            const { data, status } = res.data;
            if (status === 2000) {
                this.setState({ datas: data });
                const { data, status } = res.data;
                if (status === 2000) {
                    this.setState({ datas: data });
                    const { agent_code, agent_lineup, 
                        agent_name, agent_detail, agent_website, 
                        agent_master, agent_type, agent_percent,
                        agent_percent_aff, agent_percent_aff2, 
                        agent_percent_aff3,agent_percent_aff4,agent_percent_aff5,
                        agent_comm, agent_line_ad, agent_line_token1, 
                        agent_line_token2, agent_line_token3, agent_api_user,
                        agent_api_password, agent_api_key, agent_status
                    } = this.state.datas[0];
                    
                    this.setState({ agent_code: agent_code, agent_lineup: agent_lineup, 
                        agent_name: agent_name, agent_detail: agent_detail, agent_website: agent_website, 
                        agent_master: agent_master, agent_type: agent_type, agent_percent:  agent_percent,
                        agent_percent_aff: agent_percent_aff.$numberDecimal, agent_percent_aff2: agent_percent_aff2.$numberDecimal, 
                        agent_percent_aff3:  agent_percent_aff3.$numberDecimal,agent_percent_aff4:  agent_percent_aff4.$numberDecimal
                        ,agent_percent_aff5:  agent_percent_aff5.$numberDecimal,
                        agent_comm: agent_comm.$numberDecimal, agent_line_ad: agent_line_ad, agent_line_token1: agent_line_token1, 
                        agent_line_token2: agent_line_token2, agent_line_token3: agent_line_token3, agent_api_user: agent_api_user,
                        agent_api_password: agent_api_password, agent_api_key: agent_api_key, agent_status: agent_status
                    });

                    //const { created_at, userFake, ref, message, status, web_name, url, api, imei, description, name, mobile_number, save_place, mobile_status } = this.state.datas[0]
                    //console.log('userFake:' + userFake)
                    //this.setState({ created_at: created_at, userFake: userFake, ref: ref, message: message, status: status, status, web_name: web_name, url: url, api: api, imei: imei, description: description, name: name, mobile_number: mobile_number, save_place: save_place, mobile_status: mobile_status });

                    if (this.state.agent_status === '1') {
                        this.setState({ classBadge: "success", agentstatus: "enable" });                    }
                    else
                    {
                        this.setState({ classBadge: "danger", agentstatus: "disable" });
                    }
                } else {
                    this.setErrorMsg(res.data.message);
                    this.dialog.showAlert(res.data.message);
                }
            } else {
                this.setErrorMsg(res.data.message);
                this.dialog.showAlert(res.data.message);
            }
        });


    }
    render() {

        return <AdminLayoutHoc contentTitle={'Agent Description'} contentTitleButton={<i className="fa fa-2x fa-id-badge" />} url={this.props.url}>
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
                                            <td className="py-1 "><h6>Agent code</h6></td>
                                            <td className="py-1">{this.state.agent_code}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Status</h6></td>
                                            <td className="py-1"><label className={`badge badge-${this.state.classBadge}`}>{this.state.agentstatus}</label> </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Name</h6></td>
                                            <td className="py-1">{this.state.agent_name}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Detail</h6></td>
                                            <td className="py-1">{this.state.agent_detail}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Website</h6></td>
                                            <td className="py-1">{this.state.agent_website}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Master</h6></td>
                                            <td className="py-1">{this.state.agent_master}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Type</h6></td>
                                            <td className="py-1">{this.state.agent_type}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Percent</h6></td>
                                            <td className="py-1">{this.state.agent_percent}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Percent Aff</h6></td>
                                            <td className="py-1">{this.state.agent_percent_aff}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Percent Aff2</h6></td>
                                            <td className="py-1">{this.state.agent_percent_aff2}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Percent Aff3</h6></td>
                                            <td className="py-1">{this.state.agent_percent_aff3}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Percent Aff4</h6></td>
                                            <td className="py-1">{this.state.agent_percent_aff4}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Percent Aff5</h6></td>
                                            <td className="py-1">{this.state.agent_percent_aff5}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Comm</h6></td>
                                            <td className="py-1">{this.state.agent_comm}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent line@</h6></td>
                                            <td className="py-1">{this.state.agent_line_ad}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Line Token1</h6></td>
                                            <td className="py-1">{this.state.agent_line_token1}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent Line Token2</h6></td>
                                            <td className="py-1">{this.state.agent_line_token2}</td>
                                        </tr><tr>
                                            <td className="py-1"><h6>Agent Line Token3</h6></td>
                                            <td className="py-1">{this.state.agent_line_token3}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent API User</h6></td>
                                            <td className="py-1">{this.state.agent_api_user}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1"><h6>Agent API Password</h6></td>
                                            <td className="py-1">{this.state.agent_api_password}</td>
                                        </tr><tr>
                                            <td className="py-1"><h6>Agent API Key</h6></td>
                                            <td className="py-1">{this.state.agent_api_key}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="bt-tb-page">
                                <button className="btn btn-danger " onClick={this.handleResetSubmit}  title='Back' style={{ width: 45 }}><i class="fa fa-mail-reply"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog ref={(el) => { this.dialog = el }} />
            </div>
        </AdminLayoutHoc>
    }
}