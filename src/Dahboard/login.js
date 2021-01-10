import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import {useAuth} from '../Util/index';

const userList = {
  email:'usertest@gmail.com',
  password: 'test',
  name: 'Pankaj Kumar'
}
const LoginComponent = ({}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [history] = useState(useHistory());
    const [location] = useState(useLocation());

  const authDetail = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };

  const login = () => {
    if(email==='' || password ==='') {
      alert("Email Or Password is Required !!");
    } else if(userList.email !== email || userList.password !== password) {
      alert("Email Or Password is inCorrect !!");
  } else if(userList.email === email && userList.password === password ) {
      authDetail.signin(() => {
        history.replace(from);
      });
    }
  };
    return(
        <React.Fragment>
            <div>
                <div>
                    <h3>Login Page</h3>
                </div>
                <div>
                    <form>
                        <div className="marginBottom">
                            
                            <input type="email" name="userEmail" value={email} 
                                onChange={(event) => setEmail(event.target.value) }
                                placeholder="Enter Email"
                                required={true}
                            />
                        </div>
                        <div className="marginBottom">
                        
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                name="userPassword" 
                                value={password} 
                                onChange={(event) => setPassword(event.target.value) }
                                  required

                            />
                        </div>
                        <div className="marginBottom">
                          <input type="button" value="Login" onClick={login} />
                        </div>
                        <div className="marginBottom">
                          <Link to="/register">Register Here</Link>
                        </div>
                        <div className="marginBottom">
                          <Link to="/admin">Admin Login Here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginComponent;