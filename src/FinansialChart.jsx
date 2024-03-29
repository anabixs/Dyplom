import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

const FinancialChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "Цена акции",
        data: data.map((d) => d.price),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        // Используйте 'x' вместо 'xAxes' если нужно настроить ось X
        // Конфигурация для оси X, если необходимо
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
};

export default FinancialChart;
