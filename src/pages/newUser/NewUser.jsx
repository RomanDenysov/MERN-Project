import './newUser.scss'

export const NewUser = () => {
  return (
    <div className='new-user bg-color'>
        <h1>New User</h1>
        <form className="add__form">
            <div className="add__form-item">
                <label className='title-bld'>Username</label>
                <input 
                    type="text" 
                    placeholder='killer666' />
            </div>
            <div className="add__form-item">
                <label className='title-bld'>Full Name</label>
                <input 
                    type="text" 
                    placeholder='John Connor' />
            </div>
            <div className="add__form-item">
                <label className='title-bld'>Email</label>
                <input type="email" placeholder='killer666@gmail.com' />
            </div>
            <div className="add__form-item">
                <label className='title-bld'>Password</label>
                <input type="password" placeholder='password' />
            </div>
            <div className="add__form-item">
                <label className='title-bld'>Phone</label>
                <input type="text" placeholder='+421 999 999 999' />
            </div>
            <div className="add__form-item">
                <label className='title-bld'>Address</label>
                <input type="text" placeholder='Presov | Slovakia' />
            </div>
            <div className="add__form-item">
                <label className='title-bld'>Gender</label>
                <div className="add__form-item-radio">
                    <input type="radio" name='gender' id='male' value='male' />
                    <label for="male">Male</label>
                    <input type="radio" name='gender' id='female' value='female' />
                    <label for="female">Female</label>
                    <input type="radio" name='gender' id='other' value='other' />
                    <label for="other">Other</label>
                </div>
            </div>
            <div className="add__form-item">
                <label className='title-bld'>Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="btn-create">Create</button>
        </form>
    </div>
  )
}
