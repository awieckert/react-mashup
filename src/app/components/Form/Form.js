import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render () {
    return (
      <form className="form-horizontal col-sm-3 col-sm-offset-1">
        <div className="form-group">
      <label for="name" className="col-sm-2 control-label">Animal Name</label>
    <div className="">
      <input type="email" className="form-control" id="name" placeholder="Name" />
    </div>
  </div>
  <div className="form-group">
    <label for="imgUrl" className="col-sm-2 control-label">Image URL</label>
    <div className="">
      <input type="password" className="form-control" id="imgUrl" placeholder="Image URL" />
    </div>
  </div>
  <div className='form-group'>
    <textarea className="form-control" rows="3"></textarea>
  </div>
  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-10">
      <button type="submit" className="btn btn-default">Sumbit</button>
    </div>
  </div>
</form>
    );
  }
}

export default Form;
