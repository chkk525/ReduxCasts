import Vue from 'vue'
import Vuex from 'vuex'
import faker from 'faker'

Vue.use(Vuex)


const state = {
  blogs: [],
  histories:[],
  isGoingBack: false,
}

const getters = {
}

const mutations = {
  setHistory(state,payload){
    const newHistory = {from:payload.from, to:payload.to,at:payload.at}
    state.histories.push(newHistory)
  }
}

const actions = {
  getBlogs(ctx){
    const blogs = []
    for (let i = 0;i<1000;i++){
      const title = faker.text.lorem.sentence()
      const body = faker.text.lorem.text()
      blogs.push({title:title, body: body})
    }
    ctx.commit('setBlogs',{blogs});
  }
}

const store = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
}

export default store