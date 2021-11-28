import React, {useState} from 'react'
import FormFiled from './formFiled'

const form = [
    {
        type: "text",
        value: "",
        errorMessage: "This feild is requiered",
        label: "First Name",
        validator: function(val) { return val.length > 0;}
    },
    {
        type: "number",
        value: 35,
        errorMessage: "Value must be bigger then 0",
        label: "Age"
    },
    {
        type: "email",
        value: "",
        errorMessage: "the mail address is not valid",
        label: "Mail Address",
        validator: function(val) { return  (/\S+@\S+\.\S+/.test(val) )}
    },
    {
        type: "text",
        value: "",
        errorMessage: "This feild contain only numbers",
        label: "Phone Number",
        validator: function (val) {return (/^\d+$/.test(val) && val.length == 10) }
    },
    {
        type: "date",
        value: "",
        errorMessage: "This feild contain only numbers",
        label: "date",
        validator: function () {return true}
    }
]


export const MyForm = () => {

    let [formValues, setValues] = useState([])
    // let [countReqiuer, setCount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        formValues.forEach((item)=>{
            console.log(`${item.key} --- ${item.value}`);
        })
    }

    const updateValue = (index) => (key, value) => {
        // let objIndex = formValues.findIndex(obj => obj.key === key)
        if( index < 0 ){
            // setCount(countReqiuer + 1)
            setValues(formValues.concat({key, value}))
        } else{
            let items = [...formValues]
            let item = {...items[index]}
            item.value = value
            items[index] = item
            setValues(formValues = items)
        }
    }

    return(

        <form onSubmit={handleSubmit} >
            {form.map((item, index) => { 
                return (
                    <FormFiled 
                        key={index} 
                        label={item.label} 
                        type={item.type} 
                        name={item.label} 
                        changeHandle={item.validator} 
                        errorMessage={item.errorMessage}
                        updateValue={updateValue(index)}/>
                )
            })}
            <input type="submit" value="Submit" className="btn"/>
        </form>
    )
}

export default MyForm