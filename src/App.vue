<template>
  <div id="app">
    <header>
      <h1>Vue GitHub Pages SPA</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
header {
  padding: 1rem;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
}
nav a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: #42b983;
}
main {
  padding: 1rem;
}
</style>
