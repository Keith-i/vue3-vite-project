<template>
  <div class="fontcor">
    第二页{{ aa }} <i>{{ bbb }}</i>
  </div>
  <van-button type="primary" @click="addCount">主要按钮</van-button>
</template>

<script>
import { defineComponent, onMounted, toRef } from "vue";
import { getHomePageBannerList } from '@/services/public'
import { Button } from "vant";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    [Button.name]: Button,
  },
  data() {
    return {
      aa: 123,
    };
  },
  setup() {
    const data = async () => {
      let res = await getHomePageBannerList()
      console.log(res)
    }
    onMounted(data())
    const store = useStore();
    let bbb = toRef(store.state, "count");
    const addCount = () => {
      // store.commit('increment')
      // bbb.value = store.state.count
      bbb.value++;
      console.log(store.state.count, "eee");
    };
    return {
      bbb,
      addCount,
    };
  },
});
</script>

<style lang="scss" scoped>
.fontcor {
  color: $mainColor;
  i {
    color: green;
    font-weight: bold;
    font-style: normal;
  }
}
.van-button--primary {
  background-color: hotpink;
  border: none;
  background-image: $gradualColorBtn;
}
</style>
