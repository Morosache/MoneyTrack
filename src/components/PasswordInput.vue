<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Password'
  },
  id: {
    type: String,
    default: 'password'
  },
  className: {
    type: String,
    default: 'w-[400px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none'
  }
})

const emit = defineEmits(['update:modelValue'])
const showPassword = ref(false)
const internalValue = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
  internalValue.value = val
})

watch(internalValue, (val) => {
  emit('update:modelValue', val)
})
</script>

<template>
  <div class="relative">
    <input
      :id="id"
      :type="showPassword ? 'text' : 'password'"
      :placeholder="placeholder"
      :class="className"
      v-model="internalValue"
    />
    <button
      type="button"
      @click="showPassword = !showPassword"
      class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm"
    >
      {{ showPassword ? 'Hide' : 'Show' }}
    </button>
  </div>
</template>
