import React from 'react';
import {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import fitservice from '../services/service';

const Contact = () => {

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
        <a href='https://ashutosh369.pythonanywhere.com/' target='_' rel="noreferrer"/>
        
        </>
    )
};

export default Contact;