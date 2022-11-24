<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ modalMessage }}</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<style lang="scss" src="./modal.style.scss" />

<script src="./modal.comp.js" />
