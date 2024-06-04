import React, { useState } from 'react';
import './App.css';

function App() {
  const initialRows = Array.from({ length: 39 }, (_, i) => ({
    id: i + 1,
    constituency: `Constituency ${i + 1}`,
    leadingCandidate: '',
    leadingParty: '',
    trailingCandidate: '',
    trailingParty: '',
    margin: '',
    status: '',
  }));

  const [rows, setRows] = useState(initialRows);

  const handleInputChange = (id, field, value) => {
    const newRows = rows.map(row =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(newRows);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Election Trends Tracker</h1>
      </header>
      <main className="App-main">
        <table>
          <thead>
            <tr>
              <th>Constituency</th>
              <th>Leading Candidate</th>
              <th>Leading Party</th>
              <th>Trailing Candidate</th>
              <th>Trailing Party</th>
              <th>Margin</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id}>
                <td>{row.constituency}</td>
                <td>
                  <input
                    type="text"
                    value={row.leadingCandidate}
                    onChange={(e) => handleInputChange(row.id, 'leadingCandidate', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.leadingParty}
                    onChange={(e) => handleInputChange(row.id, 'leadingParty', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.trailingCandidate}
                    onChange={(e) => handleInputChange(row.id, 'trailingCandidate', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.trailingParty}
                    onChange={(e) => handleInputChange(row.id, 'trailingParty', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.margin}
                    onChange={(e) => handleInputChange(row.id, 'margin', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.status}
                    onChange={(e) => handleInputChange(row.id, 'status', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
