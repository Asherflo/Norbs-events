import React from "react";
import Container from "../../components/dashboard/Container";
import {Route,Routes} from "react-router-dom";
import MyEvents from "./pages/MyEvents";

const Dashboard = () => {
    return(
        <Container>
            <Routes>
                <Route path ="/" element ={<MyEvents/>}/>
            </Routes>
        </Container>
    )
}

export default Dashboard