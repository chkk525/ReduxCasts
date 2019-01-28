<template>
  <div>
    Home with parameter {{currentRoute}}
  </div>
</template>

<script>



export default {
  components:{

  },
  mounted(){
  
  },
  computed:{
    currentRoute(){
      return this.$route.params.name
    }
  }
}
</script>