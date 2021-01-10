import React, {useState, createContext, useContext} from 'react';

const AuthObj = {
    islogedIn: false,
    signin(cb) {
       return AuthObj.islogedIn = true,
        setTimeout(cb, 100);
    },
    signout(cb) {
       return AuthObj.islogedIn = false,
        setTimeout(cb, 100);
    }
};

const authContext = createContext();

export const useAuth = () => {
    return useContext(authContext);
}

const  useProvideAuth = () => {
    const [user, setUser] = useState(null);
    
    const signin = cb => {
      return AuthObj.signin(() => {
        setUser('Pankaj')
        cb();
      });
    };
  
    const signout = cb => {
      return AuthObj.signout(() => {
        setUser(null);
        cb();
      });
    };
  
    return {
      user,
      signin,
      signout
    };
  }

  export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
}

  