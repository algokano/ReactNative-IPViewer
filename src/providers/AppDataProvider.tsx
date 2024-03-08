import React, {createContext, useContext, useState, ReactNode} from 'react';

interface AppData {
  networkInfo: NetworkInfo | null;
  selectedImage: number;
  setNetworkInfo: (networkInfo: NetworkInfo | null) => void;
  setSelectedImage: (image: number) => void;
}

interface NetworkInfo {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
}

interface AppDataProviderProps {
  children: ReactNode;
}

const AppDataContext = createContext<AppData | undefined>(undefined);

export const AppDataProvider: React.FC<AppDataProviderProps> = ({children}) => {
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const contextValue: AppData = {
    networkInfo,
    selectedImage,
    setNetworkInfo,
    setSelectedImage,
  };

  return (
    <AppDataContext.Provider value={contextValue}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error('useAppData must be used within an AppDataProvider');
  }
  return context;
};
