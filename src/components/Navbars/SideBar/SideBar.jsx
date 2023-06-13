import React from "react";
import Styles from "./SideBar.module.scss";
import { Icon } from "../../Icons/Icon/Icon";
import { APP_IMAGES_ASSETS } from "../../../data/project/appImagesAssets";

const ALL_ICONS = [
  {
    image: APP_IMAGES_ASSETS.icon.sidebar_one,
  },
  {
    image: APP_IMAGES_ASSETS.icon.sidebar_two,
  },
  {
    image: APP_IMAGES_ASSETS.icon.sidebar_three,
  },
  {
    image: APP_IMAGES_ASSETS.icon.sidebar_four,
  },
];

export const SideBar = () => {
  return (
    <div className={Styles.SideBar}>
      <div className={Styles.SideBarIcons}>
        {ALL_ICONS.map((icon, i) => (
          <Icon key={"icon_sidebar" + i} variant="sidebar" icon={icon.image} />
        ))}
      </div>
      <p className={Styles.copyright}>
        Copyright, SportSee {new Date().getFullYear()}
      </p>
    </div>
  );
};
