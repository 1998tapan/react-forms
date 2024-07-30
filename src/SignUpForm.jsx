import { useState } from "react";
import "./SignUpForm.css";

export default function SignUpForm() {
    const initializeFormData = () => {
        return {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    }

    const [formData, setFormData] = useState(initializeFormData);

    const handleChange = (e) => {
        setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }))
    }
    const handleSubmit = () => {
        for (const k in formData) {
            console.log(k, formData[k]);
        }
    }
    return (
        <div className="SignUpForm">
            <h1>SignUp</h1>
            <div className="inputContainer">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="first name" />
            </div>

            <div className="inputContainer">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="last name" />
            </div>

            <div className="inputContainer">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="email" />
            </div>

            <div className="inputContainer">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="password" />
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}