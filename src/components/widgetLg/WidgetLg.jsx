import './widgetLg.scss'

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }
  return (
    <div className='widget_lg box-shadow'>
        <h3 className='title-sm'>Latest transaction</h3>
        <table className="widget_lg__table">
            <tr className="widget_lg__table-tr">
                <th className="widget_lg__table-th">Customer</th>
                <th className="widget_lg__table-th">Date</th>
                <th className="widget_lg__table-th">Amount</th>
                <th className="widget_lg__table-th">Status</th>
            </tr>
            <tr className="widget_lg__table-tr">
                <td className="widget_lg__user">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="avatar" />
                    <span className="widget_lg__user-name">Michel Jakson</span>
                </td>
                <td className="widget_lg__date">2 Jun 2022</td>
                <td className="widget_lg__amount">122,0$</td>
                <td><Button type="Approved"/></td>
            </tr>
            <tr className="widget_lg__table-tr">
                <td className="widget_lg__user">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="avatar" />
                    <span className="widget_lg__user-name">Michel Jakson</span>
                </td>
                <td className="widget_lg__date">2 Jun 2022</td>
                <td className="widget_lg__amount">122,0$</td>
                <td><Button type="Declined"/></td>
            </tr>
            <tr className="widget_lg__table-tr">
                <td className="widget_lg__user">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="avatar" />
                    <span className="widget_lg__user-name">Michel Jakson</span>
                </td>
                <td className="widget_lg__date">2 Jun 2022</td>
                <td className="widget_lg__amount">122,0$</td>
                <td><Button type="Pending"/></td>
            </tr>
            <tr className="widget_lg__table-tr">
                <td className="widget_lg__user">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="avatar" />
                    <span className="widget_lg__user-name">Michel Jakson</span>
                </td>
                <td className="widget_lg__date">2 Jun 2022</td>
                <td className="widget_lg__amount">122,0$</td>
                <td><Button type="Approved"/></td>
            </tr>
        </table>
    </div>
  )
}
