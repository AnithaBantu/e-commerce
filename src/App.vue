<template>
  <div id="app">
    <!-- <header>
        <h2>Quallects Shopping</h2>
    </header> -->
    <section>
        <nav>
            <menu>
              <div class="menu">
                <div>
                  <img width="28" src="./content/Images/HomePage_icon.svg"/>
                  <span style="font-weight: 600;font-size: 24px;">
                    Furniro
                  </span>
                </div>
                <div class="innermenu" >
                  <div @click="onHomepageClick" style="cursor: pointer;">Home</div>
                  <div>Shop</div>
                  <div>About</div>
                  <div>Contact</div>
                </div>
                <div class="innermenu" style="margin-right: 0px;">
                  <div> <img width="24" src="./content/Images/contact.svg"/></div>
                  <div> <img width="24" src="./content/Images/akar-icons_search.svg"/></div>
                  <div> <img width="24" src="./content/Images/akar-icons_heart.svg"/></div>
                  <div> <img width="24" src="./content/Images/ant-design_shopping-cart-outlined.svg"/></div>
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
    <footer style="padding:48px 48px 8px 48px;">
      <div class="footer-container">
        <div style="width:35%">
         <p style="color: #000000;font-size: 24px;font-weight: 600;"> Funiro.</p>
         <p style="color: #9F9F9F;font-size: 16px;width: 60%;line-height: 24px;">400 University Drive Suite 200 Coral Gables,<br/>FL 33134 USA</p>
        </div>
          <div style="width: 15%;">
            <p style="color: #9F9F9F;font-size: 16px;padding-top: 16px;">Links</p>
            <p class="normal-text-styles" style="padding-top: 24px;cursor: pointer;" @click="onHomepageClick">Home</p>
            <p class="normal-text-styles">Shop</p>
            <p class="normal-text-styles">About</p>
            <p class="normal-text-styles">Contact</p>
          </div>
          <div style="width: 20%;">
            <p style="color: #9F9F9F;font-size: 16px;padding-top: 16px;">Help</p>
            <p class="normal-text-styles" style="padding-top: 24px;">Payment Options</p>
            <p class="normal-text-styles">Returns</p>
            <p class="normal-text-styles">Privacy Policies</p>
          </div>
          <div style="width: 30%;">
            <p style="color: #9F9F9F;font-size: 16px;padding-top: 16px;">Newsletter</p>
            <p class="normal-text-styles">
              <span><input style="border-top: none;
    border-left: none;
    border-right: none;" placeholder="Enter Your Email Address"/></span>
              <span>
                <button style="height: 28px;border-top: none;border-left: none;border-right: none;background-color: #FFFFFF;border-radius: 0px;">SUBSCRIBE</button>
              </span>
            </p>
          </div>
      </div>
      <div style="border-top: 1px solid #D9D9D9;text-align: left">
        <p style="color: #000000;font-size: 16px;">2023 furino. All rights reverved</p>
      </div>
</footer>
  </div>
  <!-- <div id="app">
    <header>
        <h2>Quallects Shopping</h2>
    </header>
    <section>
        <nav>
            <menu>
              <div class="menu">
                <div>
                  <img width="28" src="./content/Images/HomePage_icon.svg"/>
                  <span style="font-weight: 600;font-size: 24px;">
                    Furniro
                  </span>
                </div>
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
  </div> -->
</template>

<script>
export default {
  name: 'App',
  methods: {
    onHomepageClick () {
      this.$router.push('/')
    }
  }
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
.normal-text-styles{
  color: #000000;font-size: 16px;
  padding-top: 8px;
}
</style>
