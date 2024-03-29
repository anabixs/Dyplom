import FinancialChart from "./FinansialChart"; // Путь к вашему компоненту

const App = () => {
  const stockData = [
    { date: "2021-01-01", price: 100 },
    { date: "2021-01-02", price: 101 },
    // добавьте больше данных
  ];

  return (
    <div>
      <h1>График цен на акции</h1>
      <FinancialChart data={stockData} />
    </div>
  );
};

export default App;
