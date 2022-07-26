// Save jwt in memory
const jwtHandler = () => {
    let inMemoryJWT = null;

    const getToken = () => {
        return inMemoryJWT ? inMemoryJWT : localStorage.getItem('dash_tok');
    };

    const setToken = (token) => {
        inMemoryJWT = token;
        localStorage.setItem('dash_tok', token);
        return true;
    };

    const ereaseToken = () => {
        inMemoryJWT = null;
        localStorage.removeItem('dash_tok');
        return true;
    }

    return {
        ereaseToken,
        getToken,
        setToken,
    }
};

export default jwtHandler();