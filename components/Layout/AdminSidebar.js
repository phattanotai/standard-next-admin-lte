import Link from 'next/link';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Cookies from "js-cookie";
import Router from "next/router";
import React, { useState, useEffect } from "react";

class AdminSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rawdata: [],
            mobile_online: 0,
            classBadge: "right badge badge-danger",
            username: Cookies.get("user"),

            showmenu_m1: true,
            showmenu_m2: true,
            showmenu_m3: true,
            showmenu_m4: true,
            showmenu_m5: true,
            showmenu_m6: true,
            showmenu_m7: true,

        };
    }
    componentDidMount() {
        this.setState({
            showmenu_m1: Boolean(Number(Cookies.get("menu1"))),
            showmenu_m2: Boolean(Number(Cookies.get("menu2"))),
            showmenu_m3: Boolean(Number(Cookies.get("menu3"))),
            showmenu_m4: Boolean(Number(Cookies.get("menu4"))),
            showmenu_m5: Boolean(Number(Cookies.get("menu5"))),
            showmenu_m6: Boolean(Number(Cookies.get("menu6"))),
            showmenu_m7: Boolean(Number(Cookies.get("menu7")))
        });
    }

    render() {
        const { pathname } = this.props.router;
        return <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link href="/admin">
                <a className="brand-link text-center">
                    <i className="fa fa-at fa-2x brand-image ml-2" />
                    {/* <img src="../logo-slots.png" id="icon" alt="User Icon" className="logoheader" /> */}
                    <span className="brand-text font-weight-light"><h5>{this.props.projectName && this.props.projectName}</h5></span>
                </a>
            </Link>

            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item" style={{ display: this.state.showmenu_m1 ? 'block' : 'none' }}>
                            <Link href="/admin">
                                <a className={['nav-link', pathname === '/' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-home" />
                                    <p>Menu1</p>
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item" style={{ display: this.state.showmenu_m2 ? 'block' : 'none' }}>
                            <Link href="/agents">
                                <a className={['nav-link', pathname === '/agents' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-id-badge" />
                                    <p>
                                         Menu2
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" style={{ display: this.state.showmenu_m2 ? 'block' : 'none' }}>
                            <Link href="/agent_users">
                                <a className={['nav-link', pathname === '/agent_users' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-address-card" />
                                    <p>
                                         Menu3
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" style={{ display: this.state.showmenu_m7 ? 'block' : 'none' }}>
                            <Link href="/wallets">
                                <a className={['nav-link', pathname === '/wallets' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-money" />
                                    <p>
                                        Menu4
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item has-treeview menu-open">
                            <a href="#" className='nav-link'>
                                <i className="nav-icon fa fa-cubes" />
                                <p>
                                Menu5
                                    <i className="right fa fa-angle-left" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item" style={{ display: this.state.showmenu_m3 ? 'block' : 'none' }}>
                                    <a href="/game_bands" className={['nav-link', pathname === '/game_bands' ? 'active' : ''].join(' ')}>
                                        <i className="fa fa-circle-o nav-icon" />
                                        <p>Sub Menu5</p>
                                    </a>
                                </li>
                                <li className="nav-item" style={{ display: this.state.showmenu_m3 ? 'block' : 'none' }}>
                                    <a href="/game_bands_sort" className={['nav-link', pathname === '/game_bands_sort' ? 'active' : ''].join(' ')}>
                                        <i className="fa fa-sort nav-icon" />
                                        <p>Sub Menu5</p>
                                    </a>
                                </li>
                                <li className="nav-item" style={{ display: this.state.showmenu_m3 ? 'block' : 'none' }}>
                                    <a href="/game_lists" className={['nav-link', pathname === '/game_lists' ? 'active' : ''].join(' ')}>
                                        <i className="fa fa-circle-o nav-icon" />
                                        <p>Sub Menu5</p>
                                    </a>
                                </li>
                                <li className="nav-item" style={{ display: this.state.showmenu_m3 ? 'block' : 'none' }}>
                                    <a href="/game_provider" className={['nav-link', pathname === '/game_provider' ? 'active' : ''].join(' ')}>
                                        <i className="fa fa-circle-o nav-icon" />
                                        <p>Sub Menu5</p>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item" style={{ display: this.state.showmenu_m4 ? 'block' : 'none' }}>
                            <Link href="/game_service">
                                <a className={['nav-link', pathname === '/game_service' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-exchange" />
                                    <p>
                                        Menu6
                                       {/*  <span className="right badge badge-success">2</span> */}
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" style={{ display: this.state.showmenu_m5 ? 'block' : 'none' }}>
                            <Link href="/users">
                                <a className={['nav-link', pathname === '/users' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-user-circle" />
                                    <p>
                                        Menu7
                                       {/*  <span className="right badge badge-success">2</span> */}
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item has-treeview menu-open"  >
                            <a href="#" className='nav-link'>
                                <i className="nav-icon fa fa-gears" />
                                <p>
                                    Menu8
                                    <i className="right fa fa-angle-left" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item" style={{ display: this.state.showmenu_m6 ? 'block' : 'none' }}>
                                    <a href="/game_lucky" className={['nav-link', pathname === '/game_lucky' ? 'active' : ''].join(' ')}>
                                        <i className="fa fa-gamepad nav-icon" />
                                        <p>Free Games Setting</p>
                                    </a>
                                </li>
                                <li className="nav-item" style={{ display: this.state.showmenu_m6 ? 'block' : 'none' }}>
                                    <a href="/user_permission" className={['nav-link', pathname === '/user_permission' ? 'active' : ''].join(' ')}>
                                        <i className="fa fa-circle-o nav-icon" />
                                        <p>User Permission</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/">
                                <a className={['nav-link', pathname === '/' ? 'active' : ''].join(' ')} onClick={() => {
                                    Cookies.remove('user');
                                    Cookies.remove('SystemSetting');
                                    Cookies.remove('SystemUser');
                                    Cookies.remove('Home');
                                    Cookies.remove('Agents');
                                    Cookies.remove('Games');
                                    Router.push("/");
                                }}>
                                    <i className="nav-icon fa fa-sign-out" />

                                    <p>
                                        <font className="font-logout">Log out</font>
                                    </p>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    }
}

AdminSidebar.propTypes = {
    projectName: PropTypes.string,
};

AdminSidebar.defaultProps = {
    projectName: 'Bigwin Admin'
};

export default withRouter(AdminSidebar)