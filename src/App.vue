<template>
  <div id="app">
    <header>
        <h2>Quallects Shopping</h2>
    </header>
    <section>
        <nav>
            <menu>
              <div class="menu">
                <div class="innermenu" >
                    <div><router-link to="/">Home</router-link></div>
                    <div><router-link to="/products">All Products</router-link></div>
                    <div><router-link to="/forum">Join the Forum</router-link></div>
                </div>
                <div>
                  <input type="text" placeholder="search here" >
                </div>
              </div>
            </menu>
        </nav>
        <div class="container">
        <div style="width: 100%;">
          <router-view />
        </div>
      </div>
    </section>
    <footer>
      <h2>&copy; Copyright,Quallects 2024</h2>
      <div class="footer-container">
          <div>
              Get To Know Us<br>
              About Us<br>
              Careers
          </div>
          <div>
              Connect With Us<br>
              Facebook<br>
              Twitter
          </div>
          <div>
              Make Money With Us<br>
              Advertise
          </div>
      </div>
</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
