<template>
  <div class="profile">
    <Modal
      v-if="isModalOpen"
      :modalMessage="modalMessage"
      @close-modal="handleCloseModal"
    />
    <div class="container">
      <h2>Account Settings</h2>
      <div class="profile-info">
        <div class="initials">{{ profileInitials }}</div>
        <div class="admin-badge">
          <img :src="adminIcon" alt="admin-icon" class="icon" />
          <span>admin</span>
        </div>
        <div class="input">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div class="input">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
        <div class="input">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="input">
          <label for="email">Email:</label>
          <input disabled type="text" id="email" v-model="email" />
        </div>
        <button @click="updateProfile">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./profile.style.scss"></style>

<script src="./profile.view.js"></script>
