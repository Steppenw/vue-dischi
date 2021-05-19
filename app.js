const app = new Vue({
  el: "#app",
  data: {
    albumsList: [],
    loading: false,
    genresList: [],
    filteredAlbumsList: [],
    byGenre: ''
  },
  methods: {
    genresOptions() {
      this.albumsList.forEach(album => {
        if (!this.genresList.includes(album.genre)) {
          this.genresList.push(album.genre);
        }
      });
    },

    genreChoice() {
      if (this.byGenre === '') {
        
        this.filteredAlbumsList = this.albumsList;
        //this.filteredAlbumsList = [...this.albumsList];
        
        return;
      }

      this.filteredAlbumsList = this.albumsList.filter((album) => {
        return album.genre === this.byGenre;
      });
    }
  },
  mounted() {
    
    const tempAlbumsList = [];
    
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
        tempAlbumsList.push(resp.data.response[i]);

        if (tempAlbumsList.length === 10) {
          this.albumsList = tempAlbumsList;

          this.loading = false;
        }
      });
    }*/

    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((resp) => {
      for (let i=0; i<resp.data.response.length; i++) {
        //console.log(i+1, resp.data.response[i]);
        //console.log(i+1, resp.data.response[i].genre);
        tempAlbumsList.push(resp.data.response[i]);

        /*if (!this.genresList.includes(resp.data.response[i].genre)) {
          this.genresList.push(resp.data.response[i].genre);
        }
        //console.log(this.genresList);*/

        if (tempAlbumsList.length === resp.data.response.length) {
          this.albumsList = tempAlbumsList;

          this.loading = false;
        }
      };

      this.filteredAlbumsList = this.albumsList;
      
      this.genresOptions();
      //console.log(this.genresList);
    });
  }
});