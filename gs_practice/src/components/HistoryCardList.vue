<template>
  <div class="ui stackable grid segment centered three column grid cards">
    <div 
      class="column card"
      v-for="(history,index) in sharedState.histories" 
      :history="history" 
      :key="index"
      >
      <div class="content">
        <div class="header">
          {{moment(history.at).fromNow()}}
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">{{history.from}}</div>
          <div class="ui basic red button">{{history.to}}</div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
// Moment.js
import moment from 'moment'

export default {
  name:'HistoryCard',
  props:['history'],
  computed: {
    sharedState(){
      return this.$store.state
    },
    moment(){
      return moment
    }
  },
}
</script>