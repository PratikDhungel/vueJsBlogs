<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>

      <BlogCard v-for="post in sampleBlogCards" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<style lang="scss" scoped src="./blogs.style.scss"></style>

<script src="./blogs.view.js"></script>
