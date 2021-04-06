import React, {useState, useEffect} from 'react'
import {  useSelector } from "react-redux";
export default function Dashboard() {
    const [name, setName] = useState("")
    const userName = useSelector((state) => state.authReducer);
    useEffect(() => {
      console.log("userName",userName.loginSuccess.name)
      setName(userName.loginSuccess.name);
    }, [])
    return (
        <div>
            welcome {name}!
        </div>
    )
}

