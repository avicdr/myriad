import React from "react";
import { useHistory } from "react-router";
import { clearSession, getCookie } from "../utils/cookie";

const Wrapper = (props: any) => {
    const history = useHistory();
    if (props.auth) {
        const token = getCookie("token");
        if (!token) {
            clearSession();
            history.push("/login");
        }
    }
    return (
        <React.Fragment>
            <div id="top-cont"></div>
            {props.children}
        </React.Fragment>
    );
};

export default Wrapper;
