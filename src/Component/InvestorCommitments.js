


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
function InvestorCommitments({ investorId }) {
    const [commitments, setCommitments] = useState([]);
  
    useEffect(() => {
      if (investorId) {
        axios.get(`http://localhost:5068/api/Commitments/{investorId`)
          .then(response => setCommitments(response.data));
      }
    }, [investorId]);
  
    const columns = [
      { field: 'investorId', headerName: 'Id', width: 90 },
      { field: 'commitmentAssetClass', headerName: 'Asset Class', width: 150 },
      { field: 'commitmentCurrency', headerName: 'Currency', width: 100 },
      { field: 'investorId', headerName: 'Amount', width: 150 }
    ];
  
    return (
      <div style={{ height: 400, width: '100%' }}>
        <h2>Commitments</h2>
        <DataGrid
          rows={commitments}
          columns={columns}
          pageSize={5}
        />
      </div>
    );
  }
  
  export default InvestorCommitments;