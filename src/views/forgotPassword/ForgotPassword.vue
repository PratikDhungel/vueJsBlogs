<template>
  <div class="reset-password">
    <Modal
      v-if="isModalOpen"
      :modalMessage="modalMessage"
      @close-modal="handleCloseModal"
    />
    <Loading v-if="isLoading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'LoginView' }">Login</router-link>
        </p>

        <h2>Reset Password</h2>

        <p>Forgot your password? Enter your email to reset it</p>

        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <img :src="emailIcon" alt="email-icon" class="icon" />
          </div>
        </div>

        <button @click.prevent="handleResetPassword">Reset</button>

        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<style lang="scss" src="./forgotPassword.style.scss" />

<script src="./forgotPassword.view.js" />
