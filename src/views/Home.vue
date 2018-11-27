<template>
<div>
  <my-river-list></my-river-list>
  <v-btn color="accent" dark  fixed fab right bottom @click="add">
    <v-icon>add</v-icon>
  </v-btn>
  <v-dialog v-model="dialog">
   <v-card>
      <v-container>
          <v-text-field label="详细记录" v-model="record" clearable > </v-text-field>
          <v-chip  class="select elevation-1" small   color="primary" >{{selectTag}}</v-chip>
         <div class="chips">
           <v-chip v-for="tag in displayTags" :key='tag._id' :tag='displayTags.tag' outline dark color="primary" small @click="select">{{tag.name}}</v-chip>
         </div>
          <v-layout justify-end class="action" >
            <v-btn flat small color="error" class="btn" @click="cancel">取消</v-btn>
            <v-btn flat small color="accent" class="btn" @click="confirm">确认</v-btn>
          </v-layout>
      </v-container>
     </v-card>
  </v-dialog>
</div>
</template>

<script>
import riverList from '../components/riverList'
import { mapGetters, mapActions } from 'vuex'
function openDialog (context) {
  context.dialog = true
  context.selectTag = '请选择标签'
}
function closeDialog (context) {
  context.dialog = false
}
export default {
  data () {
    return {
      dialog: false,
      control: true,
      selectTag: '请选择标签',
      record: ''
    }
  },

  mounted () {
    this.getTodayList()
    this.getUserTags()
  },
  methods: {
    ...mapActions(['getTodayList', 'getUserTags', 'newEvent']),
    select (e) {
      this.selectTag = e.target.textContent
    },
    add () {
      openDialog(this)
    },
    cancel () {
      closeDialog(this)
    },
    confirm () {
      closeDialog(this)
      if (this.selectTag === '请选择标签') this.selectTag = '其他'
      let selectTag = this.selectTag
      let icon = this.displayTags.find(function (element) {
        return element.name === selectTag
      }).icon
      this.newEvent({ record: this.record, tag: this.selectTag, icon: icon })
    }
  },
  computed: {
    ...mapGetters(['displayTags'])
  },
  components: {
    'my-river-list': riverList
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
