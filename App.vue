<template>
  <main class="container">
    <h1>Parking Reminder</h1>
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 80vh;">
      <label for="floors">Select Floor:</label>
      <select v-model="selectedFloor" id="floors">
        <option v-for="floor in floors" :key="floor" :value="floor">
          Floor {{ floor }}
        </option>
      </select>
      <button @click="saveFloor">Save</button>
      <p v-if="savedFloor">You parked on: Floor {{ savedFloor }}</p>
      <button class="secondary" @click="reset" style="position: absolute; bottom: 20px; right: 20px;">Reset</button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      floors: Array.from({ length: 10 }, (_, i) => i + 1),
      selectedFloor: null,
      savedFloor: localStorage.getItem('savedFloor') || null,
    };
  },
  methods: {
    saveFloor() {
      this.savedFloor = this.selectedFloor;
      localStorage.setItem('savedFloor', this.selectedFloor);
    },
    reset() {
      this.savedFloor = null;
      localStorage.removeItem('savedFloor');
    },
  },
};
</script>
