import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";

function Home() {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <AboutUs/>
            <WhoWeHelp/>
        </>
    );
}

export default Home;
