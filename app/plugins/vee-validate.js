import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend
} from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'

// VeeValidateが用意している各ルールを使用するよう指定
import { required, max } from 'vee-validate/dist/rules'
extend('required', required)
extend('max', max)
extend('startdatetime', {
  params: [
    {
      name: ['dueDate'],
      isTarget: true
    }
  ],
  message: '開始日時が現在時刻の 1 時間後よりも過去の時刻です',
  validate(value, { dueDate }) {
    if (dueDate === '') return true
    const minStartDateTime = new Date()
    minStartDateTime.setTime(minStartDateTime.getTime() + 60 * 60 * 1000)
    const selectedDatetime = new Date(dueDate + ' ' + ('0' + value).slice(-5))
    return minStartDateTime.getTime() < selectedDatetime.getTime()
  }
})

// 下記は固定で書く
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
localize('ja', ja)
