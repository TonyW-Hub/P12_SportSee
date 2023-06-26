import React from "react";
import Styles from "./CardEnergetic.module.scss";
import { Icon } from "../../Icons/Icon/Icon";
import { APP_IMAGES_ASSETS } from "../../../data/project/appImagesAssets";

/**
 *
 * @param {Object} props
 * @param {"calories" | "proteines" | "glucides" | "lipides"} props.energy set name energy type
 * @param {number} props.energyCount set the count of the energy
 * @param {"Cal" | "g"} props.measure set the measure of the energy
 * @returns
 */
export const CardEnergetic = ({ energy, energyCount, measure }) => {
  const setEnergyIcon = () => {
    switch (energy) {
      case "calories":
        return APP_IMAGES_ASSETS.icon.calories;
      case "proteines":
        return APP_IMAGES_ASSETS.icon.proteines;
      case "glucides":
        return APP_IMAGES_ASSETS.icon.glucides;
      case "lipides":
        return APP_IMAGES_ASSETS.icon.lipides;

      default:
        return "";
    }
  };

  return (
    <div className={Styles.CardEnergetic}>
      <Icon variant={energy} icon={setEnergyIcon()}></Icon>
      <div className={Styles.CardEnergeticDescription}>
        <p>
          {energyCount?.toLocaleString()}
          {measure}
        </p>
        <small>{energy}</small>
      </div>
    </div>
  );
};
