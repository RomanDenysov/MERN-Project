import './product.scss'

import Charts from '../../components/charts/Charts'
import { productData } from '../../dummyData'
import { Link } from 'react-router-dom'
import { Publish } from '@mui/icons-material'

export const Product = () => {
  return (
    <div className='product bg-color'>
        <div className="box-flex">
            <h1>Product</h1>
            <Link to='/newproduct' className='link'>
                <button className='btn-create'>Create</button>
            </Link>
        </div>
        <div className="product_top">
            <div className="product_top-left">
                <Charts
                    data={productData} 
                    title="Sales Analytics" 
                    dataKey="Sales"/>
            </div>
            <div className="product_top-right box-shadow">
                <div className="box-flex">
                    <img src="https://specials-images.forbesimg.com/imageserve/63336ba7671f26e7fe90c319/Apple-AirPods-Pro-2-Review/960x0.jpg?cropX1=0&cropX2=1280&cropY1=51&cropY2=904" alt="" className="avatar-sq" />
                    <span className="title-sm">Apple AirPods Pro</span>
                </div>
                <div className="box-flex_cl">
                    <div className="box-flex">
                        <span className="title-bld">id:</span>
                        <span>123</span>
                    </div>
                    <div className="box-flex">
                        <span className="title-bld">sales:</span>
                        <span>12</span>
                    </div>
                    <div className="box-flex">
                        <span className="title-bld">active:</span>
                        <span>yes</span>
                    </div>
                    <div className="box-flex">
                        <span className="title-bld">in stock:</span>
                        <span>no</span>
                    </div>
                </div>
            </div>

        </div>
        <div className="box-shadow update product_bottom">
            <h3>Edit</h3>
            <form className="update-form">
                <div className="update-form_left">
                    <div className="update-form_left-item">
                        <label>Product Name</label>
                        <input type="text" placeholder='Apple Airpods Pro'/>
                    </div>
                    <div className="update-form_left-item">
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="update-form_left-item">
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <div className="update-form_right">
                    <div className="update-form_right-upload">
                        <img src="https://specials-images.forbesimg.com/imageserve/63336ba7671f26e7fe90c319/Apple-AirPods-Pro-2-Review/960x0.jpg?cropX1=0&cropX2=1280&cropY1=51&cropY2=904" alt=""/>
                        <label for='file'>
                            <Publish className='icon'/>
                        </label>
                        <input type="file" id="file" style={{display: 'none'}} />
                    </div>
                    <button>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
