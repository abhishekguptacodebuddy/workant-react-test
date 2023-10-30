import React, { createContext, useState, useEffect, ReactNode } from 'react';
import usersData from '../assets/users.json';
import timesheetsData from '../assets/timesheets.json';
import { TUser } from '../types/user.type';
import { TTimeSheet } from '../types/timesheet.type';

interface DataContextProps {
  users: TUser[];
  timesheets: TTimeSheet[];
}

export const DataContext = createContext<DataContextProps | undefined>(undefined);

const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [timesheets, setTimesheets] = useState<TTimeSheet[]>([]);

  useEffect(() => {
    setUsers(usersData);
    setTimesheets(timesheetsData);
  }, []);

  return (
    <DataContext.Provider value={{ users, timesheets }}>
      {children}
    </DataContext.Provider>
  );
};


export default DataProvider;
