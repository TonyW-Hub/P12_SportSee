import React from "react";
import Styles from "./LinesChart.module.scss";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../../../hook/useData";
import { API_KEYS, userId } from "../../../data/project/appAPIResource";
import { APIDataManager } from "../../API/APIDataManager/APIDataManager";

export const LinesChart = () => {
  const {
    data: averageSessionsData,
    loading: averageSessionsLoading,
    error: averageSessionsError,
  } = useData({ id: API_KEYS.userAverageSessions, userId });

  const CustomLegend = () => {
    return (
      <div className={Styles.legend}>
        <p>Durée moyenne des sessions</p>
      </div>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={Styles.customTooltip}>
          <p className={Styles.value}>{payload[0].value}ms</p>
        </div>
      );
    }

    return null;
  };

  return (
    <APIDataManager
      loading={averageSessionsLoading}
      error={averageSessionsError}
    >
      <ResponsiveContainer className={Styles.LinesChart}>
        <LineChart
          width={300}
          height={300}
          data={averageSessionsData}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{
              stroke: "#fff",
              opacity: "0.5",
              fontWeight: "500",
              fontSize: 15,
            }}
          />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Legend align="left" verticalAlign="top" content={<CustomLegend />} />
          <Line
            type="bump"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </APIDataManager>
  );
};
