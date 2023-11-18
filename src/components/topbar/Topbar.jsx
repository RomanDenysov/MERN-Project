import './topbar.scss'
import { NotificationsNone, Language, Settings } from '@mui/icons-material'


const Topbar = () => {
  return (
    <section className='topbar bg-color'>
        <div className="topbar__wrapper">
            <span className="topbar__wrapper-logo">admin</span>
            <div className="topbar__wrapper_interactive">
                <div className="icon">
                <NotificationsNone/>
                <span className="icon-badge">2</span>
                </div>
                <div className="icon">
                <Language/>
                <span className="icon-badge icon-lang">EN</span>
                </div>
                <div className="icon">
                <Settings/>
                </div>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='avatar' />
            </div>
        </div>
    </section>
  )
}

export default Topbar