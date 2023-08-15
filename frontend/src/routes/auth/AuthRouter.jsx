import { Route, Routes } from "react-router-dom";
import AuthLogin from "../../components/auth/login/AuthLogin";
import AuthRegiser from "../../components/auth/register/AuthRegister";

export default function AuthRouter() {


    return (<>


        <Routes>

            <Route path="/login" element={<AuthLogin />} />
            <Route path="/register" element={<AuthRegiser />} />

        </Routes>


    </>)

}