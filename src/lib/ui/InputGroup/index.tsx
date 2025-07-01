import { FirstToUpper } from "../../utils"
import './style.scss'

function InputGroup(props:any){
    
    const {name, type, handleChange, placeholder, options, value} = props
    
    if(type==="select"){

        if(options){
            handleChange(options[0].id)
        }

        return(
            <div className="input-group" >
                <label htmlFor={name}>{FirstToUpper(name)}</label>
                <select value={value} name={name} id="" onChange={(e) => handleChange(e.target.value)}>
                    {options?.map((opt) => (
                        <option key={opt.id} value={opt.id} >{FirstToUpper(opt.name)}</option>
                    ))}
                </select>
            </div>
        )
    } else {
        return(
            <div className="input-group" >
                <label htmlFor={name}>{FirstToUpper(name)}</label>
                <input value={value} placeholder={placeholder} type={type} name={name} onChange={(e) => handleChange(e.target.value)} />
            </div>
        )
    }
}

export default InputGroup