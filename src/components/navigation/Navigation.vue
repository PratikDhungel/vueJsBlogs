<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'HomeView' }">VueJS Blogs</router-link>
      </div>

      <div class="nav-links">
        <ul v-show="!isMobile">
          <router-link class="link" :to="{ name: 'HomeView' }">Home</router-link>
          <router-link class="link" :to="{ name: 'BlogsView' }">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" to="#">Login/Register</router-link>
        </ul>
      </div>
    </nav>

    <img
      :src="menuIcon"
      alt="my-logo"
      class="menu-icon"
      @click="toggleMobileNav"
      v-show="isMobile"
    />

    <Transition>
      <ul class="mobile-nav" v-show="showMobileNav">
        <router-link class="link" :to="{ name: 'HomeView' }">Home</router-link>
        <router-link class="link" :to="{ name: 'BlogsView' }">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" to="#">Login/Register</router-link>
      </ul>
    </Transition>
  </header>
</template>

<style lang="scss" scoped src="./navigation.style.scss"></style>

<script src="./navigation.comp.js"></script>
