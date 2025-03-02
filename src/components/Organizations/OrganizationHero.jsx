import React from "react";
import OrganizationHeroImg from "../../assets/images/Organizations/undraw_team-collaboration_phnf.svg";
import "./CSS/OrganizationHero.css";

const OrganizationHero = () => {
  return (
    <div className="organizationHero-container">
      <div className="organizationHero-text">
        <h1>Arete for organisations</h1>
      </div>
      <div className="organizationHero-img">
        <img src={OrganizationHeroImg} alt="" />
      </div>
    </div>
  );
};

export default OrganizationHero;
