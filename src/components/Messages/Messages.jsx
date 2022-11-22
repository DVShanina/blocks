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
<>
{message.user == 1 ? (
    <div className="message" key={message.id}>
         <div className="message__avatar">
           <img src={message.avatar} className="message__img"></img>
          </div>
     <div className="message__content">
         <div className="message__text">
            {message.text} 
          </div>
      </div>
    </div>
    )
    :
    (
      <div className="message message_reverse" key={message.id}>
         <div className="message__avatar">
           <img src={message.avatar} className="message__img"></img>
          </div>
     <div className="message__content_reverse">
         <div className="message__text">
            {message.text} 
          </div>
      </div>
    </div>
    )   
} 
  </>
  
  ))}
  <div className="data">{data}</div>
  </>  
)



}