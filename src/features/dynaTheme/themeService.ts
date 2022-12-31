import { BASE_THEME_CONFIG, colorAliasToVariableName } from './themeModule';

export type ColorAlias = keyof typeof BASE_THEME_CONFIG;

export type ThemeData = Record<ColorAlias, string>;

export type Theme<K = string> = {
  name: K;
  data: ThemeData;
};

export type ExtendedTheme<K> = Exclude<Theme<K>, 'data'> & Partial<ThemeData>;
export const extendTheme = <T, K>(
  parentTheme: Theme<T>,
  extendedTheme: Theme<K>
): Theme<K> => {
  const name = extendedTheme.name;
  const data = { ...parentTheme.data, ...extendedTheme.data };
  return {
    name,
    data,
  };
};

export const BaseTheme: Theme<'default'> = {
  name: 'default',
  data: { ...BASE_THEME_CONFIG },
};

export const applyTheme = ({ data }: Theme) => {
  const root = document.documentElement;
  (Object.keys(data) as ColorAlias[]).forEach((colorAlias) => {
    const alias = colorAliasToVariableName(colorAlias);
    const color = data[colorAlias];
    root.style.setProperty(alias, color);
  });
};
