<template>
  <div id="app">
    <div class="ui container comments">
      <CommentDetail author="Jane" timeAgo="Yesterday" content="Great to meet you" :avatar="faker.image.avatar()"/>
      <CommentDetail author="Kim" timeAgo="Some day" content="Fly to the moon" />
      <CommentDetail author="Kazu" timeAgo="Dragon" />
    </div>
  </div>
</template>

<script>
import CommentDetail from './components/CommentDetail'
import faker from 'faker'

export default {
  name: 'app',
  components: {
    CommentDetail,
  },
  data(){
    return {
      avatar:faker.image.avatar()
    }
  }
}
</script>

