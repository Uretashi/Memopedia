export default interface UserInterface {
    user: User
    setUser: any
}

export interface User {
    id_user?: number;
    password: string;
    first_name?: string;
    last_name?: string;
    email: string;
    creation_date: Date;
    last_login_date: Date;
}
