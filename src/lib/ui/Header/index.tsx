import { Link, NavLink } from 'react-router-dom'
import { _LogOut, pb } from '../../utils/pb'
import './style.scss'
import { useState } from 'react'
import Button from '../Button'
import { useTagsContext } from '../../context/TagsContext'

function Header(){
    const {data} = useTagsContext()
    const [IsLoggedIn, setIsLoggedIn] = useState(pb.authStore.isValid)
    const [search, setSearch] = useState('')
    const handleLogOut = async () =>{
        const res = await _LogOut()
        setIsLoggedIn(res)
    }

    return(
        <header>
            <div className="container px-4">
                {/* TopBar */}
                <div className="topbar">
                    <div className="left">
                        <span>{new Date().toLocaleDateString("en-US", {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</span>
                    </div>
                    <div className="right">
                        {IsLoggedIn ? <>
                            <Button redirect={"/user/"+pb.authStore.record.id} variant="ghost" size="sm" >Profile</Button>
                            <Button variant='outline' size="sm" action={handleLogOut} >Log out</Button>
                        </> : <>
                            <Button redirect='/login' size="sm" variant="ghost">Login</Button>
                            <Button redirect='/register' size="sm" variant="outline">Register</Button>
                        </> }
                    </div>
                </div>
                {/* Main */}
                <div className="header-main">
                    <div className="navigation">
                        <Link className='logo' to="/" >OpenNews</Link>
                        <nav>
                            <NavLink to="/" >Home</NavLink>
                            {data?.map((tag:any) => (
                                <NavLink  key={tag.id} to={"/articles/tag/" + tag.name}> {tag.name} </NavLink>
                            ))}
                        </nav>
                    </div>
                    <div className="search">
                        <input placeholder='Search news...' type="text" name='search' onChange={(e) => setSearch(e.target.value)} />
                        <Link to={"/articles/search?q="+search} onClick={() => setSearch('')} ><i className='bx  bx-search-big'  ></i> </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header