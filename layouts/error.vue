<template>
  <div class="container">
    <div v-if="error.statusCode === 404">
        Page not found
        <img style="width:300px" src='@/assets/images/404.png'/>
    </div>
    <h1 v-else>{{error.message}}</h1>
    <h1>{{error.statusCode}}</h1>
    <h1>{{error.custom_prop}}</h1>
    <nuxt-link to="/user">user page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'custom' // you can set a custom layout for the error page
}
</script>