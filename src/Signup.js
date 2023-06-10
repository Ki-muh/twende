import React from "react";

function Signup() {
    return (
        <div className="signup">
            <form>
                <h2>Sign up</h2>
                <label for="name">Name</label> <input placeholder="Name"></input><br/>
                <label for="email">Email</label> <input placeholder="Email"></input><br/>
                <label for="phone">Phone</label> <input placeholder="Phone"></input><br/>
                <label for="password">Password</label> <input placeholder="Password"></input><br/>
                <label for="repeat">Repeat</label> <input placeholder="Repeat"></input><br/>
                <input type="checkbox" required /><span/><p>I Accept <a>Terms and Conditions</a>.</p>
                <button type="submit">Register</button>
            </form>
        </div>        
    );
};

export default Signup;