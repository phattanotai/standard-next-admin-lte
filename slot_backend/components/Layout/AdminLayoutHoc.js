import "../../styles/styles.scss"
import AdminHeader from "../../components/Layout/AdminHeader";
import AdminSidebar from "../../components/Layout/AdminSidebar";
import AdminControlSidebar from "../../components/Layout/AdminControlSidebar";
import AdminContent from "../../components/Layout/AdminContent";
import AdminFooter from "../../components/Layout/AdminFooter";
import PropTypes from 'prop-types';

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
            <AdminFooter rightContent={'Develop by Spider Anonymous Team'} leftContent={<div>Copyright &copy; CM Games 2020</div>}/>
        </div>
    }
}

AdminLayoutHoc.propTypes = {
    contentTitle: PropTypes.string,
    contentTitleButton: PropTypes.element,
};
export default AdminLayoutHoc