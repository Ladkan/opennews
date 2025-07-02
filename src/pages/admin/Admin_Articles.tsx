import { useQuery } from "@tanstack/react-query"
import { Admin_getAllArticles } from "../../lib/query/articles.queryOptions"
import { useState } from "react"
import '../../lib/scss/admin-articles.scss'
import ArticleTable from "../../lib/ui/Admin/ArticleTable";
import ApproveModal from "../../lib/ui/Admin/ApproveModal";

function Admin_Articles(){
        const [activeTab, setActiveTab] = useState(1);
        const [approveArticle, setApproveArticle] = useState('')
        const {data:allArticles} = useQuery(Admin_getAllArticles())
        const pendingArticles = allArticles?.filter((i) => i.status === "pending").map(obj => ({...obj}))
    return(
        <section>
            <ApproveModal id={approveArticle} />
            <div className="container">
                <div className="tabs">
                    <div className="tablist">
                        <div className={`${activeTab === 1 && "active"} tabBtn`} onClick={() => setActiveTab(1)} >All articles</div>
                        <div className={`${activeTab === 2 && "active"} tabBtn`} onClick={() => setActiveTab(2)}>Pending articles</div>
                    </div>
                    <div className={`${activeTab === 1 && "active"} tabpanel`}>
                        <ArticleTable data={allArticles} approveAction={setApproveArticle} />
                    </div>
                    <div className={`${activeTab === 2 && "active"} tabpanel`}>
                        <ArticleTable data={pendingArticles} approveAction={setApproveArticle} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Admin_Articles