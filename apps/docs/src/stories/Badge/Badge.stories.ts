/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { CBadge } from 'craftvue'

const meta = {
  title: 'Components/Badge',
  component: CBadge,
  args: {
    value: undefined,
    size: 1 as any,
    severity: 'primary',
    location: 'bottom-left',
    bordered: false,
    max: 0,
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'text',
      description: '',
    },
    size: {
      control: {
        type: 'select',
        labels: { 0: 'Маленький', 1: 'Нормальный', 2: 'Большой' },
      },
      options: [0, 1, 2],
      mapping: { 0: 'sm', 1: undefined, 2: 'lg' },
      description: '',
    },
    severity: {
      control: 'select',
      description: '',
    },
    location: {
      control: 'select',
      description: '',
    },
    bordered: {
      control: 'boolean',
      description: '',
    },
    max: {
      control: 'number',
      description: '',
    },
  },
  render: (args) => ({
    components: { CBadge },
    setup() {
      return { args }
    },
    template: `
      <CBadge v-bind="args">
        <template #value>

        </template>
        <template #default>

        </template>
      </CBadge>
    `,
  }),
} satisfies Meta<typeof CBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
