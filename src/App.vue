<template>
  <v-app>
    <div v-if="$route.meta.keepAlive">
      <keep-alive>
        <v-navigation-drawer v-model="drawer"  absolute app >
              <v-img :aspect-ratio="16/9" src="https://i.imgur.com/kpWHMoZ.png">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex shrink>
            <!-- <div class="subheading">Jonathan Lee</div> -->
            <div class="subheading">李向</div>
          </v-flex>
        </v-layout>
      </v-img>
      <v-list>
       <v-list-tile v-for="(item,index) in items" :href="item.href" :to="{name: item.href}" :key="index">
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
      </keep-alive>
      <keep-alive>
    <v-toolbar fixed dark app color="primary">
    <v-toolbar-side-icon  @click.stop="drawer = !drawer">
    </v-toolbar-side-icon>
    <v-toolbar-title>{{date}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="refresh">
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
    </v-toolbar>
      </keep-alive>

    <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
    </v-content>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <my-netError v-if="show"></my-netError>
    <my-loading v-if='load'></my-loading>
  </v-app>
</template>

<script>
import netError from './components/netError'
import loading from './components/loading'
import { time } from './config/util'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    'my-netError': netError,
    'my-loading': loading
  },
  methods: {
    ...mapActions(['getTodayList', 'getUserTags', 'newEvent']),
    refresh () {
      this.getTodayList()
      this.getUserTags()
    }
  },
  watch: {
    // '$route': 'checkLogin'
  },
  data () {
    return {
      drawer: false,
      items: [
        {
          href: 'home',
          router: true,
          title: '主页',
          icon: 'fas fa-home'
        },
        {
          href: 'memory',
          router: true,
          title: '回忆',
          icon: 'fas fa-calendar-alt'
        },
        {
          href: 'chart',
          router: true,
          title: '统计',
          icon: 'fas fa-chart-line'
        },
        {
          href: 'tagsSettings',
          router: true,
          title: '标签设置',
          icon: 'fas fa-cog'
        }
      ]
    }
  },
  computed: {
    date () {
      let nowTime = time.getNowTime()
      return nowTime.dateTime
    },
    show () {
      return this.$store.state.global.netError
    },
    load () {
      return this.$store.state.global.loading
    }
  }
}
</script>
