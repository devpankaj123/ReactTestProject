import React , {useState} from 'react';
import {
    Link
  } from "react-router-dom";
  import AdminDashborad from './index';

  const userList = {
      email: 'admintest@gmail.com',
      password: 'admin',
      name: 'Admin'
  }
const AdminLoginComponent = ({}) => {
    const[adminEmail, setAdminEmail] = useState('');
    const[adminPassword, setAdminPassword] = useState('');
    const [isLogedIn, setIslogedIn] = useState(false);
    
  
    const login = () => {
        if(adminEmail==='' || adminPassword ==='') {
            alert("Email Or Password is Required !!");
        } else if(userList.email !== adminEmail || userList.password !== adminPassword) {
            alert("Email Or Password is inCorrect !!");
        } else if(userList.email === adminEmail && userList.password === adminPassword ){
            setIslogedIn(true);
        }
      };

      const logout =() => {
        setIslogedIn(false);
        setAdminEmail('');
        setAdminPassword('');
      }
    return(
        <React.Fragment>
            {!isLogedIn && (
            <div>
                <div>
                    <h3>Admin Login Page</h3>
                </div>
                <div>
                    <form>
                        <div className="marginBottom">
                            <input type="email" name="userEmail" value={adminEmail} 
                                onChange={(event) => setAdminEmail(event.target.value) }
                                placeholder="Enter Email"
                            />
                        </div>
                        <div className="marginBottom">
                            <input 
                                type="password" 
                                name="userPassword" 
                                placeholder="Enter Password"
                                value={adminPassword} 
                                onChange={(event) => setAdminPassword(event.target.value) } 
                            />
                        </div>
                        <div className="marginBottom">
                          <input type="button" value="Login" onClick={login} />
                        </div>
                        <div className="marginBottom">
                            <Link to="/login">User Login here</Link>
                        </div>
                    </form>
                </div>
                
            </div>
            )}
            {isLogedIn && (
                <AdminDashborad name={userList.name} logout={logout}/>
            )}
        </React.Fragment>
    )
}

export default AdminLoginComponent;