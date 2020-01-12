<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12" style="height: 300px;">
        <div class="text-left form-check">
          <span> {{ answers[0].text }} {{subAnFun()}} </span> 
          <br>
          <input type="radio" class="form-check-input" id="A1" value="0" v-model="answers[0].picked">
          <label for="A1">{{ answers[0].pickedInfo[0].text }} <a> {{ answers[0].pickedInfo[0].prise }} </a> </label> 
          <br>
          <input type="radio" class="form-check-input" id="A2" value="1" v-model="answers[0].picked">
          <label for="A2">{{ answers[0].pickedInfo[1].text }} <a> {{ answers[0].pickedInfo[1].prise }} </a> </label>
          <br>
          <input type="radio" class="form-check-input" id="A3" value="2" v-model="answers[0].picked">
          <label for="A3">{{ answers[0].pickedInfo[2].text }} <a> {{ answers[0].pickedInfo[2].prise }} </a></label>
          <br>
        </div>
        <div class="text-left form-check" v-if="answers[0].picked==2"> 
          <input type="checkbox" class="form-check-input" id="A4" value="0" v-model="answers[0].subAnswers">
          <label for="A4">модуль 1 <a> {{answers[0].subAnswerPrise}} </a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="A5" value="1" v-model="answers[0].subAnswers">
          <label for="A5">модуль 2 <a> {{answers[0].subAnswerPrise}} </a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="A6" value="2" v-model="answers[0].subAnswers">
          <label for="A6">модуль 3 <a> {{answers[0].subAnswerPrise}} </a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="A7" value="3" v-model="answers[0].subAnswers">
          <input type="text"  id="A8" placeholder="Свой вариант" v-model="msg"> 
          <label for="A7"><a> {{answers[0].subAnswerPrise}} </a></label>
        </div> 
        <br> 
      </div>
      <div class="col-lg-6 col-md-12" style="height: 300px;">
        <div class="text-left form-check">
          <span> {{ answers[1].text }} </span>
          <br>
          <input type="radio" id="B1" class="form-check-input" value="0" v-model="answers[1].picked">
          <label for="B1">{{ answers[1].pickedInfo[0].text }} <a>{{ answers[1].pickedInfo[0].prise }} </a></label>
          <br>
          <input type="radio" id="B2" class="form-check-input" value="1" v-model="answers[1].picked"> 
          <label for="B2">{{ answers[1].pickedInfo[1].text }} <a>{{ answers[1].pickedInfo[1].prise }} </a></label>
          <br>
          <input type="radio" id="B3" class="form-check-input" value="2" v-model="answers[1].picked">
          <label for="B3">{{ answers[1].pickedInfo[2].text }} <a>{{ answers[1].pickedInfo[2].prise }} </a></label>
          <br>
          <input type="radio" id="B4" class="form-check-input" value="3" v-model="answers[1].picked">
          <label for="B4">{{ answers[1].pickedInfo[3].text }} <a>{{ answers[1].pickedInfo[3].prise }} </a></label>
          <br>
          <input type="radio" id="B5" class="form-check-input" value="4" v-model="answers[1].picked">
          <label for="B5">{{ answers[1].pickedInfo[4].text }} <a>{{ answers[1].pickedInfo[4].prise }} </a></label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12" style="height: 150px;">
        <div class="text-left form-check"> 
          <span> {{answers[2].text}} {{answers[2].picked}} </span>
          <br>
          <input type="radio" id="K1" class="form-check-input" value="0" v-model="answers[2].picked">
          <label for="K1"> {{answers[2].pickedInfo[0].text}} <a> {{answers[2].pickedInfo[0].prise}} </a></label> 
          <br>
          <input type="radio" id="K2" class="form-check-input"  value="1" v-model="answers[2].picked">
          <label for="K2"> {{answers[2].pickedInfo[1].text}} <a> {{answers[2].pickedInfo[1].prise}} </a></label>
        </div>
        
      </div>
      <div class="col-lg-6 col-md-12" style="height: 150px;">
        <div class="text-left form-check">
          <span>  {{answers[3].text}} {{answers[3].picked}}</span>
          <br>
          <input type="radio" id="K3" class="form-check-input" value="0" v-model="answers[3].picked">
          <label for="K3"> {{answers[3].pickedInfo[0].text}} <a> {{answers[3].pickedInfo[0].prise}} </a></label> 
          <br>
          <input type="radio" id="K4" class="form-check-input"  value="1" v-model="answers[3].picked">
          <label for="K4"> {{answers[3].pickedInfo[1].text}} <a> {{answers[3].pickedInfo[1].prise}} </a></label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12" style="height: 150px;"> 
        <div class="text-left form-check">
          <span> {{answers[4].text}} {{answers[4].picked}} </span>
          <br>
          <input type="radio" id="D1" class="form-check-input" value="0" v-model="answers[4].picked">
          <label for="D1"> {{answers[4].pickedInfo[0].text}} <a> {{answers[4].pickedInfo[0].prise}} </a></label> 
          <br>
          <input type="radio" id="D2" class="form-check-input"  value="1" v-model="answers[4].picked">
          <label for="D2"> {{answers[4].pickedInfo[1].text}} <a> {{answers[4].pickedInfo[1].prise}} </a></label>
        </div>
      </div>
      <div class="col-lg-6 col-md-12" style="height: 150px;">
        <div class="text-left form-check">
          <span> {{answers[5].text}}  {{answers[5].picked}} </span>
          <br>
          <input type="radio" id="C1" class="form-check-input" value="0" v-model="answers[5].picked">
          <label for="C1">{{answers[5].pickedInfo[1].text}} <a> {{answers[5].pickedInfo[0].prise}} </a></label> 
          <br>
          <input type="radio" id="C2" class="form-check-input"  value="1" v-model="answers[5].picked">
          <label for="C2">{{answers[5].pickedInfo[1].text}} <a> {{answers[5].pickedInfo[1].prise}} </a></label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12" style="height: 150px;"> 
        <div class="text-left form-check">
          <span> {{answers[6].text}} {{answers[6].picked}} </span>
          <br>
          <input type="radio" id="P1" class="form-check-input" value="0" v-model="answers[6].picked">
          <label for="P1"> {{answers[6].pickedInfo[0].text}} <a> {{answers[6].pickedInfo[1].prise}} </a></label> 
          <br>
          <input  type="radio" id="P2" class="form-check-input"  value="1" v-model="answers[6].picked">
          <label for="P2"> {{answers[6].pickedInfo[1].text}} <a> {{answers[6].pickedInfo[1].prise}} </a></label>
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
              prise: 0,
              text: "Нет различий с нашей коробкой",
            },
            {
              id: 1,
              prise: 0,
              text:"Все доработки будут произведины самостоятельно",
            },
            {
              id: 2,
              prise: 15000,
              text:"Дополнительный модуль/доработка",
            },
          ],
          subAnswers: [],
          subAnswerPrise: 15000,
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
              prise: 0,
              text: "Нет интеграций с другими программами",
            },
            {
              id: 1,
              prise: 15000,
              text:"За каждую дополнительную интеграцию",
            },
            
          ],
          subAnswers: [],
          subAnswerPrise: "",
          text: "Количество пользователей с разными доступами: ",
          prise:[],
        },
        {
          picked: 1,
          pickedInfo: [
            {
              id: 0,
              prise: 0,
              text: "Если роль только одна - полный доступ",
            },
            {
              id: 1,
              prise: 1000,
              text: "За каждую дополнительную роль",
            },
            
          ],
          subAnswers: [],
          subAnswerPrise: 1000,
          text: "Кастомизация решения в облаке: ",
        },
        {
          picked: 0,
          pickedInfo: [
            {
              id: 0,
              prise: 0,
              text: "Если нет дополнительных диаграмм",
            },
            {
              id: 1,
              prise: 15000,
              text: "За каждую дополнительную диаграмму",
            },
            
          ],
          subAnswers: [],
          subAnswerPrise: 15000,
          text: "Дополнительные отчеты и диаграммы : ",
        },
        {
          picked: 0,
          pickedInfo: [
            {
              id: 0,
              prise: 0,
              text: "Если нет автоматики ",
            },
            {
              id: 1,
              prise: 5000,
              text: "За каждую дополнительную автоматику",
            },
            
          ],
          subAnswers: [],
          subAnswerPrise: 5000,
          text: "Автоматические процедуры: ",
        },
        {
          picked: 0,
          pickedInfo: [
            {
              id: 0,
              prise: 20000,
              text: "Если данные перенесут сотрудники самостоятельно",
            },
            {
              id: 1,
              prise: 15000,
              text:"За каждый источник, откуда данные необходимо перенести автоматически",
            },
            
          ],
          subAnswers: [],
          subAnswerPrise: 20000,
          text: "Переезд с текущего решения: ",
        },
      ],
      
      
      checkedNames: [],
      msg: "",
      checkedText: false,
     
    }
  },

  methods: {                                              // команда описывающая метод
  //для скрытия эллемнтов
    subAnFun: function () {                             // название функции
      var summa = this.answers[0].subAnswers.length * this.answers[0].subAnswerPrise;       // в переменную сумма положи количество нажатых чеков и умнож на 15000 
      let app = "+"+ summa + " p.";
      if (this.answers[0].picked == 2) {                             // если нажат пикед 3
        return app;                                     // то выведи перменную сумма
      }
    },
  }
    
    //тест
 
/**
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
