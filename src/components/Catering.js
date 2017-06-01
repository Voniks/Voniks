import React, { Component } from "react";
import "./../styles/Catering.css";

class Catering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  render() {
    return (
      <div className="container">
        {!this.state.showForm ?
          <div>
            <h2>We Cater Too!</h2>
            <a href="#catering" className="btn btn-primary btn-lg" role="button" onClick={this.onClick}>Request Information!</a>
          </div>
          :
          <div>
            <h2>Please complete this form:</h2>
            <p>A representative will get back to you shortly</p> <br />
            {/*Complete form submission details*/}
            <form>
              <div className="form-group">
                <label for="text">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label for="email">Email Address:</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label for="tel">Phone Number:</label>
                <input type="tel" className="form-control" />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="6" placeholder="Description"></textarea>
              </div>
              <input type="submit" value="Send" className="btn btn-primary btn-lg" />
              <input type="reset" value="Return" onClick={this.onClick} className="btn btn-primary btn-lg" />
            </form>
          </div>
        }
      </div>
    );
  }
}

export default Catering;