'use client';
import { FC } from 'react';
import { useTheme } from '../useTheme';

export const ThemeProvider: FC = () => {
  const { theme } = useTheme();

  return <div data-theme={theme.name} />;
};
