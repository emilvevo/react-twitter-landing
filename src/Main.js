import React from 'react';

function Main(){
    return(
        <div className="main">
            <img src="icon.svg" alt="" className="icon"/>
            <h1>Happening now</h1>
            <h4>Join Twitter today.</h4>
            <div className="access">
                <button className="googlesign"><img src="google.svg" alt="" width="30px" height="30px"/> Sign In with Google</button>
                <br />
                <button className="applesign"><i class="fab fa-apple apple"></i> Sign Up with Apple</button>
                <p className="or">or</p>
                <button className="phoneoremail">Sign up with phone or email</button>
                <span className="acceptance">By signing up, you agree to the <a href=""> Terms of Service</a> and <a href=""> Privacy Policy</a>, including <a href=""> Cookie Use.</a></span>

                <h3 className="already">Already have an account?</h3>
                <button className="signin">Sign in</button>
            </div>

        </div>
    );
};

export default Main;