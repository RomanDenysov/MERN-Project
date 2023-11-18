import { useState } from 'react'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../../dummyData';

export const ProductList = () => {
    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
            return (
                <div className='product_list-item'>
                    <img className='avatar-sq' src={params.row.img} alt="" />
                    {params.row.title}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return(
                    <div className='product_list-action'>
                    <Link to={"/product/"+params.row.id}>
                    <button className="product_list-edit">Edit</button>
                    </Link>
                    <DeleteOutline className='product_list-delete' onClick={()=>handleDelete(params.row.id)}/>
                    </div>
                )
            }
        }
      ];

  return (
    <div className='product_list'>
        <DataGrid
        rowHeight={72} 
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection/>
    </div>
  )
}
