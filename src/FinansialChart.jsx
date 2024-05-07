import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import zoomPlugin from "chartjs-plugin-zoom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);
const FinancialChart = ({ data, name }) => {
  console.log(name);
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: name,
        data: data.map((d) => d.price),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    aspectRatio: 1, // Установите нужное соотношение сторон, если необходимо
    scales: {
      y: {},
      x: {
        ticks: {
          maxRotation: 90,
          minRotation: 30,
        },
      },
    },
    plugins: {
      zoom: {
        zoom: {
          wheel: { enabled: true },
          pinch: { enabled: true },
          mode: "x",
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};
FinancialChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
};

export default FinancialChart;
