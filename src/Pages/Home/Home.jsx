import React from 'react';
import Stat from '../Stat/Stat';
import About from './About/About';
import Bannar from './Bannar/Bannar';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <About></About>
           <Stat></Stat>
           <Services></Services>
        </div>
    );
};

export default Home;