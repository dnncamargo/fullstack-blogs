import React from 'react'
import Main from './Layout/Main/Main'
import Heading from './Layout/Heading/Heading';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import ViewArticle from './Layout/ViewArticle/ViewArticle';
import NewArticle from './Layout/NewArticle/NewArticle';

function App() {
  return (
    <div className='App'>
      <Router>
        <Heading />
        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/article/:id' element={<ViewArticle />} />
          <Route path='/newarticle' element={<NewArticle />} />
            
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
