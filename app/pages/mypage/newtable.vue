<template>
  <section class="container">
    <h1>新規卓作成</h1>

    <div class="btn-area top">
      <nuxt-link class="btn btn-gray" to="/mypage">
        戻る
      </nuxt-link>
    </div>

    <validation-observer v-slot="{ invalid, passes }">
      <form @submit.prevent="passes(confirm)">
        <div class="row">
          <!-- face-type -->
          <div class="items">
            <p class="label">フェイスタイプ</p>
            <div class="facetypes">
              <div class="facetype">
                <label for="face-type-1">
                  <div class="outer-image">
                    <img
                      v-if="form.face_type == 1"
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
                      v-model="form.face_type"
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
                      v-if="form.face_type == 2"
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
                      v-model="form.face_type"
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
            <p class="label">更新種別</p>
            <input
              id="period-rule-1"
              v-model="form.period_rule"
              class="radio"
              type="radio"
              name="period-rule"
              value="1"
              checked
            />
            <label for="period-rule-1">固定</label>
            <input
              id="period-rule-2"
              v-model="form.period_rule"
              class="radio"
              type="radio"
              name="period-rule"
              value="2"
            />
            <label for="period-rule-2">変動</label>
            <div class="banner">
              <dl>
                <div v-if="form.period_rule == 1">
                  <dt>固定</dt>
                  <dd>
                    外交フェイズの終了時刻は、卓作成時に設定した開始時刻で固定されます。
                  </dd>
                </div>
                <div v-if="form.period_rule == 2">
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
            <p class="label">外交期間</p>
            <input
              id="duration-2"
              v-model="form.duration"
              class="radio"
              type="radio"
              name="duration"
              value="2"
              checked
            />
            <label for="duration-2">標準</label>
            <input
              id="duration-1"
              v-model="form.duration"
              class="radio"
              type="radio"
              name="duration"
              value="1"
            />
            <label for="duration-1">短期</label>
            <div class="banner">
              <dl>
                <div v-if="form.duration == 2">
                  <dt>標準</dt>
                  <dd>
                    外交フェイズは 24 時間、撤退・調整フェイズはそれぞれ最長 30
                    分です。
                  </dd>
                </div>
                <div v-if="form.duration == 1">
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
          <!-- due_date -->
          <div class="items">
            <p class="label">開始日</p>
            <validation-provider
              v-slot="{ errors }"
              vid="dueDate"
              rules="required"
              name="開始日"
            >
              <date-picker
                v-model="form.due_date"
                :input-attr="{ id: 'due_date' }"
                :lang="lang"
                :not-before="today()"
                :not-after="notAfter()"
                :editable="false"
                value-type="format"
              ></date-picker>
              <p v-show="errors.length" class="help is-danger">
                {{ errors[0] }}
              </p>
            </validation-provider>
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
          <!-- start_time -->
          <div class="items">
            <p class="label">開始時刻</p>
            <validation-provider
              v-slot="{ errors }"
              rules="required|startdatetime:dueDate"
              name="開始時刻"
            >
              <div class="select relative">
                <select v-model="form.start_time">
                  <option disabled value="">選択して下さい</option>
                  <option v-for="n in Array.from(Array(24).keys())" :key="n">
                    {{ n }}:00
                  </option>
                </select>
                <SelectBoxIcon />
              </div>
              <p v-show="errors.length" class="help is-danger">
                {{ errors[0] }}
              </p>
              <div class="banner">
                <dl>
                  <dt>HH:MM</dt>
                  <dd>
                    ゲーム開始時刻です。
                  </dd>
                  <dd>
                    開始日時までは、現在時刻から 1
                    時間以上の募集期間を確保する必要があります。
                  </dd>
                </dl>
              </div>
            </validation-provider>
          </div>
        </div>

        <div class="row">
          <!-- juggling -->
          <div class="items">
            <p class="label">掛け持ち</p>
            <input
              id="juggling-1"
              v-model="form.juggling"
              class="radio"
              type="radio"
              name="juggling"
              value="1"
              checked
            />
            <label for="juggling-1">可</label>
            <input
              id="juggling-2"
              v-model="form.juggling"
              class="radio"
              type="radio"
              name="juggling"
              value="2"
            />
            <label for="juggling-2">不可</label>
            <div class="banner">
              <dl>
                <div v-if="form.juggling == 1">
                  <dt>掛け持ち可</dt>
                  <dd>
                    卓主以外の参加者は、他の掛け持ち可の卓にも同時に参加できます。
                  </dd>
                </div>
                <div v-if="form.juggling == 2">
                  <dt>掛け持ち不可</dt>
                  <dd>
                    感想戦を迎えるか担当国が滅亡するまで、参加者は他の卓には参加できません。
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <!-- keyword -->
          <div class="items">
            <p class="label">
              鍵
              <input v-model="form.private" name="private" type="checkbox" />
            </p>
            <validation-provider
              v-slot="{ errors }"
              :rules="form.private ? 'required|max:10' : null"
              name="鍵卓のキーワード"
            >
              <input
                v-model.trim="form.keyword"
                :disabled="!form.private"
                name="keyword"
                type="text"
              />
              <p v-show="form.private && errors.length" class="help is-danger">
                {{ errors[0] }}
              </p>
            </validation-provider>
            <div v-if="form.private" class="banner">
              <dd>
                鍵卓のキーワードを 10 文字までの長さで設定してください。
              </dd>
              <dd>
                参加希望者は、登録時にここで設定されたキーワードを入力する必要があります。
              </dd>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- power -->
          <div class="items">
            <p class="label">希望国</p>
            <div class="select relative">
              <select v-model="form.desired_power">
                <option value="">おまかせ</option>
                <template v-for="power in powers">
                  <template v-if="power.symbol !== 'x'">
                    <option :key="power.id" :value="power.symbol">
                      {{ power.jname }}
                    </option>
                  </template>
                </template>
              </select>
              <SelectBoxIcon />
            </div>
            <div class="banner">
              <dl>
                <dd>
                  あなたが担当を希望する国を選択してください。
                </dd>
                <dd>
                  複数のプレイヤーが同じ国を希望した場合は抽選になります。
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <p v-show="invalid" class="help is-danger-global">
          設定が完了していません。内容を見直してください。
        </p>

        <div class="btn-area bottom">
          <nuxt-link class="btn btn-gray" to="/mypage">
            戻る
          </nuxt-link>
          <button :disabled="invalid" type="submit" class="btn btn-blue">
            作成する
          </button>
        </div>
      </form>
    </validation-observer>

    <!-- dialog -->
    <div
      v-if="isConfirmDialogActive"
      @click="closeConfirmDialog"
      class="dialog-bg"
    ></div>
    <div v-if="isConfirmDialogActive" class="dialog">
      <div class="caution">
        <h2>注意事項</h2>
        <p>
          下記の事項に同意された場合にのみ作成を実行してください。
        </p>
        <ul>
          <li>
            卓主は卓が終了するまでの期間の進行管理責任を負う。
          </li>
          <li>
            卓主は不適切なプレイヤーを除名する権限と責任を負う。
          </li>
          <li>
            卓主は担当国が滅亡しても終了まで他卓に参加できない。
          </li>
          <li>
            卓主の無政府化は士道不覚悟と心得よ。
          </li>
          <li>
            卓主は猫をあがめよ。
          </li>
          <li>
            卓主のおやつは 300 円まで。
          </li>
        </ul>
      </div>

      <p class="label ">
        同意する
        <input v-model="agree" type="checkbox" />
      </p>
      <div class="btn-area">
        <button @click="closeConfirmDialog" class="btn btn-gray">
          中断する
        </button>
        <button
          @click="submit"
          :disabled="!agree"
          type="submit"
          class="btn btn-blue"
        >
          作成を実行する
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import DatePicker from 'vue2-datepicker'
import SelectBoxIcon from '@/components/-select-box-icon'

import Powers from '~/assets/json/powers.json'

export default {
  components: { DatePicker, SelectBoxIcon },
  middleware: ['auth'],
  head() {
    return {
      title: '新規卓作成'
    }
  },
  data: () => {
    return {
      offsetY: 0,
      powers: Powers,
      agree: false,
      form: {
        face_type: '1',
        period_rule: '1',
        duration: '2',
        juggling: '1',
        private: false,
        keyword: '',
        due_date: '',
        start_time: '',
        desired_power: ''
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
  computed: {
    ...mapState('layout', ['isConfirmDialogActive']),
    ...mapGetters('user', ['getAuthToken'])
  },
  methods: {
    confirm: async function() {
      this.offsetY =
        document.documentElement.scrollTop || document.body.scrollTop
      await this.$store.dispatch('layout/showConfirmDialog')
      document.getElementById('__content').scroll(0, this.offsetY)
    },
    submit: async function() {
      console.log(JSON.stringify(this.form))

      this.closeConfirmDialog()
      this.$axios.setToken(this.getAuthToken, 'Bearer')
      await this.$axios
        .post('/api/tables', this.form)
        .then(res => {
          this.$router.push({ path: '/entries/' + res.data.id })
        })
        .catch(error => {
          console.log(error.message)
        })
    },
    closeConfirmDialog: async function() {
      await this.$store.dispatch('layout/closeConfirmDialog')
      window.scroll(0, this.offsetY)
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
  @apply flex flex-row flex-wrap justify-center max-w-sm;
  @apply text-left;
}

h1 {
  @apply text-xl font-bold my-5 ml-10 w-full;
}

.is-danger {
  @apply mx-5 py-2;
  @apply text-sm text-red-500;
}

.is-danger-global {
  @apply mx-5 mt-5 px-4 py-4;
  @apply border border-red-400 text-red-700 rounded;
  @apply text-base bg-red-100 text-red-500;
}
</style>

<style lang="postcss" scoped>
.btn-area {
  @apply flex flex-row justify-center w-full;

  & .btn + .btn {
    @apply ml-5;
  }

  & .btn[type='submit']:disabled {
    @apply opacity-50 cursor-not-allowed;
  }
}
.btn-area.top {
  @apply my-5;
}
.btn-area.bottom {
  @apply mt-10;
}
</style>

<style lang="postcss" scoped>
form {
  @apply w-full;

  & .row {
    @apply flex flex-row flex-wrap justify-center;
  }

  & .items {
    @apply mt-5 mb-2 mx-5 mb-5 w-full;
    max-width: 472px;

    & input {
      @apply px-4 py-3 ml-5;
      &[type='radio'],
      &[type='checkbox'] {
        @apply cursor-pointer;
      }
      &[type='radio'] + .caption,
      &[type='radio'] + label {
        @apply inline-block mt-5 ml-1;
        height: 2rem;
      }
      &[name='keyword'] {
        @apply inline-block;
        width: calc(100% - 3rem);
      }
    }

    & select {
      @apply block appearance-none;
      @apply ml-5 py-4 px-4 pr-8 leading-tight;
      @apply border border-gray-200 rounded;
      @apply bg-white;
      width: calc(100% - 50px);
      &:focus {
        @apply outline-none bg-white border-gray-500;
      }
    }

    & .label {
      @apply font-bold mb-3 px-3 py-2 bg-gray-300;
    }

    & label {
      @apply cursor-pointer;
    }

    & .banner {
      @apply border-t border-b border-blue-500;
      @apply bg-blue-100 text-blue-700 px-4 py-3;
      @apply m-4 mb-0 text-sm;
      width: calc(100% - 2rem);
    }
    & .banner dt {
      @apply font-bold mb-1;
    }
    & .banner dd {
      @apply pl-2 pb-2;
    }
  }
}
</style>

<style lang="postcss" scoped>
.facetypes {
  @apply flex flex-row justify-center items-center;

  & .facetype {
    @apply inline-block ml-5;

    & .outer-image {
      @apply table-cell align-middle mb-3;
      height: 100px;
    }

    & img {
      @apply rounded-lg;
    }
  }

  & .facetype + .facetype {
    @apply ml-10;
  }
}
</style>

<style lang="postcss" scoped>
.mx-datepicker {
  @apply ml-4;
  width: calc(100% - 3rem);
  height: 3.5rem;

  & >>> .mx-input-wrapper {
    @apply h-full w-full;
  }
  & >>> .mx-input {
    @apply h-full border-none w-full;
  }
}
</style>

<style lang="postcss" scoped>
.dialog-bg {
  @apply bg-black opacity-50 fixed z-50 w-full h-screen top-0;
}

.dialog {
  @apply fixed z-50;
  @apply w-11/12 max-w-xl px-3 pt-10;
  @apply bg-white rounded;
  height: calc(100vh - 12rem);
  margin-top: 2rem;
  min-width: 292px;
  min-height: 376px;

  & .caution {
    @apply text-red-600;

    & h2 {
      @apply w-full mb-3 px-0 text-center;
    }

    & p {
      @apply mb-5 text-sm;
    }

    & ul {
      @apply block list-disc pl-5 text-xs mx-2;
      @apply border-solid border border-gray-500;
      @apply overflow-y-scroll;
      height: calc(100vh - 29rem);
      min-height: 85px;

      & li {
        @apply mb-1;
      }
    }
  }

  & p.label {
    @apply text-center absolute w-full left-0;
    bottom: 6rem;
  }

  & .btn-area {
    @apply absolute left-0;
    bottom: 2.5rem;
  }
}
</style>

<style lang="postcss" scoped>
@screen sm {
  .container {
    & .dialog {
      @apply px-10 pt-20;
      margin-top: 3rem;
      min-height: 464px;
      min-width: 292px;
      height: calc(100vh - 20rem);

      & .caution {
        & h2 {
          @apply mb-5;
        }
        & p {
          @apply mb-10 text-base;
        }

        & ul {
          @apply text-sm mx-5;
          @apply overflow-auto;
          height: calc(100vh - 43rem);

          & li {
            @apply mb-3;
          }
        }
      }

      & p.label {
        bottom: 9rem;
      }

      & .btn-area {
        @apply absolute left-0;
        bottom: 5rem;
      }
    }
  }

  .is-danger-global {
    @apply w-3/5 mx-auto text-center;
    min-width: 600px;
  }
}
</style>
