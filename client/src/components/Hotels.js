import React, { useState } from 'react';
import "./styles.css"
import { doBooking } from '../services.js/api';
function BookHotel() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        checkin: '',
        checkout: '',
        roomnumber: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response=await doBooking(formData);
        console.log(response);  
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Mobile:
                        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Check-in:
                        <input type="date" name="checkin" value={formData.checkin} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Check-out:
                        <input type="date" name="checkout" value={formData.checkout} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Room number:
                        <input type="text" name="roomnumber" value={formData.roomnumber} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}

export default BookHotel;
