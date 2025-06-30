import { Link } from 'react-router-dom'
import '../lib/scss/err-404.scss'

function Err_404(){
    return(
            <div className="container w-32">
                <section className='err-404'>
                    <h1>404</h1>
                    <Link to="/" >Home</Link>
                </section>
            </div>
    )
}

export default Err_404