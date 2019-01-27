<template>
  <div class="comment">
    <a href="/" class="avatar">
      <img :src="avatar" alt="avatar" />
    </a>
    <div class="contents">
      <a href="/" class="author">{{author}}</a>
      <div class="metadata">
        <span class="date">{{timeAgo || "n/a"}}</span>
      </div>
      <div class="text">{{content || "no content"}}</div>
    </div>
  </div>
</template>

<script>
import faker from 'faker'
export default {
  name: "CommentDetail",
  data() {
    return {
      avatar:faker.image.avatar()
    }
  },
  props: ['author','timeAgo','content']
};
</script>
