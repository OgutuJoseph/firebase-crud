import { useState } from 'react';
import './New.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
import { doc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const New = ({ inputs, title }) => {

    const [file, setFile] = useState('');
    console.log('file: ', file);
    const [data, setData] = useState({});

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setData({ ...data, [id]: value })
    }

    const handleAdd = async (e) => {
        e.preventDefault();

        // await setDoc(doc(db, 'cities', 'LA'), {
        //     name: 'Los Angeles',
        //     state: 'CA',
        //     country: 'USA'
        // })

        try {
            const res = await createUserWithEmailAndPassword(auth, data.email, data.password)
            await setDoc(doc(db, 'users', res.user.uid), {
                ...data,
                timestamp: serverTimestamp()
            })
        } catch (error) {
            console.log('error: ', error)
        }

        
    }

    return (
        <div className='new'>
            <Sidebar />
            <div className='newContainer'>
                <Navbar />
                <div className='top'>
                    <h1>{title}</h1>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        {/* <img className='itemImg' alt='' src='/images/new/camera.jpg' />     */}
                        <img alt='' src={file ? URL.createObjectURL(file) : '/images/new/camera.jpg' } />
                    </div>
                    <div className='right'>
                        <form onSubmit={handleAdd}>
                            <div className='formInput'>
                                <label htmlFor='file'>Image: <DriveFolderUploadOutlinedIcon className='icon' /></label>
                                <input type='file' id='file' style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />
                            </div>
                            {inputs.map((input) => (
                                <div className='formInput' key={input.id}>
                                    <label>{input.label}</label>
                                    <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                            </div> 
                            ))}
                            <button type='submit'>Save</button>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New