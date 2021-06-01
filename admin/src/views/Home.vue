<template>
  <div>
    <!-- <meta http-equiv="refresh" content="5; URL=http://localhost:8080" /> -->
    <h1>Home</h1>
    <table class="table table-success table-striped">
      <thead>
        <tr class="text-center">
          <th scope="col">#</th>
          <th scope="col">Machine Code</th>
          <th scope="col">Location</th>
          <th scope="col">Positon</th>
          <th scope="col">Min/Max</th>
          <th scope="col">Restock</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(machine, index) in machines" :key="index">
          <th class="text-center" scope="row">{{ index + 1 }}</th>
          <td class="text-center">{{ machine.code }}</td>
          <td>{{ machine.position.location.name }}</td>
          <td>{{ machine.position.name }}</td>
          <td class="text-center">{{ machine.min }}/{{ machine.max }}</td>
          <td class="text-center">
            <span v-if="machine.restock > 0" class="badge bg-danger"
              >{{ machine.restock }} product</span
            ><span v-else class="badge bg-success">none</span>
          </td>
          <td class="text-center">
            <a
              class="nav-link active"
              aria-current="page"
              :href="'/machine/' + machine.id"
              ><img
                alt="Vue logo"
                src="../assets/eye-regular.svg"
                class="action-eye"
            /></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      machines: []
    };
  },
  mounted() {
    this.getMachines();
    this.timer = setInterval(this.getMachines, 5000);
  },
  methods: {
    getMachines() {
      axios.get("http://localhost:4000/machines").then(res => {
        this.machines = res.data;
      });
    }
  }
};
</script>

<style>
.action-eye {
  width: 15px;
  height: 15px;
}
</style>
