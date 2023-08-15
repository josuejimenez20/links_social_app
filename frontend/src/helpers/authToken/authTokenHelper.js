export const getAuthToken = () => {

    const auth_token = localStorage.getItem('auth_token_links');

    if (auth_token) return auth_token;

    return null;
}

export const saveAuthToken = (auth_token) => {    
    localStorage.setItem('auth_token_links', auth_token);
}