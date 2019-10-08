

<script>
import firebase from 'firebase'

export default {
  name: 'ChatRoom',
  data () {
    return {
      messages: [],
      messageText: '',
      nickname: 'meru'
    }
  },
  methods: {
    storeMessage () {
      // ↓ メッセージを Realtime Database に登録する処理
      firebase.database().ref('messages')
        .push({text: this.messageText, nickname: this.nickname})
      this.messageText = ''
    }
  },
  created () {
    // ↓ Realtime Database にメッセージが追加されたら Vue の State にも追加する処理
    firebase.database().ref('messages')
      .on('child_added', snapshot => this.messages.push({...snapshot.val(), id: snapshot.key}))
  }
}
  </script>