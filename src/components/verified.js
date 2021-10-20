import React from 'react';
import {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import fitservice from '../services/service';

const Verified = () => {

    const history = useHistory();
    const [userid,setuserid]=useState();

    const Authdata = async ()=>{
        try{
            fitservice.getauth().then((response)=>{
                if(response.status === 200){
                    setuserid(response.data);
                }else{
                    history.push("/");
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
            <form action="/" method="GET" className="verified">
            <h3>{userid} Done successfully<br/>Click OK to continue</h3>
            <button
                style={{margin: "auto auto", backgroundColor: "yellow", boxShadow: "0px 0px 10px 10px green"}}>OK</button>
        </form>
        </>

    )
};

export default Verified;