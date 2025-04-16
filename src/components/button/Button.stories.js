import { background } from "storybook/internal/theming";
import { Button } from "./index";
import { fn } from '@storybook/test';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: { type: 'radio' },
          },
    },
    args: { onClick: fn() },
}

export const Button1 = {
    args: {
        label: 'Вариант 1',
        variant: 'primary'
    }
}


export const Button2 = {
    args: {
        label: 'Вариант 2',
        variant: 'secondary'
    }
}

export const Button3 = {
    args: {
        label: 'Вариант 3',
        variant: 'tertiary'
    }
}