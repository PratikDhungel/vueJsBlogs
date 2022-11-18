<template>
  <BlogPost :post="welcomeScreen" />
  <BlogPost :post="post" v-for="post in sampleBlogPosts" :key="post.id" />
</template>

<script src="./home.view.js"></script>
