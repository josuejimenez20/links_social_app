import { authLoginServiceOn, authVerifyTokenServiceOn } from "../../../socketServices/authServices/authLoginService";

export function auth_login_exports() {
    authLoginServiceOn();
    authVerifyTokenServiceOn();
}
