import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Anes Khalifa",
      bio: "Learning ReactJS",
      profession: "Student",
      imgSrc: "/ph.jpg",
    },
    show: false,
  };
  HandleShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <>
        <button onClick={this.HandleShow}>Show Profile</button>
        {this.state.show ? (
          <div className="cc">
            <div className="card">
              <img src={this.state.person.imgSrc} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>
                    {this.state.person.fullName} -{" "}
                    {this.state.person.profession}{" "}
                  </b>
                </h4>
                <p>{this.state.person.bio}</p>
              </div>
            </div>
          </div>
        ) : (
          <h2>Click To Show the profile</h2>
        )}
      </>
    );
  }
}

export default App;
