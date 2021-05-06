import { Component } from "react";
import { Link } from "react-router-dom";

class Editpage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <form style={{ padding: "10em 27em", backgroundColor: "#7b68ee" }}>
          <div class="form-group">
            <label for="exampleInputid">ID</label>
            <input
              type="text"
              onChange={this.getId}
              class="form-control"
              id="exampleInputid"
              aria-describedby="idHelp"
              placeholder="Enter id"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputname">Name</label>
            <input
              type="text"
              onChange={this.getName}
              class="form-control"
              id="exampleInputname"
              placeholder="enter cake name"
            ></input>
          </div>
          <div class="form-group">
            <label for="exampleInputname">Price</label>
            <input
              type="text"
              onChange={this.getPrice}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="enter price"
            ></input>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Editpage;
