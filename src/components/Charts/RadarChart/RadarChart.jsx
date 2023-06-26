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
const userId = "12";

export const RadarCharts = ({ userName }) => {
  const {
    data: performanceData,
    loading: performanceLoading,
    error: performanceError,
  } = useData({ resource: `user/${userId}/performance` });

  // const data = [
  //   {
  //     subject: "Math",
  //     A: 120,
  //     B: 110,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "Chinese",
  //     A: 98,
  //     B: 130,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "English",
  //     A: 86,
  //     B: 130,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "Geography",
  //     A: 99,
  //     B: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "Physics",
  //     A: 85,
  //     B: 90,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: "History",
  //     A: 65,
  //     B: 85,
  //     fullMark: 150,
  //   },
  // ];

  return (
    <APIDataManager loading={performanceLoading} error={performanceError}>
      <ResponsiveContainer className={Styles.RadarChart}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={performanceData?.data}
        >
          <PolarGrid
            stroke="var(--color-white)"
            width={"180px"}
            height="300px"
            innerRadius={50}
          />
          <PolarAngleAxis
            stroke="var(--color-white)"
            tickLine={false}
            tickFormatter={(number) => performanceData?.kind[number + 1]}
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
