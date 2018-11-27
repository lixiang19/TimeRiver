<template>
  <div>
    <v-card class="mb-3">
      <ve-histogram :data="chartData" :extend="extend" :settings="chartSettings"></ve-histogram>
    </v-card>
    <v-card class="small mb-3 ">
      <v-card-title primary-title>
            <span>学习总时间</span>
            <p class="headline">150分</p>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import * as api from '../api/index'
export default {
  data () {
    this.extend = {
      series: {
        label: { show: true, position: 'top' }
      }
    }
    this.chartSettings = {
      legendName: {
        '学习': '本周学习时间'
      }
    }
    return {
      chartData: {
        columns: ['日期', '学习'],
        rows: [
          { '日期': '周一', '学习': 0 },
          { '日期': '周二', '学习': 0 },
          { '日期': '周三', '学习': 0 },
          { '日期': '周四', '学习': 0 },
          { '日期': '周五', '学习': 0 },
          { '日期': '周六', '学习': 0 },
          { '日期': '周日', '学习': 0 }
        ]
      }
    }
  },
  methods: {
    async getWeek () {
      let result = await api.getWeek({ nowTime: Date.now(), tag: '学习' })
      this.chartData.rows.forEach(function (element, index) {
        element['学习'] = result.data.data[index]
      })
    }
  },
  computed: {

  },
  mounted () {
    this.getWeek()
  }
}
</script>

<style scoped>
.small {
  width: 40%
}
</style>
