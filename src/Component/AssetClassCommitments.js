import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

function AssetClassCommitments({ assetClass }) {
  const [commitments, setCommitments] = useState([]);

  useEffect(() => {
    if (assetClass) {
      axios.get(`/api/AssetClass/${assetClass}`)
        .then(response => setCommitments(response.data));
    }
  }, [assetClass]);

  const columns = [
    { field: 'investorId', headerName: 'Id', width: 90 },
    { field: 'commitmentAssetClass', headerName: 'Asset Class', width: 150 },
    { field: 'commitmentCurrency', headerName: 'Currency', width: 100 },
    { field: 'totalCommitments', headerName: 'Amount', width: 150 }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Asset Class Commitments</h2>
      <DataGrid
        rows={commitments}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
}

export default AssetClassCommitments;