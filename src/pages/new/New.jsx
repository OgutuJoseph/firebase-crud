import { useState, useEffect } from 'react';
import './New.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
import { doc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db, storage } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const New = ({ inputs, title }) => {

    const [file, setFile] = useState('');
    console.log('file: ', file);
    const [data, setData] = useState({});
    const [percentage, setPercentage] = useState(null);

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setPercentage(progress);
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                default:
                    break;
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
                console.log('error: ', error);
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log('File available at', downloadURL);
                    setData((prev) => ({ ...prev, img: downloadURL }))
                });
            }
            );
        };
        file && uploadFile();
    }, [file])

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
                            <button disabled={percentage !== null && percentage < 100} type='submit'>Save</button>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New