<template>
  <div class="container">
      Mouth
  </div>
</template>

<script>
import {onMounted} from 'vue';
import {useStore} from 'vuex'
import getData from '../services';

export default {
  name: 'mouthPage',
  setup() {
    const store = useStore();
    onMounted(()=>{
      getData(store)
    })
  }
}
</script>

<style lang='scss' scoped>

</style>