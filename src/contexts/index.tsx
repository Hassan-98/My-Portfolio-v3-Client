'use client';
import React, { useState } from 'react'
//= Contexts
import { ThemeContext } from './theme';

type Props = {
  defaultTheme: string;
  children: React.ReactNode;
}

function Contexts({ defaultTheme, children }: Props) {
  const [theme, setTheme] = useState(defaultTheme || 'light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme: (theme: string) => setTheme(theme) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default Contexts