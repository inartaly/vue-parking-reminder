<template>
  <main class="container" style="font-size: 1.5em;">
    <article>
      <h1>Parking Reminder</h1>
      <label for="floors">Select Floor:</label>
      <select v-model="selectedFloor" id="floors">
        <option v-for="floor in floors" :key="floor" :value="floor">Floor {{ floor }}</option>
      </select>
      <p v-if="selectedFloor" class="contrast">
        You parked on: Floor {{ selectedFloor }}
      </p>
      <button @click="reset" class="secondary">Reset</button>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      floors: Array.from({ length: 10 }, (_, i) => i + 1),
      selectedFloor: localStorage.getItem('savedFloor') || null,
    };
  },
  watch: {
    selectedFloor(newFloor) {
      localStorage.setItem('savedFloor', newFloor);
    },
  },
  methods: {
    reset() {
      this.selectedFloor = null;
      localStorage.removeItem('savedFloor');
    },
  },
};
</script>
