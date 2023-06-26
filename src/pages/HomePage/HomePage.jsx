import React from "react";
import Styles from "./HomePage.module.scss";
import { useData } from "../../hook/useData";
import { APIDataManager } from "../../components/API/APIDataManager/APIDataManager";
import { CardEnergetic } from "../../components/Cards/CardEnergetic/CardEnergetic";

const userId = "12";

export const HomePage = () => {
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useData({ resource: `user/${userId}` });

  return (
    <div className={Styles.HomePage}>
      <APIDataManager loading={userLoading} error={userError}>
        <header className={Styles.HomePageHeader}>
          <h1>
            Bonjour <span>{userData?.userInfos?.firstName}</span>
          </h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </header>

        <section className={Styles.HomePageContent}>
          <div className={Styles.charts}></div>
          <div className={Styles.cards}>
            <CardEnergetic
              energy="calories"
              energyCount={userData?.keyData?.calorieCount}
              measure="Cal"
            />
            <CardEnergetic
              energy="proteines"
              energyCount={userData?.keyData?.proteinCount}
              measure="g"
            />
            <CardEnergetic
              energy="glucides"
              energyCount={userData?.keyData?.carbohydrateCount}
              measure="g"
            />
            <CardEnergetic
              energy="lipides"
              energyCount={userData?.keyData?.lipidCount}
              measure="g"
            />
          </div>
        </section>
      </APIDataManager>
    </div>
  );
};
