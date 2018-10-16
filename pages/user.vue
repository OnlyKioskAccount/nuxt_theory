<template>
  <div>
      this is user.vue in pages/
      <nuxt-child/>
  </div>
</template>

<script>
    import my_comp from '~/components/my_comp'
    export default{
        components:{
            my_comp:my_comp // my_comp for short, es6 feature
        }
    }
</script>