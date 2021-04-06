import { LOGIN_USER, AUTH_USER } from './types'

import axios from 'axios'

export function loginUser(dataToSubmit) {
    const request = axios.post("http://localhost:8000/login", dataToSubmit).then(
        res => {
         return res.data;   
        }
    )
    return { type: LOGIN_USER, payload: request };
}

export function authUser() {
    const request = axios.get("http://localhost:8000/auth").then(
        res => {
         return res.data;   
        }
    )
    return { type:AUTH_USER, payload: request };
  }

