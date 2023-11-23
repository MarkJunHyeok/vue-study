<script>
import {ref, h, defineExpose} from 'vue'
export default {
  setup() {
    const count = ref(0);
    const increment = () => ++count.value;

    defineExpose({
      increment
    })

    // Render 関数を返す
    return () => h(
        'button',
        {
          type: "button",
          class: "countup",
          onClick: increment
        },
        'Count: ' + count.value
    );
  }
}
</script>

<style scoped>
.countup {
  background-color:lightpink;
  font-weight: bold;
}
</style>