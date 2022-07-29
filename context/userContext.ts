import React from "react";
import UserContextType from "../dto/UserContextType";


const UserContext = React.createContext<UserContextType | null>(null);

export default UserContext;