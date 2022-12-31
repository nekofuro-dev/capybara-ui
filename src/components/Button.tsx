import { withDefaultVariants, withVariants } from 'react-cva-tools';

export const Button = withVariants('button', ['btn', 'font-bold'], {
  variants: {
    intent: {
      primary: 'bg-primary hover:bg-primary-hover text-primary-text',
    },
    padding: {
      small: '',
      medium: 'py-1 px-2',
    },
    round: {
      small: 'rounded-sm',
      medium: 'rounded',
      full: 'rounded-full',
    },
    shadow: {
      medium: 'shadow',
    },
  },
  defaultVariants: {
    padding: 'medium',
    round: 'medium',
    shadow: 'medium',
  },
});

export const CircleButton = withDefaultVariants(Button, {
  round: 'full',
  className: 'w-12 h-12',
});
