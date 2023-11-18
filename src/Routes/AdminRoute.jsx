import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { BeatLoader } from "react-spinners";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    
    if(loading || isAdminLoading){
        return <>

        <div className="h-screen flex justify-center items-center">
        <BeatLoader
        loading={loading}
        size={80}
        color="#D45E1D"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
        </>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace />
};

export default AdminRoute;