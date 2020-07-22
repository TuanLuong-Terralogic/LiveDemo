import React from 'react';
import Logo from '../Components/Logo';
import Login from '../Components/Login';
import Images from '../Components/Images';


const LoginLayout = () => {
    return (
        <div className="wrapper">
            <div className="login-container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-left">
                        <Logo />
                        <h3>Login Your Account</h3>
                        <Login />
                    </div>
                    <Images />
                </div>
            </div>
        </div>
    );
};

export default LoginLayout;