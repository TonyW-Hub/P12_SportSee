import React from "react";
import Styles from "./RadarChart.module.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../../../hook/useData";
import { APIDataManager } from "../../API/APIDataManager/APIDataManager";
import { API_KEYS, userId } from "../../../data/project/appAPIResource";

export const RadarCharts = ({ userName }) => {
  const {
    data: performanceData,
    loading: performanceLoading,
    error: performanceError,
  } = useData({ resource: API_KEYS.userPerformance, userId });

  return (
    <APIDataManager loading={performanceLoading} error={performanceError}>
      <ResponsiveContainer className={Styles.RadarChart}>
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={performanceData}>
          <PolarGrid
            stroke="var(--color-white)"
            width={"180px"}
            height="300px"
            innerRadius={50}
          />
          <PolarAngleAxis
            dataKey="kind"
            stroke="var(--color-white)"
            tickLine={false}
            axisLine={false}
            style={{ fontSize: "12px", textTransform: "capitalize" }}
          />
          <Radar
            name={userName}
            dataKey="value"
            stroke="var(--color-primary)"
            fill="var(--color-primary)"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </APIDataManager>
  );
};
