<template>
  <section class="container">
    <h1>新規卓作成</h1>
    <form @submit.prevent="submit">
      <div class="row">
        <!-- face-type -->
        <div class="items">
          <p class="label">フェイスタイプ</p>
          <div class="facetypes">
            <div class="facetype">
              <label for="face-type-1">
                <div class="outer-image">
                  <img
                    v-if="params.faceType == 1"
                    :src="require('@/assets/img/power/girl/pla100.png')"
                  />
                  <img
                    v-else
                    :src="require('@/assets/img/power/girl/dfpla100.png')"
                  />
                </div>
                <div>
                  <input
                    id="face-type-1"
                    v-model="params.faceType"
                    class="radio"
                    type="radio"
                    name="face-type"
                    value="1"
                    checked
                  />
                  <span class="caption">娘</span>
                </div>
              </label>
            </div>
            <div class="facetype">
              <label for="face-type-2">
                <div class="outer-image">
                  <img
                    v-if="params.faceType == 2"
                    :src="require('@/assets/img/power/flag/pla100.png')"
                  />
                  <img
                    v-else
                    :src="require('@/assets/img/power/flag/dfpla100.png')"
                  />
                </div>
                <div>
                  <input
                    id="face-type-2"
                    v-model="params.faceType"
                    class="radio"
                    type="radio"
                    name="face-type"
                    value="2"
                  />
                  <span class="caption">旗</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- period-rule -->
        <div class="items">
          <p class="label">更新時刻</p>
          <input
            id="period-rule-1"
            v-model="params.periodRule"
            class="radio"
            type="radio"
            name="period-rule"
            value="1"
            checked
          />
          <label for="period-rule-1">固定</label>
          <input
            id="period-rule-2"
            v-model="params.periodRule"
            class="radio"
            type="radio"
            name="period-rule"
            value="2"
          />
          <label for="period-rule-2">変動</label>
          <div class="banner">
            <dl>
              <div v-if="params.periodRule == 1">
                <dt>固定</dt>
                <dd>
                  外交フェイズの終了時刻は、卓作成時に設定した開始時刻で固定されます。
                </dd>
              </div>
              <div v-if="params.periodRule == 2">
                <dt>変動</dt>
                <dd>
                  外交フェイズの終了時刻は、前回外交フェイズ終了時間から計算されます。
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <!-- duration -->
        <div class="items">
          <p class="label">時間種別</p>
          <input
            id="duration-2"
            v-model="params.duration"
            class="radio"
            type="radio"
            name="duration"
            value="2"
            checked
          />
          <label for="duration-2">標準</label>
          <input
            id="duration-1"
            v-model="params.duration"
            class="radio"
            type="radio"
            name="duration"
            value="1"
          />
          <label for="duration-1">短期</label>
          <div class="banner">
            <dl>
              <div v-if="params.duration == 2">
                <dt>標準</dt>
                <dd>
                  外交フェイズは 24 時間、撤退・調整フェイズはそれぞれ最長 30
                  分です。
                </dd>
              </div>
              <div v-if="params.duration == 1">
                <dt>短期</dt>
                <dd>
                  外交フェイズは 1 時間、撤退・調整フェイズはそれぞれ最長 15
                  分です。
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="items">
          <p class="label">開始日</p>
          <date-picker
            v-model="params.dueDate"
            :input-attr="{ id: 'dueDate' }"
            :lang="lang"
            :not-before="today()"
            :not-after="notAfter()"
            :editable="false"
            value-type="format"
          ></date-picker>
          <div class="banner">
            <dl>
              <dt>YYYY-MM-DD</dt>
              <dd>
                指定日の開始時刻にゲームが開始されます。
              </dd>
              <dd>
                開始までにプレイヤーが揃わなかった場合は廃卓となります。
              </dd>
            </dl>
          </div>
        </div>
        <div class="items">
          <p class="label">開始時刻</p>
          <div class="select relative">
            <select v-model="params.startDate">
              <option disabled value="">選択して下さい</option>
              <option>0:00</option>
              <option>1:00</option>
              <option>2:00</option>
              <option>3:00</option>
              <option>4:00</option>
              <option>5:00</option>
              <option>6:00</option>
              <option>7:00</option>
              <option>8:00</option>
              <option>9:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
              <option>23:00</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-10 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
          <div class="banner">
            <dl>
              <dt>HH:MM</dt>
              <dd>
                ゲーム開始時刻です。
              </dd>
              <dd>
                開始日と合わせて現在の時間から 1
                時間後より以前の時刻は指定できません。
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- duration -->
        <div class="items">
          <p class="label">掛け持ち</p>
          <input
            id="juggling-1"
            v-model="params.juggling"
            class="radio"
            type="radio"
            name="juggling"
            value="1"
            checked
          />
          <label for="juggling-1">可</label>
          <input
            id="juggling-2"
            v-model="params.juggling"
            class="radio"
            type="radio"
            name="juggling"
            value="2"
          />
          <label for="juggling-2">不可</label>
          <div class="banner">
            <dl>
              <div v-if="params.juggling == 1">
                <dt>掛け持ち可</dt>
                <dd>
                  他の掛け持ち可の卓に参加できます。
                </dd>
              </div>
              <div v-if="params.juggling == 2">
                <dt>掛け持ち不可</dt>
                <dd>
                  感想戦を迎えるか担当国が滅亡するまで、他の卓には参加できません。
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <!-- keyword -->
        <div class="items">
          <p class="label">
            鍵
            <input v-model="params.lock" name="lock" type="checkbox" />
          </p>
          <input
            v-model="params.keyword"
            :disabled="!params.lock"
            name="keyword"
            type="text"
          />
          <div v-if="params.lock" class="banner">
            参加希望者は、ここで設定されたキーワードを入力する必要があります。
          </div>
        </div>
      </div>
      <div class="btn-area">
        <nuxt-link class="btn btn-gray" to="/mypage">
          戻る
        </nuxt-link>
        <button type="submit" class="btn btn-blue">
          作成する
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import DatePicker from 'vue2-datepicker'

export default {
  components: { DatePicker },
  head() {
    return {
      title: '新規卓作成'
    }
  },
  data: () => {
    return {
      params: {
        faceType: '1',
        periodRule: '1',
        duration: '2',
        juggling: '1',
        lock: false,
        keyword: '',
        dueDate: '',
        startDate: ''
      },
      lang: {
        days: ['日', '月', '火', '水', '木', '金', '土'],
        months: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'
        ],
        pickers: [
          'next 7 days',
          'next 30 days',
          'previous 7 days',
          'previous 30 days'
        ],
        placeholder: {
          date: '選択して下さい',
          dateRange: 'Select Date Range'
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.$store.state.user.authToken) {
        this.isVisible = true
      } else {
        this.$router.push({ path: '/' })
      }
    }, 0)
  },
  methods: {
    submit: function() {
      console.log(JSON.stringify(this.params))
    },
    today: () => {
      return new Date()
    },
    notAfter: () => {
      const notAfter = new Date()
      notAfter.setDate(notAfter.getDate() + 14)
      return notAfter
    }
  }
}
</script>

<style lang="postcss" scoped>
.container {
  @apply flex flex-row flex-wrap justify-center;
  @apply text-left;
}
form {
  @apply w-full;
}
h1 {
  @apply text-xl font-bold my-5 ml-10 w-full;
}
.row {
  @apply flex flex-row flex-wrap justify-center;
}
.items {
  @apply mt-5 mb-2 mx-5 mb-5 w-full;
  max-width: 472px;
}
.facetypes {
  @apply flex flex-row justify-center items-center;
}
label {
  @apply cursor-pointer;
}
.label {
  @apply font-bold mb-3 px-3 py-2 bg-gray-300;
}
.facetype {
  @apply inline-block ml-5;
}
.facetype + .facetype {
  @apply ml-10;
}
.facetype .outer-image {
  @apply table-cell align-middle mb-3;
  height: 100px;
}
.facetype img {
  @apply rounded-lg;
}
input[type='radio'],
input[type='checkbox'] {
  @apply cursor-pointer;
}
input[type='radio'] + .caption,
input[type='radio'] + label {
  @apply inline-block ml-1;
}

input {
  @apply px-4 py-3 ml-5;
}
.mx-datepicker {
  @apply ml-4;
  width: calc(100% - 3rem);
  height: 3.5rem;
}
.mx-datepicker >>> .mx-input-wrapper {
  @apply h-full w-full;
}
.mx-datepicker >>> .mx-input {
  @apply h-full border-none w-full;
}
select {
  @apply block appearance-none;
  @apply ml-5 py-4 px-4 pr-8 leading-tight;
  @apply border border-gray-200 rounded;
  @apply bg-white;
  width: calc(100% - 50px);
}
select:focus {
  @apply outline-none bg-white border-gray-500;
}
.banner {
  @apply border-t border-b border-blue-500;
  @apply bg-blue-100 text-blue-700 px-4 py-3;
  @apply m-4 mb-0 text-sm;
  width: calc(100% - 2rem);
}
.banner dt {
  @apply font-bold;
}
.banner dd {
  @apply pl-2 pb-2;
}
</style>

<style lang="postcss" scoped>
.btn-area {
  @apply flex flex-row justify-center;
}
.btn + .btn {
  @apply ml-5;
}
</style>
