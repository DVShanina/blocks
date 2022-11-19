import React, {useEffect, useState} from "react";
import messages from "../../messages.json";
import "../Messages/Messages.scss";

export default function Messages({data}) {

const messagesFilter = messages.filter(function(message) {
    return (message.data == data);
});


return (
<>
{messagesFilter.map((message) => (
    <div className="message">
    <div className={message.user} key={message.id}>
      
      <div className="message__avatar">
        <img src={message.avatar} className="message__img"></img>
      </div>
      
      <div className={message.content}>
         <div className="message__text">
          {message.text} 
        </div>
      </div>
      </div>
    </div>    
  ))}
  <div className="data">{data}</div>
  </>  
)



}