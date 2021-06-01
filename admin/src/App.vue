<template>
  <div>
    <!-- <meta http-equiv="refresh" content="5; URL=http://localhost:8080" /> -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Vending Machine</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" tag="a" to="/"
                >Monitor</router-link
              >
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link active" aria-current="page" href="/machine"
                >Machine</a
              > -->
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">Report</a>
            </li> -->
          </ul>
          <!-- <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> -->
        </div>
      </div>
    </nav>
    <div class="container content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  padding: 0;
  margin: 0;
}
.content {
  padding-top: 30px;
}
</style>
