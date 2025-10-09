import type { FormItemStoryName, CodeTexts } from 'docs/components/CustomSource/CustomSource.types'

const formItemCodeTexts: CodeTexts<FormItemStoryName> = {
  basic: {
    simple: `
      <CFormItem label="Username">
        <CInput v-model="value" placeholder="Enter name..." />
      </CFormItem>
    `,
    full: `
      <template>
        <CFormItem label="Username">
          <CInput v-model="value" placeholder="Enter name..." />
        </CFormItem>
      </template>
      <script setup>
        import { ref } from 'vue'
        import { CFormItem, CInput } from 'craftvue'

        const value = ref('')
      </script>
    `,
  },
  withLabel: {
    simple: `
      <CFormItem label="Email address">
        <CInput v-model="email" type="email" placeholder="example@email.com" />
      </CFormItem>
    `,
    full: `
      <template>
        <CFormItem label="Email address">
          <CInput v-model="email" type="email" placeholder="example@email.com" />
        </CFormItem>
      </template>
      <script setup>
        import { ref } from 'vue'
        import { CFormItem, CInput } from 'craftvue'

        const email = ref('')
      </script>
    `,
  },
  required: {
    simple: `
      <CFormItem label="Password" required>
        <CInput v-model="value" type="password" placeholder="Enter your password" />
      </CFormItem>
    `,
    full: `
      <template>
        <CFormItem label="Password" required>
          <CInput v-model="value" type="password" placeholder="Enter your password" />
        </CFormItem>
      </template>
      <script setup>
        import { ref } from 'vue'
        import { CFormItem, CInput } from 'craftvue'

        const value = ref('')
      </script>
    `,
  },
  withError: {
    simple: `
      <CFormItem label="Email address" error-message="Enter a valid email">
        <CInput v-model="value" type="email" invalid />
      </CFormItem>
    `,
    full: `
      <template>
        <CFormItem label="Email address" error-message="Enter a valid email">
          <CInput v-model="value" type="email" invalid />
        </CFormItem>
      </template>
      <script setup>
        import { ref } from 'vue'
        import { CFormItem, CInput } from 'craftvue'

        const value = ref('craftvue@gmail.com')
      </script>
    `,
  },
  customLabel: {
    simple: `
      <CFormItem label="Phone number">
        <template #labelSlot>
          <span>For example: <code style="color: var(--prime-color); padding-left: 4px;">+7(953)413-38-83</code></span>
        </template>
        <CInput v-model="value" placeholder="Enter number..." />
      </CFormItem>
    `,
    full: `
      <template>
        <CFormItem label="Phone number">
          <template #labelSlot>
            <span>For example: <code style="color: var(--prime-color); padding-left: 4px;">+7(953)413-38-83</code></span>
          </template>
          <CInput v-model="value" placeholder="Enter number..." />
        </CFormItem>
      </template>
      <script setup>
        import { ref } from 'vue'
        import { CFormItem, CInput } from 'craftvue'

        const value = ref('')
      </script>
    `,
  },
  customError: {
    simple: `
      <CFormItem label="Password" error-message="The password must contain at least 8 characters.">
        <CInput v-model="value" type="password" invalid />
        <template #error="{ error }">
          <div style="color: var(--invalid-color); font-size: 12px; display: flex; align-items: center; gap: 4px; margin-top: 4px;">
            <span>⚠️</span>
            <span>{{ error }}</span>
          </div>
        </template>
      </CFormItem>
    `,
    full: `
      <template>
        <CFormItem label="Password" error-message="The password must contain at least 8 characters.">
          <CInput v-model="value" type="password" invalid />
          <template #error="{ error }">
            <div style="color: var(--invalid-color); font-size: 12px; display: flex; align-items: center; gap: 4px; margin-top: 4px;">
              <span>⚠️</span>
              <span>{{ error }}</span>
            </div>
          </template>
        </CFormItem>
      </template>
      <script setup>
        import { ref } from 'vue'
        import { CFormItem, CInput } from 'craftvue'

        const value = ref('123456')
      </script>
    `,
  },
  withFor: {
    simple: `
      <CFormItem label="Phone number" for="phone-input">
        <CInput id="phone-input" v-model="phone" type="tel" placeholder="+7 (999) 123-45-67" />
      </CFormItem>
    `,
    full: `
      <template>
        <CFormItem label="Phone number" for="phone-input">
          <CInput id="phone-input" v-model="phone" type="tel" placeholder="+7 (999) 123-45-67" />
        </CFormItem>
      </template>
      <script setup>
        import { ref } from 'vue'
        import { CFormItem, CInput } from 'craftvue'

        const phone = ref('')
      </script>
    `,
  },
  form: {
    simple: `
      <form @submit.prevent="submit">
        <h3>Contact form</h3>

        <CFormItem label="Name" required :error-message="errors.name">
          <CInput v-model="form.name" placeholder="Your name" :invalid="!!errors.name"/>
        </CFormItem>

        <CFormItem label="Email" required :error-message="errors.email">
          <CInput v-model="form.email" type="email" placeholder="your@email.com" :invalid="!!errors.email" />
        </CFormItem>

        <CFormItem label="Phone number">
          <CInput v-model="form.phone" type="tel" placeholder="+7 (999) 123-45-67" />
        </CFormItem>

        <CFormItem label="Resources" required :errorMessage="errors.resources">
          <label>
            <input v-model="form.resources" type="radio" name="resources" value="online" />
            <span>Online resource</span>
          </label>
          <label>
            <input v-model="form.resources" type="radio" name="resources" value="offline" />
            <span>Offline resource</span>
          </label>
        </CFormItem>

        <CButton label="Submit" type="submit" />
        <CButton label="Reset" @click.prevent="reset" severity="secondary" />
      </form>
    `,
    full: `
      <template>
        <form @submit.prevent="submit" style="display: flex; flex-direction: column; gap: 5px; width: 400px; padding: 20px; border: 1px solid var(--prime-color); border-radius: 8px;">
          <h3 style="margin-bottom: 20px; font-size: 20px;">Contact form</h3>

          <CFormItem label="Name" required :errorMessage="errors.name">
            <CInput v-model="form.name" placeholder="Your name" :invalid="!!errors.name" style="width: 100%;"/>
          </CFormItem>

          <CFormItem label="Email" required :errorMessage="errors.email">
            <CInput v-model="form.email" type="email" placeholder="your@email.com" :invalid="!!errors.email" style="width: 100%;" />
          </CFormItem>

          <CFormItem label="Phone number">
            <CInput v-model="form.phone" type="tel" placeholder="+7 (999) 123-45-67" style="width: 100%;" />
          </CFormItem>

          <CFormItem label="Resources" required :errorMessage="errors.resources">
            <div style="display: flex; gap: 20px;">
              <label style="display: flex; gap: 4px;">
                <input v-model="form.resources" type="radio" name="resources" value="online" />
                <span>Online resource</span>
              </label>
              <label style="display: flex; gap: 4px;">
                <input v-model="form.resources" type="radio" name="resources" value="offline" />
                <span>Offline resource</span>
              </label>
            </div>
          </CFormItem>

          <div style="margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr;  gap: 10px;">
            <CButton label="Submit" type="submit" />
            <CButton label="Reset" @click.prevent="reset" severity="secondary" />
          </div>
        </form>
      </template>
      <script setup>
        import { ref } from 'vue'
        import { CFormItem, CInput, CButton } from 'craftvue'

        const form = ref({
          name: '',
          email: '',
          phone: '',
          resources: '',
        })

        const errors = ref({
          name: '',
          email: '',
          phone: '',
          resources: '',
        })

        const submit = () => {
          errors.value.name = form.value.name ? '' : 'Please enter name'
          errors.value.email = form.value.email ? '' : 'Please enter email'
          errors.value.resources = form.value.resources ? '' : 'Please select resource'
        }

        const reset = () => {
          form.value = { name: '', email: '', phone: '', resources: '' }
          errors.value = { name: '', email: '', phone: '', resources: '' }
        }
      </script>
    `,
  },
}

export default formItemCodeTexts
