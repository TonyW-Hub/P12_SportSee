import React from "react";
import Styles from "./BarsChart.module.scss";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useData } from "../../../hook/useData";
import { APIDataManager } from "../../API/APIDataManager/APIDataManager";
import { API_KEYS,userId } from "../../../data/project/appAPIResource";

export const BarsChart = () => {
  const {
    data: activityData,
    loading: activityLoading,
    error: activityError,
  } = useData({ resource: API_KEYS.userActivity, userId });

  const CustomLegend = ({ payload }) => {
    return (
      <div className={Styles.legend}>
        <p>Activité quotidienne</p>
        <ul>
          {payload.map((entry, index) => (
            <li key={`item-${index}`}>
              {entry.value === "kilogram"
                ? "Poids (kg)"
                : "Calories brûlées (kCal)"}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={Styles.customTooltip}>
          <p className={Styles.value}>{payload[0].payload.kilogram}kg</p>
          <p className={Styles.value}>{payload[0].payload.calories}Kcal</p>
        </div>
      );
    }

    return null;
  };

  return (
    <APIDataManager loading={activityLoading} error={activityError}>
      <ResponsiveContainer className={Styles.BarsChart} width={"100%"} height={300}>
        <BarChart
          data={activityData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <YAxis
            tickLine={false}
            orientation="right"
            axisLine={false}
            tick={{ stroke: "#9B9EAC" }}
          />
          <XAxis
            dataKey="key"
            tickLine={false}
            axisLine={false}
            tick={{ stroke: "#9B9EAC" }}
          />
          <Tooltip
            labelStyle={{ display: "none" }}
            contentStyle={{ background: "var(--color-primary)" }}
            itemStyle={{ color: "white" }}
            content={<CustomTooltip />}
          />
          <Legend align="left" verticalAlign="top" content={<CustomLegend />} />
          <Bar
            dataKey="kilogram"
            fill="var(--color-secondary)"
            className={Styles.bar}
            radius={[15, 15, 0, 0]}
            barSize={11}
          />
          <Bar
            dataKey="calories"
            fill="var(--color-primary)"
            className={Styles.bar}
            radius={[15, 15, 0, 0]}
            barSize={11}
          />
        </BarChart>
      </ResponsiveContainer>
    </APIDataManager>
  );
};
