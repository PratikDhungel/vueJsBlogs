<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{ name: 'RegisterView' }"
          >Register</router-link
        >
      </p>

      <h2>Login to VueJS Blogs</h2>

      <div class="inputs">
        <div class="input">
          <input type="text" name="email" v-model="email" />
          <img :src="emailIcon" alt="email-icon" class="icon" />
        </div>

        <div class="input">
          <input type="text" name="password" v-model="password" />
          <img :src="passwordIcon" alt="password-icon" class="icon" />
        </div>
      </div>

      <router-link class="router-link" :to="{ name: 'ForgotPasswordView' }">
        Forgot your password?</router-link
      >

      <button>Sign In</button>

      <div class="angle"></div>
    </form>

    <div class="background"></div>
  </div>
</template>

<style lang="scss" src="./login.style.scss" />

<script src="./login.view.js" />
