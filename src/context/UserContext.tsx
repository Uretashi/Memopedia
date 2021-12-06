import { createContext } from "react";
import UserInterface from "../interfaces/UserInterface";

let UserContext = createContext<UserInterface | null>(null)

export default UserContext;
