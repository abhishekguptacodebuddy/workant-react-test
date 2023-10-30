import React from 'react';
import DataProvider from './context/DataContext';
import UserList from './components/UserList';
import './App.css';


const App: React.FC = () => {
  return (
    <DataProvider>
      <div>
        <UserList />
      </div>
    </DataProvider>
  );
};

export default App;
