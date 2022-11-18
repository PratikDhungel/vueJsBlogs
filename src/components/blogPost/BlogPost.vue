<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div>
        <h2>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p v-else class="content-preview">{{ post.blogHTML }}</p>
        <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
          Login/Register <img :src="arrow" alt="arrow-icon" class="arrow arrow-light" />
        </router-link>
        <router-link class="link" v-else to="#">
          View The Post <img :src="arrow" alt="arrow-icon" class="arrow" />
        </router-link>
      </div>
    </div>

    <div class="blog-photo">
      <img
        v-if="post.welcomeScreen"
        :src="require(`../../assets/blogPhotos/${post.photo}.jpg`)"
        alt=""
      />
      <img
        v-else
        :src="require(`../../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped src="./blogPost.style.scss" />

<script src="./blogPost.comp.js"></script>
