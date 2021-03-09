<template>
  <div class="login">
    <div class="label">
      帳號
      <input
        v-model="account"
        type="text"
      >
    </div>
    <div class="label">
      密碼
      <input
        v-model="password"
        type="password"
      >
    </div>
    <button>登入</button>
  </div>
</template>
<script>
import Auth from 'aws-amplify'
export default {
  name: 'Login',
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    checkAuth() {
      Auth.signIn(this.account, this.password)
    }
  }
}
</script>
