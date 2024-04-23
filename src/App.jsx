import FinancialChart from "./FinansialChart"; // Путь к вашему компоненту

const App = () => {
  const stockData = [
    { date: "2021-01-01", price: 100 },
    { date: "2021-03-01", price: 118 },
    { date: "2021-05-02", price: 90 },
    { date: "2021-05-02", price: 123 },
    { date: "2021-05-02", price: 102 },
    { date: "2021-05-02", price: 133 },
    { date: "2021-05-02", price: 111 },
    { date: "2021-05-02", price: 120 },
    // добавьте больше данных
  ];
  return (
    <div>
      <h1>Dashboard</h1>
      <FinancialChart data={stockData} />
      <FinancialChart data={stockData} />
      <FinancialChart data={stockData} />
      <FinancialChart data={stockData} />
    </div>
  );
};

export default App;
