import React from "react";
import { CardEquipe } from "../../components/CardEquipe";
import anthony from "../../assets/images/anthony.jpg";
import bruno from "../../assets/images/bruno.jpg";
import gustavo from "../../assets/images/guga.jpg";
import ryan from "../../assets/images/ryan.jpg";
import dimitri from "../../assets/images/dimitri.jpg";
import iago from "../../assets/images/iago.jpg";

export const Equipe = (props) => {
  const equipe = [
    {
      nome: "Anthony Ndubisi",
      foto: anthony,
      cargo: "Gerente de Projeto",
      redes: {
        instagram: "https://www.instagram.com/chukwudi0174/",
        linkedin: "https://www.linkedin.com/in/anthonychukwudi/",
        gitHub: "https://github.com/anthonyDev01",
      },
    },
    {
      nome: "Bruno Silva",
      foto: bruno,
      cargo: "Desenvolvedo Full Stack",
      redes: {
        instagram: "https://www.instagram.com/brunodw123/",
        linkedin: "",
        gitHub: "https://github.com/Brunodw123br",
      },
    },
    {
      nome: "Gustavo Araújo",
      foto: gustavo,
      cargo: "Engenheiro de Software",
      redes: {
        instagram: "https://www.instagram.com/tres_pontinhoz/",
        linkedin: "",
        gitHub: "",
      },
    },
    {
      nome: "Ryan Maciel",
      foto: ryan,
      cargo: "Gerente de Designer",
      redes: {
        instagram: "https://www.instagram.com/ryankkjk/",
        linkedin: "",
        gitHub: "",
      },
    },
    {
      nome: "Dimitri Rodrigues",
      foto: dimitri,
      cargo: "Analista de Requisitos",
      redes: {
        instagram:
          "https://www.instagram.com/dimitri_rodrigues_bento/?igshid=ZGUzMzM3NWJiOQ%3D%3D",
        linkedin: "",
        gitHub: "",
      },
    },
    {
      nome: "Iago Loureiro",
      foto: iago,
      cargo: "Gerente de banco de dados",
      redes: {
        instagram: "https://www.instagram.com/iag0_mat/",
        linkedin: "",
        gitHub: "",
      },
    },
  ];

  return (
    <div className="containerEquipe">
      <h1 id="equipe" className="mt">
        Nossa Equipe
      </h1>
      <div className="equipe">
        {equipe.map((membro, index) => (
          <CardEquipe
            key={index}
            nome={membro.nome}
            cargo={membro.cargo}
            img={membro.foto}
            redes={membro.redes}
            tema={props.tema}
          />
        ))}
      </div>
    </div>
  );
};
