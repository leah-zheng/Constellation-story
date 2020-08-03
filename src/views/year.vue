<template>
  <div class="container">
      Year
  </div>
</template>

<script>
import {onMounted} from 'vue';
import {useStore} from 'vuex'
import getData from '../services';

export default {
  name: 'yearPage',
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