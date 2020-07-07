import Link from 'next/link';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Cookies from "js-cookie";
import Router from "next/router";
//import "../../styles/styles.scss"

class AdminSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: Cookies.get("user"),
            showmenu_m1: Boolean(Number(Cookies.get("userrole_m1"))),
            showmenu_m2: Boolean(Number(Cookies.get("userrole_m2"))),
            showmenu_m3: Boolean(Number(Cookies.get("userrole_m3"))),
            showmenu_m4: Boolean(Number(Cookies.get("userrole_m4"))),
            showmenu_m5: Boolean(Number(Cookies.get("userrole_m5"))),
            showmenu_m6: Boolean(Number(Cookies.get("userrole_m6"))),
            showmenu_m7: Boolean(Number(Cookies.get("userrole_m7"))),
            showmenu_m8: Boolean(Number(Cookies.get("userrole_m8"))),
            showmenu_m9: Boolean(Number(Cookies.get("userrole_m9"))),
            showmenu_m10: Boolean(Number(Cookies.get("userrole_m10"))),
        };
    }
    componentDidMount() {
        console.log("show user sidebar : " + this.state.username);
    }
    render() {
        const { pathname } = this.props.router;
        return <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ minHeight: '846px' }}>
            <Link href="/admin">
                <a className="brand-link text-center">
                    <i className="fa fa-user-secret fa-2x brand-image ml-2" />
                    <span className="brand-text font-weight-light">SpiderBot Admin</span>
                </a>
            </Link>

            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item" style={{ display: this.state.showmenu_m1 ? 'block' : 'none' }}>
                            <Link href="/admin">
                                <a className={['nav-link', pathname === '/' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-home" />
                                    <p>Home</p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" style={{ display: this.state.showmenu_m2 ? 'block' : 'none' }}>
                            <Link href="/user">
                                <a className={['nav-link', pathname === '/user' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-user-circle" />
                                    <p>
                                        Users
                                        <span className="right badge badge-success">2</span>
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" style={{ display: this.state.showmenu_m3 ? 'block' : 'none' }}>
                            <Link href="/mobile">
                                <a className={['nav-link', pathname === '/mobile' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-phone" />
                                    <p>
                                        Mobile
                                        <span className="right badge badge-success">5</span>
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" style={{ display: this.state.showmenu_m4 ? 'block' : 'none' }}>
                            <Link href="/web">
                                <a className={['nav-link', pathname === '/web' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-globe" />
                                    <p>
                                        Webs
                                        <span className="right badge badge-success">0</span>
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" style={{ display: this.state.showmenu_m5 ? 'block' : 'none' }}>
                            <Link href="/message">
                                <a className={['nav-link', pathname === '/message' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-comment" />
                                    <p>
                                        Message
                                        <span className="right badge badge-success">7</span>
                                    </p>
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item" style={{ display: this.state.showmenu_m6 ? 'block' : 'none' }}>
                            <Link href="/userfake">
                                <a className={['nav-link', pathname === '/userfake' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-id-badge" />
                                    <p>
                                        UserFake
                                        <span className="right badge badge-success">0</span>
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" style={{ display: this.state.showmenu_m7 ? 'block' : 'none' }}>
                            <Link href="/useragent">
                                <a className={['nav-link', pathname === '/useragent' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-server" />
                                    <p>
                                        User Agent
                                        <span className="right badge badge-success">0</span>
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item" style={{ display: this.state.showmenu_m8 ? 'block' : 'none' }}>
                            <Link href="/mobileconfig">
                                <a className={['nav-link', pathname === '/mobileconfig' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon 	fa fa-cogs" />
                                    <p>
                                        MobileConfig
                                        <span className="right badge badge-success">1</span>
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/">
                                <a className={['nav-link', pathname === '/' ? 'active' : ''].join(' ')} onClick={() => { Cookies.remove('user'); Router.push("/"); }}>
                                    <i className="nav-icon 	fa fa-window-close-o" />
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
    projectName: 'AdminLTE 3'
};

export default withRouter(AdminSidebar)