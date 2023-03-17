import React from "react";
import "./global.css";
class NewsBox extends React.Component {
  render() {
    return (
      <div className="newsContentBox">
        <img
          className="img"
          src={this.props.imageURL}
          alt="Not Avaible"
        ></img>
        <br></br>
        {this.props.head}
      </div>
    );
  }
}
export default NewsBox;
