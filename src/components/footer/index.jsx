import React from "react";
import instagram from "../../assets/images/instagram.png";
import instagramBranco from "../../assets/images/instagramBranco.png";
import likedinPreto from "../../assets/images/linkedin-preto.png";
import likedinBranco from "../../assets/images/linkedinBranco.png";
import gitHub from "../../assets/images/github.png";
import gitHubBranco from "../../assets/images/githubBranco.png";

export const Footer = (props) => {
  return (
    <footer>
      <img className="footerLogo" src={props.logo} alt="" width={90} />

      <div className="footerRedes">
        <img
          src={props.tema === "light" ? instagram : instagramBranco}
          alt=""
          width={30}
        />
        <img
          src={props.tema === "light" ? likedinPreto : likedinBranco}
          alt=""
          width={30}
        />
        <img
          src={props.tema === "light" ? gitHub : gitHubBranco}
          alt=""
          width={30}
        />
      </div>
    </footer>
  );
};
