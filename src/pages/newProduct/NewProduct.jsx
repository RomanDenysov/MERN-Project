import { Publish } from '@mui/icons-material'
import './newProduct.scss'

export const NewProduct = () => {
  return (
    <div className='new-product bg-color'>
        <h1>New Product</h1>
        <form className="add__form">
            <div className="add__form-item">
                <label className='title-sm'>Image</label>
                <input type="file" id='file'/>
            </div>
            <div className="add__form-item">
                <label className='title-sm'>Name</label>
                <input type="text" placeholder='product name'/>
            </div>
            <div className="add__form-item">
                <label className='title-sm'>Price</label>
                <input type="text" placeholder='product price $'/>
            </div>
            <div className="add__form-item">
                <label className='title-sm'>Stock</label>
                <input type="text" placeholder='in stock'/>
            </div>
            <div className="add__form-item">
                <label className='title-sm'>Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className='btn-create'>Create</button>
        </form>
    </div>
  )
}
