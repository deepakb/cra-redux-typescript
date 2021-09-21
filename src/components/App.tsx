import React from 'react';
import Layout from './Layout';
import Header from './Header';
import Wallet from './Wallet';

import './App.css';

const App: React.FC = (): JSX.Element => {
  return <Layout header={<Header />} wallet={<Wallet />} />;
};

export default App;
