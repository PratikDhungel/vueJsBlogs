<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="post in sampleBlogPosts" :key="post.id" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard v-for="post in sampleBlogCards" :key="post.id" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./homeView.style.scss"></style>

<script src="./home.view.js"></script>
