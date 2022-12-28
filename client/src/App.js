import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
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
import ViewJob from './pages/ViewJob';


const httpLink = createHttpLink({
  uri: '/graphql',
})


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Apollo Client
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
              <Route path='/viewjob' element={<ViewJob />} />
            </Routes>
          </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
