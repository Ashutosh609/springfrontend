import { useState,useEffect } from "react";
import { useHistory } from 'react-router-dom';
import React from 'react';
import Cookies from "js-cookie";
import fitservice from '../services/service';

const Login=()=>{

    const history=useHistory();
    const [userid,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const postdata = async (e) => {
        try{
        e.preventDefault();
        const userr={username:userid,password:password}
        fitservice.postsignin(userr).then((response)=>{
            console.log(response,response.data.jwt);
            Cookies.set("user",response.data.jwt);
            history.push("/verified")
        }).catch(error =>{
            console.log("Not authorized");
        })
    }catch(e){
        window.alert('Something went wrong');
    }
    }

    const Authdata = async ()=>{
        try{
            fitservice.getauth().then((response)=>{
                if(response.status === 200){
                    console.log("Authorized");
                    history.push("/");
                }else{
                    history.push("/login");
                }}).catch(error =>{
                    console.log("Not authorized");
                })
        }catch(err){
            history.push("/login");
        }
    }


    useEffect(()=>{
        Authdata();
    },[]);

    return(
        <>
        <form method="POST" className="Login">
            <h1>Login</h1>
            <div style={{margin: "auto auto"}}>
                User Id: <input type="text" name="userid" id="luserid" required
                value={userid} onChange={(e)=>setEmail(e.target.value)}/><br/>
                Password: <input type="password" name="password" id="lpassword" required
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button onClick={postdata}>Send</button>
        </form>
        </>
    )
};

export default Login;