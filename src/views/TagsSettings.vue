<template>
  <div>
        <v-card class="mb-3">
           <v-card-title  class='primary pt-2 pr-2 pb-2 pl-2' >
                <span class="white--text font-weight-bold">标签组</span>
            </v-card-title>
          <v-jstree :data="tags"  no-dots show-checkbox text-field-name='name'  size='large'   @item-click="itemClick" >

        </v-jstree>
        </v-card>
        <v-card class="mb-3" v-if="selectCard">
           <v-card-title  class='primary pt-2 pr-2 pb-2 pl-2' >
                <span class="white--text font-weight-bold">选择项</span>
            </v-card-title>
            <v-layout class="mx-3">
               <v-chip  class="select" small   outline color="primary" >{{selectName}}</v-chip>
            </v-layout>

          <div class="card-content">
            <v-btn flat small class="btn" color="primary" @click="addChildNode">添加子标签</v-btn>
            <v-btn flat small class="btn" color="error" @click="removeNode">删除标签</v-btn>
          </div>

        </v-card>
        <v-card class="mb-3" v-if="changeCard">
           <v-card-title  class='primary pt-2 pr-2 pb-2 pl-2' >
                <span class="white--text font-weight-bold">修改项</span>
            </v-card-title>
            <v-layout class="mx-3">
              <v-text-field label="详细记录" v-model="input" clearable > </v-text-field>
            </v-layout>
            <div class="card-content">
              <v-btn flat small class="btn" color="error" @click="cancel">取消</v-btn>
              <v-btn flat small class="btn" color="primary" @click="confirm">确认</v-btn>
            </div>
        </v-card>
  </div>
</template>

<script>
import VJstree from 'vue-jstree'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      editingItem: {},
      editingNode: null,
      changeCard: false,
      selectCard: false,
      selectName: '',
      input: '',
      safetySwitch: true
    }
  },
  methods: {
    ...mapActions(['updateTags']),
    itemClick (node) {
      this.editingNode = node
      this.editingItem = node.model
      this.selectCard = true
      this.selectName = node.model.name
      console.log(node.model)
    },
    addChildNode: function () {
      if (this.editingItem.id !== undefined) {
        this.changeCard = true
      }
    },
    removeNode: function () {
      if (this.safetySwitch) {
        this.$alert.show({ msg: '警告！确认删除请再次点击' })
        this.safetySwitch = false
      } else {
        if (this.editingItem.id !== undefined) {
          var index = this.editingNode.parentItem.indexOf(this.editingItem)
          this.editingNode.parentItem.splice(index, 1)
        }
        this.updateTags(this.tags)
        this.selectCard = false
        this.safetySwitch = true
      }
    },
    cancel () {
      this.changeCard = false
    },
    confirm () {
      this.editingItem.addChild({
        name: this.input,
        icon: this.editingItem.icon
      })
      this.updateTags(this.tags)
      this.changeCard = false
    }
  },
  components: {
    VJstree
  },
  computed: {
    ...mapState({
      tags: state => state.tagsStore.tags
    })
  }
}
</script>

<style scoped>
.select {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 16px 0px;
}
/* .select>:first-child {
  color: white
} */
.card-content {
  margin: 0px 16px;
  display: flex;
  justify-content: space-around
}
.btn {
  min-width: 20px;
  margin: 6px 0px 6px 0px
}
.alert {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0
}
</style>
