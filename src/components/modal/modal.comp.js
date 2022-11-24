export default {
  name: 'Modal',
  props: {
    modalMessage: 'String',
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
  },
};
