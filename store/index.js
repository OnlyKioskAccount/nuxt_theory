// import vuex from 'vuex'
// import axios from 'axios'
// var config = {
//     state:{
//         msg:'msg defined in vuex state',
//         car_list:[]
//     },
//     getters:{},
//     mutations:{
//         set_car_list(state,arg){
//             state.car_list = arg
//         }
//     },
//     actions:{
//         nuxtServerInit(vuex_context,nuxt_context){
//              return axios.post('http://localhost:3000/retrieve')
//                 .then((res)=>{
//                   if(res.data[0]){
//                     vuex_context.commit('set_car_list',res.data[1])
//                   }else{
//                     nuxt_context.error({message:res.data[1]})
//                   }
//                 })
//                 .catch((err)=>{
//                     nuxt_context.error({message:err.message})
//                 })        
//         },
//         normal_action_method(context,arg){}
//     }
// }

// export default function(){
//     return new vuex.Store(config)
// }