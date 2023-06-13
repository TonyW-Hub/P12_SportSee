import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./ProtectedNavBar.module.scss";
import { APP_IMAGES_ASSETS } from "../../../data/project/appImagesAssets";

const ALL_LINkS = [
  {
    name: "Accueil",
    link: "#",
  },
  {
    name: "Profil",
    link: "#",
  },
  {
    name: "Réglages",
    link: "#",
  },
  {
    name: "Communauté",
    link: "#",
  },
];

export const ProtectedNavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className={Styles.ProtectedNavBar}>
      <img
        src={APP_IMAGES_ASSETS.logo.sportSee}
        alt="Logo SportSee"
        onClick={() => {
          navigate("#");
        }}
      />

      <aside>
        {ALL_LINkS.map((anchor, i) => (
          <Link key={anchor + i} to={anchor.link} className={Styles.link}>
            {anchor.name}
          </Link>
        ))}
      </aside>
    </nav>
  );
};
