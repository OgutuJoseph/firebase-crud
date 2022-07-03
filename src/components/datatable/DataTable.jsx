import { useEffect, useState } from 'react';
import './DataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

// const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     { field: 'age', headerName: 'Age', type: 'number', width: 90 },
//     {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         // valueGetter: (params) =>
//         //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//         renderCell:(params)=>{
//             return (
//                 <>
//                     <span>{params.row.lastName}</span>
//                     <p>{params.row.age}</p>
//                 </>
//             )
//         }
//     },
// ];

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const DataTable = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // const fetchData = async () => {
        //     let list =[]
        //     try {
        //         const querySnapshot = await getDocs(collection(db, 'users'));
        //         querySnapshot.forEach((doc) => {
        //             // list.push(doc.data())
        //             list.push({ id: doc.id, ...doc.data() })
        //         });
        //         setData(list);
        //         console.log('list: ', list);
        //     } catch (error) {
        //         console.log('error: ', error)
        //     }
        // }
        // fetchData();

        // listen realtime
        const unsub = onSnapshot(collection(db, 'users'), (snapShot) => {
            let list  = [];
            snapShot.docs.forEach(doc => {
                list.push({ id:doc.id, ...doc.data() })
            });
            setData(list)
        }, (error) => {
            console.log('error: ', error)
        })

        return () => {
            unsub();
        }
    }, [])


    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'users', id))
            setData(data.filter(item => item.id !== id))
        } catch (error) {
            console.log('error: ', error)
        }
    }

    const actionColumn = [
        { 
            field: 'action', 
            headerName: 'Action', 
            width: 200, 
            renderCell: (params) => {
                return (
                    <div className='cellAction'>
                        <Link to='/users/test' style={{ textDecoration:'none' }}>
                            <div className='viewButton'>View</div>
                        </Link>
                        <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }
        }
    ]

    return (
        <div className='datatable'>
            <div className='datatableTitle'>
                All Users
                <Link to='/users/new' style={{ textDecoration: 'none' }} className='link'>
                    Add New
                </Link>  
            </div>
            <DataGrid
                className='datagrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable