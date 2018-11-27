<template>
      <v-timeline dense>
        <v-timeline-item  small  fill-dot class="timeItem "  v-for="item in displayList"  :key="item.id"  :icon="item.icon">
           <v-layout >
            <v-flex align-self-center shrink>
              <strong>{{item.startTime}}</strong>
            </v-flex>
            <v-flex grow class="ml-4">
               <v-card >
              <v-card-title  class='primary pt-2 pr-2 pb-2 pl-2' >
                <span class="white--text font-weight-bold">{{item.tag}}</span>
                <v-spacer></v-spacer>
                <span class="white--text font-weight-bold">{{item.lengthTime}}</span>
              </v-card-title>
             <v-container class="pt-2 pr-2 pb-2 pl-2">
               <v-layout>
                 <v-flex class="record">
                   <span>
                     {{item.record}}
                   </span>
                 </v-flex>
               </v-layout>
             </v-container>
            </v-card>
            </v-flex>
          </v-layout>
        </v-timeline-item>

      </v-timeline>
</template>

<script>
import { time } from '../config/util'
export default {
  data () {
    return {
    }
  },
  props: ['list'],
  methods: {

  },

  computed: {
    displayList () {
      if (!this.list) return
      return this.list.map(function (item) {
        item.startTime = time.format(item.startTime)
        item.endTime = time.format(item.endTime)
        item.lengthTime = Math.floor(item.lengthTime / 60000)
        return item
      })
    }
  },

  mounted () {},

  components: {}
}

</script>
<style scoped>
/*左右下结构*/
.lrb {
  display: flex;

}
.timeItem {
  align-items: flex-center
}
.timeItem>:last-child{
  max-width: calc(100% - 36px);
}
.record {
    word-break: break-all
}
</style>
