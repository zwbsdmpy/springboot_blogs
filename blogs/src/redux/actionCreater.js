import * as actionType from './actionType.js'
import axios from "axios";

export const login = (data) => {
    return (dispatch) => {
        axios.post('/users/login', data).then(
            (res) => {
                if (res.status === 200) {
                    console.log("userdata:" + JSON.stringify(res));
                    const userData = res.data;
                    dispatch({
                        type: actionType.USER_DATA,
                        userData,
                    })
                }
            }
        ).catch(
            () => {
                alert("登录失败！")
            }
        )
    }
};
