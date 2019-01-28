 <template>
  <section>
    <div>
      <router-link to="/"><i class="home icon"></i>Home</router-link>
      <router-link to="/about"><i class="info icon"></i>About</router-link>
      <router-link to="/blog"><i class="rss icon"></i>Blog</router-link>
    </div>
    <div class="ui divider"></div>

    <router-view></router-view>
    <button @click="goback">Go back</button>
    
    <HistoryCardList class="ui container"/>
  </section>
</template>


<script>

import HistoryCardList from './HistoryCardList'

export default {
  name:'Nav',
  components:{
    HistoryCardList
  },
  data(){
    return {
      privateState:{
        to:'',
        from:'',
      },
    }
  },
  computed: {

  },
  watch:{
     $route(to,from){ 
      this.privateState.to = to.path
      this.privateState.from = from.path
      this.$store.commit({
        type:'setHistory',
        from:from.path,
        to:to.path,
        at: (new Date())
      })
    }
  },
  methods:{
    goback(){
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>