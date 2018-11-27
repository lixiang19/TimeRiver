<template>
<div>
  <my-memory-list :list='list'></my-memory-list>
  <v-btn color="accent" dark  fixed fab right bottom @click="add">
    <v-icon>fas fa-calendar-alt</v-icon>
  </v-btn>
  <v-dialog v-model="dialog">
   <v-card>

          <v-date-picker
        :first-day-of-week="0"
        v-model="picker"
        locale="zh-cn"
        full-width
        class="elevation-0"
      ></v-date-picker>
 <v-layout justify-end class="action" >
            <v-btn flat small color="error" class="btn" @click="cancel">取消</v-btn>
            <v-btn flat small color="accent" class="btn" @click="confirm">确认</v-btn>
          </v-layout>
     </v-card>
  </v-dialog>
</div>
</template>

<script>
import memoryList from '../components/memoryList'
import * as api from '../api/index'
function openDialog (context) {
  context.dialog = true
}
function closeDialog (context) {
  context.dialog = false
}
export default {
  data () {
    return {
      dialog: false,
      control: true,
      list: [],
      picker: ''
    }
  },
  methods: {
    add () {
      openDialog(this)
    },
    cancel () {
      closeDialog(this)
      console.log(this.date)
    },
    confirm () {
      this.getSomedayList()
      closeDialog(this)
    },
    async  getSomedayList () {
      let result = await api.getDayList({ date: this.date })
      if (result.status === 204) {
        this.$alert.show({ type: 'info', msg: '没有数据请重新选择日期' })
      }
      this.list = result.data.data
    }
  },
  computed: {
    date () {
      return this.picker.replace(/-/g, '')
    }
  },
  components: {
    'my-memory-list': memoryList
  }
}
</script>

<style  scoped>
.select {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 4px 0px
}
.select>:first-child {
  color: white
}

.chips {
  margin: 20px 0px 50px 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between ;
}
.chips>span {
  margin: 4px 2px
}
.record {
  padding-right: 5px;
  padding-left: 5px
}
.btn {
  min-width: 20px;
  margin: 6px 0px 6px 16px
}
</style>
