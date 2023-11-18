import { Link } from 'react-router-dom'
import './sidebar.scss'
import { 
    LineStyle, 
    Timeline, 
    TrendingUp, 
    PersonOutline, 
    Storefront, 
    Payment, 
    BarChart, 
    MailOutline, 
    DynamicFeed, 
    ChatBubbleOutline, 
    Inbox, 
    WorkOutline, 
    Error } from '@mui/icons-material'


const Sidebar = () => {

  return (
    <div className="sidebar bg-color">
        <div className="sidebar__wrapper">
            <h3>Dashboard</h3>
            <ul className='menu_list'>
                <Link to="/" className='link'>
                    <li className="menu_list-item active">
                            <LineStyle/>Home
                    </li>
                </Link>
                    <li className="menu_list-item">
                        <Timeline/>Analytics
                    </li>
                    <li className="menu_list-item">
                        <TrendingUp/>Sales
                    </li>
            </ul>
            <h3>Quick Menu</h3>
            <ul className='menu_list'>
                <Link to="/users" className='link'>
                    <li className="menu_list-item">
                        <PersonOutline/>Users
                    </li>
                </Link>
                <Link to="/products" className='link'>
                    <li className="menu_list-item">
                        <Storefront/>Products
                    </li>
                </Link>
                <Link to="/transactions" className='link'>
                    <li className="menu_list-item">
                        <Payment/>Transactions
                    </li>
                </Link>
                <Link to="/reports" className='link'>
                    <li className="menu_list-item">
                        <BarChart/>Reports
                    </li>
                </Link>
            </ul>
            <h3>Notifications</h3>
            <ul className='menu_list'>
                    <li className="menu_list-item">
                        <MailOutline/>Mail
                    </li>
                    <li className="menu_list-item">
                        <DynamicFeed/>Feedback
                    </li>
                    <li className="menu_list-item">
                        <ChatBubbleOutline/>Messages
                    </li>
                    <li className="menu_list-item">
                        <Inbox/>Sales
                    </li>
            </ul>
            <h3>Staff</h3>
            <ul className='menu_list'>
                    <li className="menu_list-item">
                        <WorkOutline/>Manage
                    </li>
                    <li className="menu_list-item">
                        <Timeline/>Analytics
                    </li>
                    <li className="menu_list-item">
                        <Error/>Reports
                    </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar