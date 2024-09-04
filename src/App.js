import React, { useState } from 'react';
import InvestorList from './Component/InvestorList';
import InvestorCommitments from './Component/InvestorCommitments';
import AssetClassCommitments from './Component/AssetClassCommitments';


function App() {
  const [selectedInvestorId, setSelectedInvestorId] = useState(null);
  const [selectedAssetClass, setSelectedAssetClass] = useState(null);

  return (
    <div>
      <InvestorList onSelectInvestor={setSelectedInvestorId} />
      {selectedInvestorId &&(
        <InvestorCommitments investorId={selectedInvestorId} />
      )}
      {selectedAssetClass &&(
        <AssetClassCommitments assetClass={setSelectedAssetClass} />
      )}
      </div>
  )
};

export default App;
