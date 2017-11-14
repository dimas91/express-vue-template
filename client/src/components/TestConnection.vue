<template>
  <div>
    <h1>Test Connection</h1>
    <button
      @click="test">
      Test your connection!
    </button>
    <div>
    </div>
    <div
      class="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
import TestConnectionService from '@/services/TestConnectionService';

export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    async test() {
      try {
        const response = await TestConnectionService.test();
        this.message = response.data.message;
      } catch (error) {
        this.message = 'No connection could be made to the server.';
      }
    },
  },
};
</script>

<style scoped>
</style>