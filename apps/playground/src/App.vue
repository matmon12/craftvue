<template>
  <div class="playground">
    <div class="demo-section">
      <CTabs value="1">
        <CTabList>
          <CTab value="1">Tab 1</CTab>
          <CTab value="2">Tab 2</CTab>
          <CTab value="3">Tab 3</CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel value="1">Panel 1</CTabPanel>
          <CTabPanel value="2">Panel 2</CTabPanel>
          <CTabPanel value="3">Panel 3</CTabPanel>
        </CTabPanels>
      </CTabs>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { CTabs, CTabList, CTab, CTabPanels, CTabPanel } from 'craftvue'
// import { CTabs } from 'craftvue/tabs'
// import { CTabList } from 'craftvue/tablist'
// import { CTab } from 'craftvue/tab'
// import { CTabPanels } from 'craftvue/tabpanels'
// import { CTabPanel } from 'craftvue/tabpanel'

// import {HomeIcon} from "icons-dev"
import {
  CTab,
  CTabList,
  CTabPanel,
  CTabPanels,
  CTabs,
} from 'craftvue-dev'
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
