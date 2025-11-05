// Доступные UI компоненты
export type UIComponentType =
  | 'button'
  | 'input'
  | 'badge'
  | 'tabs'
  | 'formItem'
  | 'icon'
  | 'select'
  | 'dropdown'
  | 'tooltip'

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

export type SelectStoryName =
  | 'basic'
  | 'disabled'
  | 'disabledOption'
  | 'clearable'
  | 'invalid'
  | 'multiple'
  | 'filled'
  | 'fullWidth'
  | 'loading'
  | 'filter'
  | 'size'
  | 'checkmark'
  | 'template'
  | 'form'

export type DropdownStoryName =
  | 'basic'
  | 'placement'
  | 'sameWidth'
  | 'arrow'
  | 'animation'
  | 'template'
  | 'maxSize'
  | 'boundaryPadding'
  | 'offset'

export type TooltipStoryName =
  | 'basic'
  | 'placement'
  | 'trigger'
  | 'autoHide'
  | 'delay'
  | 'template'
  | 'triggerSlot'
  | 'controlled'
  | 'rootEl'

// Union тип для всех возможных названий историй
export type AllStoryNames =
  | ButtonStoryName
  | BadgeStoryName
  | InputStoryName
  | TabsStoryName
  | FormItemStoryName
  | IconStoryName
  | SelectStoryName
  | DropdownStoryName
  | TooltipStoryName

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
  language?: 'javascript' | 'typescript' | 'xml' | 'markdown' | 'tsx' | 'bash' | 'apache'
  /** Парсер кода для Prettier */
  parser?: 'babel' | 'vue' | 'markdown' | 'html' | 'bash'
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
