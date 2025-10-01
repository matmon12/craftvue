<template>
  <div class="gallery">
    <div v-for="(IconComponent, name) in icons" :key="name" class="gallery__item">
      <CIcon class="gallery__item-icon">
        <component :is="IconComponent" />
      </CIcon>
      <span class="gallery__item-text">{{ name.replace('Icon', '').toLowerCase() }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CIcon } from 'craftvue'
import * as icons from '@craftvue/icons'
</script>

<style scoped lang="scss">
.gallery {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
  background-color: var(--ground-back);

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #414141;
    border-radius: 8px;
    padding: 10px;
    background-color: #ffffff0a;
    transition:
      border-color 0.3s,
      box-shadow 0.3s;

    &:hover {
      border-color: #41b883;
      box-shadow: 0 0 10px #525252;
    }
  }

  &__item-icon {
    font-size: 32px;
    margin-bottom: 5px;
  }

  &__item-text {
    font-size: 12px;
    color: #8f8f8f;
    word-break: break-word;
  }
}
</style>
