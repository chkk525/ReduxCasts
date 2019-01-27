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

export default {
  name: "CommentDetail",
  data() {
    return {
    };
  },
  props: ['author','timeAgo','content','avatar']
};
</script>
