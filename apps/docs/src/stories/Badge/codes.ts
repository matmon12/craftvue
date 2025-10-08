import type { BadgeStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const badgeCodeTexts: CodeTexts<BadgeStoryName> = {
  basic: {
    simple: '<CBadge value="5" />',
    full: `
      <template>
        <CBadge value="5" />
      </template>
      <script setup></script>
    `,
  },
  severity: {
    simple: `
      <CBadge value="5" severity="primary" />
      <CBadge value="5" severity="secondary" />
      <CBadge value="5" severity="contrast" />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CBadge value="5" severity="primary" />
          <CBadge value="5" severity="secondary" />
          <CBadge value="5" severity="contrast" />
        </div>
      </template>
      <script setup></script>
    `,
  },
  size: {
    simple: `
      <CBadge value="5" size="lg" />
      <CBadge value="5" />
      <CBadge value="5" size="sm" />
    `,
    full: `
      <template>
        <div style="display: flex; align-items: flex-end; gap: 10px;">
          <CBadge value="5" size="lg" />
          <CBadge value="5" />
          <CBadge value="5" size="sm" />
        </div>
      </template>
      <script setup></script>
    `,
  },
  maxValue: {
    simple: '<CBadge value="100" :max="99" />',
    full: `
      <template>
        <CBadge value="100" :max="99" />
      </template>
      <script setup></script>
    `,
  },
  customizations: {
    simple: `
      <CBadge value="NEW" severity="contrast" />
      <CBadge value="hot" severity="secondary" />
      <CBadge>
        <template #content>
          <div style="display: flex; align-items: center; gap: 4px;">
            <CIcon name="envelope" />
            99
          </div>
        </template>
      </CBadge>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CBadge value="NEW" severity="contrast" />
          <CBadge value="hot" severity="secondary" />
          <CBadge>
            <template #content>
              <div style="display: flex; align-items: center; gap: 4px;">
                <CIcon name="envelope" />
                99
              </div>
            </template>
          </CBadge>
        </div>
      </template>
      <script setup>
        import { CIcon } from 'craftvue'
      </script>
    `,
  },
  overlay: {
    simple: `
      <CBadge value="9" bordered>
        <template #default>
          <CButton label="Button" severity="secondary" />
        </template>
      </CBadge>
      <CBadge value="5" bordered>
        <template #default>
          <CIcon name="delete" :size="30" />
        </template>
      </CBadge>
      <CBadge bordered>
        <template #default >
          <CIcon name="envelope" :size="30" />
        </template>
      </CBadge>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 20px;">
          <CBadge value="9" bordered>
            <template #default>
              <CButton label="Button" severity="secondary" />
            </template>
          </CBadge>
          <CBadge value="5" bordered>
            <template #default>
              <CIcon name="delete" :size="30" />
            </template>
          </CBadge>
          <CBadge bordered>
            <template #default >
              <CIcon name="envelope" :size="30" />
            </template>
          </CBadge>
        </div>
      </template>
      <script setup>
        import { CButton, CIcon } from 'craftvue'
      </script>
    `,
  },
  positionOverlay: {
    simple: `
      <CBadge value="5" location="top-left">
        <template #default>
          <CButton label="Button" severity="secondary" />
        </template>
      </CBadge>
      <CBadge value="5" location="top-right">
        <template #default>
          <CButton label="Button" severity="secondary" />
        </template>
      </CBadge>
      <CBadge value="5" location="bottom-left">
        <template #default>
          <CButton label="Button" severity="secondary" />
        </template>
      </CBadge>
      <CBadge value="5" location="bottom-right">
        <template #default>
          <CButton label="Button" severity="secondary" />
        </template>
      </CBadge>
    `,
    full: `
      <template>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <CBadge value="5" location="top-left">
            <template #default>
              <CButton label="Button" severity="secondary" />
            </template>
          </CBadge>
          <CBadge value="5" location="top-right">
            <template #default>
              <CButton label="Button" severity="secondary" />
            </template>
          </CBadge>
          <CBadge value="5" location="bottom-left">
            <template #default>
              <CButton label="Button" severity="secondary" />
            </template>
          </CBadge>
          <CBadge value="5" location="bottom-right">
            <template #default>
              <CButton label="Button" severity="secondary" />
            </template>
          </CBadge>
        </div>
      </template>
      <script setup>
        import { CButton } from 'craftvue'
      </script>
    `,
  },
  button: {
    simple: `
      <CButton label="Delete" :icon="DeleteIcon" badge="2" badge-severity="secondary" />
      <CButton label="Submit" badge="2" severity="secondary" />
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton label="Delete" :icon="DeleteIcon" badge="2" badge-severity="secondary" />
          <CButton label="Submit" badge="2" severity="secondary" />
        </div>
      </template>
      <script setup>
        import { CButton } from 'craftvue'
        import { DeleteIcon } from '@craftvue/icons'
      </script>
    `,
  },
}

export default badgeCodeTexts
