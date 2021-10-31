import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Booking.css'


const Booking = () => {

    const { user } = useAuth();
    const history = useHistory();


    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('https://gruesome-mansion-46697.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Ordered Procced Successfully")
                    reset();
                    history.push('/home')
                }
            })
    }

    return (

        <div>

            <form onSubmit={handleSubmit(onSubmit)} className="form-content">
                {/* register your input into the hook by invoking the "register" function */}
                <input value={user.displayName}  {...register("Name")} />
                <br />
                {/* <input defaultValue={user.email} {...register("Email")} disabled /> */}
                <input type="text" value={user.email} {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

                <br />
                <input type="text" placeholder="Address" {...register("Address", { required: true, maxLength: 80 })} />
                <br />

                <input type="text" placeholder="Price" {...register("Price", { required: true, maxLength: 80 })} />
                <br />


                {/* include validation with required or other standard HTML validation rules */}
                <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />

                <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Booking;