import { useContext } from 'react';
import './Navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOulinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
    
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='Search...' />
                    <SearchOutlinedIcon />
                </div>
                <div className='items'>
                    <div className='item'>
                        <LanguageOutlinedIcon className='icon' />
                        English
                    </div>
                    <div className='item'>
                        <DarkModeOulinedIcon 
                            className='icon' 
                            onClick={() => dispatch({ type: 'TOGGLE' })}
                        />
                        Theme
                    </div>
                    <div className='item'>
                        <FullscreenExitOutlinedIcon className='icon' />
                        Screen Set
                    </div>
                    <div className='item'>
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <div className='counter'>1</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlinedIcon className='icon' />
                        <div className='counter'>2</div>
                    </div>
                    <div className='item'>
                        <ListOutlinedIcon className='icon' />
                        Items
                    </div>
                    <div className='item'>
                        <img src='/images/avatar/avatar1.jpg' alt='' className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar