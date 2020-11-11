import AdminHeader from "../../components/Layout/AdminHeader";
import AdminSidebar from "../../components/Layout/AdminSidebar";
import AdminControlSidebar from "../../components/Layout/AdminControlSidebar";
import AdminContent from "../../components/Layout/AdminContent";
import AdminFooter from "../../components/Layout/AdminFooter";
import PropTypes from 'prop-types';
import React, { useState, useEffect } from "react";
/**
 * Main admin layout - A Higher Order Component
 */
class AdminLayoutHoc extends React.Component {
    render() {
        return <div className="wrapper">
            <AdminHeader/>
            <AdminSidebar/>
            <AdminContent title={this.props.contentTitle} titleButton={this.props.contentTitleButton}>
                {this.props.children}
            </AdminContent>
            <AdminControlSidebar/>
            <AdminFooter rightContent={'Standard app'} leftContent={<div>Copyright &copy; Standard app 2020</div>}/>
        </div>
    }
}

AdminLayoutHoc.propTypes = {
    contentTitle: PropTypes.string,
    contentTitleButton: PropTypes.element,
};
export default AdminLayoutHoc