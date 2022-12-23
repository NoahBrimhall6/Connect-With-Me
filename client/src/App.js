import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import "tailwindcss/tailwind.css"

// Components
import Home from './pages/Home';
import JobSearch from './pages/JobSearch';
import Profile from './pages/Profile';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// Apollo Client
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

// Application
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar/>
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/jobs' element={<JobSearch />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
            </Routes>
          </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
