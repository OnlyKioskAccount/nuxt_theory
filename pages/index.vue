<template>
  <section class="container">
    <div>
      <ul>
        <li v-for='item in $store.state.car_list' :key='item.car_info_id'>
        {{item.brand}} {{item.model}} {{item.engine}} {{item.gearbox}}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import my_comp from '@/components/my_comp'
import axios from 'axios'
export default {
  components: {
    AppLogo,
    my_comp
  },
  middleware:['mw1'],
  layout:'custom',
  // fetch(context){
  //     return axios.post('http://localhost:3000/retrieve')
  //     .then((res)=>{
  //       if(res.data[0]){
  //         context.store.commit('set_car_list',res.data[1])
  //       }else{
  //         context.error({message:res.data[1]})
  //       }
  //     })
  //     .catch((err)=>{
  //       context.error({message:err.message})
  //     })
  // },
  // asyncData(context){
  //   return axios.post('http://localhost:3000/retrieve')
  //   .then((res)=>{
  //     if(res.data[0]){
  //       return {car_list:res.data[1]}
  //     }else{
  //       context.error({message:res.data[1]})
  //     }
  //   })
  //   .catch((err)=>{
  //     context.error({message:err.message})
  //   })
  // }
}
</script>

<style>

</style>

