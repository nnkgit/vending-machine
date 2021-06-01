<template>
  <div>
    <!-- <meta http-equiv="refresh" content="5; URL=http://localhost:8080" /> -->
    <h1>Machine</h1>
    <p>
      <strong>Location :</strong>
      {{ postion.location ? postion.location.name : "" }}
    </p>
    <p><strong>Position :</strong> {{ postion ? postion.name : "" }}</p>
    <table class="table table-success table-striped">
      <thead>
        <tr class="text-center">
          <th scope="col">#</th>
          <th scope="col">Product</th>
          <th scope="col">balance</th>
          <th scope="col">restock status</th>
          <th scope="col">Add Stock</th>
          <th scope="col">Buy</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(stock, index) in machine.machineStockProducts" :key="index">
          <th class="text-center" scope="row">{{ index + 1 }}</th>
          <td class="text-center">{{ stock.product.name }}</td>
          <td class="text-center">{{ stock.stocks }}</td>
          <td class="text-center">
            <span v-if="stock.stocks < machine.min" class="badge bg-danger"
              >-</span
            ><span v-else class="badge bg-success">-</span>
          </td>
          <td class="text-center">
            <button
              type="button"
              class="btn btn-success"
              @click="add(stock, index)"
              :disabled="disiabled || stock.stocks >= machine.max"
            >
              Add
            </button>
          </td>
          <td class="text-center">
            <button
              type="button"
              class="btn btn-primary"
              @click="buy(stock, index)"
              :disabled="disiabled || stock.stocks <= 0"
            >
              Buy
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";

export default {
  name: "Machine",
  components: {},
  data() {
    return {
      message: "Hello world",
      machine: {},
      disiabled: false,
      postion: {}
    };
  },
  mounted() {
    this.getMachine();
  },
  methods: {
    async buy(stock, index) {
      this.disiabled = true;
      let data = {
        machine_id: this.machine.id,
        product_id: stock.product.id,
        amount: 1
      };

      let res = await axios.post(`http://localhost:4000/buy`, data);
      let datatemp = Object.assign({}, stock);
      datatemp.stocks = res.data.stocks;
      Vue.set(this.machine.machineStockProducts, index, datatemp);
      this.disiabled = false;
    },
    async add(stock, index) {
      this.disiabled = true;
      let data = {
        machine_id: this.machine.id,
        product_id: stock.product.id,
        amount: 1
      };

      let res = await axios.post(`http://localhost:4000/addstocks`, data);
      let datatemp = Object.assign({}, stock);
      datatemp.stocks = res.data.stocks;
      Vue.set(this.machine.machineStockProducts, index, datatemp);
      this.disiabled = false;
    },
    getMachine() {
      axios
        .get(`http://localhost:4000/machine/${this.$route.params.id}`)
        .then(res => {
          this.machine = res.data;
          this.postion = res.data.position;
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
