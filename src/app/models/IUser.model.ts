export type IRegisterUser = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    mobileno: string;
}

export type ILoginUser = {
    email: string;
    password: string;
}

export type IUser = {
    name: string;
    email: string;
    password: string;
    mobileno: string;
}