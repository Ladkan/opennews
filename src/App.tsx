import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProtectedRoute from "./lib/utils/ProtectedRoute"
import Layout from "./lib/layout/_layout"
import Home from "./pages/Home"
import Err_404 from "./pages/404"
import Articles from "./pages/Articles"
import Create from "./pages/Create"
import Update from "./pages/Update"
import './lib/scss/global.scss'
import ArticlesTag from "./pages/ArticlesTag"


function App() {
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24,
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login"/>
          <Route element={<Register />} path="/register" />
            <Route element={<Layout />} >
              <Route element={<Err_404 />} path="*" />
              <Route element={<Home />} path="/" />
              <Route element={<Articles />} path="/articles" />
              <Route element={<ArticlesTag />} path="/articles/tag/:id" />
              <Route element={<ProtectedRoute />} >
                <Route element={<Create />} path="/create" />
                <Route element={<Update />} path="/update" />
              </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
