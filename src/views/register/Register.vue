<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'LoginView' }">Login</router-link>
      </p>

      <h2>Create Your VueJS Blogs Account</h2>

      <div class="inputs">
        <div class="input">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            v-model="firstName"
          />
          <img :src="userIcon" alt="user-icon" class="icon" />
        </div>

        <div class="input">
          <input type="text" name="lastName" placeholder="Last Name" v-model="lastName" />
          <img :src="userIcon" alt="user-icon" class="icon" />
        </div>

        <div class="input">
          <input type="text" name="username" placeholder="Username" v-model="username" />
          <img :src="userIcon" alt="user-icon" class="icon" />
        </div>

        <div class="input">
          <input type="text" name="email" placeholder="Email" v-model="email" />
          <img :src="emailIcon" alt="email-icon" class="icon" />
        </div>

        <div class="input">
          <input type="text" name="password" placeholder="Password" v-model="password" />
          <img :src="passwordIcon" alt="password-icon" class="icon" />
        </div>
      </div>

      <button>Register</button>

      <div class="angle"></div>
    </form>

    <div class="background"></div>
  </div>
</template>

<style lang="scss" src="./register.style.scss" />

<script src="./register.view.js" />
