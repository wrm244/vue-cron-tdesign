<template>
  <div class="vue-cron-tdesign-container">
    <t-button
      link
      size="small"
      theme="default"
      variant="text"
      @click="state.language = state.language === 'en' ? 'cn' : 'en'"
      >{{ state.language === 'en' ? '中文' : 'English' }}
    </t-button>
    <t-tabs :default-value="1">
      <t-tab-panel :value="1">
        <template #label>
          <span>{{ state.text.Seconds.name }}</span>
        </template>
        <div :style="{ 'max-height': maxHeight }" class="tabBody myScroller">
          <t-radio-group v-model="state.second.cronEvery" default-value="1">
            <t-space direction="vertical">
              <t-radio :value="1">{{ state.text.Seconds.every }}</t-radio>
              <t-radio :value="2"
                >{{ state.text.Seconds.interval[0] }}
                <t-input-number
                  v-model="state.second.incrementIncrement"
                  :allowInputOverLimit="false"
                  :max="60"
                  :min="1"
                  size="small"
                />
                {{ state.text.Seconds.interval[1] || '' }}
                <t-input-number
                  v-model="state.second.incrementStart"
                  :allowInputOverLimit="false"
                  :max="59"
                  :min="0"
                  size="small"
                />
                {{ state.text.Seconds.interval[2] || '' }}
              </t-radio>
              <t-radio v-model="state.second.cronEvery" class="long" :value="3"
                >{{ state.text.Seconds.specific }}
                <t-select
                  v-model="state.second.specificSpecific"
                  multiple
                  placeholder="请选择具体秒数"
                  size="small"
                >
                  <t-option v-for="(val, index) in 60" :key="index" :value="val - 1">
                    {{ val - 1 }}
                  </t-option>
                </t-select>
              </t-radio>
              <t-radio v-model="state.second.cronEvery" :value="4"
                >{{ state.text.Seconds.cycle[0] }}
                <t-input-number
                  v-model="state.second.rangeStart"
                  :allowInputOverLimit="false"
                  :max="60"
                  :min="1"
                  size="small"
                />
                {{ state.text.Seconds.cycle[1] || '' }}
                <t-input-number
                  v-model="state.second.rangeEnd"
                  :allowInputOverLimit="false"
                  :max="59"
                  :min="0"
                  size="small"
                />
                {{ state.text.Seconds.cycle[2] || '' }}
              </t-radio>
            </t-space>
          </t-radio-group>
        </div>
      </t-tab-panel>
      <t-tab-panel :value="2">
        <template #label>
          <span> {{ state.text.Minutes.name }}</span>
        </template>
        <div :style="{ 'max-height': maxHeight }" class="tabBody myScroller">
          <t-radio-group v-model="state.minute.cronEvery" default-value="1">
            <t-space direction="vertical">
              <t-radio value="1">
                {{ state.text.Minutes.every }}
              </t-radio>
              <t-radio value="2"
                >{{ state.text.Minutes.interval[0] }}
                <t-input-number
                  v-model="state.minute.incrementIncrement"
                  :allowInputOverLimit="false"
                  :max="60"
                  :min="1"
                  size="small"
                />
                {{ state.text.Minutes.interval[1] }}
                <t-input-number
                  v-model="state.minute.incrementStart"
                  :allowInputOverLimit="false"
                  :max="59"
                  :min="0"
                  size="small"
                />
                {{ state.text.Minutes.interval[2] || '' }}
              </t-radio>
              <t-radio class="long" value="3">
                {{ state.text.Minutes.specific }}
                <t-select
                  v-model="state.minute.specificSpecific"
                  multiple
                  placeholder="请选择具体分钟数"
                  size="small"
                >
                  <t-option v-for="(val, index) in 60" :key="index" :value="val - 1"
                    >{{ val - 1 }}
                  </t-option>
                </t-select>
              </t-radio>
              <t-radio v-model="state.minute.cronEvery" value="4"
                >{{ state.text.Minutes.cycle[0] }}
                <t-input-number
                  v-model="state.minute.rangeStart"
                  :allowInputOverLimit="false"
                  :max="60"
                  :min="1"
                  size="small"
                />
                {{ state.text.Minutes.cycle[1] }}
                <t-input-number
                  v-model="state.minute.rangeEnd"
                  :allowInputOverLimit="false"
                  :max="59"
                  :min="0"
                  size="small"
                />
                {{ state.text.Minutes.cycle[2] }}
              </t-radio>
            </t-space>
          </t-radio-group>
        </div>
      </t-tab-panel>
      <t-tab-panel :value="3">
        <template #label>
          <span>{{ state.text.Hours.name }}</span>
        </template>
        <div :style="{ 'max-height': maxHeight }" class="tabBody myScroller">
          <t-radio-group v-model="state.hour.cronEvery" default-value="1">
            <t-space direction="vertical">
              <t-radio value="1">{{ state.text.Hours.every }}</t-radio>
              <t-radio value="2"
                >{{ state.text.Hours.interval[0] }}
                <t-input-number
                  v-model="state.hour.incrementIncrement"
                  :allowInputOverLimit="false"
                  :max="23"
                  :min="0"
                  size="small"
                />
                {{ state.text.Hours.interval[1] }}
                <t-input-number
                  v-model="state.hour.incrementStart"
                  :allowInputOverLimit="false"
                  :max="23"
                  :min="0"
                  size="small"
                />
                {{ state.text.Hours.interval[2] }}
              </t-radio>
              <t-radio class="long" value="3"
                >{{ state.text.Hours.specific }}
                <t-select
                  v-model="state.hour.specificSpecific"
                  multiple
                  placeholder="请选择具体小时数"
                  size="small"
                >
                  <t-option v-for="(val, index) in 24" :key="index" :value="val - 1"
                    >{{ val - 1 }}
                  </t-option>
                </t-select>
              </t-radio>
              <t-radio value="4"
                >{{ state.text.Hours.cycle[0] }}
                <t-input-number
                  v-model="state.hour.rangeStart"
                  :allowInputOverLimit="false"
                  :max="23"
                  :min="0"
                  size="small"
                />
                {{ state.text.Hours.cycle[1] }}
                <t-input-number
                  v-model="state.hour.rangeEnd"
                  :allowInputOverLimit="false"
                  :max="23"
                  :min="0"
                  size="small"
                />
                {{ state.text.Hours.cycle[2] }}
              </t-radio>
            </t-space>
          </t-radio-group>
        </div>
      </t-tab-panel>
      <t-tab-panel :value="4">
        <template #label>
          <span>{{ state.text.Day.name }}</span>
        </template>
        <div :style="{ 'max-height': maxHeight }" class="tabBody myScroller">
          <t-radio-group v-model="state.day.cronEvery" default-value="1">
            <t-space direction="vertical">
              <t-radio value="1">{{ state.text.Day.every }}</t-radio>
              <t-radio value="2"
                >{{ state.text.Day.intervalWeek[0] }}
                <t-input-number
                  v-model="state.week.incrementIncrement"
                  :allowInputOverLimit="false"
                  :max="7"
                  :min="1"
                  size="small"
                />
                {{ state.text.Day.intervalWeek[1] }}
                <t-select v-model="state.week.incrementStart" size="small">
                  <t-option
                    v-for="(val, index) in 7"
                    :key="index"
                    :label="state.text.Week[val - 1]"
                    :value="val"
                  />
                </t-select>
                {{ state.text.Day.intervalWeek[2] }}
              </t-radio>
              <t-radio value="3"
                >{{ state.text.Day.intervalDay[0] }}
                <t-input-number
                  v-model="state.day.incrementIncrement"
                  :allowInputOverLimit="false"
                  :max="31"
                  :min="1"
                  size="small"
                />
                {{ state.text.Day.intervalDay[1] }}
                <t-input-number
                  v-model="state.day.incrementStart"
                  :allowInputOverLimit="false"
                  :max="31"
                  :min="1"
                  size="small"
                />
                {{ state.text.Day.intervalDay[2] }}
              </t-radio>
              <t-radio class="long" value="4"
                >{{ state.text.Day.specificWeek }}
                <t-select
                  v-model="state.week.specificSpecific"
                  multiple
                  placeholder="请选择具体日期"
                  size="small"
                >
                  <t-option
                    v-for="(val, index) in 7"
                    :key="index"
                    :label="state.text.Week[val - 1]"
                    :value="['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][val - 1]"
                  />
                </t-select>
              </t-radio>
              <t-radio value="5"
                >{{ state.text.Day.specificDay }}
                <t-select v-model="state.day.specificSpecific" multiple size="small">
                  <t-option v-for="(val, index) in 31" :key="index" :value="val"
                    >{{ val }}
                  </t-option>
                </t-select>
              </t-radio>
              <t-radio value="6">{{ state.text.Day.lastDay }}</t-radio>
              <t-radio value="7">{{ state.text.Day.lastWeekday }}</t-radio>
              <t-radio value="8"
                >{{ state.text.Day.lastWeek[0] }}
                <t-select v-model="state.day.cronLastSpecificDomDay" size="small">
                  <t-option
                    v-for="(val, index) in 7"
                    :key="index"
                    :label="state.text.Week[val - 1]"
                    :value="val"
                  />
                </t-select>
                {{ state.text.Day.lastWeek[1] || '' }}
              </t-radio>
              <t-radio value="9">
                <t-input-number
                  v-model="state.day.cronDaysBeforeEomMinus"
                  :allowInputOverLimit="false"
                  :max="31"
                  :min="1"
                  size="small"
                />
                {{ state.text.Day.beforeEndMonth[0] }}
              </t-radio>
              <t-radio v-model="state.day.cronEvery" value="10"
                >{{ state.text.Day.nearestWeekday[0] }}
                <t-input-number
                  v-model="state.day.cronDaysNearestWeekday"
                  :allowInputOverLimit="false"
                  :max="31"
                  :min="1"
                  size="small"
                />
                {{ state.text.Day.nearestWeekday[1] }}
              </t-radio>
              <t-radio value="11"
                >{{ state.text.Day.someWeekday[0] }}
                <t-input-number v-model="state.week.cronNthDayNth" :max="5" :min="1" size="small" />
                <t-select v-model="state.week.cronNthDayDay" size="small">
                  <t-option
                    v-for="(val, index) in 7"
                    :key="index"
                    :label="state.text.Week[val - 1]"
                    :value="val"
                  />
                </t-select>
                {{ state.text.Day.someWeekday[1] }}
              </t-radio>
            </t-space>
          </t-radio-group>
        </div>
      </t-tab-panel>
      <t-tab-panel :value="5">
        <template #label>
          <span>{{ state.text.Month.name }}</span>
        </template>
        <div :style="{ 'max-height': maxHeight }" class="tabBody myScroller">
          <t-radio-group v-model="state.month.cronEvery" default-value="1">
            <t-space direction="vertical">
              <t-radio value="1">{{ state.text.Month.every }}</t-radio>
              <t-radio value="2"
                >{{ state.text.Month.interval[0] }}
                <t-input-number
                  v-model="state.month.incrementIncrement"
                  :allowInputOverLimit="false"
                  :max="12"
                  :min="0"
                  size="small"
                />
                {{ state.text.Month.interval[1] }}
                <t-input-number
                  v-model="state.month.incrementStart"
                  :allowInputOverLimit="false"
                  :max="12"
                  :min="0"
                  size="small"
                />
              </t-radio>

              <t-radio class="long" value="3"
                >{{ state.text.Month.specific }}
                <t-select v-model="state.month.specificSpecific" multiple size="small">
                  <t-option v-for="(val, index) in 12" :key="index" :label="val" :value="val" />
                </t-select>
              </t-radio>
              <t-radio value="4"
                >{{ state.text.Month.cycle[0] }}
                <t-input-number v-model="state.month.rangeStart" :max="12" :min="1" size="small" />
                {{ state.text.Month.cycle[1] }}
                <t-input-number v-model="state.month.rangeEnd" :max="12" :min="1" size="small" />
              </t-radio>
            </t-space>
          </t-radio-group>
        </div>
      </t-tab-panel>
      <t-tab-panel :value="6">
        <template #label>
          <span>{{ state.text.Year.name }}</span>
        </template>
        <div :style="{ 'max-height': maxHeight }" class="tabBody myScroller">
          <t-radio-group v-model="state.year.cronEvery" default-value="1">
            <t-space direction="vertical">
              <t-radio value="1">{{ state.text.Year.every }}</t-radio>
              <t-radio value="2"
                >{{ state.text.Year.interval[0] }}
                <t-input-number
                  v-model="state.year.incrementIncrement"
                  :allowInputOverLimit="false"
                  :max="99"
                  :min="1"
                  size="small"
                />
                {{ state.text.Year.interval[1] }}
                <t-input-number
                  v-model="state.year.incrementStart"
                  :allowInputOverLimit="false"
                  :max="2118"
                  :min="2018"
                  size="small"
                />
              </t-radio>
              <t-radio class="long" value="3"
                >{{ state.text.Year.specific }}
                <t-select v-model="state.year.specificSpecific" filterable multiple size="small">
                  <t-option
                    v-for="(val, index) in 100"
                    :key="index"
                    :label="2023 + val"
                    :value="2023 + val"
                  />
                </t-select>
              </t-radio>
              <t-radio value="4"
                >{{ state.text.Year.cycle[0] }}
                <t-input-number
                  v-model="state.year.rangeStart"
                  :allowInputOverLimit="false"
                  :max="2118"
                  :min="2024"
                  size="small"
                />
                {{ state.text.Year.cycle[1] }}
                <t-input-number
                  v-model="state.year.rangeEnd"
                  :allowInputOverLimit="false"
                  :max="2118"
                  :min="2024"
                  size="small"
                />
              </t-radio>
            </t-space>
          </t-radio-group>
        </div>
      </t-tab-panel>
    </t-tabs>
    <div class="bottom">
      <t-space>
        <t-tag type="info">
          {{ state.cron }}
        </t-tag>
        <t-list stripe>
          <t-list-item v-for="(time, index) in cronTimes" :key="`stripe${index}`">
            {{ time }}
          </t-list-item>
        </t-list>
        <t-button size="small" theme="primary" @click.stop="handleChange"
          >{{ state.text.Save }}
        </t-button>
        <t-button size="small" theme="primary" @click="close">{{ state.text.Close }}</t-button>
      </t-space>
    </div>
  </div>
</template>
<script>
import Language from './language'
import { computed, defineComponent, reactive, toRefs } from 'vue'
//导入cron-parser 解析 cron 表达式
import cronParser from 'cron-parser'

export default defineComponent({
  name: 'TCron',
  props: {
    cronValue: {},
    i18n: {},
    maxHeight: {}
  },
  setup(props, { emit }) {
    const { i18n } = toRefs(props)
    const state = reactive({
      language: i18n.value,
      second: {
        cronEvery: '1',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 2,
        specificSpecific: []
      },
      minute: {
        cronEvery: '1',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 2,
        specificSpecific: []
      },
      hour: {
        cronEvery: '1',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 2,
        specificSpecific: []
      },
      day: {
        cronEvery: '1',
        incrementStart: 1,
        incrementIncrement: 1,
        rangeStart: 0,
        rangeEnd: 0,
        specificSpecific: [],
        cronLastSpecificDomDay: 1,
        cronDaysBeforeEomMinus: 1,
        cronDaysNearestWeekday: 1
      },
      week: {
        cronEvery: '1',
        incrementStart: 1,
        incrementIncrement: 1,
        specificSpecific: [],
        cronNthDayDay: 1,
        cronNthDayNth: 1
      },
      month: {
        cronEvery: '1',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 12,
        specificSpecific: []
      },
      year: {
        cronEvery: '1',
        incrementStart: 2024,
        incrementIncrement: 1,
        rangeStart: 2024,
        rangeEnd: 2025,
        specificSpecific: []
      },
      output: {
        second: '',
        minute: '',
        hour: '',
        day: '',
        month: '',
        Week: '',
        year: ''
      },
      text: computed(() => Language[state.language || 'cn']),
      secondsText: computed(() => {
        let seconds = ''
        const cronEvery = state.second.cronEvery
        switch (cronEvery.toString()) {
          case '1':
            break
          case '2':
            seconds = state.second.incrementStart + '/' + state.second.incrementIncrement
            break
          case '3':
            state.second.specificSpecific.map((val) => {
              seconds += val + ','
            })
            seconds = seconds.slice(0, -1)
            break
          case '4':
            seconds = state.second.rangeStart + '-' + state.second.rangeEnd
            break
        }
        return seconds
      }),
      minutesText: computed(() => {
        let minutes = ''
        const cronEvery = state.minute.cronEvery
        switch (cronEvery.toString()) {
          case '1':
            break
          case '2':
            minutes = state.minute.incrementStart + '/' + state.minute.incrementIncrement
            break
          case '3':
            state.minute.specificSpecific.map((val) => {
              minutes += val + ','
            })
            minutes = minutes.slice(0, -1)
            break
          case '4':
            minutes = state.minute.rangeStart + '-' + state.minute.rangeEnd
            break
        }
        return minutes
      }),
      hoursText: computed(() => {
        let hours = ''
        const cronEvery = state.hour.cronEvery
        switch (cronEvery.toString()) {
          case '1':
            break
          case '2':
            hours = state.hour.incrementStart + '/' + state.hour.incrementIncrement
            break
          case '3':
            state.hour.specificSpecific.map((val) => {
              hours += val + ','
            })
            hours = hours.slice(0, -1)
            break
          case '4':
            hours = state.hour.rangeStart + '-' + state.hour.rangeEnd
            break
        }
        return hours
      }),
      daysText: computed(() => {
        let days = ''
        const cronEvery = state.day.cronEvery
        switch (cronEvery.toString()) {
          case '1':
            break
          case '2':
          case '4':
          case '11':
            days = '?'
            break
          case '3':
            days = state.day.incrementStart + '/' + state.day.incrementIncrement
            break
          case '5':
            state.day.specificSpecific.map((val) => {
              days += val + ','
            })
            days = days.slice(0, -1)
            break
          case '6':
            days = 'L'
            break
          case '7':
            days = 'LW'
            break
          case '8':
            days = state.day.cronLastSpecificDomDay + 'L'
            break
          case '9':
            days = 'L-' + state.day.cronDaysBeforeEomMinus
            break
          case '10':
            days = state.day.cronDaysNearestWeekday + 'W'
            break
        }
        return days
      }),
      weeksText: computed(() => {
        let weeks = ''
        const cronEvery = state.day.cronEvery
        switch (cronEvery.toString()) {
          case '1':
          case '3':
          case '5':
            weeks = '?'
            break
          case '2':
            weeks = state.week.incrementStart + '/' + state.week.incrementIncrement
            break
          case '4':
            state.week.specificSpecific.map((val) => {
              weeks += val + ','
            })
            weeks = weeks.slice(0, -1)
            break
          case '6':
          case '7':
          case '8':
          case '9':
          case '10':
            weeks = '?'
            break
          case '11':
            weeks = state.week.cronNthDayDay + '#' + state.week.cronNthDayNth
            break
        }
        return weeks
      }),
      monthsText: computed(() => {
        let months = ''
        const cronEvery = state.month.cronEvery
        switch (cronEvery.toString()) {
          case '1':
            months = '*'
            break
          case '2':
            months = state.month.incrementStart + '/' + state.month.incrementIncrement
            break
          case '3':
            state.month.specificSpecific.map((val) => {
              months += val + ','
            })
            months = months.slice(0, -1)
            break
          case '4':
            months = state.month.rangeStart + '-' + state.month.rangeEnd
            break
        }
        return months
      }),
      yearsText: computed(() => {
        let years = ''
        const cronEvery = state.year.cronEvery
        switch (cronEvery.toString()) {
          case '1':
            years = '*'
            break
          case '2':
            years = state.year.incrementStart + '/' + state.year.incrementIncrement
            break
          case '3':
            state.year.specificSpecific.map((val) => {
              years += val + ','
            })
            years = years.slice(0, -1)
            break
          case '4':
            years = state.year.rangeStart + '-' + state.year.rangeEnd
            break
        }
        return years
      }),
      cron: computed(() => {
        return `${state.secondsText || '*'} ${state.minutesText || '*'} ${state.hoursText || '*'} ${
          state.daysText || '*'
        } ${state.monthsText || '*'} ${state.weeksText || '?'} `
      })
    })
    const getValue = () => {
      return state.cron
    }
    const close = () => {
      console.log('state.second.cronEvery', state.second.cronEvery)
      emit('close')
    }
    const handleChange = () => {
      emit('change', state.cron)
      close()
    }
    const rest = (data) => {
      for (const i in data) {
        if (data[i] instanceof Object) {
          this.rest(data[i])
        } else {
          switch (typeof data[i]) {
            case 'object':
              data[i] = []
              break
            case 'string':
              data[i] = ''
              break
          }
        }
      }
    }
    return {
      state,
      getValue,
      close,
      handleChange,
      rest
    }
  },
  data() {
    return {
      cronTimes: []
    }
  },
  methods: {
    getCronParser() {
      const cronExpression = this.state.cron // 假设你有一个cron表达式
      const interval = 6 // 你想要的时间数量
      console.log('cronExpression', cronExpression)
      const times = cronParser.parseExpression(cronExpression)
      const nextTimes = Array.from({ length: interval }, () => times.next().toString())
      return nextTimes.map((data) => new Date(data).toLocaleString('zh-CN'))
    },
    fetchCronTimes() {
      this.cronTimes = this.getCronParser()
    }
  },
  mounted() {
    this.fetchCronTimes() // 组件挂载后获取时间
  },
  watch: {
    'state.cron': {
      immediate: true, // 在监听器创建时立即调用
      handler() {
        this.fetchCronTimes()
      }
    }
  }
})
</script>
<style>
.vue-cron-tdesign-container .tabBody {
  overflow: auto;
}

.vue-cron-tdesign-container .myScroller::-webkit-scrollbar {
  width: 5px;
  height: 1px;
}

.vue-cron-tdesign-container .myScroller::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}

.vue-cron-tdesign-container .myScroller::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 10px;
}

.vue-cron-tdesign-container .bottom {
  width: 100%;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
