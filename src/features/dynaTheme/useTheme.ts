import { useEffect, useState } from 'react';
import { BaseTheme, Theme, applyTheme } from './themeService';

export const useTheme = (defaultTheme: Theme = BaseTheme) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return { theme, setTheme };
};
