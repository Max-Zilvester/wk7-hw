<template>
  <div>
    <h1>MaxMovie App</h1>
    <div class='main-container'>
      <label for="movie_select">Select a Movie:</label>
      <select id="movie_select" v-model="selectedMovie">
      <option disabled value=“”>Select a movie</option>
      <option v-for="movie in movies" :key="movie.id" :value="movie"><em>{{ movie.title }}</em></option>
      </select>
      <br>
      <!-- <movies-list :movies="movies"></movies-list> -->
      <movie-detail :movie="selectedMovie"></movie-detail> <br>
      <button v-on:click="addFavouriteMovie(selectedMovie)">Add Favourite Movie</button>
      
      <favourite-movies :favouriteMovies="favouriteMovies"></favourite-movies>
      <button v-on:click="removeMovie(index)">Remove Movie</button>
      

    </div>

    </div>
</template>

<script>
import MoviesList from './components/MoviesList.vue';
import MovieDetail from './components/MovieDetail.vue';
import FavouriteListItem from './components/FavouriteListItem.vue';
import {eventBus} from './main.js'

export default {
  name: 'app',
  data(){
    return{
      movies: [],
      selectedMovie: null,
      favouriteMovies: []
      // ingredients:[]
    }
  },

  components:{
    "movies-list": MoviesList,
    "movie-detail": MovieDetail,
    "favourite-movies": FavouriteListItem
  },

  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => this.movies = data)

    eventBus.$on('movie-selected', (movie) => {
      this.selectedMovie = movie
    })
  },
  methods: {
    addFavouriteMovie: function(selectedMovie) {
      if (this.favouriteMovies.includes(selectedMovie) === false) {
      this.favouriteMovies.push(this.selectedMovie)
    }
  },
    removeMovie: function (index) {
      this.favouriteMovies.splice(index, 1);
    }
  }  

} 

</script>

<style>
body{
  font-family:Haettenschweiler, 'Arial Narrow Bold', sans-serif
}
.main-container{
  position:flex;
 
  width:100%;
}

#-detail{
  position:fixed;
  top:20px;
  left:30%;
}

#favourite-movie{
  position:fixed;
  top:20px;
  left:70%;
}



img{
  height:300px;
}

  


</style>