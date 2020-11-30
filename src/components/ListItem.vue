<template>
    
    <div>
  <li v-on:click="handleClick">{{ movie.title }}</li>
  </div>
</template>
<script>
import {eventBus} from '../main.js';



export default {
    name: 'movie-item',
    props: ['movie'],
    methods: {
      handleClick() {
        eventBus.$emit('movie-selected', this.movie)
        console.log('movie', this.movie);
      }
    }
}

</script>

<style lang="css" scoped>
#list {
    display:flex;
    flex-direction: row;
    font-family: monospace;
    font-size: 20px;
    list-style-type : none;
    background-color: chartreuse;

}

</style>