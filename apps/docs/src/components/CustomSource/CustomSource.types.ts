// Доступные UI компоненты
export type UIComponentType = 'button' | 'input' | 'badge' | 'tabs' | 'formItem' | 'icon'

// Типы для названий историй UI компонентов
export type ButtonStoryName =
  | 'basic'
  | 'icons'
  | 'loading'
  | 'severity'
  | 'disabled'
  | 'raised'
  | 'rounded'
  | 'text'
  | 'raisedText'
  | 'outlined'
  | 'iconOnly'
  | 'size'
  | 'badge'
  | 'template'

export type BadgeStoryName =
  | 'basic'
  | 'severity'
  | 'size'
  | 'maxValue'
  | 'customizations'
  | 'overlay'
  | 'positionOverlay'
  | 'button'

export type InputStoryName =
  | 'basic'
  | 'filled'
  | 'size'
  | 'invalid'
  | 'disabled'
  | 'clearable'
  | 'customClearIcon'
  | 'formatter'
  | 'password'
  | 'limitLength'
  | 'withIcon'
  | 'inputGroup'

export type TabsStoryName =
  | 'basic'
  | 'vertical'
  | 'dynamic'
  | 'template'
  | 'controlled'
  | 'scrollable'
  | 'disabled'
  | 'navigation'

export type FormItemStoryName =
  | 'basic'
  | 'withLabel'
  | 'required'
  | 'withError'
  | 'customLabel'
  | 'customError'
  | 'withFor'
  | 'form'

export type IconStoryName = 'basic' | 'name' | 'color' | 'size' | 'template'

// Union тип для всех возможных названий историй
export type AllStoryNames =
  | ButtonStoryName
  | BadgeStoryName
  | InputStoryName
  | TabsStoryName
  | FormItemStoryName
  | IconStoryName

// CustomSource props
export interface CustomSourceProps {
  /** Название истории  */
  name: AllStoryNames
  /** Тип UI компонента */
  type: UIComponentType
  /** Доступные кнопки */
  actions: ['copy'?, 'full'?, 'download'?]
  /** Передача кода напрямую */
  code?: string
  /** Язык кода (для подсветки) */
  language?: 'javascript' | 'typescript' | 'xml'
  /** Парсер кода для Prettier */
  parser: 'babel' | 'vue'
}

// Тип для кода историй
export type CodeTexts<T extends AllStoryNames = AllStoryNames> = Record<T, CodeData>

// Тип для импортированного модуля с кодом
export interface CodeModule {
  default: CodeTexts
}

// Тип для данных кода
export type CodeData = {
  simple: string
  full: string
}
