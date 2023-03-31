import { createContext, useState } from "react";
import { useEffect } from "react";

const Context = createContext(null);

function Provider({ children }) {
    const [users, setUsers] = useState([]);
    const [tenants, setTenants] = useState([]);
    const [session, setSession] = useState(null);
    const [canchas, setCanchas] = useState([]);


    const state = {
        users,
        setUsers,
        tenants,
        setTenants,
        session,
        setSession,
        canchas,
        setCanchas
    };
    return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default { Provider, Context };