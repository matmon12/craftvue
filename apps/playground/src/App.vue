<template>
  <div class="playground">
    <h1>CraftVue Playground</h1>
    <p>Тестирование компонентов библиотеки</p>

    <div class="demo-section">
      <h2>Button</h2>
      <CButton label="123"></CButton>
      <CFormItem label="Email" required for="email">
        <CInput v-model="input" clearable>
        </CInput>
      </CFormItem>
      <CTabs value="1">
        <CTabList>
          <CTab value="1">Tab 1</CTab>
          <CTab value="2">Tab 2</CTab>
          <CTab value="3">Tab 3</CTab>
        </CTabList>
      </CTabs>

      <CIcon name="edit" />

      <EnvelopeIcon />

      <!-- <CloseIcon /> -->
      <!-- <TestVue>123</TestVue> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import CloseIcon from '@craftvue/icons/close'
// import { CButton, CInput, CTab, CTabList, CTabs, CFormItem, CIcon } from 'craftvue'

import { CButton, CInput, CTab, CTabList, CTabs, CFormItem, CIcon } from 'craftvue-dev'
// import { EnvelopeIcon } from 'icons-dev'

const input = ref('')
</script>

<style scoped>
.playground {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.demo-section {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.demo-section h2 {
  margin-top: 0;
  color: #333;
}
</style>
