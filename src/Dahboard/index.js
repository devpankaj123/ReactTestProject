import React, {useState} from 'react';
import {useAuth} from '../Util/index';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
const DashboradComponent = ({}) => {

    const [history] = useState(useHistory());
    const [location] = useState(useLocation());
    const authDetail = useAuth();

    console.log("authDetail",authDetail);
    const logout = () => {
        authDetail.signout(() => history.push("/login"));
    }
    return(
        <div>
            <div className="marginBottom">
                <h6>Welcome {authDetail.user} to user Dashboard</h6>
            </div>
            <div className="marginBottom">
                <input type="button" onClick={logout} value="Log Out" />
            </div>
        </div>
    )
}

export default DashboradComponent