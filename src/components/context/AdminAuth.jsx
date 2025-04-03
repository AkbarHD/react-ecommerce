import { createContext } from "react";
import { useState } from "react";

export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({children}) => {
    const adminInfo = localStorage.getItem('adminInfo')
    const [user, setUser] = useState(adminInfo ? JSON.parse(adminInfo) : null)

    const login = (adminInfo)  => {
        localStorage.setItem('adminInfo', JSON.stringify(adminInfo)); // Simpan data admin
        setUser(adminInfo); // Perbarui state user
    }

    const logout = () => {
        localStorage.removeItem('adminInfo');
        setUser(null);
    }

    return <AdminAuthContext.Provider value={{ 
         user,
         login,
         logout
     }}>
         {children} 
     </AdminAuthContext.Provider>
}