<template>
    <div>
        <div class="pL-pagination">
            <p style="font-size: 16px;color: #9F9F9F;"><span>Home</span><span style="padding:0px 16px"><img style="margin-bottom: -2px;" src="/static/Images/descending.svg"/></span> Shop <span style="padding:0px 16px"><img style="margin-bottom: -2px;" src="/static/Images/descending.svg"/></span><span style="padding:0px 16px"><img style="margin-bottom: -14px;" src="/static/Images/pass_through.svg"/></span><span style="color: #000000;">Asgaard sofa</span></p>
        </div>
        <div class="product-description">
            <div>
                <img class="product-descri-images" src="/static/Images/product_image1.svg">
                <img class="product-descri-images" src="/static/Images/product_image2.svg">
                <img class="product-descri-images" src="/static/Images/product_image3.svg">
                <img class="product-descri-images" src="/static/Images/product_image4.svg">
            </div>
            <div>
                <img class="product-main_image" src="/static/Images/product_main.svg">
            </div>
            <div style="padding-left: 16px;">
                <p style="line-height: 36px;">
                    <span style="font-size: 36px;color: #000000;"> Asgaard sofa</span><br/>
                    <span style="color:#9F9F9F;font-size: 16px;">Rs. 250,000.00</span>
                </p>
                <p style="margin-top: -8px;">
                    <img src="/static/Images/dashicons_star-filled.svg"/><img src="/static/Images/dashicons_star-filled.svg"/><img src="/static/Images/dashicons_star-filled.svg"/><img src="/static/Images/dashicons_star-filled.svg"/><img src="/static/Images/carbon_star-half.svg"/>
                    <span style="padding:0px 16px;"><img style="margin-bottom: -14px;" src="/static/Images/pass_through.svg"/></span><span style="color: #9F9F9F;">5 Customer Review</span>
                </p>
                <p style="line-height: 24px;">
                    <span style="color:#000000;">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                    </span>
                </p>
                <p style="line-height: 30px;">
                    <span style="color:#9F9F9F;font-size: 12px;">Size</span><br/>
                    <span>
                        <button class="pl-bg-btn">L</button>
                        <button class="pl-pagination-number-btn">XL</button>
                        <button class="pl-pagination-number-btn">XS</button>
                    </span><br/>
                    <span style="color:#9F9F9F;font-size: 12px;">Color</span><br/>
                    <span>
                        <span class="circle_styles" style="background-color: #816DFA;"></span>
                        <span class="circle_styles" style="background-color: #000000;"></span>
                        <span class="circle_styles" style="background-color: #B88E2F;"></span>
                    </span>
                </p>
                <p>
                    <button class="product-des-btn" style="margin-right: 12px;border: 0.2px solid #9F9F9F">-&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;+</button>
                    <button class="product-des-btn" style="margin-right: 12px;">Add To Cart</button>
                    <button class="product-des-btn">+ &nbsp; Compare</button>
                </p>
                <div>
                    <p style="border-top: 1px solid #D9D9D9;padding-bottom: 24px;margin-top: 56px"></p>
                    <p style="line-height: 32px;color: #9F9F9F;">
                        <span>
                            <span>SKU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>:&nbsp; SS001</span>
                        </span><br/>
                        <span>
                            <span>Category&nbsp;</span>
                            <span>:&nbsp; Sofas</span>
                        </span><br/>
                        <span>
                            <span>Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>:&nbsp; Sofa, Chair, Home, Shop</span>
                        </span><br/>
                        <span>
                            <span>Share&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>:&nbsp;
                                <img class="social-icons" src="/static/Images/fb_icon.svg">
                                <img class="social-icons-linkedIn" src="/static/Images/linkedin_icon.svg">
                                <img class="social-icons" src="/static/Images/twitter_icon.svg">
                            </span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div style="border-bottom: 1px solid #D9D9D9;padding: 32px 56px;color: #9F9F9F;">
            <p style="font-size: 20px;">
                <span style="color: #333333;font-weight: 600;">Description</span>
                <span style="padding: 0px 32px;">Additional Information</span>
                <span>Reviews [5]</span>
            </p>
            <p style="padding: 0px 108px;text-align: left;">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p style="padding: 0px 108px;text-align: left;">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            <p>
                <img style="width: 49%;" src="/static/Images/sofa.svg">
                <img style="width: 49%;margin-left: 16px;" class="product-main_image" src="/static/Images/sofa.svg">
            </p>
        </div>
        <div style="padding: 32px 56px;">
            <h1 style="color: #333333;">Related Products</h1>
            <div class="home-related-products">
                <div class="home-product-card" v-for="product in productDetails" :key="product.id">
                    <img :src='product.image' width="100%">
                    <div class="card-details">
                        <h3>{{ product.name }}</h3>
                        <p style="color: #898989;font-size: 14px;margin: 0px;">{{ product.description }}</p>
                        <p><span style="color: #3A3A3A;font-size: 14px;font-weight: 600;">{{ product.currentRate }}</span> <span v-if="product.strikedRate" style="color: #898989;font-size: 14px;"><s>{{ product.strikedRate }}</s></span></p>
                    </div>
                </div>
            </div>
        </div>
        <div style="padding-bottom: 64px;border-bottom: 1px solid #D9D9D9">
            <button class="show-more-btn">Show More</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'product-details-design',
  data () {
    return {
      productDetails: [
        {
          id: 1,
          name: 'Syltherine',
          description: 'Stylish cafe chair',
          image: '/static/Images/featured_1.svg',
          currentRate: 'Rp 2.500.000',
          strikedRate: 'Rp 3.500.000'
        },
        {
          id: 2,
          name: 'Leviosa',
          description: 'Stylish cafe chair',
          image: '/static/Images/image2.svg',
          currentRate: 'Rp 2.500.000'
        },
        {
          id: 3,
          name: 'Lolito',
          description: 'Luxury big sofa',
          image: '/static/Images/lolito.svg',
          currentRate: 'Rp 7.000.000',
          strikedRate: 'Rp 14.000.000'
        },
        {
          id: 4,
          name: 'Respira',
          description: 'Outdoor bar table and stool',
          image: '/static/Images/respira.svg',
          currentRate: 'Rp 500.000'
        }
      ]
    }
  }
}
</script>
<style scoped>
.social-icons{
    margin-bottom: -6px;
}
.social-icons-linkedIn{
    margin-bottom: -8px;
    padding: 0px 16px;
}
.pL-pagination{
    background-color: rgb(249, 241, 231);
    padding: 16px 56px;
    text-align: left;
}
.product-description{
    padding: 32px 56px;
    text-align: left;
    display: flex;
    border-bottom: 1px solid #D9D9D9
}
.product-descri-images{
    width: 86px;
    border-radius: 24px;
    display: block;
    margin-bottom: 32px;
}
.product-main_image{
    border-radius: 24px;
}
.pl-bg-btn{
    background-color: #B88E2F;
    border: 0.2px solid #B88E2F;
    border-radius: 8px;
    padding: 12px 14px;
    color: #FFFFFF;
    font-size: 12px;
}
.pl-pagination-number-btn{
    background-color: #F9F1E7;
    border: 0.2px solid #F9F1E7;
    border-radius: 8px;
    padding: 12px 14px;
    color: #000000;
    font-size: 12px;
    margin-left: 12px;
}
.circle_styles{
    height: 36px;
    width: 36px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 20px;
}
.product-des-btn{
    background-color: #FFFFFF;
    border: 0.2px solid #000000;
    border-radius: 12px;
    padding: 16px 42px;
    color: #000000;
    font-size: 16px;
}
.home-related-products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
.home-product-card{
    background-color: #F4F5F7;
}
.card-details{
    padding:0px 10px;text-align: left;
}
.show-more-btn{
  background-color: #FFFFFF;
    border: 0.2px solid #B88E2F;
    border-radius: 2px;
    padding: 16px 48px;
    color: #B88E2F;
    font-weight: bold;
    font-size: 12px;
}

</style>
