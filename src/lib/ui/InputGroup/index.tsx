import { FirstToUpper } from "../../utils"
import './style.scss'

function InputGroup(props:any){
    
    const {name, type, handleChange, placeholder} = props
    
    return(
        <div className="input-group" >
            <label htmlFor={name}>{FirstToUpper(name)}</label>
            <input placeholder={placeholder} type={type} name={name} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export default InputGroup