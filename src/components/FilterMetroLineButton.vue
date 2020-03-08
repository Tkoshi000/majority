<template>
    <div>
        <button
            class="btn_station"
            v-if="LineVisible"
            v-bind:style="StyleColor"
            v-on:click="Fileter(LineName,)">
            {{LineName}}
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
      },
      LineList:{
        type: JSON
      }

  },
  methods: {
    Fileter: function(BeforeColor,afterColor) {
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
