// import { Navigate } from "react-router-dom";
// import { useAppSelector } from "@/app/store/hooks";
// import { selectIsAuthenticated } from "@/features/auth/model/authSlice";

const ProtectedRoute = ({ children }) => {
    // const isAuthenticated = useAppSelector(selectIsAuthenticated);

    // return isAuthenticated ? children : <Navigate to="/auth" replace />;
    return <>{children}</>;
};

export default ProtectedRoute;
