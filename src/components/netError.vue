<template>
  <div class="alert">
    <v-alert  :value="true" :type='error' icon="fas fa-exclamation-triangle" outline transition="scale-transition">
      网络错误{{show}}
    </v-alert>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    set () {
      let that = this
      let time1 = setTimeout(() => {
        that.$store.commit('updateNetError', { onOff: false })
        clearTimeout(time1)
      }, 3000)
    }

  },
  // watch: {
  //   show: this.set()
  // },
  mounted () {
    this.set()
  },
  computed: {
  }
}
</script>

<style scoped>
.alert {
  position: fixed;
  bottom: 50%;
  left: 25%;
  right: 25%;
  z-index:100
}
</style>
