import { createContext, useState, ReactNode } from 'react';

interface MyContextProps {
  state: string;
  setState: (value: string) => void;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState("default value");

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
