import React from 'react';
import './App.css';
import {Container, Header} from "./layout/header/Header";
import {OurClub} from "./layout/sections/ourClub/ourClub";
import {Choice} from "./layout/sections/choice/choice";
import {DirectionСlub} from "./layout/sections/directionСlub/directionСlub";
import {Navigate, Route, Routes} from "react-router-dom";
import {Menu} from "./components/menu/Menu";
import {FlexWrapper} from "./components/FlexWrapper";
import {Logo} from "./components/logo/Logo";

function App() {
    return (
        <div className="App">
            <Container>
                <FlexWrapper justify="space-between">
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
            <Routes>
                <Route path='/page1' element={<Header/>}/>
                <Route path="/" element={<Navigate to={"/page1"}/>}/>

                <Route path='/page2' element={<OurClub/>}/>
                <Route path='/page3' element={<Choice/>}/>
                <Route path='/page4' element={<DirectionСlub/>}/>
            </Routes>
        </div>
    );
}

export default App;
