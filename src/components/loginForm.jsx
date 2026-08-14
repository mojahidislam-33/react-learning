import { useState } from "react";

function LoginForm(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function handleSubmit(event){
        event.preventDefault();

        if(email==="" || password === ""){
            console.log("Please fill all fields")
            return ;
        }

        console.log("Email:" ,email)
        console.log("Password",password)
    }

    function handleChange(event){
        console.log(event.target.value)
    }

    return(
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                      type="email" 
                      value={email}
                      onChange={(event)=>setEmail(event.target.value)}
                      placeholder="enter email.."
                     />
                </div>

                <br/>

                <div>
                    <label>Password:</label>
                    <input 
                    type="password" 
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    placeholder="enter password.."
                    />
                </div>

                <br/>

                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default LoginForm;