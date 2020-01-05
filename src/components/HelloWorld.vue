<template>
  <div class="container">
    <div class="row">
      <div class="col-6" id="example-3">
        <span>Кастомизация решения в облаке: {{ firstBlock() }}</span> 
        <br>
        <input type="radio" id="1" value="1" v-model="picked">
        <label for="1">Нет различий с нашей коробкой </label>
        <br>
        <input type="radio" id="2" value="2" v-model="picked">
        <label for="2">Все доработки будут произведины самостоятельно</label>
        <br>
        <input type="radio" id="5" value="3" v-model="picked">
        <label for="5">Дополнительный модуль/доработка</label>
        <br>
        <br>
      
        <div v-if="picked==3"> 
          <input type="checkbox" id="1" value="1" v-model="checkedNames">
          <label for="+15 000p.">модуль 1</label>
          <br>
          <input type="checkbox" id="2" value="2" v-model="checkedNames">
          <label for="+15 000p.">модуль 2</label>
          <br>
          <input type="checkbox" id="3" value="3" v-model="checkedNames">
          <label for="+15 000p.">модуль 3</label>
          <br>
        </div>
        <br> 
      </div>
      <div class="col-6">
        <span>Обучение сотрудников: {{ splane }}</span>
        <br>
        <input type="radio" value="Бесплатно" v-model="splane">
        <label for="one">1-5 сотрудников</label>
        <br>
        <input type="radio" value="+ 20 000 р." v-model="splane">
        <label for="three">6-10 сотрудников</label>
        <br>
        <input type="radio" value="+ 40 000 р." v-model="splane">
        <label for="three">11-100 сотрудников</label>
        <br>
        <input type="radio" value="+ 200 000 р." v-model="splane">
        <label for="three">101-500 сотрудников</label>
        <br>
        <input type="radio" value="+ 5000 000 р." v-model="splane">
        <label for="three">501-2000 сотрудников"</label>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: "",
      splane: "",
      checkedNames: [],
    }
  },
  methods: {                                              // команда описывающая метод
    firstBlock: function () {                             // название функции
      var summa = this.checkedNames.length * 15000;       // в переменную сумма положи количество нажатых чеков и умнож на 15000 
      if (this.picked == 3) {                             // если нажат пикед 3
        return summa;                                     // то выведи перменную сумма
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
