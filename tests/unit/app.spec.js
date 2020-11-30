import App from '@/App.vue';
import {moviesData} from './movies.js';
import {shallowMount} from '@vue/test-utils'; 
import fetch from 'fetch-mock';        
describe('App', () => {

let wrapper;
beforeEach(async () => {
    fetch.once('https://ghibliapi.herokuapp.com/films', JSON.stringify(moviesData))
    wrapper = shallowMount(App);
    await wrapper.vm.$nextTick();
    fetch.reset();
});

it('should have 2 movies', () => {
    expect(wrapper.vm.movies).toHaveLength(2);
});

it('should be able to add a favourite movie', () => {
    wrapper.setData({selectedMovie: moviesData[0]}); 
    expect(wrapper.vm.selectedMovie.title).toMatch(moviesData[0].title);
    wrapper.vm.addToFavourites();
    expect(wrapper.vm.favouriteMovies).toHaveLength(1);
});
})
