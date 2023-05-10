import React from "react";
import instagram from "../../assets/images/instagram.png";
import instagramBranco from "../../assets/images/instagramBranco.png";
import likedinPreto from "../../assets/images/linkedin-preto.png";
import likedinBranco from "../../assets/images/linkedinBranco.png";
import gitHub from "../../assets/images/github.png";
import gitHubBranco from "../../assets/images/githubBranco.png";

export const CardEquipe = (props) => {
  return (
    <div key={props.index} className="cardEquipe">
      <div className="membroContainer">
        <img className="membro" src={props.img} alt="" />
        <h1>{props.nome}</h1>
      </div>

      <div>
        <p>{props.cargo}</p>
        <div className="redesContainer">
          <a
            className="rede"
            href={props.redes.instagram}
            target={props.redes.instagram}
          >
            <img
              src={props.tema === "light" ? instagram : instagramBranco}
              alt="instagram"
            />
          </a>
          <a className="rede" href={props.redes.linkedin} target="_blank">
            <img
              src={props.tema === "light" ? likedinPreto : likedinBranco}
              alt="likedinPreto "
            />
          </a>
          <a className="rede" href={props.redes.gitHub} target="_blank">
            <img
              src={props.tema === "light" ? gitHub : gitHubBranco}
              alt="gitHub"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
