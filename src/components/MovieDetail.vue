<template>
    <div class="movie-detail" v-if="movie" id="movie-detail">
        <h3>{{ movie.title }}</h3>
        <!-- <img :src="beer.image_url"> -->
        <p><b>Producer: </b><i>{{movie.producer}}</i></p>
        <p><b>Director: </b><i>{{movie.director}}</i></p>
        <p><b>Release Date: </b><i>{{movie.release_date}}</i></p>
        <p><b>Rating: </b><i>{{movie.rt_score}}</i></p>
        
        <!-- <p>Description: {{beer.description}}</p> -->
        
        <!-- <beer-ingredients :beerIngredients="beerIngredients"></beer-ingredients>
        <p>{{ beer.ingredients.malt[0, 1] }}</p> -->
    </div>

</template>

<script>
// import BeerIngredients from './BeerIngredients.vue'
export default {
    name: 'movie-detail',
    props: ['movie'],
    components: { 
    } 
    // BeerIngredients 
    


}
</script>

<style>
.movie-detail {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
    width:50%;

}


</style>