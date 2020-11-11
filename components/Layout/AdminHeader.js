import Link from 'next/link';
import Cookies from "js-cookie";

const AdminHeader = (props) => {
    return <nav className="main-header navbar navbar-expand navbar-light border-bottom  bg-info">
        <ul className="navbar-nav">
        <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars" /></a>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto">
           
            <li className="nav-item d-none d-sm-inline-block">
                <Link href="/admin"><a className="nav-link">Home</a></Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa fa-user-circle" /></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <Link href="#"><a className="nav-link">{'User:' + Cookies.get("user")}</a></Link>
            </li>
        </ul>
    </nav>
};

export default AdminHeader;