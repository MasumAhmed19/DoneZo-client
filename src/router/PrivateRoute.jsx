import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-spinner loading-xl"></span></div>
    ;
    if(user) return children;
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;