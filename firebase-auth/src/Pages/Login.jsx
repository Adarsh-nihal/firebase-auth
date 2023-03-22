import React from "react";
import { useState } from "react";
import {
  Box,
  Input,
  Text,
  Button,
  Heading,
  Toast,
  useToast,
  FormLabel,
} from "@chakra-ui/react";
import { auth } from "../firebase";
import {  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()
  const handleSubmit=async (e)=>{
    e.preventDefault();
    
    try{
        let user= await signInWithEmailAndPassword(auth, email, password)
        
        alert(`Login Success through  ${user.user.email}`)
         localStorage.setItem("token",user.user.email)
        navigate("/home")
        
    }
    catch(err){

          alert(err.code)
          
    }
  }
  const googleAuth=async(e)=>{
    e.preventDefault();
    try{
     let google= await  signInWithPopup(auth,new GoogleAuthProvider())
    alert(`Login Success through  ${google.user.email}`)
    localStorage.setItem("token",google.user.email)
    navigate('/home')
     
    }
    catch(err){
             console.log(err.message)
             alert(err.code)
    }
}
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        width: "34%",
        margin: "auto",
        padding: "0.2%",
        marginTop: "50px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "20px",
        padding: "50px",
        backgroundColor:"#9F7AEA",
      }}
    >
      <Text textAlign="center" fontWeight="700" mb="30px">
        Sign In
      </Text>
      <FormLabel>Email</FormLabel>
      <Input
        mb="15px"
        padding="5px"
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormLabel>Password</FormLabel>
      <Input
        padding="3px"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button mt="20px" mb="20px" padding="7px" onClick={handleSubmit}>
        SIGN IN
      </Button>
      <Button mt="8px" mb="20px" padding="7px" onClick={googleAuth}>
        SIGN WITH GOOGLE
      </Button>
      <Text
        fontFamily="sans-serif"
        mt="10px"
        textAlign="center"
        fontSize="12px"
      >
        Don't have an account ?
        <Link to="/signup">
          <span style={{ color: "blue", textDecoration: "underline" }}>
            Sign Up
          </span>
        </Link>
      </Text>
    </Box>
  );
};

export default Login;