import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Context = createContext({});

const ContextProvider = ({children}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@Agrotools:forms');
      jsonValue != null ? setData(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (d) => {
    try {
      const jsonValue = JSON.stringify(d);
      console.log('Dados json', jsonValue);
      await AsyncStorage.setItem('@Agrotools:forms', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  return (
    <Context.Provider
      value={{
        data: data,
        setData: setData,
        storeData,
      }}>
      {children}
    </Context.Provider>
  );
};

function useCont() {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {ContextProvider, useCont};
