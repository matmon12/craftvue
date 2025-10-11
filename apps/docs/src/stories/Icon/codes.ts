import type { IconStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const iconCodeTexts: CodeTexts<IconStoryName> = {
  basic: {
    simple: '<CIcon name="home" size="40" color="#ffffff" />',
    full: `
      <template>
        <CIcon name="home" size="40" color="#ffffff" />
      </template>
      <script setup></script>
    `,
  },
  name: {
    simple: `
      <CIcon size="40" color="#ffffff" name="home" />
      <CIcon size="40" color="#ffffff" name="delete" />
      <CIcon size="40" color="#ffffff" name="envelope" />
      <CIcon size="40" color="#ffffff" name="save" />
      <CIcon size="40" color="#ffffff" name="search" />
    `,
    full: `
      <template>
        <div style="display: flex; align-items: center; gap: 10px;">
          <CIcon size="40" color="#ffffff" name="home" />
          <CIcon size="40" color="#ffffff" name="delete" />
          <CIcon size="40" color="#ffffff" name="envelope" />
          <CIcon size="40" color="#ffffff" name="save" />
          <CIcon size="40" color="#ffffff" name="search" />
        </div>
      </template>
      <script setup></script>
    `,
  },
  color: {
    simple: `
      <CIcon size="40" name="search" color="#ffffff" />
      <CIcon size="40" name="home" color="#E2D5B9" />
      <CIcon size="40" name="delete" color="#D1C2A1" />
      <CIcon size="40" name="envelope" color="#bea87b" />
      <CIcon size="40" name="save" color="#B59A6A" />
    `,
    full: `
      <template>
        <div style="display: flex; align-items: center; gap: 10px;">
          <CIcon size="40" name="search" color="#ffffff" />
          <CIcon size="40" name="home" color="#E2D5B9" />
          <CIcon size="40" name="delete" color="#D1C2A1" />
          <CIcon size="40" name="envelope" color="#bea87b" />
          <CIcon size="40" name="save" color="#B59A6A" />
        </div>
      </template>
      <script setup></script>
    `,
  },
  size: {
    simple: `
      <CIcon name="save" size="30" color="#ffffff" />
      <CIcon name="save" size="40" color="#E2D5B9" />
      <CIcon name="save" size="50" color="#D1C2A1" />
      <CIcon name="save" size="60" color="#bea87b" />
      <CIcon name="save" size="70" color="#B59A6A" />
    `,
    full: `
      <template>
        <div style="display: flex; align-items: center; gap: 10px;">
          <CIcon name="save" size="30" color="#ffffff" />
          <CIcon name="save" size="40" color="#E2D5B9" />
          <CIcon name="save" size="50" color="#D1C2A1" />
          <CIcon name="save" size="60" color="#bea87b" />
          <CIcon name="save" size="70" color="#B59A6A" />
        </div>
      </template>
      <script setup></script>
    `,
  },
  template: {
    simple: `
      <CIcon size="200" color="ffffff">
        <IconLogo />
      </CIcon>
    `,
    full: `
      <template>
        <CIcon size="200" color="ffffff">
          <IconLogo />
        </CIcon>
      </template>
      <script setup>
        import IconLogo from 'docs/components/IconLogo.vue'
      </script>
    `,
  },
}

export default iconCodeTexts
