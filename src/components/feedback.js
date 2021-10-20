import React from 'react';
import {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import fitservice from '../services/service';

const Feedback = () => {

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
            <form action="/feedback" method="POST" className="Feedback">
            <textarea id='textareafeed' name='msg' cols="20" rows="15"></textarea>
            <div>
            <h4>Thanks {userid} for giving feedback </h4>
            <button
                style={{margin: "150px 100px", backgroundColor: "yelllow", boxShadow: "0px 0px 10px 10px green"}}>Send</button>
            </div>
        </form>
        </>

    )
};

export default Feedback;