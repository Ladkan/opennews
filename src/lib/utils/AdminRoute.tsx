import { Navigate, Outlet } from "react-router-dom"
import { isStaff } from "."

function AdminRoute(){
    return isStaff() ? <Outlet /> : <Navigate to={"/"}  />
}

export default AdminRoute