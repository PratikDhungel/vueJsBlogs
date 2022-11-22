<template>
  <div class="blog-card">
    <div class="icons">
      <div class="icon">
        <img :src="edit" alt="edit-icon" class="edit" />
      </div>
      <div class="icon">
        <img :src="trash" alt="trash-icon" class="delete" />
      </div>
    </div>

    <img
      :src="require(`../../assets/blogCards/${post.blogCoverPhoto}.jpg`)"
      class="blog-photo"
      alt=""
    />

    <div class="info">
      <h4>{{ post.title }}</h4>
      <h6>Posted On: {{ post.blogDate }}</h6>
      <router-link to="#" class="link"
        >View The Post <img :src="arrow" alt="arrow-icon" class="arrow"
      /></router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./blogCard.style.scss" />

<script src="./blogCard.comp.js"></script>
