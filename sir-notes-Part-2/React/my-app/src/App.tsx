import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import UserInfo from './UserInfo';
import Props from './Props';

//This is component in ReactJs. A Component is a function that returns a piece of UI along with some logic/state. These are called Functional Components. Older versions of React used Class Components or statefull Components, but Functional Components are now the standard.
function App() {
  return (
   <div>
    <Header />
    <UserInfo/>
    <Props name="Phaniraj" age={25} isStudent={true} />
    {/* Passing Props from Parent to Child Component. Props are like attributes of a HTML Element when U pass it from the Parent component */}
    <Footer />
   </div>
  );
}

export default App;
