import React from "react";
import Messages from "../components/Messages/Messages";
import "../scss/Chat.scss";

export default function Сhat() {
  
return (

    <section className="chat">
        <section className="chat__messages">
          <Messages data={'21 октября'}/>
          <Messages data={'22 октября'}/>
        </section>
        <section className="chat__send">
          <textarea className="chat__textarea" 
          placeholder="Cowkeifjowefwehifuhqiwuehfqwef wef"></textarea> 
          <button className="chat__button">Отправить</button>
        </section>
    </section>
    )
}



