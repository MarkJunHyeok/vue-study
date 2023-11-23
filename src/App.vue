<script setup>
import { ref } from 'vue';
import MyCounter from './components/MyCounter.vue';
import CounterButton from './components/CounterButton.vue';
import CounterButtonPropsEmits from './components/CounterButtonPropsEmits.vue';
import useCounter from "./composables/useCounter";

const childRef = ref(null);
const handleClick = () => childRef.value.increment()


const {count, countUp, countDown} = useCounter(0);

const vTextColor = {
  mounted(el, binding) {
    el.style.color = binding.value
  }
}
const countUpColor = 'red'
</script>

<template>
  <MyCounter :initial-count="100" />
  <CounterButton ref="childRef" @click="handleClick" />
  <br>
  <CounterButtonPropsEmits @clickcount="countUp" label="Count Up"  v-text-color="countUpColor"></CounterButtonPropsEmits>
  <CounterButtonPropsEmits @clickcount="countDown" label="Count Down"></CounterButtonPropsEmits>
  <p>Count : {{ count }}</p>
</template>

<style scoped>
#app {
  text-align: center;
  color: green;
  margin-top: 50px;
}
</style>
