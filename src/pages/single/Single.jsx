import './Single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table'

const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className='singleContainer'>
                <Navbar />
                <div className='top'>
                    <div className='left'>
                        <div className='editButton'>Edit</div>
                        <h1 className='title'>Information</h1>    
                        <div className='item'>
                            <img className='itemImg' alt=''  src='/images/single-items/avatar1.jpg' />
                            <div className='details'>
                                <h1 className='itemTitle'>John Doe</h1>
                                <div className='detailItem'>
                                    <span className='itemKey'>Email:</span>
                                    <span className='itemValue'>johndoe@gmail.com</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Phone:</span>
                                    <span className='itemValue'>(+254)719 338 629</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Addess:</span>
                                    <span className='itemValue'>18357-00100</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Country:</span>
                                    <span className='itemValue'>Kenya</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <Chart aspect={3 / 1} title='User Spending (Last 6 Months)' />    
                    </div>
                </div>
                <div className='bottom'>
                    <h1 className='title'>Last Transactions</h1>
                    <List />
                </div>
            </div> 
        </div>
    )
}

export default Single