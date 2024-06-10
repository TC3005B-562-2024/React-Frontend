import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { getInsightCategoryCount, getTrainingCount } from "../../services";

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
  const [insightCategoryCountData, setInsightCategoryCountData] = useState<any>(
    []
  );
  const [trainingCountData, setTrainingCountData] = useState<any>([]);

  const completedTrainingsOfAlertsByInsightAndCategory = () => ({
    labels: insightCategoryCountData.map(
      (item: any) =>
        `${item?.categoryDenomination} / ${item?.insightDenomination}`
    ),
    datasets: [
      {
        label: "Complete",
        data: insightCategoryCountData.map(
          (item: any) => item?.trainingCompletedCount
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Incomplete",
        data: insightCategoryCountData.map(
          (item: any) => item?.trainingCompletedDifference
        ),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  });

  const completedTrainingsOfAlertsByTraining = () => ({
    labels: trainingCountData.map((item: any) => item?.denomination),
    datasets: [
      {
        label: "Complete",
        data: trainingCountData.map(
          (item: any) => item?.trainingCompletedCount
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Incomplete",
        data: trainingCountData.map(
          (item: any) => item?.trainingCompletedDifference
        ),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  });

  const solvedAlertsByInsightAndCategory = () => ({
    labels: insightCategoryCountData.map(
      (item: any) =>
        `${item?.categoryDenomination} / ${item?.insightDenomination}`
    ),
    datasets: [
      {
        label: "Complete",
        data: insightCategoryCountData.map((item: any) => item?.solvedCount),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Incomplete",
        data: insightCategoryCountData.map(
          (item: any) => item?.solvedDifference
        ),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  });

  const solvedAlertsByTraining = () => ({
    labels: trainingCountData.map((item: any) => item?.denomination),
    datasets: [
      {
        label: "Complete",
        data: trainingCountData.map((item: any) => item?.solvedCount),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Incomplete",
        data: trainingCountData.map((item: any) => item?.solvedDifference),
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

  const totalAlertsByInsightAndCategoryPlot = {
    labels: insightCategoryCountData.map(
      (item: any) =>
        `${item?.categoryDenomination} / ${item?.insightDenomination}`
    ),
    datasets: [
      {
        label: "Total count",
        data: insightCategoryCountData.map((item: any) => item?.groupCount),
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

  const totalAlertsByTrainingPlot = {
    labels: trainingCountData.map((item: any) => item?.denomination),
    datasets: [
      {
        label: "Total count",
        data: trainingCountData.map((item: any) => item?.groupCount),
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

  useEffect(() => {
    const fetchInsightCategoryCountData = async () => {
      try {
        const data = await getInsightCategoryCount();
        setInsightCategoryCountData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchTrainingCountData = async () => {
      try {
        const data = await getTrainingCount();
        setTrainingCountData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInsightCategoryCountData();
    fetchTrainingCountData();
  }, []);

  return (
    <div
      className="min-h-[200px]"
      onClick={() => {
        console.log(insightCategoryCountData);
        console.log(trainingCountData);
      }}
    >
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
            marginBottom: "100px",
          }}
        >
          <div style={{ width: "40%" }}>
            <Pie
              data={totalAlertsByInsightAndCategoryPlot}
              options={alertInsightCategoryPieOptions}
            />
          </div>
          <div style={{ width: "40%" }}>
            <Pie
              data={totalAlertsByTrainingPlot}
              options={alertTrainingPieOptions}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "100px",
          }}
        >
          <div style={{ width: "90%" }}>
            <Bar
              data={completedTrainingsOfAlertsByInsightAndCategory()}
              options={alertInsightCategoryTrainingCompletedBarOptions}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "100px",
          }}
        >
          <div style={{ width: "90%" }}>
            <Bar
              data={solvedAlertsByInsightAndCategory()}
              options={alertInsightCategorySolvedBarOptions}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "100px",
          }}
        >
          <div style={{ width: "80%" }}>
            <Bar
              data={completedTrainingsOfAlertsByTraining()}
              options={alertTrainingTrainingCompletedBarOptions}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "100px",
          }}
        >
          <div style={{ width: "80%" }}>
            <Bar
              data={solvedAlertsByTraining()}
              options={alertTrainingSolvedBarOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plots;
