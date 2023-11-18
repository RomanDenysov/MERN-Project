import './featuredInfo.scss'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

const FeaturedInfo = () => {
  return (
    <div className='featured'>

        <div className="featured-item box-shadow">
            <span className="title">Revanue</span>
            <div className="descr">
                <span className="title">2,500$</span>
                <span className="rate">-11,4<ArrowDownward className='icon-negative'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featured-item box-shadow">
            <span className="title">Sales</span>
            <div className="descr">
                <span className="title">2,102$</span>
                <span className="rate">-6,4<ArrowDownward className='icon-negative'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featured-item box-shadow">
            <span className="title">Cost</span>
            <div className="descr">
                <span className="title">4,524$</span>
                <span className="rate">+9,2<ArrowUpward className='icon-positive'/></span>
               
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

    </div>
  )
}

export default FeaturedInfo