import { Breakpoint } from "@mui/material";

export interface ILoginPayload {
    username : string;
    password: string;
}

export interface ISelectInput {
    label: string,
    value: string | number
}