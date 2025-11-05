import type { DropdownStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const dropdownCodeTexts: CodeTexts<DropdownStoryName> = {
  basic: {
    simple: `
      <CButton ref="rootElRef">Список доступных стран</CButton>
      <CDropdown :show="show" :root-el="rootElRef?.$el" @hide="close" @show="open">
        <ul style="display: flex; flex-direction: column; padding: 4px;">
          <li style="padding: 7px 10px;">Россия</li>
          <li style="padding: 7px 10px;">США</li>
          <li style="padding: 7px 10px;">Украина</li>
          <li style="padding: 7px 10px;">Великобритания</li>
        </ul>
      </CDropdown>
    `,
    full: `
      <template>
        <CButton ref="rootElRef">Список доступных стран</CButton>
        <CDropdown :show="show" :root-el="rootElRef?.$el" @hide="close" @show="open">
          <ul style="display: flex; flex-direction: column; padding: 4px;">
            <li style="padding: 7px 10px;">Россия</li>
            <li style="padding: 7px 10px;">США</li>
            <li style="padding: 7px 10px;">Украина</li>
            <li style="padding: 7px 10px;">Великобритания</li>
          </ul>
        </CDropdown>
      </template>
      <script setup>
        import { ref, useTemplateRef } from "vue"
        import { CButton, CDropdown } from "craftvue"

        const show = ref(false)
        const rootElRef = useTemplateRef('rootElRef')

        const close = () => (show.value = false)
        const open = () => (show.value = true)
      </script>
    `,
  },
  placement: {
    simple: `
      <CButton ref="rootElRef1">topStart</CButton>
      <CButton ref="rootElRef2">top</CButton>
      <CButton ref="rootElRef3">topEnd</CButton>
      <CButton ref="rootElRef4" severity="secondary">bottomStart</CButton>
      <CButton ref="rootElRef5" severity="secondary">bottom</CButton>
      <CButton ref="rootElRef6" severity="secondary">bottomEnd</CButton>
      <CDropdown :root-el="rootElRef1?.$el" placement="top">
        <div>Содержимое выпадающего списка, находящегося сверху элемента-триггера.</div>
      </CDropdown>
      <CDropdown :root-el="rootElRef2?.$el" placement="top" align="center">
        <div>Содержимое выпадающего списка, находящегося сверху элемента-триггера.</div>
      </CDropdown>
      <CDropdown :root-el="rootElRef3?.$el" placement="top" align="end">
        <div>Содержимое выпадающего списка, находящегося сверху элемента-триггера.</div>
      </CDropdown>
      <CDropdown :root-el="rootElRef4?.$el">
        <div>Содержимое выпадающего списка, находящегося снизу элемента-триггера.</div>
      </CDropdown>
      <CDropdown :root-el="rootElRef5?.$el" align="center">
        <div>Содержимое выпадающего списка, находящегося снизу элемента-триггера.</div>
      </CDropdown>
      <CDropdown :root-el="rootElRef6?.$el" align="end">
        <div>Содержимое выпадающего списка, находящегося снизу элемента-триггера.</div>
      </CDropdown>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 15px;">
          <CButton ref="rootElRef1">topStart</CButton>
          <CButton ref="rootElRef2">top</CButton>
          <CButton ref="rootElRef3">topEnd</CButton>
          <CButton ref="rootElRef4" severity="secondary">bottomStart</CButton>
          <CButton ref="rootElRef5" severity="secondary">bottom</CButton>
          <CButton ref="rootElRef6" severity="secondary">bottomEnd</CButton>
        </div>
        <CDropdown :root-el="rootElRef1?.$el" placement="top">
          <div style="padding: 5px 10px;">Содержимое выпадающего списка, находящегося сверху элемента-триггера.</div>
        </CDropdown>
        <CDropdown :root-el="rootElRef2?.$el" placement="top" align="center">
          <div style="padding: 5px 10px;">Содержимое выпадающего списка, находящегося сверху элемента-триггера.</div>
        </CDropdown>
        <CDropdown :root-el="rootElRef3?.$el" placement="top" align="end">
          <div style="padding: 5px 10px;">Содержимое выпадающего списка, находящегося сверху элемента-триггера.</div>
        </CDropdown>
        <CDropdown :root-el="rootElRef4?.$el">
          <div style="padding: 5px 10px;">Содержимое выпадающего списка, находящегося снизу элемента-триггера.</div>
        </CDropdown>
        <CDropdown :root-el="rootElRef5?.$el" align="center">
          <div style="padding: 5px 10px;">Содержимое выпадающего списка, находящегося снизу элемента-триггера.</div>
        </CDropdown>
        <CDropdown :root-el="rootElRef6?.$el" align="end">
          <div style="padding: 5px 10px;">Содержимое выпадающего списка, находящегося снизу элемента-триггера.</div>
        </CDropdown>
      </template>
      <script setup>
        import { useTemplateRef } from "vue"
        import { CButton, CDropdown } from "craftvue"

        const rootElRef1 = useTemplateRef('rootElRef1')
        const rootElRef2 = useTemplateRef('rootElRef2')
        const rootElRef3 = useTemplateRef('rootElRef3')
        const rootElRef4 = useTemplateRef('rootElRef4')
        const rootElRef5 = useTemplateRef('rootElRef5')
        const rootElRef6 = useTemplateRef('rootElRef6')
      </script>
    `,
  },
  sameWidth: {
    simple: `
      <CButton ref="rootElRef">Список доступных стран</CButton>
      <CDropdown :show="show" :root-el="rootElRef?.$el" @hide="close" @show="open" same-width>
        <ul style="display: flex; flex-direction: column; padding: 4px;">
          <li style="padding: 7px 10px;">Россия</li>
          <li style="padding: 7px 10px;">США</li>
          <li style="padding: 7px 10px;">Украина</li>
          <li style="padding: 7px 10px;">Великобритания</li>
        </ul>
      </CDropdown>
    `,
    full: `
      <template>
        <CButton ref="rootElRef">Список доступных стран</CButton>
        <CDropdown :show="show" :root-el="rootElRef?.$el" @hide="close" @show="open" same-width>
          <ul style="display: flex; flex-direction: column; padding: 4px;">
            <li style="padding: 7px 10px;">Россия</li>
            <li style="padding: 7px 10px;">США</li>
            <li style="padding: 7px 10px;">Украина</li>
            <li style="padding: 7px 10px;">Великобритания</li>
          </ul>
        </CDropdown>
      </template>
      <script setup>
        import { ref, useTemplateRef } from "vue"
        import { CButton, CDropdown } from "craftvue"

        const show = ref(false)
        const rootElRef = useTemplateRef('rootElRef')

        const close = () => (show.value = false)
        const open = () => (show.value = true)
      </script>
    `,
  },
  arrow: {
    simple: `
      <CButton ref="rootElRef">Список доступных стран</CButton>
      <CDropdown :show="show" :root-el="rootElRef?.$el" @hide="close" @show="open" arrow>
        <ul style="display: flex; flex-direction: column; padding: 4px;">
          <li style="padding: 7px 10px;">Россия</li>
          <li style="padding: 7px 10px;">США</li>
          <li style="padding: 7px 10px;">Украина</li>
          <li style="padding: 7px 10px;">Великобритания</li>
        </ul>
      </CDropdown>
    `,
    full: `
      <template>
        <CButton ref="rootElRef">Список доступных стран</CButton>
        <CDropdown :show="show" :root-el="rootElRef?.$el" @hide="close" @show="open" arrow>
          <ul style="display: flex; flex-direction: column; padding: 4px;">
            <li style="padding: 7px 10px;">Россия</li>
            <li style="padding: 7px 10px;">США</li>
            <li style="padding: 7px 10px;">Украина</li>
            <li style="padding: 7px 10px;">Великобритания</li>
          </ul>
        </CDropdown>
      </template>
      <script setup>
        import { ref, useTemplateRef } from "vue"
        import { CButton, CDropdown } from "craftvue"

        const show = ref(false)
        const rootElRef = useTemplateRef('rootElRef')

        const close = () => (show.value = false)
        const open = () => (show.value = true)
      </script>
    `,
  },
  animation: {
    simple: `
      <CButton ref="rootElRef1" variant="outlined">Opacity</CButton>
      <CButton ref="rootElRef2">Zoom</CButton>
      <CDropdown :root-el="rootElRef1?.$el" >
        <div style="padding: 5px 10px;">Содержимое выпадающего списка с анимацией 'opacity'.</div>
      </CDropdown>
      <CDropdown
        :root-el="rootElRef2?.$el"
        animation="zoom"
      >
        <div style="padding: 5px 10px;">Содержимое выпадающего списка с анимацией 'zoom'.</div>
      </CDropdown>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 15px;">
          <CButton ref="rootElRef1" variant="outlined">Opacity</CButton>
          <CButton ref="rootElRef2">Zoom</CButton>
        </div>
        <CDropdown
          :root-el="rootElRef1?.$el"
        >
          <div style="padding: 5px 10px;">Содержимое выпадающего списка с анимацией 'opacity'.</div>
        </CDropdown>
        <CDropdown
          :root-el="rootElRef2?.$el"
          animation="zoom"
        >
          <div style="padding: 5px 10px;">Содержимое выпадающего списка с анимацией 'zoom'.</div>
        </CDropdown>
      </template>
      <script setup>
        import { useTemplateRef } from "vue"
        import { CButton, CDropdown } from "craftvue"

        const rootElRef1 = useTemplateRef('rootElRef1')
        const rootElRef2 = useTemplateRef('rootElRef2')
      </script>
    `,
  },
  template: {
    simple: `
      <CButton ref="rootElRef">Список доступных стран</CButton>
      <CDropdown :show="show" :root-el="rootElRef?.$el" @hide="close" @show="open">
        <template #header>
          <div>
            <CInput v-model="input"/>
          </div>
        </template>
        <ul style="display: flex; flex-direction: column; padding: 4px;">
          <li style="padding: 7px 10px;">Россия</li>
          <li style="padding: 7px 10px;">США</li>
          <li style="padding: 7px 10px;">Украина</li>
          <li style="padding: 7px 10px;">Великобритания</li>
        </ul>
        <template #footer>
          <div>
            <CButton size="sm">Добавить</CButton>
          </div>
        </template>
      </CDropdown>
    `,
    full: `
      <template>
        <CButton ref="rootElRef">Список доступных стран</CButton>
        <CDropdown :show="show" :root-el="rootElRef?.$el" @hide="close" @show="open">
          <template #header>
            <div style="padding: 7px 7px 0;">
              <CInput v-model="input"/>
            </div>
          </template>
          <ul style="display: flex; flex-direction: column; padding: 4px;">
            <li style="padding: 7px 10px;">Россия</li>
            <li style="padding: 7px 10px;">США</li>
            <li style="padding: 7px 10px;">Украина</li>
            <li style="padding: 7px 10px;">Великобритания</li>
          </ul>
          <template #footer>
            <div style="padding: 0 7px 7px;">
              <CButton size="sm" style="width: 100%;">Добавить</CButton>
            </div>
          </template>
        </CDropdown>
      </template>
      <script setup>
        import { ref, useTemplateRef } from "vue"
        import { CButton, CDropdown } from "craftvue"

        const show = ref(false)
        const input = ref('')
        const rootElRef = useTemplateRef('rootElRef')

        const close = () => (show.value = false)
        const open = () => (show.value = true)
      </script>
    `,
  },
  maxSize: {
    simple: `
      <CButton ref="rootElRef1">Ограничение по высоте</CButton>
      <CButton ref="rootElRef2" severity="secondary">Ограничение по ширине</CButton>
      <CDropdown
        :root-el="rootElRef1?.$el"
        :max-height="150"
      >
        <ul>
          <li>Россия</li>
          <li>США</li>
          <li>Украина</li>
          <li>Великобритания</li>
          <li>Германия</li>
          <li>Франция</li>
          <li>Италия</li>
        </ul>
      </CDropdown>
      <CDropdown
        :root-el="rootElRef2?.$el"
        :max-width="150"
      >
        <div>
          Это очень длинный текст, который будет ограничен по ширине и перенесется на новую строку при необходимости.
        </div>
      </CDropdown>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 15px;">
          <CButton ref="rootElRef1">Ограничение по высоте</CButton>
          <CButton ref="rootElRef2" severity="secondary">Ограничение по ширине</CButton>
        </div>
        <CDropdown
          :root-el="rootElRef1?.$el"
          :max-height="150"
        >
          <ul style="display: flex; flex-direction: column; padding: 4px;">
            <li style="padding: 7px 10px;">Россия</li>
            <li style="padding: 7px 10px;">США</li>
            <li style="padding: 7px 10px;">Украина</li>
            <li style="padding: 7px 10px;">Великобритания</li>
            <li style="padding: 7px 10px;">Германия</li>
            <li style="padding: 7px 10px;">Франция</li>
            <li style="padding: 7px 10px;">Италия</li>
          </ul>
        </CDropdown>
        <CDropdown
          :root-el="rootElRef2?.$el"
          :max-width="150"
        >
          <div style="padding: 5px 10px;">
            Это очень длинный текст, который будет ограничен по ширине и перенесется на новую строку при необходимости.
          </div>
        </CDropdown>
      </template>
      <script setup>
        import { useTemplateRef } from "vue"
        import { CButton, CDropdown } from "craftvue"

        const rootElRef1 = useTemplateRef('rootElRef1')
        const rootElRef2 = useTemplateRef('rootElRef2')
      </script>
    `,
  },
  boundaryPadding: {
    simple: `
      <CButton ref="rootElRef1">Отступ от края 5px</CButton>
      <CButton ref="rootElRef2">Отступ от края 15px</CButton>
      <CDropdown
        :root-el="rootElRef1?.$el"
        placement="top"
        boundary-padding="5"
      >
        <div>Dropdown с boundaryPadding 5px.</div>
      </CDropdown>
      <CDropdown
        :root-el="rootElRef2?.$el"
        placement="top"
        boundary-padding="15"
      >
        <div>Dropdown с boundaryPadding 15px.</div>
      </CDropdown>
    `,
    full: `
      <template>
        <div style="height: 130px;">
          <div style="position: fixed; top: 40px; left: 20px;">
            <CButton ref="rootElRef1">Отступ от края 5px</CButton>
          </div>
          <div style="position: fixed; top: 40px; right: 20px;">
            <CButton ref="rootElRef2">Отступ от края 15px</CButton>
          </div>
        </div>
        <CDropdown
          :root-el="rootElRef1?.$el"
          placement="top"
          :boundary-padding="5"
        >
          <div style="padding: 2px 7px;">Dropdown с boundaryPadding 5px.</div>
        </CDropdown>
        <CDropdown
          :root-el="rootElRef2?.$el"
          placement="top"
          :boundary-padding="15"
        >
          <div style="padding: 2px 7px;">Dropdown с boundaryPadding 15px.</div>
        </CDropdown>
      </template>
      <script setup>
        import { useTemplateRef } from "vue"
        import { CButton, CDropdown } from "craftvue"

        const rootElRef1 = useTemplateRef('rootElRef1')
        const rootElRef2 = useTemplateRef('rootElRef2')
      </script>
    `,
  },
  offset: {
    simple: `
      <CButton ref="rootElRef1">Offset: 5px (по умолчанию)</CButton>
      <CButton ref="rootElRef2">Offset: 15px</CButton>
      <CButton ref="rootElRef3">Offset: 30px</CButton>
      <CDropdown
        :root-el="rootElRef1?.$el"
        :offset="5"
      >
        <div>Dropdown с отступом 5px от триггера.</div>
      </CDropdown>
      <CDropdown
        :root-el="rootElRef2?.$el"
        :offset="15"
      >
        <div>Dropdown с отступом 15px от триггера.</div>
      </CDropdown>
      <CDropdown
        :root-el="rootElRef3?.$el"
        :offset="30"
      >
        <div>Dropdown с отступом 30px от триггера.</div>
      </CDropdown>
    `,
    full: `
      <template>
        <div style="display: flex; gap: 15px; flex-direction: column; align-items: center;">
          <CButton ref="rootElRef1">Offset: 5px (по умолчанию)</CButton>
          <CButton ref="rootElRef2">Offset: 15px</CButton>
          <CButton ref="rootElRef3">Offset: 30px</CButton>
        </div>
        <CDropdown
          :root-el="rootElRef1?.$el"
          :offset="5"
        >
          <div style="padding: 5px 10px;">Dropdown с отступом 5px от триггера.</div>
        </CDropdown>
        <CDropdown
          :root-el="rootElRef2?.$el"
          :offset="15"
        >
          <div style="padding: 5px 10px;">Dropdown с отступом 15px от триггера.</div>
        </CDropdown>
        <CDropdown
          :root-el="rootElRef3?.$el"
          :offset="30"
        >
          <div style="padding: 5px 10px;">Dropdown с отступом 30px от триггера.</div>
        </CDropdown>
      </template>
      <script setup>
        import { useTemplateRef } from "vue"
        import { CButton, CDropdown } from "craftvue"

        const rootElRef1 = useTemplateRef('rootElRef1')
        const rootElRef2 = useTemplateRef('rootElRef2')
        const rootElRef3 = useTemplateRef('rootElRef3')
      </script>
    `,
  },
}

export default dropdownCodeTexts
