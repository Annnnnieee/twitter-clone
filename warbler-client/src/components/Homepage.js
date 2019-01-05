import React from "react"
import { Link } from "react-router-dom";
import MessageTimeLine from "./MessageTimeLine";

const Homepage  = ({currentUser}) => {
    if(!currentUser.isAuthenticated){
    return (<div className = "home-hero">
        <h1>'suuup</h1>
        <h4>r u new?</h4>
        <Link to="/signup" className="btn btn-primary">
            Sign up here
        </Link>
    </div>
    )
    }
    console.log(JSON.stringify(currentUser))
    return (
       <MessageTimeLine 
       profileImageUrl={currentUser.user.profileImageUrl} 
       userName={currentUser.user.userName}
       />
    )
}

export default Homepage;