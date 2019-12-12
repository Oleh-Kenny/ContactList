import React from "react";
import "./AddContact.css";
const AddContact = () => {
    return(
        
        <form>
  <div class="row d-flex">
    <div class="col-lg-7">
    <label for="exampleInputFirstName">First Name</label>
      <input type="text" class="form-control" placeholder="First name" />
    </div>
    <div class="col-lg-7">
    <label for="exampleInputLastName">Last Name</label>
      <input type="text" class="form-control" placeholder="Last name" />
    </div>
  
  <div class="form-group col-lg-7 top">
    <label for="exampleInputDiscription">Discription</label>
    <input type="discription" class="form-control" id="exampleInputDiscription" placeholder="Discription" />
  </div>
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Add You Avatar Photo</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
  </div>
  
  <label>Gender</label>
  <select class="form-control form-control-lg col-lg-7">
  <option>Man</option>
  <option>Wooman</option>
</select>
<div class="form-check cl">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">You not Bot?</label>
  </div>
  <button type="submit" class="btn btn-primary cl">Submit</button>
  

</form>

        
    )
}

export default AddContact;