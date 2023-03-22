import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import {Button} from "@chakra-ui/react";
import{signOut} from "firebase/auth"
import { Link } from 'react-router-dom';
const Home = () => {
    const [save,setsave]=useState('')
    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
          if(user){
            console.log(user)
            setsave(user.email)
          }
        })
        
      }, []);

   const Handlelogout=async()=>{
        setsave("")
      await signOut(auth)
   }

  return (
    <div style={{marginTop:"100px",marginLeft:"500px"}}>
        <h1>{save}</h1>
     {save?<Button marginTop="20px" onClick={Handlelogout}>
            Logout
        </Button>:
        <Button marginTop="20px" onClick={Handlelogout}>
            <Link to="/">Login</Link>
        </Button>}

    </div>
  )
}

export default Home