<template>
  <div class="playground">
    <div class="demo-section">
      <button ref="triggerRef" @click="showSelect = !showSelect">12345678910jhkhhkh</button>

      <CFormItem label="Email" required for="email">
        <CInput id="email" v-model="input" clearable variant="filled"> </CInput>
      </CFormItem>

      <CTabs value="1">
        <CTabList>
          <CTab value="1">Tab 1</CTab>
          <CTab value="2">Tab 2</CTab>
          <CTab value="3">Tab 3</CTab>
        </CTabList>
      </CTabs>

      <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci! -->

      <CFormItem label="Выберите страну" for="country">
        <CSelect
          v-if="showSelect"
          v-model="selectedCountry"
          :options="countries"
          option-value="value"
          option-label="label"
          option-disabled="disabled"
          style="width: 200px; margin-left: auto"
        >
        </CSelect>
      </CFormItem>

      <div ref="root">Root</div>

      <CTooltip content="Tooltip content">
        <CButton>Tooltip</CButton>
      </CTooltip>

      <CButton ref="buttonRef">dfgdfg</CButton>
      <CDropdown :root-el="buttonRef">ssdfgdsfgdfg</CDropdown>

      <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore officia, culpa nam hic quibusdam assumenda ipsa. Tempora qui dignissimos rerum, enim odit repudiandae itaque consequatur nobis, doloremque, iure adipisci! -->

      <!-- <CFormItem label="Множественный выбор" for="multiple">
        <CSelect
          v-model="selectedCountries"
          :options="countries"
          placeholder="Выберите страны"
          multiple
          clearable
        />
      </CFormItem>

      <CFormItem label="С поиском" for="searchable">
        <CSelect
          v-model="searchableCountry"
          :options="countries"
          placeholder="Найдите страну"
          searchable
          clearable
        />
      </CFormItem> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import CloseIcon from '@craftvue/icons/close'
// import { CButton, CInput, CTab, CTabList, CTabs, CFormItem, CIcon } from 'craftvue'

// import {HomeIcon} from "icons-dev"
import {
  CInput,
  CTab,
  CTabList,
  CTabs,
  CFormItem,
  CSelect,
  CTooltip,
  CButton,
  CDropdown,
} from 'craftvue-dev'

const showSelect = ref(true)
const triggerRef = ref<HTMLElement | null>(null)
const buttonRef = ref<HTMLElement | null>(null)
const root = ref<HTMLElement | null>(null)
const input = ref('')
const selectedCountry = ref('ru')
// const selectedCountries = ref([])
// const searchableCountry = ref(null)

const countries = ref([
  { label: 'Россия', value: 'ru', disabled: true },
  { label: 'США', value: 'us' },
  { label: 'Япония', value: 'jp' },
  { label: 'Китай', value: 'cn', disabled: true },
  { label: 'Бразилия', value: 'br' },
])
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
  height: 400px;
  overflow-y: auto;
  background-color: var(--ground-back);
}

.demo-section h2 {
  margin-top: 0;
  color: #333;
}

.select {
  width: 250px;
}
</style>
