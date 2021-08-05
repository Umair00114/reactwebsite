import React from "react";
import Common from "./Common"
import web from "../src/image/img3.svg";

const About = () => {
    return (
        <>
            <Common name="Welcome To About Page" imgsrc={web} visit="/contact" btname="Contact Now"/>
        </>
    )
    };
export default About;