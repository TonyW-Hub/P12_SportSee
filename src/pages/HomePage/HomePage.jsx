import React from "react";
import Styles from "./HomePage.module.scss";
import { useData } from "../../hook/useData";
import { APIDataManager } from "../../components/API/APIDataManager/APIDataManager";
import { CardEnergetic } from "../../components/Cards/CardEnergetic/CardEnergetic";
import { RadarCharts } from "../../components/Charts/RadarChart/RadarChart";
import { BarsChart } from "../../components/Charts/BarsChart/BarsChart";
import { API_KEYS, userId } from "../../data/project/appAPIResource";
import { CircleChart } from "../../components/Charts/CircleChart/CircleChart";
import { LinesChart } from "../../components/Charts/LinesChart/LinesChart";

export const HomePage = () => {
  const {
    data: userInfosData,
    loading: userInfosLoading,
    error: userInfosError,
  } = useData({ id: API_KEYS.userInfo, userId });
  const {
    data: userScoreData,
    loading: userScoreLoading,
    error: userScoreError,
  } = useData({ id: API_KEYS.userScore, userId });
  const {
    data: userEnergiesData,
    loading: userEnergiesLoading,
    error: userEnergiesError,
  } = useData({ id: API_KEYS.userEnergies, userId });

  return (
    <div className={Styles.HomePage}>
      <APIDataManager loading={userInfosLoading} error={userInfosError}>
        <header className={Styles.HomePageHeader}>
          <h1>
            Bonjour <span>{userInfosData?.firstName}</span>
          </h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
      </APIDataManager>

      <section className={Styles.HomePageContent}>
        <div className={Styles.charts}>
          <BarsChart />
          <LinesChart />
          <RadarCharts userName={userInfosData?.firstName} />
          <APIDataManager loading={userScoreLoading} error={userScoreError}>
            <CircleChart score={userScoreData} />
          </APIDataManager>
        </div>

        <APIDataManager loading={userEnergiesLoading} error={userEnergiesError}>
          <div className={Styles.cards}>
            <CardEnergetic
              energy="calories"
              energyCount={userEnergiesData?.calorieCount}
              measure="Cal"
            />
            <CardEnergetic
              energy="proteines"
              energyCount={userEnergiesData?.proteinCount}
              measure="g"
            />
            <CardEnergetic
              energy="glucides"
              energyCount={userEnergiesData?.carbohydrateCount}
              measure="g"
            />
            <CardEnergetic
              energy="lipides"
              energyCount={userEnergiesData?.lipidCount}
              measure="g"
            />
          </div>
        </APIDataManager>
      </section>
    </div>
  );
};
