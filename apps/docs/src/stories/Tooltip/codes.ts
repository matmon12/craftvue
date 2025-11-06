import type { TooltipStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const tooltipCodeTexts: CodeTexts<TooltipStoryName> = {
  basic: {
    simple: `
      <CTooltip content="Tooltip content">
        <CButton>Tooltip</CButton>
      </CTooltip>
    `,
    full: `
      <template>
        <CTooltip content="Tooltip content">
          <CButton>Tooltip</CButton>
        </CTooltip>
      </template>
      <script setup>
        import CTooltip from 'craftvue/tooltip'
        import CButton from 'craftvue/button'
      </script>
    `,
  },
  placement: {
    simple: `
      <CTooltip content="Tooltip content" placement="top" align="start">
        <CButton label="Top Start" />
      </CTooltip>
      <CTooltip content="Tooltip content" placement="top">
        <CButton label="Top" />
      </CTooltip>
      <CTooltip content="Tooltip content" placement="top" align="end">
        <CButton label="Top End" />
      </CTooltip>
      <CTooltip content="Tooltip content" placement="left" align="start" max-width="80px">
        <CButton label="Left Start" />
      </CTooltip>
      <CTooltip content="Tooltip content" placement="right" align="start" max-width="80px">
        <CButton label="Right Start" />
      </CTooltip>
      <CTooltip content="Tooltip content" placement="left" max-width="80px">
        <CButton label="Left" />
      </CTooltip>
      <CTooltip content="Tooltip content" placement="right" max-width="80px">
        <CButton label="Right" />
      </CTooltip>
      <CTooltip content="Tooltip content" placement="left" align="end" max-width="80px">
        <CButton label="Left End" />
      </CTooltip>
      <CTooltip content="Tooltip content" placement="right" align="end" max-width="80px">
        <CButton label="Right End" />
      </CTooltip>
      <CTooltip content="Tooltip content" align="start">
        <CButton label="Bot Start" />
      </CTooltip>
      <CTooltip content="Tooltip content">
        <CButton label="Bottom" />
      </CTooltip>
      <CTooltip content="Tooltip content" align="end">
        <CButton label="Bot End" />
      </CTooltip>
    `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column; width: 500px;">
          <div style="display: flex; justify-content: center; gap: 10px;">
            <CTooltip content="Tooltip content" placement="top" align="start">
              <CButton label="Top Start" />
            </CTooltip>
            <CTooltip content="Tooltip content" placement="top">
              <CButton label="Top" />
            </CTooltip>
            <CTooltip content="Tooltip content" placement="top" align="end">
              <CButton label="Top End" />
            </CTooltip>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <CTooltip content="Tooltip content" placement="left" align="start" max-width="80px">
              <CButton label="Left Start" />
            </CTooltip>
            <CTooltip content="Tooltip content" placement="right" align="start" max-width="80px">
              <CButton label="Right Start" />
            </CTooltip>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 10px 0;">
            <CTooltip content="Tooltip content" placement="left" max-width="80px">
              <CButton label="Left" />
            </CTooltip>
            <CTooltip content="Tooltip content" placement="right" max-width="80px">
              <CButton label="Right" />
            </CTooltip>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <CTooltip content="Tooltip content" placement="left" align="end" max-width="80px">
              <CButton label="Left End" />
            </CTooltip>
            <CTooltip content="Tooltip content" placement="right" align="end" max-width="80px">
              <CButton label="Right End" />
            </CTooltip>
          </div>
          <div style="display: flex; justify-content: center; gap: 10px;">
            <CTooltip content="Tooltip content" align="start">
              <CButton label="Bot Start" />
            </CTooltip>
            <CTooltip content="Tooltip content">
              <CButton label="Bottom" />
            </CTooltip>
            <CTooltip content="Tooltip content" align="end">
              <CButton label="Bot End" />
            </CTooltip>
          </div>
        </div>
      </template>
      <script setup>
        import CTooltip from 'craftvue/tooltip'
        import CButton from 'craftvue/button'
      </script>
    `,
  },
  trigger: {
    simple: `
      <CTooltip content="Tooltip content">
        <CButton>Hover On Me</CButton>
      </CTooltip>
      <CTooltip content="Tooltip content" trigger="click">
        <CButton severity="secondary">Click On Me</CButton>
      </CTooltip>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CTooltip content="Tooltip content">
            <CButton>Hover On Me</CButton>
          </CTooltip>
          <CTooltip content="Tooltip content" trigger="click">
            <CButton severity="secondary">Click On Me</CButton>
          </CTooltip>
        </div>
      </template>
      <script setup>
        import CTooltip from 'craftvue/tooltip'
        import CButton from 'craftvue/button'
      </script>
    `,
  },
  autoHide: {
    simple: `
      <CTooltip content="Enter your password" :auto-hide="false">
        <CInput placeholder="Password" />
      </CTooltip>
      <CTooltip content="Enter your email">
        <CInput placeholder="Email"/>
      </CTooltip>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CTooltip content="Enter your password" :auto-hide="false">
            <CInput placeholder="Password" />
          </CTooltip>
          <CTooltip content="Enter your email">
            <CInput placeholder="Email"/>
          </CTooltip>
        </div>
      </template>
      <script setup>
        import CTooltip from 'craftvue/tooltip'
        import CInput from 'craftvue/input'
      </script>
    `,
  },
  delay: {
    simple: `
      <CTooltip content="Tooltip content" :show-delay="1000" :hide-delay="500">
        <CButton>Tooltip</CButton>
      </CTooltip>
    `,
    full: `
      <template>
        <CTooltip content="Tooltip content" :show-delay="1000" :hide-delay="500">
          <CButton>Tooltip</CButton>
        </CTooltip>
      </template>
      <script setup>
        import CTooltip from 'craftvue/tooltip'
        import CButton from 'craftvue/button'
      </script>
    `,
  },
  template: {
    simple: `
      <CTooltip>
        <template #content>
          <div>
            <CIcon name="envelope" color="#B59A6A" size="20" />
            <span>craftvue151@gmail.com</span>
          </div>
        </template>
        <CButton>Custom Template</CButton>
      </CTooltip>
    `,
    full: `
      <template>
        <CTooltip>
          <template #content>
            <div style="display: flex; gap: 10px; align-items: center;">
              <CIcon name="envelope" color="#B59A6A" size="20" />
              <span>craftvue151@gmail.com</span>
            </div>
          </template>
          <CButton>Custom Template</CButton>
        </CTooltip>
      </template>
      <script setup>
        import CIcon from 'craftvue/icon'
        import CTooltip from 'craftvue/tooltip'
        import CButton from 'craftvue/button'
      </script>
    `,
  },
  triggerSlot: {
    simple: `
      <CTooltip trigger="click">
        <template #trigger="{ isOpen }">
          <CButton severity="secondary">
            <span>Trigger Slot</span>
            <CIcon :name="isOpen ? 'uparrow' : 'downarrow'" color="#B59A6A" size="16" />
          </CButton>
        </template>
      </CTooltip>
    `,
    full: `
      <template>
        <CTooltip trigger="click">
          <template #trigger="{ isOpen }">
            <CButton severity="secondary">
              <span>Trigger Slot</span>
              <CIcon :name="isOpen ? 'uparrow' : 'downarrow'" color="#B59A6A" size="16" />
            </CButton>
          </template>
        </CTooltip>
      </template>
      <script setup>
        import CTooltip from 'craftvue/tooltip'
        import CButton from 'craftvue/button'
        import CIcon from 'craftvue/icon'
      </script>
    `,
  },
  controlled: {
    simple: `
      <CButton @click="isOpen = !isOpen">Toggle Tooltip</CButton>
      <CTooltip
        content="Enter your password"
        :show="isOpen"
        @hide="close"
        @show="open"
      >
        <CInput placeholder="Password" />
      </CTooltip>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 10px;">
          <CButton @click="isOpen = !isOpen">Toggle Tooltip</CButton>
          <CTooltip
            content="Enter your password"
            :show="isOpen"
            @hide="close"
            @show="open"
          >
            <CInput placeholder="Password" />
          </CTooltip>
        </div>
      </template>
      <script setup>
        import { ref } from 'vue'
        import CTooltip from 'craftvue/tooltip'
        import CButton from 'craftvue/button'
        import CInput from 'craftvue/input'

        const isOpen = ref(false)

        const open = () => (isOpen.value = true)
        const close = () => (isOpen.value = false)
      </script>
    `,
  },
  rootEl: {
    simple: `
      <CButton ref="rootElRef">Root El</CButton>
      <CTooltip :root-el="rootElRef?.$el" content="Tooltip content" />
    `,
    full: `
      <template>
        <CButton ref="rootElRef">Root El</CButton>
        <CTooltip :root-el="rootElRef?.$el" content="Tooltip content" />
      </template>
      <script setup>
        import { useTemplateRef } from 'vue'
        import CTooltip from 'craftvue/tooltip'
        import CButton from 'craftvue/button'

        const rootElRef = useTemplateRef('rootElRef')
      </script>
    `,
  },
}

export default tooltipCodeTexts
