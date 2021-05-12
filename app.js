const app = new Vue({
  el: "#app",
  data: {
    albumsList: [],
    loading: false
  },
  methods: {
    
  },
  mounted() {
    
    const ajaxAlbumsList = [];
    
    this.loading = true;
    
    /*axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((resp) => {
      //console.log('ajax', resp.data.response);
      if (resp.data.response.length) {
        this.albumsList = resp.data.response;

        this.loading = false;
      }
      //console.log('albumsList', this.albumsList);
    });*/
    
    for (let i=0; i<10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((resp) => {
        //console.log(i + 1, resp.data.response[i]);
        ajaxAlbumsList.push(resp.data.response[i]);

        if (ajaxAlbumsList.length === 10) {
          this.albumsList = ajaxAlbumsList;

          this.loading = false;
        }
      });
    }
  }
});