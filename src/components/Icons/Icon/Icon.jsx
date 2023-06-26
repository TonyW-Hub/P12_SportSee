import React from "react";
import Styles from "./Icon.module.scss";

/**
 *
 * @param {Object} props
 * @param {string} props.icon icon svg
 * @param {string} props.alt add alt for the icon svg
 * @param {"sidebar" | "calories" | "proteines" | "glucides" | "lipides"} props.variant add alt for the icon svg
 * @returns
 */
export const Icon = ({ icon = "", alt = "", variant = "sidebar" }) => {
  const setProps = () => {
    switch (variant) {
      case "sidebar":
        return Styles.sidebar;

      case "calories":
        return Styles.calories;

      case "proteines":
        return Styles.proteines;

      case "glucides":
        return Styles.glucides;

      case "lipides":
        return Styles.lipides;

      default:
        return null;
    }
  };

  return (
    <div className={`${Styles.Icon} ${setProps()}`}>
      {variant !== "sidebar" && <div className={Styles.bg}></div>}
      <img src={icon} alt={alt} />
    </div>
  );
};
