<!--
 * @Descripttion: 首页-统计概览
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-08 10:31:36
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-09 23:59:20
-->
<template>
  <div class="c-statistics">
    <CommonTitle>统计概览</CommonTitle>
    <!-- 柱状图 销售目标完成情况-->
    <div class="static-item complete-status"></div>
    <!-- 折现图 全省地市累计销售额统计-->
    <div class="static-item sale-statisticsic"></div>
    <!-- <ECharts :options="lineOptions" :auto-resize="true"></ECharts> -->
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
require('echarts/lib/chart/line')
require('echarts/lib/chart/bar')
require('echarts/lib/component/toolbox')
require('echarts/lib/component/legend')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

const barOption = {
  title: {
    text: '销售目标完成情况'
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['目前销售额', '当前销售额'],
    right: '10%'
  },
  series: [
    {
      name: '目前销售额',
      data: [1120, 1500, 1100, 1230, 1404, 1500, 1800, 1240, 1354, 1202, 1580, 2100],
      type: 'bar'
    },
    {
      name: '当前销售额',
      data: [1200, 1300, 1380, 1462, 1380, 1600, 1350, 1580, 1300, 1280, 1600, 1900],
      type: 'bar'
    }
  ]
}
const lineOption = {
  title: {
    text: '全省地市累计销售额统计'
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['广州市', '深圳市', '珠海市', '汕头市', '佛山市', '韶关市', '湛江市', '肇庆市', '江门市', '茂名市', '惠州市', '梅州市', '汕尾市']
  },
  yAxis: {
    type: 'value'
  },
  legend: {
    data: ['目前销售额', '当前销售额'],
    right: '10%'
  },
  series: [
    {
      name: '目前销售额',
      type: 'line',
      stack: '总量',
      data: [1200, 1300, 1380, 1462, 1380, 1600, 1350, 1580, 1300, 1280, 1600, 1900]
    },
    {
      name: '当前销售额',
      type: 'line',
      stack: '总量',
      data: [1123, 1400, 1350, 1262, 135, 1680, 1150, 1480, 1308, 1400, 1500, 1540]
    }
  ]
}
export default {
  components: {},
  data() {
    return {
      barOption, // 销售目标数据
      lineOption // 统计销售额
    }
  },
  computed: {
    option() {
      return {}
    }
  },
  mounted() {
    this.initDatas()
  },
  methods: {
    /**
     * @description: 初始化数据
     */
    initDatas() {
      this.initCompleteStatus() // 初始化销售目标完成情况
      this.iniSaleStatisticsic() // 初始化全省地市累计销售额统计
    },
    /**
     * @description: 初始化销售目标完成情况
     */
    initCompleteStatus() {
      const barDom = document.querySelector('.complete-status')
      const cEchartBar = echarts.init(barDom)
      cEchartBar.setOption(this.barOption)
      cEchartBar.resize()
    },
    /**
     * @description: 初始化全省地市累计销售额统计
     */
    iniSaleStatisticsic() {
      const barDom = document.querySelector('.sale-statisticsic')
      const cEchartBar = echarts.init(barDom)
      cEchartBar.setOption(this.lineOption)
      cEchartBar.resize()
    }
  }
}
</script>

<style lang="less" scoped>
.c-statistics {
  width: 100%;
  .static-item {
    background-color: #fff;
    width: 100%;
    height: 230px;
    margin-bottom: 10px;
  }
}
</style>
