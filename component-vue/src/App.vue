<template>
  <div id="app">
    <div class="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Yesterday" content="Great to meet you" />
      </ApprovalCard>
      <CommentDetail author="Kim" timeAgo="Some day" content="Fly to the moon" />
      <CommentDetail author="Kazu" timeAgo="Dragon" />
    </div>
  </div>
</template>

<script>
import CommentDetail from './components/CommentDetail'
import ApprovalCard from './components/ApprovalCard'

export default {
  name: 'app',
  components: {
    CommentDetail,ApprovalCard
  },
  data(){
    return {}
  },
}
</script>

