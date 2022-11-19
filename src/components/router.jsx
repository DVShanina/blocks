import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "../pages/Chat";
import Main from "../pages/Main";
import Home from "../pages/Home";

export default function RoutesPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/chat' element={<Chat/>}/>
                <Route exact path='/main' element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    )
}