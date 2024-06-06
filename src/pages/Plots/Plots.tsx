import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Plots: React.FC = () => {
  const barData = () => ({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Complete",
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Incomplete",
        data: [5, 10, 13, 8, 15, 8, 5],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  });

  const alertInsightCategoryTrainingCompletedBarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Completed Trainings of Alerts by Insight and Category",
      },
    },
  };

  const alertInsightCategorySolvedBarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Solved Alerts by Insight and Category",
      },
    },
  };

  const alertTrainingTrainingCompletedBarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Completed Trainings of Alerts by Training",
      },
    },
  };

  const alertTrainingSolvedBarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Solved Alerts by Training",
      },
    },
  };

  const pieData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const alertInsightCategoryPieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Total Alerts by Insight and Category",
      },
    },
  };

  const alertTrainingPieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Total Alerts by Training",
      },
    },
  };

  return (
    <div className="min-h-[200px]">
      <div className="text-title font-bold">Plots</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "20px",
          }}
        >
          <div style={{ width: "24%" }}>
            <Pie data={pieData} options={alertInsightCategoryPieOptions} />
          </div>
          <div style={{ width: "24%" }}>
            <Bar
              data={barData()}
              options={alertInsightCategoryTrainingCompletedBarOptions}
            />
          </div>
          <div style={{ width: "24%" }}>
            <Bar
              data={barData()}
              options={alertInsightCategorySolvedBarOptions}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "20px",
          }}
        >
          <div style={{ width: "24%" }}>
            <Pie data={pieData} options={alertTrainingPieOptions} />
          </div>
          <div style={{ width: "24%" }}>
            <Bar
              data={barData()}
              options={alertTrainingTrainingCompletedBarOptions}
            />
          </div>
          <div style={{ width: "24%" }}>
            <Bar data={barData()} options={alertTrainingSolvedBarOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plots;
