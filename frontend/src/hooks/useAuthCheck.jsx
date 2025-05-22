import { useEffect, useState } from "react";
import { useCheckauthQuery } from "../app/services/Userapi";
import { login, logout } from "../app/actions/auth/authSlice";
import { useDispatch } from "react-redux";

export const useAuthCheck = () => {
  const { data, error, isLoading } = useCheckauthQuery();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const dispatch=useDispatch();

  useEffect(() => {
    if(!data?.loggedIn||error){
        // setIsAuthenticated(false);
        dispatch(logout());
    }else{
        // setIsAuthenticated(true);
        dispatch(login());
    }
  }, [data, isLoading]);

  return { isChecking, isAuthenticated };
};
