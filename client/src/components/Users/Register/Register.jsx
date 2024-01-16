import React from 'react'
import './Register.css';
import { useForm } from '../../../hooks/useForm'
import { errorMessageInput, initialFocusregister, initialValuesRegister, inputValidtion } from '../../../config/constants';
import { useAuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const navigate = useNavigate()
    const initialValues = initialValuesRegister;
    const initialFocs = initialFocusregister;
    const errorMessage = errorMessageInput;
    const { onRegister } = useAuthContext()

    const onRegisterSubmit = (values) => {
        onRegister(values);
        // navigate('/')
    }

    const { values, focus, changeHandler, onSubmit, changeFocus } = useForm(
        initialValues,
        initialFocs,
        onRegisterSubmit)

    return (
        <div className='registerPage'>



            <form method='POST' className="registerForm" onSubmit={onSubmit}>

                <h3 className='registerTop'> Create an Account</h3>

                <div className='registerDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.name.toString()}
                        pattern={inputValidtion.name}
                        type="text"
                        name='name'
                        placeholder="First Name"
                        value={values.name}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.name}</span>
                </div>

                <div className='registerDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.lastname.toString()}
                        pattern={inputValidtion.name}
                        type="text"
                        name='lastname'
                        placeholder="Last Name"
                        value={values.lastname}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.lastname}</span>
                </div>

                <div className='registerDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.email.toString()}
                        type="email"
                        name='email'
                        placeholder="Email"
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.email}</span>
                </div>

                <div className='registerDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.phone.toString()}
                        pattern={inputValidtion.phone}
                        type="text"
                        name='phone'
                        placeholder="Phone"
                        value={values.phone}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.phone}</span>
                </div>



                <div className='registerDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.town.toString()}
                        type="text"
                        name='town'
                        placeholder="Town"
                        value={values.town}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.town}</span>
                </div>



                <div className='registerDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.street.toString()}
                        type="text"
                        name='street'
                        placeholder="Street"
                        value={values.street}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.street}</span>
                </div>

                <div className='registerDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.password.toString()}
                        pattern={inputValidtion.password}
                        type="password"
                        name='password'
                        placeholder="Password"
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.password}</span>
                </div>


                <div className='registerDiv'>
                    <input
                        required
                        onBlur={changeFocus}
                        focused={focus.confirmPassword.toString()}
                        pattern={values.password}
                        type="password"
                        name='confirmPassword'
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={changeHandler}
                    />
                    <span>{errorMessage.confirmPassword}</span>
                </div>

                <button className='btn-log-reg'>Create</button>


            </form>


        </div>
    )
}
