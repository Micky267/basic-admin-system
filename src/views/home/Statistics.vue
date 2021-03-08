<!--
 * @Descripttion: 首页-统计概览
 * @version: 1.0
 * @Author: Micky
 * @Date: 2021-03-08 10:31:36
 * @LastEditors: Micky
 * @LastEditTime: 2021-03-09 00:47:27
-->
<template>
  <div class="c-statistics">
    <CommonTitle>统计概览</CommonTitle>
    <!-- 柱状图 -->
    <div class="c-echart-bar"></div>
    <!-- 折现图 -->
    <div class="c-echart-line"></div>
    <!-- <ECharts :options="lineOptions" :auto-resize="true"></ECharts> -->
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    option() {
      return {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
    }
  },
  mounted() {
    const barOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }]
    }
    const barDom = document.querySelector('.c-echart-bar')
    const cEchartBar = echarts.init(barDom)
    cEchartBar.setOption(barOption)
    cEchartBar.resize()
  }
}
</script>

<style lang="less" scoped>
.c-echart-bar{
  width: 100%;
  height: 230px;
}</style>
