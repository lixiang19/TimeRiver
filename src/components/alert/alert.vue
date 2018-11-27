<template>
  <div class="alert">
    <v-alert v-model="show" :type='type' transition="scale-transition">
{{msg}}
    </v-alert>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    show: {
      type: Boolean,
      default: true
    },
    msg: {
      type: String,
      default: 'loading'
    },
    type: {
      type: String,
      default: 'error'
    },
    time: {
      type: Number,
      default: 4000
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = false
    }, this.time)
  }
}
</script>

<style scoped>
.alert {
  position: fixed;
  bottom: 20px;
  left: 0px;
  right: 0px;
  z-index: 100;
}
</style>
