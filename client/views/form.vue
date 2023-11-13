<template>
  <ul>
    <li
      v-for="(feedback, i) in state.feedbacks"
      :key="`feedback-${i}`">
      {{ feedback }}
    </li>
  </ul>
</template>

<script setup>
import { reactive, inject } from 'vue'
import { addFeedback } from '../../firebase/index.js'

import { useField, useForm } from 'vee-validate'

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField)

function validateField(value) {
    if (!value) {
        return 'Phone is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
      resetForm();
    }
});

const state = inject('state')

const form = reactive({
  name: '',
  email: '',
  phone: '',
  rating: '4',
  comment: ''
})


const add = async () => {
  state.feedbacks.unshift(form)
  const last = await addFeedback(form)
  console.log(last)
};
</script>