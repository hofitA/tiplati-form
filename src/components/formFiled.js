
import { useState } from 'react';

const FormFiled = (props) => {

    const [filedValue] = useState();
    let {label, type, name, changeHandle, errorMessage, updateValue} = props;
    let inputId= label.replace(" ", "-")

    const checkValidation = (e) =>{
        if (changeHandle) {
            let errorEl = document.getElementById(e.target.id).parentNode.querySelector(".errorMessage");
            errorEl.innerHTML = changeHandle(e.target.value) ? "" : `${errorMessage}`        
        }
        updateValue(label, e.target.value)
    }
    
    return (
        <div className="form-group">
            <label htmlFor={inputId}>{label}</label>
            <input 
                type={type} 
                name={name} 
                value={filedValue} 
                onChange={(e)=> checkValidation(e)} 
                className="form-control" 
                placeholder={name} 
                id={inputId}/>
            <p className="errorMessage"></p>
        </div>
    )
}

export default FormFiled