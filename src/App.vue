<template>
  <div id="app">
    <my-header>星语心愿</my-header>
    <router-view v-slot="{ Component }">
      <keep-alive>
      <component :is="Component"/>
      </keep-alive>
    </router-view>
    <tab/>
  </div>
</template>
<script>
import myHeader from './components/header';
import tab from './components/tab';

import {watch} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';


export default {
  name:'App',
  components: {
    myHeader,
    tab
  },
  setup() {
    const store = useStore(),
          state = store.atate,
          router = useRouter();
    
    router.push('/');
    store.commit('setType','today')

    watch(() => {
      return router.currentRoute.value.name;
    }, (value) => {
      store.commit('setType', value);
    });
  }
}
</script>