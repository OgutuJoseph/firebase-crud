export const userColumns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { 
        field: 'user', 
        headerName: 'User', 
        width: 230,
        renderCell:(params)=>{
            return (
                <div className='cellWithImg'>
                    <img className='cellImg' src={params.row.img} alt='avatar' />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'phone', headerName: 'Phone', width: 230 },
    { field: 'address', headerName: 'Address', width: 100 },
    { field: 'country', headerName: 'Country', width: 100 },
    { 
        field: 'status', 
        headerName: 'Status', 
        width: 160,
        renderCell:(params)=>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]

// temporary data
export const userRows = [
    {
        id: 1,
        username: 'Snow',
        img: '/images/users/snow.jpeg',
        status: 'active',
        email: '1snow@gmail.com',
        age: 35
    },
    {
        id: 2,
        username: 'Jamie Lannister',
        img: '/images/users/lannister.jpg',
        status: 'passive',
        email: '2snow@gmail.com',
        age: 42
    },
    {
        id: 3,
        username: 'Lannister',
        img: '/images/users/lannister2.jpg',
        status: 'pending',
        email: '3snow@gmail.com',
        age: 27
    },
    {
        id: 4,
        username: 'Stark',
        img: '/images/users/stark.jpg',
        status: 'active',
        email: '4snow@gmail.com',
        age: 16
    },
    {
        id: 5,
        username: 'Targaryen',
        img: '/images/users/targaryen.jpg',
        status: 'passive',
        email: '5snow@gmail.com',
        age: 22
    },
    {
        id: 6,
        username: 'Melisandre',
        img: '/images/users/melisandre.jpg',
        status: 'active',
        email: '6snow@gmail.com',
        age: 15
    },
    {
        id: 7,
        username: 'Clifford',
        img: '/images/users/clifford.jpg',
        status: 'passive',
        email: '7snow@gmail.com',
        age: 44
    },
    {
        id: 8,
        username: 'Frances',
        img: '/images/users/frances.jpg',
        status: 'active',
        email: '8snow@gmail.com',
        age: 36
    },
    {
        id: 9,
        username: 'Roxie',
        img: '/images/users/roxie.jpg',
        status: 'active',
        email: 'snow@gmail.com',
        age: 65
    },
    {
        id: 10,
        username: 'James',
        img: '/images/users/james.jpg',
        status: 'active',
        email: '1snow@gmail.com',
        age: 48
    }
]