<template>
  <div id="favourite-movies">
    <h2>Favourite Movies</h2>
    <p v-for="(movie, index) in favouriteMovies">{{ movie.title }}</p>
  </div>
</template>

<script>
export default {
    name: 'favourite-movies',
    props: ['favouriteMovies']

}
</script>

<style>
.favourite-movies{
    width:200px;
    background: #da7a7a;
    border-bottom: 1px rgb(22, 2, 2) dotted;
}
</style>