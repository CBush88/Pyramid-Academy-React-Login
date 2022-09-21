import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {

  const[isLoggedIn, setToken] = useState(false)
  const users = [
    {id:1,
    username:"Bob",
    password:"Password"
    },
    {id:2,
    username:"Jack",
    password:"diffpass"
    }
  ]

  if(isLoggedIn){
    return(
    <div className="App">
    <Header />
    <div className="container">
    <Home />
    </div>
    <Footer />
  </div>
    )
  }else {

  return (
    <div className="App">
      <Header />
      <div className="container">
      <Form setToken={setToken} users={users} />
      </div>
      <Footer />
    </div>
  );
}

}

export default App;
