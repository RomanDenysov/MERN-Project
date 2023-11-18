import './charts.scss'
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer } from 'recharts';

export default function Charts({title, data, dataKey, grid}) {

  return (
    <div className='charts box-shadow'>
        <h3>{title}</h3>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke='#4c4e4e'/>
                <Line type='monotone' dataKey={dataKey} stroke='#4c4e4e'/>
                <Tooltip/>
                {grid && <CartesianGrid stroke='#bbbcbc' strokeDasharray='5 5'/>}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
