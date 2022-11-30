<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'HomeView' }">FireBlogs</router-link>
          <ul>
            <li>
              <a href="#"><img :src="youTube" alt="you-tube-icon" class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><img :src="twitter" alt="twitter-icon" class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"
                ><img :src="instagram" alt="instagram-icon" class="svg-icon"
              /></a>
            </li>
            <li>
              <a href="#"><img :src="linkedin" alt="linkedin-icon" class="svg-icon" /></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'HomeView' }">Home</router-link>
            <router-link class="link" :to="{ name: 'BlogsView' }">Blogs</router-link>
            <router-link class="link" to="#">Create Post</router-link>
            <router-link v-if="!user" class="link" :to="{ name: 'LoginView' }"
              >Login In/Register</router-link
            >
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2021 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped src="./footer.style.scss"></style>

<script src="./footer.comp.js" />
