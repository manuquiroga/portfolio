"use client";
import React, { createContext, useContext, useState } from 'react';
import { Sections } from '@/lib/types';

type ContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: Sections;
  setActiveSection: React.Dispatch<React.SetStateAction<Sections>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ContextProvider({ children }: ContextProviderProps) {
const [activeSection, setActiveSection] = useState<Sections>('Home');
const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error("useActiveSectionContext must be used within an ContextProvider");
  }

  return context;
}