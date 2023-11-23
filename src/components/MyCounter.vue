<script setup>
import useCounter from "@/composables/useCounter";

const props = defineProps({
  initialCount: {
    type: Number,
    default: 0
  }
})

const { count, countUp, countDown } = useCounter(props.initialCount)
</script>

<template>
  <div>Count: {{ count }}
    <div>
      <button type="button" v-on:click="countUp">Increase</button>
      <button type="button" v-on:click="countDown">Decrease</button>
    </div>
  </div>
</template>

<style scoped>

</style>