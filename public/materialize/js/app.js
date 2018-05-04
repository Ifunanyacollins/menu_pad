var app = new Vue({
  el: '#app',
  data: {
   
  },
  methods: {
   frame:function(){
   	
   	this.$refs.ioa.play()
    setTimeout(function(){
     var c = confirm('Would you like to visit Firebrain')
     if(c==true){
    return  window.open("http://favcode54.org")
     }
    }, 8000)
    
   }

  },

  computed:{
  	
  }

})