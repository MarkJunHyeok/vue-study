<script setup>
const emit = defineEmits(['clickcount'])

const onclick = () => {
  emit('clickcount')
}

const props = defineProps({
  label: {
    type: String,
    default: 'Click!'
  }
})
</script>

<template>
  <button type="button" @click="onclick">{{ label }}</button>
</template>

<style scoped>
.countup {
  background-color:lightpink;
  font-weight: bold;
}
</style>