<template>
  <div id="itemzone">

    <div id="images">
      <img v-for="image in images" :src="image" alt="image1">
    </div>

    <div id="info">

      <div id="sectinfo">

        <div id="brand">{{ sneak.brand}}</div>
        <div id="name">{{ sneak.name}}</div>
        <div id="color">{{ sneak.color}}</div>
        <div id="price">{{ sneak.price}}＄ </div>
        
      </div>

      <div id="secsize">
        SIZE <Icon icon="line-md:arrow-down-circle-twotone"></Icon>
        <select name="" id="size">
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>
      </div>

      <div id="sectbtn">
        <div id="plusmoins">
          <button id="moins" @click="moins">
            <Icon icon="line-md:minus-circle-twotone"></Icon>
          </button>
          <div id="quantite">{{ sneak.qte }}</div>
          <button id="plus" @click="plus">
            <Icon icon="line-md:plus-circle-twotone"></Icon>
          </button>
        </div>
        <button id="btnadd">Add to cart <Icon icon="ic:round-shopping-cart-checkout"></Icon></button>
      </div>
    </div>

  </div>

</template>

<script>

import { useSneakersStore } from "../store/sneakers";

const store = useSneakersStore();

export default {

  name: "SneakerVue",

  created() {
    console.log(this.sneak);
  },
  
  data() {
    return {
      sneak : store.getsneak,

      images: store.getsneak.images.split('§')
    };
  },

  props: {

  },

  methods: {

    plus() {
      this.sneak.qte++;
    },

    moins() {
      if (this.sneak.qte > 1) {
        this.sneak.qte--;
      }
    },
    
  },

  components: {

  },
  
};
</script>

<style lang="css" scoped>

img{
  width: 40vh;
  border-radius: 1vh;
}

#images{
  display: flex;

  width: 96vw;

  justify-content: space-around;
  align-items: center;

  flex-wrap: wrap;

  margin: 2vh 0;
}

#itemzone {
  width: 100vw;
  /* border: solid 1px rgb(242, 96, 96); */
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

#sectinfo {
  padding: 1vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#info {
  width: 100%;
  height: fit-content;
  display: flex;

  justify-content: space-between;


  color: white;
  font-size: 2vh;
  font-weight: bold;

  border: 1px solid rgb(255, 255, 255);
  border-radius: 1vh;

}

#sectbtn {
  padding: 1vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#plusmoins {
  display: flex;
  justify-content: space-around;
}

button {
  width: fit-content;
  height: fit-content;
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: 2vh;
  font-weight: bold;
  border-radius: 1vh;
  cursor: pointer;
  padding: 0.5vh;
  display: flex;
  justify-content: center;
}

#secsize{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

#size{

  border-radius: 1vh;

  border: none;

  background-color: #222;

  color: white;

  border: white solid 2px;

  font-size: 2vh;

  padding: 1vh;

  appearance: none;

  cursor: pointer;

}
</style>