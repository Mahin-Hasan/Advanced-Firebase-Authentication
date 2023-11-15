import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const authInfo = { user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}
/*
1. Create Context and (export it)
2. Set Provider with value
3. use the auth provider in the AuthProvider component as children as children and use it in the middle of the Provider.
4. useContext
*/