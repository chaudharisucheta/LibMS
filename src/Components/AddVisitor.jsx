import React, { Component } from 'react';

class AddVisitor extends Component {
    render() {
        return (
            <div>
              <h1 className = "text-light">Add Visitor</h1>
              <div className = "container">
                <form className = "bg-light add-vis-form">
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Full Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">PRN</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Department</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  </form>
  </div>
            </div>
        );
    }
}

export default AddVisitor;