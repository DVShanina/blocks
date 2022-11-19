import React from "react";
import { Link } from "react-router-dom";
import "../scss/Home.scss";

export default function Home() {
    return (
        <nav className="home-nav">
        <Link to="/chat">Чат » </Link>
        <Link to="/main">Главное » </Link>
        </nav>
        )
    }