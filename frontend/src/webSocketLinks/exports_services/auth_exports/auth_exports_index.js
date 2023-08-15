import {auth_login_exports} from "./auth_login_exports/auth_login_exports";
import {auth_register_exports} from "./auth_register_exports/auth_register_exports";

export function auth_exports_index() {
    auth_login_exports();
    auth_register_exports();
}