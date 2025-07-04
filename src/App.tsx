import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
//Global css
import './lib/scss/global.scss'
//Pages
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Err_404 from "./pages/404"
import Articles from "./pages/Articles"
import Create from "./pages/Create"
import Update from "./pages/Update"
import ArticlesTag from "./pages/ArticlesTag"
import Article from "./pages/Article"
import User from "./pages/User"
//Admin Pages
import Admin from "./pages/admin/Admin"
import Admin_Articles from "./pages/admin/Admin_Articles"
//Layout
import Layout from "./lib/layout/_layout"
import AdminLayout from "./lib/layout/_admin"
//Protected
import ProtectedRoute from "./lib/utils/ProtectedRoute"
import AdminRoute from "./lib/utils/AdminRoute"
import Admin_Verifications from "./pages/admin/Admin_Verifications"
import Notifications from "./pages/Notifications"

function App() {
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Main */}
          <Route element={<Login />} path="/login"/>
          <Route element={<Register />} path="/register" />
            <Route element={<Layout />} >
              <Route element={<Err_404 />} path="*" />
              <Route element={<Home />} path="/" />
              <Route element={<Articles />} path="/articles" />
              <Route element={<ArticlesTag />} path="/articles/:id" />
              <Route element={<Article />} path="/article/:id" />
              <Route element={<ProtectedRoute />} >
                <Route element={<User />} path="/user" />
                <Route element={<Notifications />} path="/notifications" />
                <Route element={<Create />} path="/create" />
                <Route element={<Update />} path="/update/:id" />
              </Route>
            </Route>
            {/* Admin */}
            <Route element={<AdminRoute />} >
              <Route element={<AdminLayout />}>
                <Route element={<Err_404 />} path="admin/*" />
                <Route element={<Admin />} path="/admin" />
                <Route element={<Admin_Articles />} path="/admin/articles" />
                <Route element={<Admin_Verifications />} path="/admin/verifications" />
              </Route>
            </Route>
        </Routes>
      </BrowserRouter>
                  <ReactQueryDevtools initialIsOpen={false} /> 
    </QueryClientProvider>
  )
}

export default App
