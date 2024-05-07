import { useState, useEffect } from "react";
import axios from "axios";
import FinancialChart from "./FinansialChart";

const App = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo"
        );

        if (response.data && response.data["Time Series (Daily)"]) {
          const timeSeries = response.data["Time Series (Daily)"];
          const formattedData = Object.entries(timeSeries).map(
            ([date, data]) => ({
              date: date,
              price: parseFloat(data["4. close"]),
            })
          );

          const title = response.data["Meta Data"]["1. Information"];

          setStockData(formattedData);
          setName(title);
        } else {
          throw new Error("Data is unavailble 'Time Series (Daily)'");
        }
      } catch (error) {
        console.error("Error of getting data:", error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div style={{ width: "587px", height: "572px" }}>
          <FinancialChart data={stockData} name={name} />
        </div>
      )}
    </div>
  );
};

export default App;
