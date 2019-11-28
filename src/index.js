import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./components/SerchComponent/search";
import ContactList from "./components/ContactList/contactlist";


    class App extends React.Component{

    List = [
        {name:"jack Sparrow", description:"Capitan", avatar:
        58,gender:"men"},
        {name:"Tommy Sparrow", description:"Treny",avatar:
        33, gender:"women"},
        {name:"Tor Sparrow", description:"Distructor",avatar:
        18, gender:"men"},
        {name:"Cris Nollan", description:"Cowboy", avatar:
        5, gender:"women"},
        {name:"Silvestr Stalone", description:"Descriptor", avatar:
        80, gender:"men"}
    ];

render(){
    
    return(
        <div className="container bootstrap snippet">
            <h1 className="col-6 offset-3 d-flex justify-content-center">Contact List</h1>
            <Search></Search>
            <ContactList ContactList={this.List} ></ContactList>
        </div>
    );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


