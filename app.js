const app = new Vue({
  el: "#app",
  data: {
    albumsList: []
  },
  methods: {
    
  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((resp) => {
      //console.log('ajax', resp.data.response);
      this.albumsList = resp.data.response;
      //console.log('albumsList', this.albumsList);
    });
  }
});