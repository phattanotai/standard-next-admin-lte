import Link from 'next/link';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Cookies from "js-cookie";

class AdminSidebar extends React.Component {
    render() {
        const { pathname } = this.props.router;
        return <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{minHeight: '846px'}}>
            <Link href="/">
                <a className="brand-link text-center">
                    <i className="fa fa-home fa-2x brand-image ml-2"/>
                    <span className="brand-text font-weight-light">{this.props.projectName && this.props.projectName}</span>
                </a>
            </Link>

            <div className="sidebar">
                <nav className="mt-2">                    
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    
                        <li className="nav-item">
                            <Link href="/admin">
                                <a className={['nav-link', pathname === '/' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-line-chart"/>
                                    <p>
                                        DashBoard
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/users">
                                <a className={['nav-link', pathname === '/users' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-user-circle"/>
                                    <p>
                                        Users                                        
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/member">
                                <a className={['nav-link', pathname === '/member' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-group"/>
                                    <p>
                                        Member                                        
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/wallets">
                                <a className={['nav-link', pathname === '/wallets' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-drivers-license"/>
                                    <p>
                                        Wallets                                        
                                    </p>
                                </a>
                            </Link>
                        </li>      
                        <li className="nav-item" style={{ display: Cookies.get("agenttype") === 'Master' ? 'block' : 'none' }}>
                            <Link href="/agents">
                                <a className={['nav-link', pathname === '/agents' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-id-badge"/>
                                    <p>
                                        Agent                                        
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/game_service">
                                <a className={['nav-link', pathname === '/game_service' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-exchange"/>
                                    <p>
                                        Games Service                                        
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/reports">
                                <a className={['nav-link', pathname === '/reports' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-gamepad"/>
                                    <p>
                                        Play game Report                                        
                                    </p>
                                </a>
                            </Link>
                        </li>     
                        <li className="nav-item">
                            <Link href="/transaction">
                                <a className={['nav-link', pathname === '/transaction' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-tasks"/>
                                    <p>
                                        Transaction Report                                        
                                    </p>
                                </a>
                            </Link>
                        </li>      
                        <li className="nav-item">
                            <Link href="/movecredit">
                                <a className={['nav-link', pathname === '/movecredit' ? 'active' : ''].join(' ')}>
                                    <i className="nav-icon fa fa-bitcoin"/>
                                    <p>
                                        MoveCredit Report                                        
                                    </p>
                                </a>
                            </Link>
                        </li>                 
                        <li className="nav-item">
                            <Link href="/">
                                <a className={['nav-link', pathname === '/' ? 'active' : ''].join(' ')} onClick={() => { 
                                    /* Cookies.remove('user'); 
                                    Cookies.remove('SystemSetting'); 
                                    Cookies.remove('SystemUser');
                                    Cookies.remove('Home');
                                    Cookies.remove('Agents');
                                    Cookies.remove('Games'); */
                                    Router.push("/"); 
                                    
                                    }}>
                                    <i className="nav-icon fa fa-sign-out" />

                                    <p>
                                        <font className="font-logout">Log out</font>
                                    </p>
                                </a>
                            </Link>
                        </li>
                        {/* <li className="nav-item has-treeview menu-closed">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fa fa-dashboard"/>
                                <p>
                                    Other Pages
                                    <i className="right fa fa-angle-left"/>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="fa fa-circle-o nav-icon"/>
                                        <p>Active Page</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="fa fa-circle-o nav-icon"/>
                                        <p>Inactive Page</p>
                                    </a>
                                </li>
                            </ul>
                        </li> */}
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
    projectName: 'BigWin for ' + Cookies.get("agenttype")
};

export default withRouter(AdminSidebar)