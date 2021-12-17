//Class based Component
import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

// className and htmlFor instead of class="" and for=""
//elements must be within parent div
//Use Fragment incase of div but will not show 
class App extends React.Component {

  render(){

    const name = 'mike jones';
    const loading = false;
    const showName = true;


    return (
      <div className="App">
        {/* {loading ? <h4>Loading...</h4> : <h1>Hello {showName ? name : null}...welcome to react class components</h1>} */}
        <Navbar title={'GitHub Finder'}/>
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}...welcome to react class components</h1>}
        <h2>Goodbye</h2>
        <label htmlFor="name">Name</label>

       </div>
     
    );

  }

}

export default App;


/*
//Create a new branch
  Git branch nameOfBranch
  git add -A
  git commit -m"...""

//Switch back to master branch
  Git checkout main

Merge branch
  Git merge nameOfBranch
  Git push --set-upstream origin nameOfBranch


*/