<template>
  <modal @before-open="setDeliveryHours" @closed="deliveryHours=[]" :height="auto" :scrollable="true" :adaptive="true" name="order-checkout">
    <div class="checkout">
      <div class="section group">
	      <div class="col span_1_of_2">
	        <div class="form">
            <label class="form__label">il tuo numero di telefono</label>
            <input class="form__input" v-model="customerInfo.tel" type="tel">
            <div class="form__icon">
              <span><svg class="form__icon--phone"><use xlink:href="#icon-phone"></use></svg></span>
              <symbol id="icon-phone" viewBox="0 0 22 28">
                <title>phone</title>
                <path d="M22 19.375c0 0.562-0.25 1.656-0.484 2.172-0.328 0.766-1.203 1.266-1.906 1.656-0.922 0.5-1.859 0.797-2.906 0.797-1.453 0-2.766-0.594-4.094-1.078-0.953-0.344-1.875-0.766-2.734-1.297-2.656-1.641-5.859-4.844-7.5-7.5-0.531-0.859-0.953-1.781-1.297-2.734-0.484-1.328-1.078-2.641-1.078-4.094 0-1.047 0.297-1.984 0.797-2.906 0.391-0.703 0.891-1.578 1.656-1.906 0.516-0.234 1.609-0.484 2.172-0.484 0.109 0 0.219 0 0.328 0.047 0.328 0.109 0.672 0.875 0.828 1.188 0.5 0.891 0.984 1.797 1.5 2.672 0.25 0.406 0.719 0.906 0.719 1.391 0 0.953-2.828 2.344-2.828 3.187 0 0.422 0.391 0.969 0.609 1.344 1.578 2.844 3.547 4.813 6.391 6.391 0.375 0.219 0.922 0.609 1.344 0.609 0.844 0 2.234-2.828 3.187-2.828 0.484 0 0.984 0.469 1.391 0.719 0.875 0.516 1.781 1 2.672 1.5 0.313 0.156 1.078 0.5 1.188 0.828 0.047 0.109 0.047 0.219 0.047 0.328z"></path>
                </symbol>   
            </div>
          </div>
	      </div>
	      <div class="col span_1_of_2">
	        <div class="form">
            <label class="form__label">indirizzo di consegna</label>
            <input class="form__input" v-model="customerInfo.address" type="text">
            <div class="form__icon">
              <span><svg class="icon icon-direction"><use xlink:href="#icon-direction"></use></svg></span>
              <symbol id="icon-direction" viewBox="0 0 32 32">
                <title>direction</title>
                  <path d="M17.987 3h-5v3h5v-3zM17.987 15v-2h-5v2h5zM12.987 30h5v-8h-5v8zM24.987 12l-2.187-2.5 2.187-2.5h-16l-2.6 2.5 2.6 2.5h16zM22.987 16h-16l2.188 2.5-2.188 2.5h16l2.625-2.5-2.625-2.5z"></path>
              </symbol>
            </div>
          </div>
	      </div>
      </div>
      <div class="section group">
        <div class="col span_1_of_2">
          <div class="form">
            <label class="form__label">la tua città</label>
            <input class="form__input" v-model="customerInfo.city" type="text">
            <div class="form__icon">
              <span><svg class="icon icon-location_city"><use xlink:href="#icon-location_city"></use></svg></span>
              <symbol id="icon-location_city" viewBox="0 0 24 24">
                  <title>location_city</title>
                  <path d="M18.984 15v-2.016h-1.969v2.016h1.969zM18.984 18.984v-1.969h-1.969v1.969h1.969zM12.984 6.984v-1.969h-1.969v1.969h1.969zM12.984 11.016v-2.016h-1.969v2.016h1.969zM12.984 15v-2.016h-1.969v2.016h1.969zM12.984 18.984v-1.969h-1.969v1.969h1.969zM6.984 11.016v-2.016h-1.969v2.016h1.969zM6.984 15v-2.016h-1.969v2.016h1.969zM6.984 18.984v-1.969h-1.969v1.969h1.969zM15 11.016h6v9.984h-18v-14.016h6v-1.969l3-3 3 3v6z"></path>
              </symbol>
            </div>
          </div>
        </div>
        <div class="col span_1_of_2">
          <div class="form">
            <label class="form__label">orario di consegna</label>
            <div class="form__select">
                <div class="form__icon">
                  <span><svg class="icon-arrow_drop_down"><use xlink:href="#icon-arrow_drop_down"></use></svg></span>
                  <symbol id="icon-arrow_drop_down" viewBox="0 0 24 24">
                    <title>arrow_drop_down</title>
                      <path d="M6.984 9.984h10.031l-5.016 5.016z"></path>
                   </symbol>
                </div>
            <select v-model="customerInfo.time">
              <option id="now">APPENA POSSIBILE</option>
              <option v-for="hour in deliveryHours" :key="hour" :value="hour">{{hour}}</option>
            </select>
            </div>
          </div>
        </div>
      </div>
      <div class="section_groups">
        <div class="col span_1_of_2">
          <div class="form">
            <label class="form__label">campanello</label>
            <input class="form__input" v-model="customerInfo.name" type="text">
            <div class="form__icon">
              <span><svg class="icon-user"><use xlink:href="#icon-user"></use></svg></span>
                <symbol id="icon-user" viewBox="0 0 32 32">
                    <title>user</title>
                    <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
                </symbol>
            </div>
          </div>
        </div>
        <div class="col span_1_of_2">
          <div class="buy__btn">
            <button>invia l'ordine</button>
          </div>
        </div>
      </div>

    </div>
      
  </modal>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data(){
    return{
      orderTime:null,
      deliveryHours:[],
      customerInfo:{
        address:"",
        tel:"",
        city:"",
        time:"",
        name:""
      },
    } 
  },
  validations:{
    customerInfo:{
      address:{
        required,
      },
      tel:{
        required
      },
      city:{
        required
      },
      time:{  
        required
      },
      name:{
        required
      }
    }
  },
  methods:{
    setDeliveryHours(){
      let date = new Date(Date.now())
        for(let i=1; i<5; i++){
          let incrementDate = new Date(0).setTime(date.getTime() + i*3600000)
          this.deliveryHours.push(`${new Date(incrementDate).getHours()}:
          ${ new Date(incrementDate).getMinutes().toString().length > 1 ? 
          new Date(incrementDate).getMinutes().toString() : '0'+new Date(incrementDate).getMinutes().toString()  }`)
        }
      
      
    }
  }
}
</script>

<style lang="scss">
.checkout{
  height:100%;
  width:100%;
  padding:1rem;
}
.section {
	clear: both;
	padding: 0px;
	margin: 0px;
}
/*  COLUMN SETUP  */
.col {
	display: block;
	float:left;
  margin: 1% 0 1% 1.6%;
  &:first-child{
    margin-left: 0;
  }
  @media only screen and (max-width: 480px) {
		margin: 1% 0 1% 0%;
	
  }
}

/*  GROUPING  */
.group:before,
.group:after { content:""; display:table; }
.group:after { clear:both;}
.group { zoom:1; /* For IE 6/7 */ }

/*  GRID OF TWO  */
.span_2_of_2 {
	width: 100%;
}
.span_1_of_2 {
	width: 49.2%;
}
@media only screen and (max-width: 480px) {
	.span_2_of_2, .span_1_of_2 { width: 100%; }
}


.form{
  margin:2rem;
  text-align: center;
  &:last-child{
    margin-bottom:1rem;
  }
  &__label{
    margin-bottom:.7rem;
    display: inline-block;
    text-transform: uppercase;
    color:$color-tertiary;
    font-weight: 700;
    font-size:1.3rem;
    letter-spacing: .1rem;
  }
  &__icon--select{
    top:-2rem;
    
  }
  &__select{
    border-bottom: 4px solid $color-tertiary;
    border-radius: $border-radius;
    width:100%;
    position: relative;
    height:3rem;
    overflow: hidden;
    z-index:1000;
    select{
      position: absolute;
      -webkit-appearance: none;
      -moz-appearance:none;
      appearance: none;
      top:0;
      border:none;
      background: transparent;
      left:0;
      width:100%;
      height:100%;
      display: block;
      & option{
        background: $color-tertiary;
        color:$color-white !important;
        &#now{
          text-transform: uppercase;
        }
      }
      &:focus{
        outline: none;
      }

    }
  }
  &__input{
    width:90%;
    height:3rem;
    border:none;
    border-bottom: 4px solid $color-tertiary;
    border-radius: $border-radius;
    z-index:9999;
    &:focus{
      border-top:2px solid $color-tertiary;
      border-left:2px solid $color-tertiary;
      outline-width: 0;
    }
    
  }
  &__icon{
    position: relative;
    background: $color-tertiary;
    position:relative;
    float:right;
    height:3rem;
    width:3rem;
    margin-left: -1rem;
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    
    svg{
      height:2.6rem;
      fill:#fff;
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      width:2.6rem;
    }
  }

}

.icon-arrow_drop_down{
  top:40% !important;
  height: 3rem !important;
}

.buy__btn{
  text-align: center;
  margin-top:3rem;
  button{
    @include addButton($color-tertiary);
    padding:1rem 4rem !important;
  }
}
</style>


