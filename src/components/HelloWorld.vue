<template>
  <div class="container">
    <div class="row">
      <h1 class="col-md-12 " align="center" > Разовый платеж (Внедрение)</h1>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left form-check">
          <h2> {{ answers[0].text }} {{subAnFun(0)}} </h2> 
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
          <input type="checkbox" class="form-check-input" id="00" value="0" v-model="answers[0].subAnswers">
          <label for="00">  <a>  </a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="01" value="1" v-model="answers[0].subAnswers">
          <label for="01">  <a>  </a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="02" value="2" v-model="answers[0].subAnswers">
          <label for="02"> <a>  </a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="03" value="3" v-model="answers[0].subAnswers">
          <input type="text"  id="03" placeholder="Свой вариант" v-model="msg"> 
          <label for="03"><a>  // </a></label>
        </div> 
        <br> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left form-check">
          <h2> {{ answers[1].text }} {{subAnFun(1)}} </h2>
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
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left form-check"> 
          <h2> {{answers[2].text}}  {{subAnFun(2)}} </h2>
          <br>
          <input type="radio" id="K1" class="form-check-input" value="0" v-model="answers[2].picked">
          <label for="K1"> {{answers[2].pickedInfo[0].text}} <a> {{answers[2].pickedInfo[0].prise}} </a></label> 
          <br>
          <input type="radio" id="K2" class="form-check-input"  value="1" v-model="answers[2].picked">
          <label for="K2"> {{answers[2].pickedInfo[1].text}} <a> {{answers[2].pickedInfo[1].prise}} </a></label>
        </div>
          <div class="text-left form-check" v-if="answers[2].picked==1"> 
            <input type="checkbox" class="form-check-input" id="20" value="0" v-model="answers[2].subAnswers">
            <label for="20">модуль 1 <a> {{answers[2].subAnswerPrise}} </a></label>
            <br>
            <input type="checkbox" class="form-check-input" id="21" value="1" v-model="answers[2].subAnswers">
            <label for="21">модуль 2 <a> {{answers[2].subAnswerPrise}} </a></label>
            <br>
            <input type="checkbox" class="form-check-input" id="22" value="2" v-model="answers[2].subAnswers">
            <label for="22">модуль 3 <a> {{answers[2].subAnswerPrise}} </a></label>
            <br>
            <input type="checkbox" class="form-check-input" id="23" value="3" v-model="answers[2].subAnswers">
            <input type="text"  id="23" placeholder="Свой вариант" v-model="msg"> 
            <label for="23"><a> {{answers[2].subAnswerPrise}} </a></label>
          </div> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left form-check">
          <h2>  {{answers[3].text}}  {{subAnFun(3)}}</h2>
          <br>
          <input type="radio" id="K3" class="form-check-input" value="0" v-model="answers[3].picked">
          <label for="K3"> {{answers[3].pickedInfo[0].text}} <a> {{answers[3].pickedInfo[0].prise}} </a></label> 
          <br>
          <input type="radio" id="K4" class="form-check-input"  value="1" v-model="answers[3].picked">
          <label for="K4"> {{answers[3].pickedInfo[1].text}} <a> {{answers[3].pickedInfo[1].prise}} </a></label>
        </div>
        <div class="text-left form-check" v-if="answers[3].picked==1"> 
            <input type="checkbox" class="form-check-input" id="30" value="0" v-model="answers[3].subAnswers">
            <label for="30">модуль 1 <a> {{answers[3].subAnswerPrise}} </a></label>
            <br>
            <input type="checkbox" class="form-check-input" id="31" value="1" v-model="answers[3].subAnswers">
            <label for="31">модуль 2 <a> {{answers[3].subAnswerPrise}} </a></label>
            <br>
            <input type="checkbox" class="form-check-input" id="32" value="2" v-model="answers[3].subAnswers">
            <label for="32">модуль 3 <a> {{answers[3].subAnswerPrise}} </a></label>
            <br>
            <input type="checkbox" class="form-check-input" id="33" value="3" v-model="answers[3].subAnswers">
            <input type="text"  id="33" placeholder="Свой вариант" value="3" v-model="msg"> 
            <label for="33"><a> {{answers[3].subAnswerPrise}} </a></label>
        </div> 
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" > 
        <div class="text-left form-check">
          <h2> {{answers[4].text}} {{subAnFun(4)}}</h2>
          <br>
          <input type="radio" id="D1" class="form-check-input" value="0" v-model="answers[4].picked">
          <label for="D1"> {{answers[4].pickedInfo[0].text}} <a> {{answers[4].pickedInfo[0].prise}} </a></label> 
          <br>
          <input type="radio" id="D2" class="form-check-input"  value="1" v-model="answers[4].picked">
          <label for="D2"> {{answers[4].pickedInfo[1].text}} <a> {{answers[4].pickedInfo[1].prise}} </a></label>
        </div>
        <div class="text-left form-check" v-if="answers[4].picked==1"> 
            <input type="checkbox" class="form-check-input" id="40" value="0" v-model="answers[4].subAnswers">
            <label for="40">модуль 1 <a> {{answers[4].subAnswerPrise}} </a></label>
            <br>
            <input type="checkbox" class="form-check-input" id="41" value="1" v-model="answers[4].subAnswers">
            <label for="41">модуль 2 <a> {{answers[4].subAnswerPrise}} </a></label>
            <br>
            <input type="checkbox" class="form-check-input" id="42" value="2" v-model="answers[4].subAnswers">
            <label for="42">модуль 3 <a> {{answers[4].subAnswerPrise}} </a></label>
            <br>
            <input type="checkbox" class="form-check-input" id="43" value="3" v-model="answers[4].subAnswers">
            <input type="text"  id="A8" placeholder="Свой вариант" v-model="msg"> 
            <label for="43"><a> {{answers[4].subAnswerPrise}} </a></label>
        </div> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left form-check">
          <h2> {{answers[5].text}}  {{subAnFun(5)}} </h2>
          <br>
          <input type="radio" id="C1" class="form-check-input" value="0" v-model="answers[5].picked">
          <label for="C1">{{answers[5].pickedInfo[1].text}} <a> {{answers[5].pickedInfo[0].prise}} </a></label> 
          <br>
          <input type="radio" id="C2" class="form-check-input"  value="1" v-model="answers[5].picked">
          <label for="C2">{{answers[5].pickedInfo[1].text}} <a> {{answers[5].pickedInfo[1].prise}} </a></label>
        </div>
        <div class="text-left form-check" v-if="answers[5].picked==1"> 
          <input type="checkbox" class="form-check-input" id="50" value="0" v-model="answers[5].subAnswers">
          <label for="50">модуль 1 <a> {{answers[5].subAnswerPrise}} </a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="51" value="1" v-model="answers[5].subAnswers">
          <label for="51">модуль 2 <a> {{answers[5].subAnswerPrise}} </a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="52" value="2" v-model="answers[5].subAnswers">
          <label for="52">модуль 3 <a> {{answers[5].subAnswerPrise}} </a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="53" value="3" v-model="answers[5].subAnswers">
          <input type="text"  id="A8" placeholder="Свой вариант" v-model="msg"> 
          <label for="53"><a> {{answers[5].subAnswerPrise}} </a></label>
        </div> 
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" > 
        <div class="text-left form-check">
          <h2> {{answers[6].text}}  {{subAnFun(6)}}</h2>
          <br>
          <input type="radio" id="P1" class="form-check-input" value="0" v-model="answers[6].picked">
          <label for="P1"> {{answers[6].pickedInfo[0].text}} <a> {{answers[6].pickedInfo[0].prise}} </a></label> 
          <br>
          <input  type="radio" id="P2" class="form-check-input"  value="1" v-model="answers[6].picked">
          <label for="P2"> {{answers[6].pickedInfo[1].text}} <a> {{answers[6].pickedInfo[1].prise}} </a></label>
        </div>
        <div class="text-left form-check" v-if="answers[6].picked==1"> 
          <input type="checkbox" class="form-check-input" id="60" value="0" v-model="answers[6].subAnswers">
          <label for="60">модуль 1 <a> {{answers[6].subAnswerPrise}} </a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="61" value="1" v-model="answers[6].subAnswers">
          <label for="61">модуль 2 <a> {{answers[6].subAnswerPrise}} </a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="62" value="2" v-model="answers[6].subAnswers">
          <label for="62">модуль 3 <a> {{answers[6].subAnswerPrise}} </a></label>
          <br>
          <input type="checkbox" class="form-check-input" id="63" value="3" v-model="answers[6].subAnswers">
          <input type="text"  id="A8" placeholder="Свой вариант" v-model="msg"> 
          <label for="63"><a> {{answers[6].subAnswerPrise}} </a></label>
        </div> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left  form-check">
        <h2>База: Разовый платеж (внедрение):  </h2> <br>
        Действует при указанном наборе опций  {{ countFun() }} 
        </div>
      </div>
    </div>
    <div class="row">
      <h1 class="col-md-12 " align="center" > Ежемесячный платеж </h1>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left form-check">
          <h2> {{ users[0].text0 }}  </h2> 
          <input type="text"  id="E0" placeholder="Введите число пользователей" v-model="users.user"> 
          <label for="E0"><a> {{userFun()}} </a></label>
        </div>
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left form-check">
          <h2> {{ users[0].text1 }}  </h2> 
          <input type="text"  id="E0" placeholder="Количество пользователей" v-model="users.maintenance"> 
          <label for="E1"><a> {{maintFun()}} {{monthlySumFun()}} </a></label>
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
          text: "Кастомизация решения в облаке: ",
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
              prise: 0,
              text:"Дополнительный модуль/доработка",
            },
          ],
          subAnswers: [/*
            {
              id: 0,
              text: "модель 0",
              active: false,
            },
            {
              id: 1,
              text: "модель 1",
              active: false,
            },
            {
              id: 2,
              text: "модель 2",
              active: false,
            },
            {
              id: 3,
              text: "Свой вариант",
              active: true,
              msg: [],
            },*/
          ],
         // msg: [],
          subAnswerPrise: 15000,
          
          
        },
        {
          text: "Обучение сотрудников:  ",
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
          
        },
        {
          text: "Количество пользователей с разными доступами: ",
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
          subAnswerPrise: 15000,
          prise:[],
        },
        {
          text: "Кастомизация решения в облаке: ",
          picked: 0,
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
          
        },
        {
          text: "Дополнительные отчеты и диаграммы : ",
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
          
        },
        {
          text: "Автоматические процедуры: ",
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
          
        },
        {
          id: "6",
          text: "Переезд с текущего решения: ",
          picked: 0,
          pickedInfo: [
            {
              id: 0,
              prise: 0,
              text: "Если данные перенесут сотрудники самостоятельно",
            },
            {
              id: 1,
              prise: 20000,
              text:"За каждый источник, откуда данные необходимо перенести автоматически",
            },
            
          ],
          subAnswers: [],
          subAnswerPrise: 20000,
          
        },
      ],
      users: [
        {
        id: "7",
        text0: "Количество пользователей: ", 
        text1: "Техническая поддержка",
        user: [],
        maintenance: [],
        }
      ],
      schema: {
      fields: [
        {
          type: "input",
          inputType: "text",
          label: "Name",
          model: "name",
         
        },
        {
          type: "input",
          inputType: "email",
          label: "E-mail",
          model: "email",
          placeholder: "User's e-mail address",
        },   
        ]
    },
    msg: [], 
      
    }
  },

  methods: {                                              
// для подсчета нажатых кнопок и красивого вывода
    subAnFun: function (iAnswer) {                             
      var sum = this.answers[iAnswer].subAnswers.length * this.answers[iAnswer].subAnswerPrise;
      let app = "+"+ sum + " p.";
      if (this.answers[iAnswer].picked == this.answers[iAnswer].pickedInfo.length - 1) {                             
        return app;                                    
      }
    },
// СПОСОБ ПОСЧИТАТЬ ВСЕ ВЫБРАННЫЕ КНОПКИ: беги по массиву и скадывай все цифорки 
    countFun: function () {
// беги по массиву смотри в пикед и бери соответсвующий ей прайс для айди в воросах... , беги по ансвер.пикед , смотри на номер(ид) (пикед[]), 
      var sum = 0;
      for (var idAnswer in this.answers) {                
        var idPicked = this.answers[idAnswer].picked; 
        if (this.answers[idAnswer].picked == this.answers[idAnswer].pickedInfo.length - 1) {                             
          let peuPrise =  (this.answers[idAnswer].subAnswers.length * this.answers[idAnswer].subAnswerPrise);
          sum = sum + peuPrise;                                  
        } 
        else {
          let peuPrise = this.answers[idAnswer].pickedInfo[idPicked].prise;
          sum = sum + peuPrise;
        }
      }
      var wellSum = "+" + sum + " p.";
      return wellSum;
    },
    /** 
    msgFun: function() {

      //var safeMess = "";
      //for (var idAnswer in this.answers) {   
        var idPicked = this.answers[0].subAnswers[3].msg; 
        if (idPicked.length != 0 ) {
          this.answers[0].subAnswers[3] = true
          //item.active = true
// сделай чекбокс тогоже вопроса трушным // найди чекбокс с таким же вайл // 
          alert (this.answers[0].subAnswers[3].msg)

        //}

      //if (this.answers.msg = 1 ) {

      }
    }, */

    maintFun: function() {
      if(this.users.maintenance >= 1 && this.users.maintenance <= 20000){
        let sum = this.users.maintenance * 500;
        return " +" + sum + " p."
      }
      if(this.users.maintenance == 0){
        return "Бесплатно"
      }
    },
   
   //пользователь вписывает число от 1 до 2000, если это число от 1 до 5 то умножь его на 500 и выдай результат
   
    userFun: function() {
      if(this.users.user >= 0 && this.users.user <= 5){
        return "Бесплатно"
      }
      if(this.users.user >= 6 && this.users.user <= 10){
        let sum = this.users.user * 500;
        return " +" + sum + " p."
      }
      if(this.users.user >= 11 && this.users.user <= 100){
        let sum = this.users.user * 700;
        return " +" + sum + " p."
      }
      if(this.users.user >= 101 && this.users.user <= 500){
        let sum = this.users.user * 600;
        return " +" + sum + " p."
      }
      if(this.users.user >= 501 && this.users.user <= 20000){
        let sum = this.users.user * 400;
        return " +" + sum + " p."
      }
    },

    monthlySumFun: function() {
      let sum = this.maintFun () + this.userFun ();
      return sum
    },
  }
}

    

  /**  
   * Пытаюсь заменить 0 на бесплатно, с помощью перебора ( беги по прайсам, если он равен 0 возвращай бесплатно, иначе возвращай то что лежит в прайсе)
  testFun: function(iAnswers) {
      if (this.answers[iAnswers].pickedInfo.prise = 0) {
        return "Бесплатно";
      }
      else {
        return this.answers[iAnswers].pickedInfo.prise; 
      }
    }

    //  T O D O var text = this.msg
    //if (text != null ) {    //если текстовое поле неизменеено
    // this.checkedText == !this.checkedText
    
    //если в текстовом поле произощли изменения, то сделай чекбокс == 5 активным // беги по массиву ансвер смотри в пикединфо 
        } 
      }*/
             
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only li {
  display: inline-block;
  margin: 0 10px;
}-->
<style scoped>
h2 {
  font-size: 150% 
}

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



