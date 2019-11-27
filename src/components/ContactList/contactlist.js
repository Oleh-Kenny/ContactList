import React, { Fragment } from "react";
import "./contactlist.css";
import ContactItem from "./ContactItem/contactitem";


const ContactList = () =>{
    return (
        <Fragment>
        <h2 className="col-7 d-flex justify-content-center">Contact</h2>
        <ContactItem></ContactItem>
        </Fragment>
    );
}
export default ContactList;