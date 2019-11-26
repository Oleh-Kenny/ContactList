import React, { Fragment } from "react";
import "./contactlist.css";
import ContactItem from "./ContactItem/contactitem";


const ContactList = () =>{
    return (
        <Fragment>
        <h2>Contact</h2>
        <ContactItem></ContactItem>
        </Fragment>
    );
}
export default ContactList;