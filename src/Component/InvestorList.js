import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
 function InvestorList({ onSelectInvestor }) {
    const [investors, setInvestors] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5068/api/Investors')
        .then(response => setInvestors(response.data));
    }, []);
  
    const columns = [
      { field: 'investorId', headerName: 'Id', width: 90 },
      { field: 'investorName', headerName: 'Name', width: 200 },
      { field: 'investorType', headerName: 'Type', width: 150 },
      { field: 'investorCountry', headerName: 'Country', width: 150 },
      { field: 'investorDateAdded', headerName: 'Added date', width: 200 },
      { field: 'investorLastUpdated', headerName: 'updated date', width: 200 },
      { field: 'totalCommitments', headerName: 'Total Commitment', width: 150 }
    ];
  
    return (
      <div style={{ height: 400, width: '100%' }}>
        <h2>Investors</h2>
        <DataGrid
          rows={investors}
          columns={columns}
          pageSize={5}
          onRowClick={(params) => onSelectInvestor(params.row.id)}
        />
      </div>
    );
  }
  export default InvestorList;