import React, { ComponentPropsWithoutRef } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, CircleButton } from '../src/index';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ComponentPropsWithoutRef<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variants: {
    intent: 'primary',
  },
  children: 'button',
};
