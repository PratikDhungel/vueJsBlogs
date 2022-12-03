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
          <router-link v-if="!user" class="link" :to="{ name: 'LoginView' }"
            >Login/Register</router-link
          >
        </ul>

        <div v-if="user" @click="toggleProfileMenu" class="profile" ref="profile">
          <span>{{ profileInitials }}</span>

          <div v-show="isMenuOpen" class="profile-menu">
            <div class="info">
              <p class="initials">{{ profileInitials }}</p>
              <div class="right">
                <p>{{ profileFullName }}</p>
                <p>{{ this.$store.state.profileUsername }}</p>
                <p>{{ this.$store.state.profileEmail }}</p>
              </div>
            </div>

            <div class="options">
              <div class="option">
                <router-link :to="{ name: 'ProfileView' }" class="option">
                  <img :src="userIcon" alt="user-icon" class="icon" />
                  <p>Profile</p>
                </router-link>
              </div>

              <div class="option">
                <router-link :to="{ name: 'AdminView' }" class="option">
                  <img :src="adminIcon" alt="admin-icon" class="icon" />
                  <p>Admin</p>
                </router-link>
              </div>

              <div @click="signOutUser" class="option">
                <img :src="signOutIcon" alt="sign-out-icon" class="icon" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </div>
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
        <router-link v-if="!user" class="link" :to="{ name: 'LoginView' }"
          >Login/Register</router-link
        >
      </ul>
    </Transition>
  </header>
</template>

<style lang="scss" scoped src="./navigation.style.scss"></style>

<script src="./navigation.comp.js"></script>
