<template>
    <div>
        this is id.vue in /user
        <b>{{$route.params.id}}</b>
    </div>
</template>
<script>
    export default{
        validate({params,query,store}){
            return /^\d+$/.test(params.id)
        }
    }
</script>