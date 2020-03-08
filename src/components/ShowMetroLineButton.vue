<template>
    <div>
        <button
            class="btn_station"
            v-if="LineVisible"
            v-bind:style="StyleColor"
            v-on:click="ColorChange(BeforeColor,ColorChoose)">
            {{StationName}}
        </button>
    </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      StyleColor :"background:White"
    }
  },
  props: {
      BeforeColor: {
        type:String
      },
      ColorChoose: {
          type:String
      },
      LineName: {
          type:String
      },
      LineVisible: {
          type:Boolean
      },
      StationName: {
        type: String
      }

  },
  methods: {
    ColorChange: function(BeforeColor,afterColor) {
      if(this.StyleColor=="background:"+BeforeColor){
        this.StyleColor="background:" + afterColor;
      }
      else{
        this.StyleColor="background:" + BeforeColor;
      }
      
    }
  }

}

</script>
