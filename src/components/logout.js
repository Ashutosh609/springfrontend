import React, { useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import fitservice from '../services/service';
import Cookies from "js-cookie";

const Logout = () => {

    const history = useHistory();
    
    const Authdata = async ()=>{
        try{
            fitservice.getauth().then((response)=>{
                if(response.status === 200){
                   Cookies.remove("user");
                }
            }).catch(error =>{
                console.log("Not authorized");
            })
        }catch(err){
            history.push("/login");
        }
    }

    
    useEffect(()=>{
        Authdata();
    });
    return (
        <>
        <form action='/verified' method="GET" className="verified">
            <h3>Do you want to logout?</h3>
            <button
                style={{margin: "auto auto", backgroundColor: "yellow", boxShadow: "0px 0px 10px 10px green"}}>OK</button>
        </form>
        </>

    )
};

export default Logout;