<!-- https://cr-vue.mio3io.com/tutorials/firebase.html#firebase-%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AB%E3%81%AE%E5%AE%9A%E7%BE%A9 -->
<template>
  <div id="app">
    <header class="header">
      <h1><img src="@/assets/logo.png" alt=""></h1>
    </header>

    <div class="wrapper">
      <!-- ログイン時にはフォームとログアウトボタンを表示 -->
      <div v-if="user.uid" key="login">
        [{{ user.displayName }}]
        <button type="button" @click="doLogout">ログアウト</button>
      </div>

      <!-- 未ログイン時にはログインボタンを表示 -->
      <div v-else key="logout">
        <select name="" id="" class="select_login">
          <option value="red">赤</option>
          <option value="blue">青</option>
          <option value="">admin</option>
        </select>

        <button type="button" @click="doLogin" class="btn_login">ログイン</button>
      </div>

      <!-- <tab-menu></tab-menu>
      <router-view/> -->
      <div class="block_line">
        <h2 class="title">路線を選択</h2>
        <div class="row_line"  v-for="(value) in LineListName" v-bind:key="value">
          <button 
            onclick="" 
            class="btn_line">{{value.LineName}}</button>
        </div>
      </div>

      <div class="block_station">
        <h2 class="title">獲得する駅を選択</h2>
        <div class="row_station" v-for="(value) in localStaion" v-bind:key="value">
          <Showmetrolinebutton
            v-bind:LineVisible="value.Visible"
            BeforeColor="White"
            ColorChoose="Red"
            v-bind:LineName="value.LineName"
            v-bind:StationName="value.name"
            >
          </Showmetrolinebutton>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

// firebase モジュール
import firebase from 'firebase'
import localJson from './assets/MetroList.json'
import Showmetrolinebutton from '@/components/ShowMetroLineButton'

export default {
  name: 'App',
  components: {
    Showmetrolinebutton
  },
  data(){
    return {
      user: {},  // ユーザー情報
      chat: [],  // 取得したメッセージを入れる配列
      input: '',  // 入力したメッセージ
      Station: [], //設定している駅
      Color: '',
      localStaion: localJson.StationFirebaseOnlyList,
      StationName: '',
      LineListName: localJson.LineList,
      MidousujiSort: 0,


    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {}
      const ref_message = firebase.database().ref('message')
      if (user) {
        this.chat = []
        // message に変更があったときのハンドラを登録
        ref_message.limitToLast(10).on('child_added', this.childAdded)
      } else {
        // message に変更があったときのハンドラを解除
        ref_message.limitToLast(10).off('child_added', this.childAdded)
      }
    })
  },
  methods: {
    // ログイン処理
    doLogin() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider)
    },
    // ログアウト処理
    doLogout() {
      firebase.auth().signOut()
    },

    },

    // 受け取ったメッセージをchatに追加
    // データベースに新しい要素が追加されると随時呼び出される
    childAdded(snap) {
      const message = snap.val()
      this.chat.push({
        key: snap.key,
        name: message.name,
        image: message.image,
        message: message.message
      })
      this.scrollBottom()
    },
    doSend() {
      if (this.user.uid && this.input.length) {
        // firebase にメッセージを追加
        firebase.database().ref('message').push({
          message: this.input,
          name: this.user.displayName,
          image: this.user.photoURL
        }, () => {
          this.input = '' // フォームを空にする
        })
      }
    }


}


</script>

<style>

*{
  margin: 0;
}
body{
  font-family: "游ゴシック", "Yu Gothic", sans-serif;
}
.header{
  background: #1f2875;
  padding: 10px 0;
}
.header h1{
  margin-bottom: 0;
}
.header img{
  display: block;
  margin: 0 auto;
  height: 30px;
}
.wrapper{
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 15px;
}
button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
.select_login{
  display: block;
  width: 100%;
  padding: 8px 0 8px 8px;
  margin-bottom: 10px;
}
.btn_login{
  display: block;
  width: 100%;
  padding: 10px 0;
  background: #1f2875;
  color: #fff;
}
.block_line{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.title{
  color: #1f2875;
  border-bottom: 2px solid #1f2875;
  width: 100%;
  font-size: 20px;
  padding-left: 5px;
  padding-bottom: 5px;
  margin-bottom: 20px;
}
.row_line{
  width: 50%;
  padding: 5px;
}
.btn_line{
  display: block;
  width: 100%;
  text-align: center;
  border-radius: 100px;
  border: 1px solid #000;
  font-size: 14px;
  padding: 5px 0;
}
.btn_line.current{
  background: #1f2875;
  color: #fff;
}

.row_station{
  width: 100%;
}
.btn_station{
  position: relative;
  display: block;
  width: 100%;
  text-align: left;
  padding: 20px 20px 20px 50px;
  border: 1px solid #b0b0b0;
  font-weight: bold;
}
.btn_station:before{
  box-sizing: border-box;
  content: "";
  position: absolute;
  left: 15px;
  top: calc(50% - 10px);
  width: 20px;
  height: 20px;
  border: 2px solid #333;
  color: #333;
  border-radius: 100px;
}
.btn_station.red{
  color: #d00000;
}
.btn_station.red:before{
  border: none;
  background: #d00000;
}
.btn_station.blue{
  color: #0098d0;
}
.btn_station.blue:before{
  border: none;
  background: #0098d0;
}

</style>
