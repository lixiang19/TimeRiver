<template>
  <div class="load">
     <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.load {
  position: fixed;
  bottom: 80%;
  left: 45%;
  z-index:100
}
</style>
