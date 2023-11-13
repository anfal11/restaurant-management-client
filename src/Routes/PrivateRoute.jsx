import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
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
    if(user){
        return children;
    }
    return <Navigate to="/login"/>

};

export default PrivateRoute;