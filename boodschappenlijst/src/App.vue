<script>
import Heading from "@/components/Heading.vue";
export default {
  components: {
    Heading,
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/pxl-logo.png"  />

    <div class="wrapper">
      <Heading msg="Advanced Vue oefeningen" />
      <nav>
        <RouterLink to="/">Studentlist</RouterLink>
        <RouterLink to="/shoppinglist">Boodschappen lijst</RouterLink>
      </nav>
    </div>
  </header>
  <hr>
  <RouterView />
</template>

<style scoped>
header {
  /*line-height: 1.5;*/
  /*max-height: 100vh;*/
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  height: 125px;
}

nav {
  width: 100%;
  font-size: 22px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: red;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1286px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
