<!-- sample https://qiita.com/abouch/items/35d7a202f3e74c7d4c3e#%E3%83%AB%E3%83%BC%E3%83%88%E3%82%92%E5%AE%9A%E7%BE%A9%E3%81%99%E3%82%8B-->
<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'top', path: '/' },
        { title: 'profile', path: '/profile' },
        { title: 'metro', path: '/metros' },
        { title: 'outputs', path: '/outputs' }
      ]
    }
  }
}
</script>

<style scoped>

ol {
  /*margin-left: auto;*/
  width: 480px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 14px;
  background-color: skyblue;
  border-radius: 8px;
  position: relative;
}

li:hover {
  opacity: 0.4;
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}

</style>