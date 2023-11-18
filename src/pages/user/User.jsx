import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import './user.scss'
import { Link } from 'react-router-dom'

export const User = () => {
  return (
    <div className='user bg-color'>
        <div className="box-flex">
            <h1>Edit User</h1>
            <Link to='/newUser'>
            <button className='btn-create box-shadow'>Create</button>
            </Link>
        </div>
        <div className="box-flex">
            <div className="user__show box-shadow">
               <div className="user__show_top">
                    <img src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="avatar" />
                    <div className="user__show_top-title">
                        <span className='title-bld'>Anna Maria</span>
                        <span>Software Engineer</span>
                    </div>
               </div>
               <div className="user__show-info">
                    <span className="title-sm">Acount Details</span>
                    <div className="box-flex">
                        <PermIdentity className='icon'/>
                        <span>annamaria99</span>
                    </div>
                    <div className="box-flex">
                        <CalendarToday className='icon'/>
                        <span>10.06.1996</span>
                    </div>
                    <span className="title-sm">Contact Details</span>
                    <div className="box-flex">
                        <PhoneAndroid className='icon'/>
                        <span>+421 951 712 415</span>
                    </div>
                    <div className="box-flex">
                        <MailOutline className='icon'/>
                        <span>annamaria99@gmail.com</span>
                    </div>
                    <div className="box-flex">
                        <LocationSearching className='icon'/>
                        <span>Presov | Slovakia</span>
                    </div>
               </div>
            </div>
            <div className="user__update box-shadow">
                <h3>Edit</h3>
                <form className="update-form box-flex">
                    <div className="update-form_left">
                        <div className="update-form_left-item">
                            <label>Username</label>
                            <input 
                                type="text" 
                                placeholder='annamaria99'/>
                        </div>
                        <div className="update-form_left-item">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                placeholder='Anna Maria'/>
                        </div>
                        <div className="update-form_left-item">
                            <label>Email</label>
                            <input 
                                type="email" 
                                placeholder='annamaria99@gmail.com'/>
                        </div>
                        <div className="update-form_left-item">
                            <label>Phone</label>
                            <input 
                                type="text" 
                                placeholder='+421 951 712 415'/>
                        </div>
                        <div className="update-form_left-item">
                            <label>Address</label>
                            <input 
                                type="text" 
                                placeholder='Presov | Slovakia'/>
                        </div>
                    </div>
                    <div className="update-form_right">
                        <div className="update-form_right-upload">
                            <img src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"/>
                            <label htmlFor="file">
                                <Publish className='icon'/>
                            </label>
                            <input type="file" id='file' style={{display: "none"}}/>
                        </div>
                        <button>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
