import {useContext} from "react";
import {UserContext} from "../../../context";
import {backend} from "../../../constants/backend";
import {getHeaders} from "../../../utils/CORSHeaders";



const logoutUser = async(token) => {
    let url = `${backend.LOGOUT}`;
    let res = await fetch(url, {
        method: "DELETE",
        headers: getHeaders(token)
    });

    if (res.status === 200) {
        return await res.json();
    } else {
        console.log("Err: " + res.status)
    }
};


export const HandleLogout = async (e) => {
        let user = useContext(UserContext);
        e.preventDefault();
        try {
            await logoutUser(user.token);
        } catch(e) {
            console.log(e);
        } finally {
            user.logout();
        }
    }

