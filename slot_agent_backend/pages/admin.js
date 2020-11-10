import AdminLayoutHoc from '../components/Layout/AdminLayoutHoc';
import { Line, Pie, Doughnut } from "react-chartjs-2";
/* import {
    // global options for the charts
    chartOptions,
    // function that adds the global options to our charts
    parseOptions,
    chartExample3
  } from "variables/charts.js"; */
import { MDBContainer } from 'mdbreact';
import { ServiceDashBoard } from "../service";
import Cookies, { getJSON } from "js-cookie";
import moment  from 'moment-timezone';

export default class Index extends React.Component {
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
            rowperpage: 15,
            pagearr: [],
            startrow: 0,
            endrow: 0,
            searchtxt: "",
            agent: "",
            agentdata: [],
            slt: "All",
            txt_date: 'Data for Every times',
            member_en: 0,
            member_dis: 0,
            deposit: 0,
            deposit_sum: 0,
            withdraw: 0,
            withdraw_sum: 0,
            topup: 0,
            topup_sum: 0,
            graph: null,


            lineData: {
                labels: [],
                datasets: [
                    {
                        label: 'Deposit',
                        fill: false,
                        backgroundColor: 'green',
                        borderColor: 'green',
                        pointBorderColor: 'green',
                        pointRadius: 1,
                        data: []
                    },
                    {
                        label: 'Withdraw',
                        fill: false,
                        backgroundColor: 'red',
                        borderColor: 'red',
                        pointBorderColor: 'red',
                        pointRadius: 1,
                        data: []
                    }
                ]
            },

        };
        /*         this.deleteMember = this.deleteMember.bind(this);
                this.setErrorMsg = this.setErrorMsg.bind(this);
        
                this.onClick = this.onClick.bind(this);
                this.onConfirmClick = this.onConfirmClick.bind(this);
        
                this.handleSelectRowPerPageChange = this.handleSelectRowPerPageChange.bind(this);
                this.handleSelectPageNumberChange = this.handleSelectPageNumberChange.bind(this);
        
        
                this.onSearchClick = this.onSearchClick.bind(this);
        
                this.handleSelectAgentChange = this.handleSelectAgentChange.bind(this);
        
                this.onSearchLevel = this.onSearchLevel.bind(this);
                this.onSearchAgentCode = this.onSearchAgentCode.bind(this);*/

        this.RenderTable = this.RenderTable.bind(this);
    }

    getMonday(d) {
        d = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    }

    RenderTable(param) {
        this.setState({ slt: param });
        var dateFormat = require('dateformat');
        const a = { "selecttime": param };
        if (param === 'All') {
            this.setState({ txt_date: 'Data for Every times' });
        } else if (param === 'Today') {
            var enddate = moment.tz('Asia/Bangkok').format('DD-MM-YYYY');
            this.setState({ txt_date: 'Data for Date ' + enddate });
        } else if (param === 'Yesterday') {
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var date = new Date(nDate);
            var enddate = new Date(nDate);
            //var enddate_stp = moment.tz('Asia/Bangkok').format('DD-MM-YYYY 00:00:00');
            date.setDate(date.getDate() - 1);
            this.setState({ txt_date: 'Data form Date ' + dateFormat(date, 'dd-mm-yyyy') + ' to ' + dateFormat(enddate, 'dd-mm-yyyy') });
        }
        else if (param === 'ThisWeek') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var date = new Date(this.getMonday(nDate));
            console.log('get monday:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            var startdate_stp = new Date(nDate);
            console.log('start date:' + startdate_stp);
            this.setState({ txt_date: 'Data form Date ' + dateFormat(date, 'dd-mm-yyyy') + ' to ' + dateFormat(startdate_stp, 'dd-mm-yyyy') });
        }
        else if (param === 'LastWeek') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var enddate = new Date(this.getMonday(nDate));
            var date = new Date();
            console.log('get monday:' + dateFormat(enddate, 'yyyy-mm-dd 00:00:00'));
            //console.log('start date:' + startdate_stp);
            date.setDate(enddate.getDate() - 7);
            console.log('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            console.log('end date:' + dateFormat(enddate, 'yyyy-mm-dd 00:00:00'));
            //var startdate_stp = Number(new Date(dateFormat(date, 'yyyy-mm-dd 00:00:00')));
            //var enddate_stp = Number(new Date(dateFormat(enddate, 'yyyy-mm-dd 00:00:00')));
            this.setState({ txt_date: 'Data form Date ' + dateFormat(date, 'dd-mm-yyyy') + ' to ' + dateFormat(enddate, 'dd-mm-yyyy') });
        }
        else if (param === 'LastMonth') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var d = new Date(nDate);
            var enddate = new Date(d.getFullYear() + '-' + (d.getMonth() + 1) + '-01');
            enddate.setDate(enddate.getDate() - 1);
            console.log('end date:' + dateFormat(enddate, 'yyyy-mm-dd 00:00:00'));
            var date = new Date(d.getFullYear() + '-' + d.getMonth() + '-01');
            console.log('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            this.setState({ txt_date: 'Data form Date ' + dateFormat(date, 'dd-mm-yyyy') + ' to ' + dateFormat(enddate, 'dd-mm-yyyy') });
        }
        else if (param === 'ThisMonth') {
            var dateFormat = require('dateformat');
            const nDate = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
            });
            var d = new Date(nDate);
            var date = new Date(d.getFullYear() + '-' + (d.getMonth() + 1) + '-01');
            console.log('start date:' + dateFormat(date, 'yyyy-mm-dd 00:00:00'));
            this.setState({ txt_date: 'Data form Date ' + dateFormat(date, 'dd-mm-yyyy') + ' to ' + dateFormat(d, 'dd-mm-yyyy') });
        }
        // const a = { "selecttime": this.state.slt };
        ServiceDashBoard.dashboard(a, Cookies.get("agentcode")).then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);
                this.setState({ data: data });
                this.setState({ rawdata: data });


                const { member, transactions, graph } = data;
                this.setState({ member_en: member.en, member_dis: member.di, deposit: transactions.deposit, deposit_sum: transactions.deposit_sum, withdraw: transactions.withdraw, withdraw_sum: transactions.withdraw_sum, topup: transactions.topup, graph: graph,topup_sum: transactions.topup_sum });
                this.setState({
                    lineData: {
                        labels: graph.labels,
                        datasets: [
                            {
                                label: 'Deposit',
                                fill: true,
                                backgroundColor: 'green',
                                borderColor: 'green',
                                pointBorderColor: 'green',
                                pointRadius: 1,
                                data: graph.deposit
                            },
                            {
                                label: 'Withdraw',
                                fill: true,
                                backgroundColor: 'red',
                                borderColor: 'red',
                                pointBorderColor: 'red',
                                pointRadius: 1,
                                data: graph.withdraw
                            }
                        ]
                    }
                });
            } else {
                this.setErrorMsg(res.data.msg);
            }
        });
    }

    componentDidMount() {
        if (!Cookies.get("user")) {
            Router.push("/");
        }

        console.log('agent code : ' + Cookies.get("agentcode"));
        const a = { "selecttime": this.state.slt };
        ServiceDashBoard.dashboard(a, Cookies.get("agentcode")).then((res) => {
            console.log(res.data);
            const { data, status } = res.data;
            if (status === 2000) {
                console.log("data length : " + data.length);
                this.setState({ data: data });
                this.setState({ rawdata: data });

                const { member, transactions, graph } = data;
                this.setState({ member_en: member.en, member_dis: member.di, deposit: transactions.deposit, deposit_sum: transactions.deposit_sum, withdraw: transactions.withdraw, withdraw_sum: transactions.withdraw_sum, topup: transactions.topup,topup_sum: transactions.topup_sum, graph: graph });
                this.setState({
                    lineData: {
                        labels: graph.labels,
                        datasets: [
                            {
                                label: 'Deposit',
                                fill: true,
                                backgroundColor: 'green',
                                borderColor: 'green',
                                pointBorderColor: 'green',
                                pointRadius: 1,
                                data: graph.deposit
                            },
                            {
                                label: 'Withdraw',
                                fill: true,
                                backgroundColor: 'red',
                                borderColor: 'red',
                                pointBorderColor: 'red',
                                pointRadius: 1,
                                data: graph.withdraw
                            }
                        ]
                    }
                });

            } else {
                this.setErrorMsg(res.data.msg);
            }
        });
    }

    render() {
        return <AdminLayoutHoc contentTitle={'DashBoard'} contentTitleButton={<i className="fa fa-2x fa-line-chart" />} url={this.props.url}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header bg-dark">
                            {/* <h3 className="card-title">Current users</h3> */}
                            <MDBContainer>
                                <div className="wrapper">

                                    <div className="w-auto h-25 p-3  d-inline-block">
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('All');
                                            }}
                                            style={{ width: 100 }}
                                        >
                                            All
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('Today');
                                            }}
                                            style={{ marginLeft: 5, width: 100 }}
                                        >
                                            Today
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('Yesterday');
                                            }}
                                            style={{ marginLeft: 5, width: 100 }}
                                        >
                                            Yesterday
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('ThisWeek');
                                            }}
                                            style={{ marginLeft: 5, width: 100 }}
                                        >
                                            This Week
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('LastWeek');
                                            }}
                                            style={{ marginLeft: 5, width: 100 }}
                                        >
                                            Last Week
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('ThisMonth');
                                            }}
                                            style={{ marginLeft: 5, width: 100 }}
                                        >
                                            This Month
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info btn-icon-text btn-sm"
                                            onClick={() => {
                                                this.RenderTable('LastMonth');
                                            }}
                                            style={{ marginLeft: 5, width: 100 }}
                                        >
                                            Last Month
                                        </button>
                                    </div>

                                </div>
                                <label style={{ marginLeft: 20 }}><h5>{this.state.txt_date}</h5></label>
                            </MDBContainer>

                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card">
                                        <div className="card-header bg-warning">
                                            <h3 className="card-title">
                                                <i className="fa fa-group" />&nbsp;Member
                                            </h3>

                                        </div>
                                        <div className="card-body bg-warning">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="card">
                                                        <div className="card-header text-white bg-success">
                                                            <h4 className="card-title">
                                                                <i className="fa fa-check" />&nbsp;Enable
                                                            </h4>
                                                        </div>
                                                        <div className="card-body text-white bg-success">
                                                            <label style={{ width: '100%', textAlign: 'center', fontSize: 18 }}>{this.state.member_en}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card">
                                                        <div className="card-header text-white bg-danger">
                                                            <h4 className="card-title">
                                                                <i className="fa fa-remove" />&nbsp;Disable
                                                            </h4>
                                                        </div>
                                                        <div className="card-body text-white bg-danger disabled ">
                                                            <label style={{ width: '100%', textAlign: 'center', fontSize: 18 }}>{this.state.member_dis}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <div className="card">
                                        <div className="card-header bg-info">
                                            <h3 className="card-title">
                                                <i className=" fa fa-bitcoin" />&nbsp;Cash
                                            </h3>

                                        </div>
                                        <div className="card-body bg-info">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="card">
                                                        <div className="card-header text-white bg-success">
                                                            <h4 className="card-title">
                                                                <i className="fa fa-check" />&nbsp;Deposit
                                                            </h4>
                                                        </div>
                                                        <div className="card-body text-white bg-success">
                                                            <label style={{ width: '100%', textAlign: 'center', fontSize: 18 }}>{this.state.deposit_sum}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card">
                                                        <div className="card-header text-white bg-danger">
                                                            <h4 className="card-title">
                                                                <i className="fa fa-remove" />&nbsp;Withdraw
                                                            </h4>
                                                        </div>
                                                        <div className="card-body text-white bg-danger disabled ">
                                                            <label style={{ width: '100%', textAlign: 'center', fontSize: 18 }}>{this.state.withdraw_sum}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="card">
                                        <div className="card-header bg-primary">
                                            <h3 className="card-title">
                                                <i className="fa fa-diamond" />&nbsp;Bonus
                                            </h3>

                                        </div>
                                        <div className="card-body bg-primary">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="card">
                                                        <div className="card-header text-white bg-success">
                                                            <h4 className="card-title">
                                                                <i className="fa fa-check" />&nbsp;Free Topup
                                                            </h4>
                                                        </div>
                                                        <div className="card-body text-white bg-success">
                                                            <label style={{ width: '100%', textAlign: 'center', fontSize: 18 }}>{this.state.topup_sum}</label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <div className="card card-default color-palette-box">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fa fa-tag" />&nbsp;Statistics
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-8">
                                    <Line data={this.state.lineData} />
                                </div>
                                <div className="col-sm-4">
                                    <table style={{ width: '100%' }}>
                                       {/*  <tr style={{ width: '100%' }}>
                                            <td style={{ width: '70%', color: 'blue' }}><h5>สมัครใหม่</h5></td>
                                            <td style={{ color: 'blue' }}><h5><i className="fa fa-asterisk" />&nbsp;20</h5></td>
                                            <td style={{ width: '6%', color: 'blue' }}><h5>คน</h5></td>
                                        </tr>
                                        <tr style={{ width: '100%' }}>
                                            <td style={{ width: '70%', color: 'blue' }}><h5>สมาชิกเดิม</h5></td>
                                            <td style={{ color: 'blue' }}><h5><i className="fa fa-asterisk" />&nbsp;30</h5></td>
                                            <td style={{ width: '6%', color: 'blue' }}><h5>คน</h5></td>
                                        </tr> */}
                                        <tr style={{ width: '100%' }}>
                                            <td style={{ width: '70%', color: 'blue' }}><h5>จำนวนสมาฃิกทั้งหมด</h5></td>
                                            <td style={{ color: 'blue' }}><h5><i className="fa fa-asterisk" />&nbsp;{this.state.member_en + this.state.member_dis}</h5></td>
                                            <td style={{ width: '6%', color: 'blue' }}><h5>คน</h5></td>
                                        </tr>
                                        <tr style={{ width: '100%' }}>
                                            <td style={{ width: '70%', color: 'green' }}><h5>จำนวนฝาก</h5></td>
                                            <td style={{ color: 'green' }}><h5><i className="fa fa-asterisk" />&nbsp;{this.state.deposit}</h5></td>
                                            <td style={{ width: '6%', color: 'green' }}><h5>ครั้ง</h5></td>
                                        </tr>
                                        <tr style={{ width: '100%' }}>
                                            <td style={{ width: '70%', color: 'green' }}><h5>ยอดฝาก</h5></td>
                                            <td style={{ color: 'green' }}><h5><i className="fa fa-asterisk" />&nbsp;{this.state.deposit_sum}</h5></td>
                                            <td style={{ width: '6%', color: 'green' }}><h5>บาท</h5></td>   
                                        </tr>
                                        <tr style={{ width: '100%' }}>
                                            <td style={{ width: '70%', color: 'red' }}><h5>จำนวนถอน</h5></td>
                                            <td style={{ color: 'red' }}><h5><i className="fa fa-asterisk" />&nbsp;{this.state.withdraw}</h5></td>
                                            <td style={{ width: '6%', color: 'red' }}><h5>ครั้ง</h5></td>
                                        </tr>
                                        <tr style={{ width: '100%' }}>
                                            <td style={{ width: '70%', color: 'red' }}><h5>ยอดถอน</h5></td>
                                            <td style={{ color: 'red' }}><h5><i className="fa fa-asterisk" />&nbsp;{this.state.withdraw_sum}</h5></td>
                                            <td style={{ width: '6%', color: 'red' }}><h5>บาท</h5></td>
                                        </tr>
                                    </table>
                                    {/* <div className="column">
                                    <div className="row"></div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayoutHoc>
    }
}