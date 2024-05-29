import { createStore } from "vuex/types/index.js";

export default createStore({
    state:{ searchTerm: "",}
,
mutations: {
    setSearchTerm(state, term) {
        state.searchTerm= term;
    },
},
actions: {
    updateSearchTerm({commit}, term) {
        commit("setSearchTerm", term);
    },
},
getters: { getSearchTerm: state=> state.searchTerm,}
})
