import { useState } from 'react';
import './New.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'

const New = ({ inputs, title }) => {

    const [file, setFile] = useState('');
    console.log('file: ', file);

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
                        <form>
                            <div className='formInput'>
                                <label htmlFor='file'>Image: <DriveFolderUploadOutlinedIcon className='icon' /></label>
                                <input type='file' id='file' style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />
                            </div>
                            {inputs.map((input) => (
                                <div className='formInput' key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                            </div> 
                            ))}
                            <button>Save</button>
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New