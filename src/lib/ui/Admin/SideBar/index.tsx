import { Link, NavLink } from 'react-router-dom'
import './style.scss'
import { pb } from '../../../utils/pb'

function Sidebar(){
    return (
        <aside>
            <div className="menu-wrapper">
                <span className='title'>OpenNews</span>
                <nav>
                    <Link to="/" ><i className='bx  bx-reply'  ></i> Main page</Link>
                    <NavLink to="/admin"><i className='bx  bx-home' ></i>  Admin</NavLink>
                    <NavLink to="/admin/articles"><i className='bx  bx-article'  ></i> Articles</NavLink>
                    <NavLink to="/admin/verifications" ><i className='bx  bx-stamp'  ></i> Verifications</NavLink>
                    <NavLink to="/admin/tags" ><i className='bx  bx-tag'  ></i>  Tags</NavLink>
                </nav>
            </div>
            <div className="user-wrapper">
                <div className="user-content">
                    <button title='account menu toggle'>
                        <div className="name">
                            <span>{pb.authStore.record.name}</span>
                        </div>
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar