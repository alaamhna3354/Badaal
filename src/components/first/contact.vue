<template>
  <!-- Start Contact -->
    <div class="contact">
     <div class="image"></div> 
        <div class="container">
            <div class="main-heading">
                <h2 style="color:#fff">{{$t('Contact')}}</h2>
            </div>
            <div class="conten">
                <form action="">
                    <input class="main-input" type="text" name="name" placeholder="Your Name" >
                    <input class="main-input" type="email" name="mail" placeholder="Your Email" >
                    <textarea class="main-input" name="message" placeholder="Your Message"></textarea>
                       <button class="submit">{{$t('Send')}}</button>
                     
                </form>
                <div class="info">
                    <h4>{{$t('Get_In_Touch')}}</h4>
                   <a :href="`https://wa.me/${general.phone}`" target="_blank" class="phone">{{general.phone}}</a>
                    <h4>{{$t('where_we_are')}}</h4>
                    <address>{{general.address1}}<br />{{general.address2}}</address>
                </div>
            </div>
        </div>
    </div>
    <!-- End Contact -->
</template>
<style lang="scss" scoped>
 @import "../../assets/scss/_variables.scss";
 @import "../../assets/scss/firstcomponents/contact.scss";
</style>
<script>
import { mapState } from 'vuex';
export default {
  name: "contact",
  data() {
    return {
    
    };
  },
  props: [],
  components: {},
  computed: {
  ...mapState([
        'general',
    ]),
  },
  methods: {},
  mounted() {
     this.$store.dispatch('loadHome');
  },
};
</script>
