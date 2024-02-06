import { useContext } from "react";
import { AdminContext } from "../contexts/AdminContext";

export const useAdminContext = () => {
    const context = useContext(AdminContext)

    if (!context) {
        throw Error('useAdminsContext must be used inside a AdminsContextProvider')
    }

    return context
}