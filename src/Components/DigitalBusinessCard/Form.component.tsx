import React, { FormEvent } from 'react';

interface Props {
    formData: object;
    setFormData: React.Dispatch<React.SetStateAction>;
}


const Form: React.FC<Props> = ({ formData, setFormData }) => {

    function handleChange(event: any) {
        let {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: (type === "checkbox" ? checked : value)
            }
        })
    }

    return (
        <div>
            Form
            <form>
                <label htmlFor="firstName">First Name: 
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                    />
                </label>
            </form>
        </div>
    );
}

export default Form;
