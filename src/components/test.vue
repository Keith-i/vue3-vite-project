<template>
  <div>
    <van-button type="primary" block>块级元素</van-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Button } from 'vant'

export default defineComponent({
  components: {
    [Button.name]: Button
  },
  setup() {
    const aa = import.meta.env.BASE_URL
    return {
      aa
    }
  },
});
</script>

<style scoped></style>
