import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

import useRole from "../hooks/useRole";


const AdminRoute = ({ children }) => {
  const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    const [role, isAdminLoading] = useRole(user.email);

  if (loading || isAdminLoading) {
    return <progress className="progress w-full"></progress>;
  }
  if (user && role.type==="Admin") {
      return children;
}
return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
