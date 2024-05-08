import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from './../Spinner';

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get("/api/v1/auth/admin-auth");
                if (res.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                    setAuth({ token: null }); // Update auth state if authentication fails
                }
            } catch (error) {
                console.error("Error checking authentication:", error);
                setOk(false);
                setAuth({ token: null }); // Update auth state on error
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token, setAuth]);

    return ok ? <Outlet /> : <Spinner path="" />;
}