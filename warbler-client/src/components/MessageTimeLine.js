import React from "react"
import MessageList from "../containers/MessageList"
import UserAside from "./UserAside"

const MessageTimeLine = props => {
    return (
        <div className="row">
        <UserAside 
        profileImageUrl={props.profileImageUrl} 
        userName={props.userName}
        />
        <MessageList/>
        </div>
    )
}

export default MessageTimeLine;