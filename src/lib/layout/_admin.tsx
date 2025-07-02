import { Outlet } from "react-router-dom"
import Sidebar from "../ui/Admin/SideBar"
import '../scss/admin-layout.scss'

function AdminLayout(){

    return (
        <div className="wrapper">
            <Sidebar />
            <main>
                <div className="head">
                    <i title="Menu toggle" className='bx  bx-menu' onClick={() => document.querySelector("aside")?.classList.toggle("close")}></i> 
                </div>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout