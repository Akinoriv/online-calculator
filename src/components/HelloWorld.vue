<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12" style="height: 300px;">
        <div class="text-left form-check">
          <span>Кастомизация решения в облаке:  {{ answers[0].picked }}</span> 
          <br>
          <input type="radio" class="form-check-input" id="A1" value="0" v-model="answers[0].picked">
          <label for="A1"> {{ answers[0].pickedInfo[0].text }} <a>Бесплатно</a> </label> 
          <br>
          <input type="radio" class="form-check-input" id="A2" value="1" v-model="answers[0].picked">
          <label for="A2">Все доработки будут произведины самостоятельно <a>Бесплатно</a> </label>
          <br>
          <input type="radio" class="form-check-input" id="A3" value="2" v-model="answers[0].picked">
          <label for="A3">Дополнительный модуль/доработка</label>
          <br>
        </div>
        <div class="text-left form-check" v-if="answers[0].picked==2"> 
          <input type="checkbox" class="form-check-input" id="A4" value="A4, 15000" v-model="checkedNames">
          <label for="A4">модуль 1 <a>+15000p</a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="A5" value="A5, 15000" v-model="checkedNames">
          <label for="A5">модуль 2 <a>+15000p</a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="A6" value="A6, 15000" v-model="checkedNames">
          <label for="A6">модуль 3 <a>+15000p</a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="A7" value="A7, 15000" v-model="checkedNames">
          <input type="text"  id="A8" placeholder="Свой вариант" v-model="msg"> 
          <label for="A7"><a>+15000p</a></label>
        </div> 
        <br> 
      </div>
      <div class="col-lg-6 col-md-12" style="height: 300px;">
        <div class="text-left form-check">
          <span>Обучение сотрудников: {{ answers[1].picked}}</span>
          <br>
          <input type="radio" id="B1" class="form-check-input" value="0" v-model="answers[1].picked">
          <label for="B1">1 - 5 сотрудников <a> Бесплатно</a></label>
          <br>
          <input type="radio" id="B2" class="form-check-input" value="1" v-model="answers[1].picked"> 
          <label for="B2">6 - 10 сотрудников <a> +20 000 р</a></label>
          <br>
          <input type="radio" id="B3" class="form-check-input" value="2" v-model="answers[1].picked">
          <label for="B3">11 - 100 сотрудников <a> +40 000 р.</a></label>
          <br>
          <input type="radio" id="B4" class="form-check-input" value="3" v-model="answers[1].picked">
          <label for="B4">101 - 500 сотрудников <a>+  200 000 р.</a></label>
          <br>
          <input type="radio" id="B5" class="form-check-input" value="4" v-model="answers[1].picked">
          <label for="B5">501 - 2000 сотрудников <a> +500 000 р.</a></label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12" style="height: 150px;">
        <div class="text-left form-check"> 
          <span>Количество интеграций с другими программами : {{answers[2].picked}} </span>
          <br>
          <input type="radio" id="K1" class="form-check-input" value="0" v-model="answers[2].picked">
          <label for="K1">Нет интеграций с другими программами<a> Бесплатно </a></label> 
          <br>
          <input type="radio" id="K2" class="form-check-input"  value="1" v-model="answers[2].picked">
          <label for="K2">За каждую дополнительную интеграцию <a> +15 000 p.</a></label>
        </div>
      </div>
      <div class="col-lg-6 col-md-12" style="height: 150px;">
        <div class="text-left form-check">
          <span> Количество пользователей с разными доступами: {{answers[3].picked}} </span>
          <br>
          <input type="radio" id="K3" class="form-check-input" value="0" v-model="answers[3].picked">
          <label for="K3">Если роль только одна - полный доступ <a> Бесплатно </a></label> 
          <br>
          <input type="radio" id="K4" class="form-check-input"  value="1" v-model="answers[3].picked3">
          <label for="K4">За каждую дополнительную роль <a> +1 000 p.</a></label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12" style="height: 150px;"> 
        <div class="text-left form-check">
          <span>Дополнительные отчеты и диаграммы : {{answers[4].picked}} </span>
          <br>
          <input type="radio" id="D1" class="form-check-input" value="0" v-model="answers[4].picked">
          <label for="D1">Если нет дополнительных диаграмм<a> Бесплатно </a></label> 
          <br>
          <input type="radio" id="D2" class="form-check-input"  value="1" v-model="answers[4].picked">
          <label for="D2">За каждую дополнительную диаграмму <a> +15 000 p.</a></label>
        </div>
      </div>
      <div class="col-lg-6 col-md-12" style="height: 150px;">
        <div class="text-left form-check">
          <span> Автоматические процедуры {{answers[5].picked}} </span>
          <br>
          <input type="radio" id="C1" class="form-check-input" value="0" v-model="answers[5].picked">
          <label for="C1">Если нет автоматики <a> Бесплатно </a></label> 
          <br>
          <input type="radio" id="C2" class="form-check-input"  value="1" v-model="answers[5].picked">
          <label for="C2">За каждую дополнительную автоматику <a> +5 000 p.</a></label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12" style="height: 150px;"> 
        <div class="text-left form-check">
          <span>Переезд с текущего решения : {{answers[6].picked}} </span>
          <br>
          <input type="radio" id="P1" class="form-check-input" value="0" v-model="answers[6].picked">
          <label for="P1">Если данные перенесут сотрудники самостоятельно<a> КАк сделать кратко и чтобы они не были соедененны  </a></label> 
          <br>
          <input  type="radio" id="P2" class="form-check-input"  value="1" v-model="answers[6].picked">
          <label for="P2">За каждый источник, откуда данные необходимо перенести автоматически <a>  </a></label>
        </div>
      </div>
      <div class="col-lg-6 col-md-12" style="height: 150px;">
        <div class="text-left  form-check">
        <span>База: Разовый платеж (внедрение):  </span> <br>
        Действует при указанном наборе опций  {{ }}
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    
    return {
      answers: [
        {
          picked: 0,
          pickedInfo: [
            {
              id: 0,
              prise: 20000,
              text: "Нет различий с нашей коробкой",
            },
            {
              id: 1,
              prise: 15000,
            },
            {
              id: 2,
              prise: 50000,
            },
          ],
          subAnswers: [],
          subAnswerPrise: 20000,
          text: "Кастомизация решения в облаке: ",
        },
        {
          picked: 0,
          pickedInfo: [
            {
              id: 0,
              prise: 10000,
              text: "1 - 5 сотрудников",
            },
            {
              id: 1,
              prise: 20000,
              text:"6 - 10 сотрудников"
            },
            {
              id: 2,
              prise: 40000,
              text:"11 - 100 сотрудников"
            },
            {
              id: 3,
              prise: 200000,
              text: "101 - 500 сотрудников",
            },
            {
              id: 4,
              prise: 500000,
              text: "501 - 2000 сотрудников",
            },
          ],
          subAnswers: [],
          subAnswerPrise: "",
          text: "Обучение сотрудников:  ",
        },
        {
          picked: 0,
          pickedInfo: [
            {
              id: 0,
              prise: 20000,
              text: "Нет различий с нашей коробкой",
            },
            {
              id: 1,
              prise: 15000,
            },
            
          ],
          subAnswers: [],
          subAnswerPrise: 20000,
          text: "Кастомизация решения в облаке: ",
        },
        {
          picked: 0,
          pickedInfo: [
            {
              id: 0,
              prise: 20000,
              text: "Нет различий с нашей коробкой",
            },
            {
              id: 1,
              prise: 15000,
            },
            
          ],
          subAnswers: [],
          subAnswerPrise: 20000,
          text: "Кастомизация решения в облаке: ",
        },
        {
          picked: 0,
          pickedInfo: [
            {
              id: 0,
              prise: 20000,
              text: "Нет различий с нашей коробкой",
            },
            {
              id: 1,
              prise: 15000,
            },
            
          ],
          subAnswers: [],
          subAnswerPrise: 20000,
          text: "Кастомизация решения в облаке: ",
        },
        {
          picked: 0,
          pickedInfo: [
            {
              id: 0,
              prise: 20000,
              text: "Нет различий с нашей коробкой",
            },
            {
              id: 1,
              prise: 15000,
            },
            
          ],
          subAnswers: [],
          subAnswerPrise: 20000,
          text: "Кастомизация решения в облаке: ",
        },
        {
          picked: 0,
          pickedInfo: [
            {
              id: 0,
              prise: 20000,
              text: "Нет различий с нашей коробкой",
            },
            {
              id: 1,
              prise: 15000,
            },
            
          ],
          subAnswers: [],
          subAnswerPrise: 20000,
          text: "Кастомизация решения в облаке: ",
        },
      ],
      
      
      checkedNames: [],
      msg: "",
      checkedText: false,
     
    }
  },
/**
  methods: {                                              // команда описывающая метод
  //для скрытия эллемнтов
    firstBlock: function () {                             // название функции
      var summa = this.checkedNames.length * 15000;       // в переменную сумма положи количество нажатых чеков и умнож на 15000 
      if (this.picked == 3) {                             // если нажат пикед 3
        return summa;                                     // то выведи перменную сумма
      }
    },
    
    //тест
 

    // для красивого вывода 
    /**
    avtoF: function(){
      var cut = this.avto.slice(4); // взять массив/строчку, разделить эллементы 4+ записать их в гав. Добавить + р. 
      if (cut == 0) {
        var app = "Бесплатно" 
        return app;
      }
      else {
        let app = "+"+ cut + " p.";
        return app;
      }
    },

    diagF: function(){
      var cut = this.diag.slice(4); // взять массив/строчку, разделить эллементы 4+ записать их в гав. Добавить + р. 
      if (cut == 0) {
        var app = "Бесплатно" 
        return app;
      }
      else {
        let app = "+"+ cut + " p.";
        return app;
      }
    },

    integF: function(){
      var cut = this.integ.slice(4); // взять массив/строчку, разделить эллементы 4+ записать их в гав. Добавить + р. 
      if (cut == 0) {
        var app = "Бесплатно" 
        return app;
      }
      else {
        let app = "+"+ cut + " p.";
        return app;
      }
    },

    speenF: function(){
      var cut = this.speen.slice(4); // взять массив/строчку, разделить эллементы 4+ записать их в гав. Добавить + р. 
      if (cut == 0) {
        var app = "Бесплатно" 
        return app;
      }
      else {
        let app = "+"+ cut + " p.";
        return app;
      }
    },

    pereF: function(){
      var cut = this.pere.slice(4); // взять массив/строчку, разделить эллементы 4+ записать их в гав. Добавить + р. 
      if (cut == 0) {
        var app = "Бесплатно" 
        return app;
      }
      else {
        let app = "+"+ cut + " p.";
        return app;
      }
    },

    splaneF: function(){
      var cut = this.splane.slice(4);
      if (cut == 0) {
        var app = "Бесплатно" 
        return app;
      }
      else {
        let app = "+"+ cut + " p.";
        return app;
      }
    },
    
    
    //нужна уникальность
    //можно создать цикл, БЕГИ ПО ВСЕМ АКТИВНЫМ И СМОТРИ ЧТО У НИХ ЛЕЖИТ В ЦИФОРКЕ И СЧИТАЙ

    //для счета
    Summ: function(){
     
      var summa = Number.parseInt(this.pere.slice(4)) + Number.parseInt(this.avto.slice(4)) + Number.parseInt(this.diag.slice(4)) + Number.parseInt(this.integ.slice(4)) + Number.parseInt(this.speen.slice(4)) + Number.parseInt(this.splane.slice(4)); 
      let ars = summa + this.firstBlock();
      //let arr = ars.slice();
      let alp = "+"+ ars + " p.";
      return alp;  
      
    },

  
    

    //  T O D O var text = this.msg
    //if (text != null ) {    //если текстовое поле неизменеено
    // this.checkedText == !this.checkedText
    
    //если в текстовом поле произощли изменения, то сделай чекбокс == 5 активным 
        } 
      }*/
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
