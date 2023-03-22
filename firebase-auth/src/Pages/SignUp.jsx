import React from "react";
import { useState } from "react";
import {
  Box,
  Input,
  Button,
  Heading,
  Text,
  Tag,
  FormLabel,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {  createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        try{
            let user= await createUserWithEmailAndPassword(auth,email,password,name)
            // auth.onAuthStateChanged((user)=>{
            //   if(user){
            //     setError("koi dikkat nhi hai")
                
            //   }
            // })
            alert(`Registration Success through  ${user.user.email}`)
            navigate("/")
            
            
        }
        catch(err){
    
              alert(err.code)
        }
        
      
   

  };

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
        backgroundColor:"#A0AEC0"
      }}
    >
      <Text textAlign="center" fontWeight="700" mb="30px">
        Sign Up
      </Text>
      <FormLabel>Full name</FormLabel>
      <Input
        mb="15px"
        padding="5px"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
        SIGN UP
      </Button>

      <Text
        fontFamily="sans-serif"
        mt="15px"
        textAlign="center"
        fontSize="12px"
      >
      
       Already have an account ?
        <Link to="/">
          <span style={{ color: "blue", textDecoration: "underline" }}>
            Sign In
          </span>
        </Link>
      </Text>
     
    </Box>
  );
};

export default Signup;