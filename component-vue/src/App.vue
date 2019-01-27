<template>
  <div id="app">
    <div class="ui container comments">
      <ApprovalCard>

        <div>
          <h4>Are you sure you want to do this?</h4>
        </div>
        <div>This cannot be undone</div>

      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Yesterday" content="Great to meet you" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Kim" timeAgo="Yesterday" content="Great to meet you" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Rob" timeAgo="Yesterday" content="Great to meet you" />
      </ApprovalCard>
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

