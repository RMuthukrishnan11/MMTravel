import React from "react";
import { Link } from "react-router-dom";
import home from '../assets/images/home.jpg'
import { Box } from "@mui/material";
import DashboardCard from "../dashboard/DashboardCard";

const Home = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})` }}>
                <Box sx={{ height: '88vh', backgroundImage: `url(${"https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`}} >
                    <DashboardCard />
                </Box>
            </div >

        </>
    )
}

export default Home;