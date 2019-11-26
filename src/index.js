import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./components/SerchComponent/search";
import ContactList from "./components/ContactList/contactlist";

const App = () =>{
    return(
        <div className="container bootstrap snippet">
            <h1>Contact List</h1>
            <Search></Search>
            <ContactList></ContactList>
        </div>
    );
    }

ReactDOM.render(<App />, document.getElementById('root'));


