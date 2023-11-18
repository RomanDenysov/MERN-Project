
import Charts from '../../components/charts/Charts'
import FeaturedInfo from '../../components/featuredinfo/Featuredinfo'
import './home.scss'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

const Home = () => {
  return (
    <div className='home bg-color'>
        <FeaturedInfo/>
        <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="home-widget">
            <WidgetSm/>
            <WidgetLg/>
        </div>
    </div>
  )
}

export default Home