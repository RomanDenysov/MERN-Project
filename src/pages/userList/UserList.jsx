import { useState } from 'react'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../dummyData';




const UserList = () => {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
            return (
                <div className='user_list-item'>
                    <img className='avatar' src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 100,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 120,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return(
                    <div className='user_list-action'>
                    <Link to={"/user/"+params.row.id}>
                    <button className="user_list-edit">Edit</button>
                    </Link>
                    <DeleteOutline className='user_list-delete' onClick={()=>handleDelete(params.row.id)}/>
                    </div>
                )
            }
        }
      ];
      
  return (
    <div className='user_list bg-color'>
 <DataGrid
        rowHeight={68} 
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default UserList