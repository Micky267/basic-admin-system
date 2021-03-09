<template>
  <!--  部门管理——》管理账号主页 -->
  <div class="c-page-container">
    <PageTitle />
    <div class="c-page-table">
      <div class="c-page-search">
        <div class="c-page-form">
          <a-form layout="inline" :form="sendForm">
            <a-row>
              <a-col :span="12">
                <a-form-item label="活动时间" :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
                  <a-date-picker
                    style="width: 150px;margin-right: 10px"
                    v-model="sendForm.startTime"
                    :disabled-date="disabledStartDate"
                    format="YYYY-MM-DD"
                    placeholder="Start"
                    @openChange="handleStartOpenChange"
                  />
                  <a-date-picker
                    style="width: 150px"
                    v-model="sendForm.endTime"
                    :disabled-date="disabledEndDate"
                    format="YYYY-MM-DD "
                    placeholder="End"
                    :open="endOpen"
                    @openChange="handleEndOpenChange"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="活动名称" :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
                  <a-input size="small" allowClear v-model.trim="sendForm.activityName" />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
                <a-form-item label="业务场景" :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
                  <a-radio-group v-model="sendForm.businessScenario" button-style="solid">
                    <a-radio-button v-for="item in businessScenarioList" :key="item.value" :value="item.value">
                      {{ item.label }}
                    </a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="活动状态" :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
                  <a-radio-group v-model="sendForm.activityStatus" button-style="solid">
                    <a-radio-button v-for="item in activeStatusList" :key="item.value" :value="item.value">
                      {{ item.label }}
                    </a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </div>
        <div class="search-btn-container">
          <a-button class="search-btn" type="primary" @click="searchHand">查询</a-button>
          <a-button class="search-btn" @click="reset">重置</a-button>
        </div>
      </div>
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="我创建的模型">
          <div class="c-page-list">
            <a-table :columns="columns" :dataSource="listData" :pagination="pagination" :loading="loading" @change="handleTableChange" :rowKey="(record, index) => record.sid">
              <template slot="businessScenario" slot-scope="text">
                <span v-if="text">{{ showBusinessScenario[text] }}</span>
              </template>
              <template slot="activeStatus" slot-scope="text">
                <span v-if="text">{{ showActiveStatus[text] }}</span>
              </template>
              <template slot="options" slot-scope="text">
                <a-button size="small" type="link">评估展现</a-button>
              </template>
            </a-table>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="上架模型">
          上架模型
        </a-tab-pane>
        <a-tab-pane key="3" tab="未上架模型">
          未上架模型
        </a-tab-pane>
        <a-tab-pane key="4" tab="最新模型">
          最新模型
        </a-tab-pane>
        <a-tab-pane key="5" tab="最热模型">
          最热模型
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    key: 'activeCode',
    title: '活动编码',
    dataIndex: 'activeCode',
    width: 200
  },
  {
    key: 'activeName',
    title: '活动名称',
    dataIndex: 'activeName',
    width: 500
  },
  {
    key: 'businessScenario',
    title: '业务场景',
    dataIndex: 'businessScenario',
    width: 100,
    scopedSlots: { customRender: 'businessScenario' }
  },
  {
    key: 'activeStatus',
    title: '活动状态',
    dataIndex: 'activeStatus',
    width: 100,
    scopedSlots: { customRender: 'businessScenario' }
  },
  {
    key: 'startTime',
    title: '开始日期',
    dataIndex: 'startTime',
    width: 100,
    scopedSlots: { customRender: 'startTime' }
  },
  {
    key: 'endTime',
    title: '结束日期',
    dataIndex: 'endTime',
    width: 100,
    scopedSlots: { customRender: 'endTime' }
  },
  {
    title: '操作',
    dataIndex: 'options',
    fixed: 'right',
    width: 80,
    scopedSlots: { customRender: 'options' }
  }
]
import '@/mock/activityManageMock' //此部分引入的是我们所编写的mockjs文档
import moment from 'moment'
export default {
  data() {
    return {
      startTime: null,
      endTime: null,
      endOpen: false,
      businessScenarioList: [
        { value: '1', label: '3G升4G' },
        { value: '2', label: '用户换机' },
        { value: '3', label: '信用租机' }
      ],
      showBusinessScenario: {
        '1': '3G升4G',
        '2': '用户换机',
        '3': '信用租机'
      },
      activeStatusList: [
        { value: '1', label: '运行中' },
        { value: '0', label: '已结束' }
      ],
      showActiveStatus: {
        '1': '运行中',
        '0': '已结束'
      },
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 12 }
        }
      },
      // 查询表单
      sendForm: {
        startTime: null, //活动开始时间
        endTime: null, //活动结束时间
        activityName: null, //	活动名称
        businessScenario: null, //	业务场景
        activityStatus: null // 活动状态
      },
      // 表格
      loading: false,
      listData: [],
      pagination: {
        total: 0,
        defaultPageSize: 10,
        showTotal: total => `共 ${total} 条数据`,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '40'],
        onShowSizeChange: (current, pageSize) => this.pageSize = pageSize
      },
      queryParam: {
        currentPage: 1, // 第几页
        pageSize: 6 // 每页中显示数据的条数
      },
      columns
    }
  },
  created() {
    this.clearnDatas()
    this.fetch()
  },
  methods: {
    moment,
    /* 活动时间搜索功能 start */
    disabledStartDate(startValue) {
      const endValue = this.endValue
      if (!startValue || !endValue) {
        return false
      }
      return startValue.valueOf() > endValue.valueOf()
    },
    disabledEndDate(endValue) {
      const startValue = this.startValue
      if (!endValue || !startValue) {
        return false
      }
      return startValue.valueOf() >= endValue.valueOf()
    },
    handleStartOpenChange(open) {
      if (!open) {
        this.endOpen = true
      }
    },
    handleEndOpenChange(open) {
      this.endOpen = open
    },
    /* 活动时间搜索功能 end */
    // 重置
    reset() {
      this.clearnDatas()
      this.fetch()
    },
    // 清空表单
    clearnDatas() {
      this.pagination.current = 1
      this.pagination.pageSize = 6
      this.queryParam = {
        currentPage: 1, // 第几页
        pageSize: 6 // 每页中显示数据的条数
      }
      this.sendForm = {
        startTime: moment().format('YYYY-MM-DD 00:00:00'), //活动开始时间
        endTime: moment().format('YYYY-MM-DD 23:59:59'), //活动结束时间
        activityName: null, //	活动名称
        businessScenario: this.businessScenarioList[0].value, //	业务场景
        activityStatus: this.activeStatusList[0].value // 活动状态
      }
    },
    // 查询
    searchHand() {
      this.pagination.current = 1
      this.pagination.pageSize = 6
      this.queryParam = {
        currentPage: 1,
        pageSize: 6
      }
      this.fetch()
    },
    // 页码、页数发送变化
    handleTableChange(pagination) {
      this.pagination.current = pagination.current
      this.pagination.pageSize = pagination.pageSize
      this.queryParam.currentPage = pagination.current
      this.queryParam.pageSize = pagination.pageSize
      this.fetch()
    },
    fetch() {
      this.loading = true
      const { sendForm } = this
      const startTime = sendForm.startTime ? moment(sendForm.startTime).format('YYYY-MM-DD HH:mm:ss') : null
      const endTime = sendForm.endTime ? moment(sendForm.endTime).format('YYYY-MM-DD HH:mm:ss') : null
      this.queryParam.send = { ...sendForm, startTime, endTime }
      this.$http
        .http_mock('http://mockjs.com/active/getActiveList/1/10', this.queryParam)
        .then(res => {
          this.loading = false
          if (res.success) {
            const pagination = { ...this.pagination }
            pagination.pages = res.body.pages
            pagination.total = parseInt(res.body.total)
            this.pagination = pagination
            this.listData = res.body.list
          } else {
            this.$message.warning(res.message)
          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          console.error('获取列表异常', error)
          this.$message.error('获取列表异常')
          this.loading = false
        })
    }
  }
}
</script>
<style lang="less" scoped>
.c-page-container .c-page-search {
  display: flex;
  padding: 10px;
  .c-page-form {
    flex: 1;
    .ant-form-item {
      width: 100%;
    }
  }
  .search-btn-container {
    .search-btn {
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
}
</style>
