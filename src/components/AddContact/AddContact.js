import React from "react";
import "./AddContact.css";

class AddContact extends React.Component {
  state = {
    name: "",
    description: "",
    avatar: "",
    gender: ""
  };

  GetName = e => {
    //console.log(e.target.value);
    this.setState({
      name: e.target.value
    });
  };

  Discr = e => {
    this.setState({
      description: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name,  description, avatar, gender } = this.state;
    this.props.onAddNewContact(name,  description, avatar, gender);
  };

  GetAvatar = e => {
    this.setState({
      avatar: e.target.value
    });
  };
  GetGender = e => {
    this.setState({
      gender: e.target.value
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row d-flex">
          <div className="col-lg-7">
            <label for="exampleInputFirstName"> Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="name"
              onChange={this.GetName}
            />
          </div>

          <div className="form-group col-lg-7 top">
            <label for="exampleInputDiscription">Discription</label>
            <input
              type="discription"
              className="form-control"
              placeholder="Description"
              description="description"
              onChange={this.Discr}
            />
          </div>
        </div>
        <div className="form-group">
          <label for="exampleFormControlFile1">Add You Avatar Photo</label>
          <input
            type="namber"
            className="number"
            avatar="avatar"
            onChange={this.GetAvatar}
          />
        </div>

        <div className="col-lg-7">
            <label for="exampleInputFirstName"> Gender</label>
            <input
              type="text"
              className="form-control"
              placeholder="Gender"
              gender="gender"
              onChange={this.GetGender}
            />
          </div>
        <div className="form-check cl">
          <input type="checkbox" class="form-check-input" />
          <label className="form-check-label" for="exampleCheck1">
            You not Bot?
          </label>
        </div>
        <button type="submit" className="btn btn-primary cl">
          Submit
        </button>
      </form>
    );
  }
}

export default AddContact;
