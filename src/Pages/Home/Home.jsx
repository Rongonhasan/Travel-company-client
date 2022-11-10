import React from 'react';
import Stat from '../Stat/Stat';
import About from './About/About';
import Bannar from './Bannar/Bannar';
import Contact from './Contact/Contact';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <About></About>
           <Contact></Contact>
           <Stat></Stat>
           <Services></Services>
        </div>
    );
};

export default Home;