import { Outlet } from "react-router-dom"
import Header from "../ui/Header"
import { TagsProvider } from "../context/TagsContext"
import { PublishedProvider } from "../context/ArticlesContext"
import Footer from "../ui/Footer"

function Layout(){
    return(
        <PublishedProvider>
            <TagsProvider>
                <div>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </TagsProvider>
        </PublishedProvider>
    )
}

export default Layout