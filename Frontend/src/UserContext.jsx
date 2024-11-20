import { enqueueSnackbar } from "notistack";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const navigate=useNavigate();

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const [userloggedIn, setuserloggedIn] = useState(currentUser !== null);

    const Logout = () => {
        sessionStorage.removeItem('user');
        navigate('/Home');
        enqueueSnackbar(' Logout Successfully ', { variant: 'success' });
        setuserloggedIn(false);
    }

    return <UserContext.Provider value={{ currentUser, setCurrentUser, userloggedIn, setuserloggedIn, Logout }}>
        {children}
    </UserContext.Provider>
};

export const useUserContext = () => useContext(UserContext);