import * as icons from '@craftvue/icons'
import { Component } from 'vue'

export interface IconProps {
  /** Название иконки для динамического импорта */
  name?: IconName
  /** Размер иконки */
  size?: number | string
  /** Цвет иконки */
  color?: string
}

export type IconName = {
  [K in keyof typeof icons]: K extends `${infer Name}Icon` ? Lowercase<Name> : never
}[keyof typeof icons]

export type IconsMap = Record<IconName, Component>
