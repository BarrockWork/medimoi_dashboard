import {createContext} from "react";
import medimoiProvider from "../../_config/medimoiProvider";
const ApiContext = createContext({});

const ApiProvider = ({children}) => {
    const BaseApiUrl = process.env.REACT_APP_API_BASE_URL;

    return (
        <ApiContext.Provider
            value={{
                BaseApiUrl,
                medimoiProvider
            }}
        >
            {children}
        </ApiContext.Provider>
    )
};

export default ApiContext;
export {ApiProvider};