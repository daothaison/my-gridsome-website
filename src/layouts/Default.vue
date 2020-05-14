<template>
    <div>
      <div class="flex-fill">
        <div class="header py-4">
          <div class="container">
            <div class="d-flex">
              <g-link class="header-brand" to="/">
                <img src="https://gridsome.org/logos/logo-normal.svg" class="header-brand-img mr-0 w-25" alt="logo"/>
                My Gridsome Website
              </g-link>
              <div class="d-flex order-lg-2 ml-auto">
                <div class="nav-item d-none d-md-flex">
                  <a
                          href="https://github.com/daothaison"
                          class="btn btn-sm btn-outline-primary"
                          target="_blank"
                  >Github Profile</a>
                </div>
              </div>
              <a
                      href="#"
                      class="header-toggler d-lg-none ml-3 ml-lg-0"
                      data-toggle="collapse"
                      data-target="#headerMenuCollapse"
              >
                <span class="header-toggler-icon"></span>
              </a>
            </div>
          </div>
        </div>
        <div v-if="title" class="my-3 my-md-5">
          <div class="container">
            <div class="page-header">
              <h1 class="page-title">{{ title }}</h1>
            </div>
          </div>
        </div>

        <!-- content -->
        <div class="container">
          <slot/>
        </div>
        <!-- end content -->
      </div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-auto mt-3 mt-lg-0 text-center m-auto">
              Copyright © 2020
            </div>
          </div>
        </div>
      </footer>
    </div>
</template>

<script>
  export default {
    props: {
      title: String
    },
    components: {
    }
  };
</script>
