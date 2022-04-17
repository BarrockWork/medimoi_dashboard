import {createContext} from "react";

const ApiContext = createContext({});

const ApiProvider = ({children}) => {
    const BaseApiUrl = process.env.API_BASE_URL;

    return (
        <ApiContext.Provider
            value={{
                BaseApiUrl
            }}
        >
            {children}
        </ApiContext.Provider>
    )
};

export default ApiContext;
export {ApiProvider};