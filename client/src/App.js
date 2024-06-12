import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Import a CSS file for styling

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data from Backend</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Trade Code</th>
              <th>Close</th>
              <th>Low</th>
              <th>High</th>
              <th>Open</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.date}>
                <td>{item.date}</td>
                <td>{item.trade_code}</td>
                <td>{item.high}</td>
                <td>{item.low}</td>
                <td>{item.open}</td>
                <td>{item.close}</td>
                <td>{item.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
