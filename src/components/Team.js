import React, { Component } from "react";
import "./Team.css";

class Team extends Component {
  render() {
    return (
      <div id="team">
        <div className="heading">
          <div className="line" />
          <h2 className="title">Ekibimiz</h2>
        </div>
        {/* <p className="statement">
          Sit veniam dolore commodo enim laboris deserunt officia.
        </p> */}
        <ul className="list">
          {team.map(member => (
            < li key = {member.name} className = "item" >
              <img className="picture" alt={member.picture.alt} />
              <div className="content">
                <Link to={member.slug}>
                  <h3 className="name">{member.name}</h3>
                </Link>
                <p className="snippet">{member.snippet}</p>
                {/* Learn More button might be needed */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Team;
