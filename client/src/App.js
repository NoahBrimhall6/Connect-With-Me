import React from 'react';
// import "tailwindcss/tailwind.css"
import Home from './components/pages/Home';
import JobSearch from './components/pages/JobSearch';
import Profile from './components/pages/Profile';
import Resume from './components/pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
    let component;

    // eslint-disable-next-line default-case
    switch(window.location.pathname) {
        case '/':
            component = <Home />
            break;
        case '/jobs':
            component = <JobSearch />
            break;
        case '/profile': 
            component = <Profile />
            case '/resume': 
            component = <Resume />
    
    }
    

    return (
        <>
            <Navbar/>
            <div>
                {component}
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default App;


