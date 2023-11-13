import { reactive } from 'vue'

const state = reactive({
  feedbacks: []
})

export default (initialValues) => {
  Object.assign(state, initialValues)
  return state
}
