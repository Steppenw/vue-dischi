const app = new Vue({
  el: "#app",
  data: {
    albumsList: [],
    loading: false,
    genres: []
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
    
    /*for (let i=0; i<10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((resp) => {
        //console.log(i + 1, resp.data.response[i]);
        //console.log(i + 1, resp.data.response[i].genre);
        ajaxAlbumsList.push(resp.data.response[i]);

        if (ajaxAlbumsList.length === 10) {
          this.albumsList = ajaxAlbumsList;

          this.loading = false;
        }
      });
    }*/

    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((resp) => {
      for (let i=0; i<resp.data.response.length; i++) {
        //console.log(i+1, resp.data.response[i]);
        //console.log(i+1, resp.data.response[i].genre);
        ajaxAlbumsList.push(resp.data.response[i]);

        if (!this.genres.includes(resp.data.response[i].genre)) {
          this.genres.push(resp.data.response[i].genre);
        }

        if (ajaxAlbumsList.length === resp.data.response.length) {
          this.albumsList = ajaxAlbumsList;

          this.loading = false;
        }
      }
    });
  }
});