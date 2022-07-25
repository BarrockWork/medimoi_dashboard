import jwtHandler from "./jwtHandler";
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const authProvider = {
    // send username and password to the auth server and get back credentials
    login: ({ username, password }) => {
        const request = new Request(`${apiUrl}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({ email: username, password: password }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        return fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => jwtHandler.setToken(token));
    },
    // remove local credentials and notify the auth server that the user logged out
    logout: () => {
        jwtHandler.ereaseToken();
        return Promise.resolve();
    },
    // when the dataProvider returns an error, check if this is an authentication error
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            jwtHandler.ereaseToken();
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // when the user navigates, make sure that their credentials are still valid
    checkAuth: () => {
        return jwtHandler.getToken() ? Promise.resolve() : Promise.reject();
    },
    // get the user's profile
    getIdentity: () => {
        return Promise.resolve()
    },
    // get the user permissions (optional)
    getPermissions: () => {
        return jwtHandler.getToken() ? Promise.resolve() : Promise.reject();
    },
};

export default authProvider;