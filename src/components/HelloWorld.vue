<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12" style="height: 300px;">
        <div class="text-left form-check">
          <span>Кастомизация решения в облаке: {{ firstBlock() }}</span> 
          <br>
          <input type="radio" class="form-check-input" id="1" value="1" v-model="picked">
          <label for="1"> Нет различий с нашей коробкой <a>Бесплатно</a> </label> 
          <br>
          <input type="radio" class="form-check-input" id="2" value="2" v-model="picked">
          <label for="2">Все доработки будут произведины самостоятельно <a>Бесплатно</a> </label>
          <br>
          <input type="radio" class="form-check-input" id="3" value="3" v-model="picked">
          <label for="3">Дополнительный модуль/доработка</label>
          <br>
        </div>
        <div class="text-left form-check" v-if="picked==3"> 
          <input type="checkbox" class="form-check-input" id="4" value="4" v-model="checkedNames">
          <label for="4">модуль 1 <a>+15000p</a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="5" value="5" v-model="checkedNames">
          <label for="5">модуль 2 <a>+15000p</a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="6" value="6" v-model="checkedNames">
          <label for="6">модуль 3 <a>+15000p</a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="7" value="7" v-model="checkedNames">
          <input type="text"  id="8" placeholder="Свой вариант" v-model="msg"> 
          <label for="7"><a>+15000p</a></label>
        </div> 
        <br> 
      </div>
      <div class="col-lg-6 col-md-12" style="height: 300px;">
        <div class="text-left form-check">
          <span>Обучение сотрудников: {{ splane }}</span>
          <br>
          <input type="radio" id="O1" class="form-check-input" value="Бесплатно" v-model="splane">
          <label for="O1">1 - 5 сотрудников <a> Бесплатно</a></label>
          <br>
          <input type="radio" id="O2" class="form-check-input" value="+ 20 000 р." v-model="splane">
          <label for="O2">6 - 10 сотрудников <a> +20 000 р</a></label>
          <br>
          <input type="radio" id="O3" class="form-check-input" value="+ 40 000 р." v-model="splane">
          <label for="O3">11 - 100 сотрудников <a> +40 000 р.</a></label>
          <br>
          <input type="radio" id="O4" class="form-check-input" value="+ 200 000 р." v-model="splane">
          <label for="O4">101 - 500 сотрудников <a>+  200 000 р.</a></label>
          <br>
          <input type="radio" id="O5" class="form-check-input" value="+5000 000 р." v-model="splane">
          <label for="O5">501 - 2000 сотрудников <a> +5000 000 р.</a></label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12" style="height: 150px;">
        <div class="text-left form-check"> 
          <span>Количество интеграций с другими программами : {{integ}} </span>
          <br>
          <input type="radio" id="K1" class="form-check-input" value="Бесплатно" v-model="integ">
          <label for="K1">Нет интеграций с другими программами<a> Бесплатно </a></label> 
          <br>
          <input type="radio" id="K2" class="form-check-input"  value="+15 000 p." v-model="integ">
          <label for="K2">За каждую дополнительную интеграцию <a> +15 000 p.</a></label>
        </div>
      </div>
      <div class="col-lg-6 col-md-12" style="height: 150px;">
        <div class="text-left form-check">
          <span> Количество пользователей с разными доступами: {{speen}} </span>
          <br>
          <input type="radio" id="K3" class="form-check-input" value="Бесплатно" v-model="speen">
          <label for="K3">Если роль только одна - полный доступ <a> Бесплатно </a></label> 
          <br>
          <input type="radio" id="K4" class="form-check-input"  value="+1 000 p." v-model="speen">
          <label for="K4">За каждую дополнительную роль <a> +1 000 p.</a></label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12" style="height: 150px;"> 
        <div class="text-left form-check">
          <span>Дополнительные отчеты и диаграммы : {{diag}} </span>
          <br>
          <input type="radio" id="D1" class="form-check-input" value="Бесплатно" v-model="diag">
          <label for="D1">Если нет дополнительных диаграмм<a> Бесплатно </a></label> 
          <br>
          <input type="radio" id="D2" class="form-check-input"  value="+15 000 p." v-model="diag">
          <label for="D2">За каждую дополнительную диаграмму <a> +15 000 p.</a></label>
        </div>
      </div>
      <div class="col-lg-6 col-md-12" style="height: 150px;">
        <div class="text-left form-check">
          <span> Автоматические процедуры {{avto}} </span>
          <br>
          <input type="radio" id="A1" class="form-check-input" value="Бесплатно" v-model="avto">
          <label for="A1">Если нет автоматики <a> Бесплатно </a></label> 
          <br>
          <input type="radio" id="A2" class="form-check-input"  value="5000" v-model="avto">
          <label for="A2">За каждую дополнительную автоматику <a> +5 000 p.</a></label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12" style="height: 150px;"> 
        <div class="text-left form-check">
          <span>Переезд с текущего решения : {{pere}} </span>
          <br>
          <input type="radio" id="P1" class="form-check-input" value="Бесплатно" v-model="pere">
          <label for="P1">Если данные перенесут сотрудники самостоятельно<a> Бесплатно </a></label> 
          <br>
          <input type="radio" id="P2" class="form-check-input"  value="20000" v-model="pere">
          <label for="P2">За каждый источник, откуда данные необходимо перенести автоматически <a> +20 000 p.</a></label>
        </div>
      </div>
      <div class="col-lg-6 col-md-12" style="height: 150px;">
        <div class="text-left  form-check">
        <span>База: Разовый платеж (внедрение): {{summaOb}} </span>
        Действует при указанном наборе опций 
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    
    return {
      
      pere:"",
      avto:"",
      diag:"",
      integ:"",
      speen:"",
      picked: "",
      splane: "",
      checkedNames: [],
      msg: '',
      checkedText: false,
     
    }
  },

  methods: {                                              // команда описывающая метод
    firstBlock: function () {                             // название функции
      var summa = this.checkedNames.length * 15000;       // в переменную сумма положи количество нажатых чеков и умнож на 15000 
      if (this.picked == 3) {                             // если нажат пикед 3
        return summa;                                     // то выведи перменную сумма
      }
    },
    summaOb: function(){
      var mur = this.pere;
      
      return mur; 
    },


    toggleActive: function(s){ //мне нужно посмотреть что лежит в {{}} и посчитать это
          s.active = !s.active;
    },

    total: function(){
        var total = 0;
        this.services.forEach(function(s){
          if (s.active){
            total+= s.price;
          }
        });
        return total;
      
    },
      
    textInCheck: function() {
      //var input = document.body.children[0];
      //input.oninput = function() { }
    

    //var text = this.msg
    //if (text != null ) {    //если текстовое поле неизменеено
    // this.checkedText == !this.checkedText
    
    //если в текстовом поле произощли изменения, то сделай чекбокс == 5 активным 
      }
      }
    }         
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only li {
  display: inline-block;
  margin: 0 10px;
}-->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  text-align: right;
  color: #42b983;
}
</style>
