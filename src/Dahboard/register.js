import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
const RegisterComponent = ({}) => {

    const[regEmail, setRegEmail] = useState('');
    const[regPassword, setRegPassword] = useState('');

    return(
        <React.Fragment>
            <div>
                <div>
                    <h3>Register Page</h3>
                </div>
                <div>
                    <form>
                        <div className="marginBottom">
                            <input type="email" name="userEmail" value={regEmail} 
                            placeholder="Enter Email"
                                onChange={(event) => setRegEmail(event.target.value) }
                            />
                        </div>
                        <div className="marginBottom">
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                name="userPassword" 
                                value={regPassword} 
                                onChange={(event) => setRegPassword(event.target.value) } 
                            />
                        </div>
                        <div className="marginBottom">
                          <input type="submit" value="Register" disabled/>
                        </div>
                        <div className="marginBottom">
                            <Link to="/login">Login here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RegisterComponent;