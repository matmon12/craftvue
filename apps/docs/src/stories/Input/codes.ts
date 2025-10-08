import type { InputStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const FORMATTER = "(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
const PARSER = "(value) => value.replace(/\D/g, '')"

const inputCodeTexts: CodeTexts<InputStoryName> = {
  basic: {
    simple: '<CInput v-model="modelValue" placeholder="Enter text..." />',
    full: `
      <template>
        <CInput v-model="modelValue" placeholder="Enter text..." style="width: 300px" />
      </template>
      <script setup lang="ts">
        import { ref } from "vue"

        const modelValue = ref('')
      </script>
    `,
  },
  filled: {
    simple: '<CInput v-model="modelValue" placeholder="Enter text..." variant="filled" />',
    full: `
      <template>
        <CInput v-model="modelValue" placeholder="Enter text..." style="width: 300px" variant="filled" />
      </template>
      <script setup lang="ts">
        import {ref} from "vue"

        const modelValue = ref('')
      </script>
    `,
  },
  size: {
    simple: `
      <CInput v-model="value1" placeholder="Small" :prefixIcon="SearchIcon" type="text" size="sm" />
      <CInput v-model="value2" placeholder="Normal" :prefixIcon="SearchIcon" type="text" />
      <CInput v-model="value3" placeholder="Large" :prefixIcon="SearchIcon" type="text" size="lg" />
      `,
    full: `
      <template>
        <div style="width: 100%; display: flex; flex-direction: column; gap: 15px;">
          <CInput v-model="value1" placeholder="Small" :prefixIcon="SearchIcon" type="text" size="sm" />
          <CInput v-model="value2" placeholder="Normal" :prefixIcon="SearchIcon" type="text" />
          <CInput v-model="value3" placeholder="Large" :prefixIcon="SearchIcon" type="text" size="lg" />
        </div>
      </template>
      <script setup lang="ts">
        import {ref} from "vue"
        import { SearchIcon } from '@craftvue/icons'

        const value1 = ref('')
        const value2 = ref('')
        const value3 = ref('')
      </script>
    `,
  },
  invalid: {
    simple: `
      <CInput v-model="value1" placeholder="Name" :invalid="!value1" />
      <CInput v-model="value2" placeholder="Name" :invalid="!value2" variant="filled" />
    `,
    full: `
      <template>
        <div style="width: 300px; display: flex; flex-direction: column; gap: 15px;">
          <CInput v-model="value1" placeholder="Name" :invalid="!value1" />
          <CInput v-model="value2" placeholder="Name" :invalid="!value2" variant="filled" />
        </div>
      </template>
      <script setup lang="ts">
        import {ref} from "vue"

        const value1 = ref('')
        const value2 = ref('')
      </script>
    `,
  },
  disabled: {
    simple: '<CInput v-model="modelValue" placeholder="Disabled" disabled />',
    full: `
      <template>
        <CInput v-model="modelValue" placeholder="Disabled" style="width: 300px" disabled />
      </template>
      <script setup lang="ts">
        import {ref} from "vue"

        const modelValue = ref('')
      </script>
    `,
  },
  clearable: {
    simple: '<CInput v-model="modelValue" placeholder="Enter text..." clearable />',
    full: `
      <template>
        <CInput v-model="modelValue" placeholder="Enter text..." style="width: 300px" clearable />
      </template>
      <script setup lang="ts">
        import {ref} from "vue"

        const modelValue = ref('')
      </script>
    `,
  },
  customClearIcon: {
    simple:
      '<CInput v-model="modelValue" placeholder="Enter text..." clearable :clearIcon="DeleteIcon" />',
    full: `
      <template>
        <CInput v-model="modelValue" placeholder="Enter text..." style="width: 300px" clearable :clearIcon="DeleteIcon" />
      </template>
      <script setup lang="ts">
        import {ref} from "vue"
        import { DeleteIcon } from '@craftvue/icons'

        const modelValue = ref('Custom clear icon')
      </script>
    `,
  },
  formatter: {
    simple: `<CInput v-model="modelValue" placeholder="Enter text..." :formatter="${FORMATTER}" :parser="${PARSER}" />`,
    full: `
      <template>
        <CInput v-model="modelValue" placeholder="Enter text..." style="width: 300px" :formatter="${FORMATTER}" :parser="${PARSER}" />
      </template>
      <script setup lang="ts">
        import {ref} from "vue"

        const modelValue = ref('')
      </script>
    `,
  },
  password: {
    simple: '<CInput v-model="modelValue" placeholder="Input password" showPassword />',
    full: `
      <template>
        <CInput v-model="modelValue" placeholder="Input password" style="width: 300px" showPassword />
      </template>
      <script setup lang="ts">
        import {ref} from "vue"

        const modelValue = ref('')
      </script>
    `,
  },
  limitLength: {
    simple:
      '<CInput v-model="modelValue" placeholder="Enter text..." maxlength="20" showWordLimit />',
    full: `
      <template>
        <CInput v-model="modelValue" placeholder="Enter text..." style="width: 300px" maxlength="20" showWordLimit />
      </template>
      <script setup lang="ts">
        import {ref} from "vue"

        const modelValue = ref('')
      </script>
    `,
  },
  withIcon: {
    simple: `
        <CInput v-model="value1" placeholder="With suffix" :suffixIcon="DeleteIcon" />
        <CInput v-model="value2" placeholder="With prefix" :prefixIcon="SearchIcon" />
        <CInput v-model="value3" placeholder="With suffix">
          <template #suffix>
            <CIcon name="check" />
          </template>
        </CInput>
        <CInput v-model="value4" placeholder="With prefix">
          <template #prefix>
            <CIcon name="search" />
          </template>
        </CInput>
      `,
    full: `
      <template>
        <div style="display: flex; flex-direction: column;">
          <span style="margin-bottom: 5px;">Using attributes</span>
          <div style="display: flex; gap: 10px; margin-bottom: 15px;">
            <CInput v-model="value1" placeholder="With suffix" :suffixIcon="DeleteIcon" style="width: 250px;" />
            <CInput v-model="value2" placeholder="With prefix" :prefixIcon="SearchIcon" style="width: 250px;" />
          </div>
          <span style="margin-bottom: 5px;">Using slots</span>
          <div style="display: flex; gap: 10px;">
            <CInput v-model="value3" placeholder="With suffix" style="width: 250px;">
              <template #suffix>
                <CIcon name="check" />
              </template>
            </CInput>
            <CInput v-model="value4" placeholder="With prefix" style="width: 250px;">
              <template #prefix>
                <CIcon name="search" />
              </template>
            </CInput>
          </div>
        </div>
      </template>
      <script setup lang="ts">
        import {ref} from "vue"
        import { DeleteIcon, SearchIcon } from '@craftvue/icons'
        import { CIcon } from 'craftvue'

        const value1 = ref('')
        const value2 = ref('')
        const value3 = ref('')
        const value4 = ref('')
      </script>
    `,
  },
  inputGroup: {
    simple: `
      <CInput v-model="value1" placeholder="Enter text...">
        <template #prepend>
          Https://
        </template>
      </CInput>
      <CInput v-model="value2" placeholder="Enter text...">
        <template #append>
          <CButton :icon="SearchIcon" label="Search" style="margin: 0 -16px; border-radius: 0; height: 100%;" />
        </template>
      </CInput>
      <CInput v-model="value3" placeholder="Enter text...">
        <template #prepend>
          Https://
        </template>
        <template #append>
          <CButton :icon="SearchIcon" label="Search" style="margin: 0 -16px; border-radius: 0; height: 100%;" />
        </template>
      </CInput>
    `,
    full: `
      <template>
        <div style="width: 400px; display: flex; flex-direction: column; gap: 15px;" >
          <CInput v-model="value1" placeholder="Enter text...">
            <template #prepend>
              Https://
            </template>
          </CInput>
          <CInput v-model="value2" placeholder="Enter text...">
            <template #append>
              <CButton :icon="SearchIcon" label="Search" style="margin: 0 -16px; border-radius: 0; height: 100%;" />
            </template>
          </CInput>
          <CInput v-model="value3" placeholder="Enter text...">
            <template #prepend>
              Https://
            </template>
            <template #append>
              <CButton :icon="SearchIcon" label="Search" style="margin: 0 -16px; border-radius: 0; height: 100%;" />
            </template>
          </CInput>
        </div>
      </template>
      <script setup lang="ts">
        import {ref} from "vue"
        import { SearchIcon } from '@craftvue/icons'
        import { CButton } from 'craftvue'

        const value1 = ref('')
        const value2 = ref('')
        const value3 = ref('')
      </script>
    `,
  },
}

export default inputCodeTexts
