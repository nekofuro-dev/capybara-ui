import '../src/global.css'
import * as React from 'react'
import {ThemeProvider} from '../src/features/dynaTheme/components/ThemeProvider'
// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  (Story) => (
    <>
    <ThemeProvider />
      <Story />
    </>
  )
]