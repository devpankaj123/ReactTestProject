import React, {useState} from 'react';

const AdminDashborad = ({name, logout}) => {

    return(
        <div>
            <div className="marginBottom">
                <h6>Welcome to {name} Dashboard</h6>
            </div>
            <div className="marginBottom">
                <input type="button" onClick={logout} value="Log Out" />
            </div>
        </div>
    )
}

export default AdminDashborad;