<template>
<div>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="col-md-12"  align="start" > Разовый платеж </h1>
      <div  class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
          <h2  align="start"> {{ answers[0].text }} {{ prettily(answerCost(0)) }}  </h2> 
          <br>
          <div class="text-left form-check">
          <input type="radio" class="form-check-input" id="A1" value="0" v-model="answers[0].picked">
          <label for="A1">{{ answers[0].pickedInfo[0].text }} <a> {{ prettily(answers[0].pickedInfo[0].prise) }} </a> </label> 
          <br>
          <input type="radio" class="form-check-input" id="A2" value="1" v-model="answers[0].picked">
          <label for="A2">{{ answers[0].pickedInfo[1].text }} <a> {{ prettily(answers[0].pickedInfo[1].prise) }} </a> </label>
          <br>
          <input type="radio" class="form-check-input" id="A3" value="2" v-model="answers[0].picked">
          <label for="A3">{{ answers[0].pickedInfo[2].text }} <a> {{ prettily(answers[0].pickedInfo[2].prise) }} </a></label>
          <br>
        </div>
        <div class="text-left form-check" v-if="answers[0].picked==2"> 
          <div class="text-left form-check" v-for="(answer, i) in answers[0].subAnswers" v-bind:key="answer.id">
            
            <input 
              type="checkbox" 
              class="form-check-input" 
              v-model="answers[0].subAnswers[i].active"
            >
            <input 
              v-if="answers[0].subAnswers[i].isLabel == false"
              type="text" 
              v-model="answers[0].subAnswers[i].text"
              placeholder="Свой вариант"
              v-on:input="endlessField(0, i)"
              class="color long"
            > 
            <label v-else type="text"> {{ answers[0].subAnswers[i].text }} </label>
            <label><a> {{ prettily(answers[0].subAnswerPrise) }} </a></label>
          
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <h2 align="start"> {{ answers[1].text }} {{ prettily(answerCost(1)) }} </h2>
        <div class="text-left form-check">
          <br>
          <input type="radio" id="B0" class="form-check-input" value="0" v-model="answers[1].picked">
          <label for="B0">{{ answers[1].pickedInfo[0].text }} <a>{{ prettily(answers[1].pickedInfo[0].prise) }} </a></label>
          <br>
          <input type="radio" id="B1" class="form-check-input" value="1" v-model="answers[1].picked"> 
          <label for="B1">{{ answers[1].pickedInfo[1].text }} <a>{{ prettily(answers[1].pickedInfo[1].prise) }} </a></label>
          <br>
          <input type="radio" id="B2" class="form-check-input" value="2" v-model="answers[1].picked">
          <label for="B2">{{ answers[1].pickedInfo[2].text }} <a>{{ prettily(answers[1].pickedInfo[2].prise) }} </a></label>
          <br>
          <input type="radio" id="B3" class="form-check-input" value="3" v-model="answers[1].picked">
          <label for="B3">{{ answers[1].pickedInfo[3].text }} <a>{{ prettily(answers[1].pickedInfo[3].prise) }} </a></label>
          <br>
          <input type="radio" id="B4" class="form-check-input" value="4" v-model="answers[1].picked">
          <label for="B4">{{ answers[1].pickedInfo[4].text }} <a>{{ prettily(answers[1].pickedInfo[4].prise) }} </a></label>
          <br>
          <input type="radio" id="B5" class="form-check-input" value="5" v-model="answers[1].picked">
          <label for="B5">{{ answers[1].pickedInfo[5].text }} <a>{{ prettily(answers[1].pickedInfo[5].prise) }} </a></label>
        </div>
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" > 
        <h2  align="start"> {{answers[2].text}}  {{ prettily(answerCost(2)) }} </h2>
        <div class="text-left form-check">
          <br>
          <input type="radio" id="K1" class="form-check-input" value="0" v-model="answers[2].picked">
          <label for="K1"> {{answers[2].pickedInfo[0].text}} <a> {{ prettily(answers[2].pickedInfo[0].prise) }} </a></label> 
          <br>
          <input type="radio" id="K2" class="form-check-input"  value="1" v-model="answers[2].picked">
          <label for="K2"> {{answers[2].pickedInfo[1].text}} <a> {{ prettily(answers[2].pickedInfo[1].prise) }} </a></label>
        </div>
          <div class="text-left form-check" v-if="answers[2].picked==1"> 
            <div class="text-left form-check" v-for="(answer, i) in answers[2].subAnswers" v-bind:key="answer.id">
            
            <input 
              type="checkbox" 
              class="form-check-input" 
              v-model="answers[2].subAnswers[i].active"
            >
            <input 
              v-if="answers[2].subAnswers[i].isLabel == false"
              type="text" 
              v-model="answers[2].subAnswers[i].text"
              placeholder="Свой вариант"
              v-on:input="endlessField(2, i)"
              class="color long"
            > 
            <label v-else type="text"> {{ answers[2].subAnswers[i].text }} </label>
            <label><a> {{ prettily(answers[2].subAnswerPrise) }} </a></label>
          
            </div>
          </div> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <h2>  {{answers[3].text}}  {{ prettily(answerCost(3)) }} </h2>
        <div class="text-left form-check">
          <br>
          <input type="radio" id="K3" class="form-check-input" value="0" v-model="answers[3].picked">
          <label for="K3"> {{answers[3].pickedInfo[0].text}} <a> {{ prettily(answers[3].pickedInfo[0].prise) }} </a></label> 
          <br>
          <input type="radio" id="K4" class="form-check-input"  value="1" v-model="answers[3].picked">
          <label for="K4"> {{answers[3].pickedInfo[1].text}} <a> {{ prettily(answers[3].pickedInfo[1].prise) }} </a></label>
        </div>
        <div class="text-left form-check" v-if="answers[3].picked==1"> 
            <div class="text-left form-check" v-for="(answer, i) in answers[3].subAnswers" v-bind:key="answer.id">
            
            <input 
              type="checkbox" 
              class="form-check-input" 
              v-model="answers[3].subAnswers[i].active"
            >
            <input 
              v-if="answers[3].subAnswers[i].isLabel == false"
              type="text" 
              v-model="answers[3].subAnswers[i].text"
              placeholder="Свой вариант"
              v-on:input="endlessField(3, i)"
              class="color long"
            > 
            <label v-else type="text"> {{ answers[3].subAnswers[i].text }} </label>
            <label><a> {{ prettily(answers[3].subAnswerPrise) }} </a></label>
          
          </div>
        </div> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" > 
        <h2  align="start"> {{answers[4].text}} {{ prettily(answerCost(4)) }} </h2>
        <div class="text-left form-check">
          <br>
          <input type="radio" id="D1" class="form-check-input" value="0" v-model="answers[4].picked">
          <label for="D1"> {{answers[4].pickedInfo[0].text}} <a> {{ prettily(answers[4].pickedInfo[0].prise) }} </a></label> 
          <br>
          <input type="radio" id="D2" class="form-check-input"  value="1" v-model="answers[4].picked">
          <label for="D2"> {{answers[4].pickedInfo[1].text}} <a> {{ prettily(answers[4].pickedInfo[1].prise) }} </a></label>
        </div>
        <div class="text-left form-check" v-if="answers[4].picked==1"> 
          <div class="text-left form-check" v-for="(answer, i) in answers[4].subAnswers" v-bind:key="answer.id">

            <input 
              type="checkbox" 
              class="form-check-input" 
              v-model="answers[4].subAnswers[i].active"
            >
            <input 
              v-if="answers[4].subAnswers[i].isLabel == false"
              type="text" 
              v-model="answers[4].subAnswers[i].text"
              placeholder="Свой вариант"
              v-on:input="endlessField(4, i)"
              class="color long"
            > 
            <label v-else type="text"> {{ answers[4].subAnswers[i].text }} </label>
            <label><a> {{ prettily(answers[4].subAnswerPrise) }} </a></label>

          </div>
        </div> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <h2  align="start"> {{answers[5].text}}  {{ prettily(answerCost(5)) }} </h2>
        <div class="text-left form-check">
          <br>
          <input type="radio" id="C1" class="form-check-input" value="0" v-model="answers[5].picked">
          <label for="C1">{{answers[5].pickedInfo[1].text}} <a> {{ prettily(answers[5].pickedInfo[0].prise) }} </a></label> 
          <br>
          <input type="radio" id="C2" class="form-check-input"  value="1" v-model="answers[5].picked">
          <label for="C2">{{answers[5].pickedInfo[1].text}} <a> {{ prettily(answers[5].pickedInfo[1].prise) }} </a></label>
        </div>
        <div class="text-left form-check" v-if="answers[5].picked==1"> 
          <div class="text-left form-check" v-for="(answer, i) in answers[5].subAnswers" v-bind:key="answer.id">

            <input 
              type="checkbox" 
              class="form-check-input" 
              v-model="answers[5].subAnswers[i].active"
            >
            <input 
              v-if="answers[5].subAnswers[i].isLabel == false"
              type="text" 
              v-model="answers[5].subAnswers[i].text"
              placeholder="Свой вариант"
              v-on:input="endlessField(5, i)"
              class="color long"
            > 
            <label v-else type="text"> {{ answers[5].subAnswers[i].text }} </label>
            <label><a> {{ prettily(answers[5].subAnswerPrise) }} </a></label>
            
          </div>
        </div> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" > 
        <h2  align="start"> {{answers[6].text}}  {{ prettily(answerCost(6)) }} </h2>
        <div class="text-left form-check">
          <br>
          <input type="radio" id="P1" class="form-check-input" value="0" v-model="answers[6].picked">
          <label for="P1"> {{answers[6].pickedInfo[0].text}} <a> {{ prettily(answers[6].pickedInfo[0].prise) }} </a></label> 
          <br>
          <input  type="radio" id="P2" class="form-check-input"  value="1" v-model="answers[6].picked">
          <label for="P2"> {{answers[6].pickedInfo[1].text}} <a> {{ prettily(answers[6].pickedInfo[1].prise) }} </a></label>
        </div>
        <div class="text-left form-check" v-if="answers[6].picked==1"> 
          <div class="text-left form-check" v-for="(answer, i) in answers[6].subAnswers" v-bind:key="answer.id">
            
            <input 
              type="checkbox" 
              class="form-check-input" 
              v-model="answers[6].subAnswers[i].active"
            >
            <input 
              v-if="answers[6].subAnswers[i].isLabel == false"
              type="text" 
              v-model="answers[6].subAnswers[i].text"
              placeholder="Свой вариант"
              v-on:input="endlessField(6, i)"
              class="color long"
            > 
            <label v-else type="text"> {{ answers[6].subAnswers[i].text }} </label>
            <label><a> {{ prettily(answers[6].subAnswerPrise) }} </a></label>
          
          </div>
        </div> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left  form-check">
        <h2>Разовый платеж при указанном наборе опций:  <a>  {{ prettily(countIntegration()) }} </a></h2> //сделать полу рамку для читабельности
        </div>
      </div>

      <div class="row">
        <h1 class="col-md-12" align="start"> Ежемесячный платеж </h1>
        <div class="col-lg-6 col-md-12"  >
          <div class="text-left form-check">
            <h2> {{ users[0].text0 }}  </h2> 
            <input type="text"  id="E0" placeholder="Введите число пользователей" v-model="users[0].user" class="color long"> 
            <label for="E0"><a> {{prettily(userFun())}} </a></label>
            <br>
            <h2> Ежемесячный платеж: <a> {{ prettily(monthlySumFun()) }} </a></h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-12"  >
          <div class="text-left form-check">
            <h2> {{ users[0].text1 }}  </h2> 
            <input type="text"  id="E0" placeholder="Количество пользователей" v-model="users[0].maintenance" class="color long"> 
            <label for="E1"><a> {{ prettily(maintFun()) }} {{ JSON.parse(JSON.stringify({1: "kazaboza",})) }}  </a></label>
          </div>
        </div>
      </div>
      
      <div class="row justify-content-center">
        <h1 class="col-md-6"> ПОПРОБОВАТЬ </h1>
        <div class="form-group col-md-8 message" >
          <p for="I0" class="right"> Имя </p>
          <input class="form-control color" type="text"  id="I0" placeholder="Вироничка" v-model="forma[0].name"> 
          <br> 
          <p for="T0" class="text-left"> Телефон или никнейм </p>
          <input class="form-control color"  type="tel" placeholder="+7 (495) 374-88-20" id="T0" v-model="forma[0].number">
          <br>
          <p for="F0" align="start"> Как с вами связаться? </p>
          <select class="form-control color" id="F0" value="forma.select" v-model="forma[0].select">
            <option> Выберите вариант </option>
            <option> WhatsApp </option>
            <option> Telegram </option>
            <option> Instagram </option>
            <option> Facebook </option>
          </select>
          <br>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" align="start" for="gridCheck" style="font-size: 90%"> Я даю свое <a href="https://wiki.vabl.io/personal" >Согласие на обработку персональных данных </a></label>
        </div>
        <button type="submit" class="button" v-on:click="saveJS"> Отправить </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row info" >
    <div class="col-md-6"> 
      <h3><b>КОНТАКТЫ</b>
      <br>
      <a href="tel:+7(495)374-88-20">+7 (495) 374-88-20 </a>
      <br>
      <a href="mailto:sales@myprocessx.com"> sales@myprocessx.com </a>
      <br>
      ИП Маркин Кирилл Вадимович
      <br>
      ИНН: 502211411399
      <br>
      ОГРНИП: 311502224100049
      <br>
      г. Москва
      </h3>
    </div>
    <div class="col-md-6"> 
      <h3><b> ДОПОЛНИТЕЛЬНО </b>
      <br>
      <a href="https://www.dropbox.com/s/49k3xhjetiljdyk/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80%20%D0%B1%D0%B0%D0%B7%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf?dl=0"> Скачать в pdf </a>
      <br>
      Документация
      <br>
      <a href="https://wiki.vabl.io/">wiki.myprocessx.com </a>
      </h3>
    </div>
  </div>
</div>

</template>

<script>
import axios from "axios";

export default {
  data() {
    
    return {
      answers: [
        {
          id: "0",
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
          subAnswers: [
            {
              id: 0,
              text: "модель 0",
              active: false,
              isLabel: true,
            },
            {
              id: 1,
              text: "модель 1",
              active: false,
              isLabel: true,
            },
            {
              id: 2,
              text: "модель 2",
              active: false,
              isLabel: true,
            },
            {
              id: 3,
              text: "",
              active: false,
              isLabel: false,
            },
          ],
          subAnswerPrise: 15000,
          
          
        },
        {
          id: "1",
          text: "Обучение сотрудников:  ",
          picked: 0,
          pickedInfo: [
            {
              id: 0,
              prise: 0,
              text: "1 системный администратор и владелец",
            },
            {
              id: 1,
              prise: 10000,
              text: "1 - 5 сотрудников",
            },
            {
              id: 2,
              prise: 20000,
              text:"6 - 10 сотрудников"
            },
            {
              id: 3,
              prise: 40000,
              text:"11 - 100 сотрудников"
            },
            {
              id: 4,
              prise: 200000,
              text: "101 - 500 сотрудников",
            },
            {
              id: 5,
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
              prise: 0,
              text:"За каждую дополнительную интеграцию",
            },
            
          ],
          subAnswers: [
             {
              id: 0,
              text: "модель 0",
              active: false,
              isLabel: true,
            },
            {
              id: 1,
              text: "модель 1",
              active: false,
              isLabel: true,
            },
            {
              id: 2,
              text: "модель 2",
              active: false,
              isLabel: true,
            },
            {
              id: 3,
              text: "",
              active: false,
              isLabel: false,
            },
          ],
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
              prise: 0,
              text: "За каждую дополнительную роль",
            },
            
          ],
          subAnswers: [
             {
              id: 0,
              text: "модель 0",
              active: false,
              isLabel: true,
            },
            {
              id: 1,
              text: "модель 1",
              active: false,
              isLabel: true,
            },
            {
              id: 2,
              text: "модель 2",
              active: false,
              isLabel: true,
            },
            {
              id: 3,
              text: "",
              active: false,
              isLabel: false,
            },
          ],
          subAnswerPrise: 1000,
          
        },
        {
          text: "Дополнительные отчеты и диаграммы: ",
          picked: 0,
          pickedInfo: [
            {
              id: 0,
              prise: 0,
              text: "Если нет дополнительных диаграмм",
            },
            {
              id: 1,
              prise: 0,
              text: "За каждую дополнительную диаграмму",
            },
            
          ],
          subAnswers: [
             {
              id: 0,
              text: "модель 0",
              active: false,
              isLabel: true,
            },
            {
              id: 1,
              text: "модель 1",
              active: false,
              isLabel: true,
            },
            {
              id: 2,
              text: "модель 2",
              active: false,
              isLabel: true,
            },
            {
              id: 3,
              text: "",
              active: false,
              isLabel: false,
            },
          ],
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
              prise: 0,
              text: "За каждую дополнительную автоматику",
            },
            
          ],
          subAnswers: [
             {
              id: 0,
              text: "модель 0",
              active: false,
              isLabel: true,
            },
            {
              id: 1,
              text: "модель 1",
              active: false,
              isLabel: true,
            },
            {
              id: 2,
              text: "модель 2",
              active: false,
              isLabel: true,
            },
            {
              id: 3,
              text: "",
              active: false,
              isLabel: false,
            },
          ],
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
              prise: 0,
              text:"За каждый источник, откуда данные необходимо перенести автоматически",
            },
            
          ],
          subAnswers: [
             {
              id: 0,
              text: "модель 0",
              active: false,
              isLabel: true,
            },
            {
              id: 1,
              text: "модель 1",
              active: false,
              isLabel: true,
            },
            {
              id: 2,
              text: "модель 2",
              active: false,
              isLabel: true,
            },
            {
              id: 3,
              text: "",
              active: false,
              isLabel: false,
            },
          ],
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
      forma: [
        {
          name:"",
          number: "",
          select:"",
        }
      ]
     
      
    }
  },

  methods: {  

    
// counting the price of clicked checkboxes and radio buttons
    answerCost: function (idAnswer) {
      var sum = 0;
      var answer = this.answers[idAnswer];
      sum = sum + answer.pickedInfo[answer.picked].prise;

      if (answer.picked == answer.pickedInfo.length - 1) {
        var subAnswers = answer.subAnswers;
        for (let idSubAnswer in subAnswers) {
          if (subAnswers[idSubAnswer].active == true) {
            sum = sum + answer.subAnswerPrise
          }
        }
      }
      return sum;
    } ,                                         

// counting for a one-time payment
    countIntegration: function () {
      var sum = 0;
      for (var i in this.answers) {
        sum = sum + this.answerCost(i)
        
      }
      return sum
    },

// makes a beautiful price conclusion
    prettily: function ( num ) {
      var prettilyNum = "";

      if ( num == 0 ) {
        prettilyNum = "Бесплатно"
      } else {
        var strRevNum = (num + "").split("").reverse().join("")
        var i = 3
        while ( i <= strRevNum.length ) {
          prettilyNum = prettilyNum + " " + strRevNum.slice(i - 3, i) //prettilyNum = strRevNum
          i = i + 3
        }
        if (strRevNum.slice(i - 3) != ""){
          prettilyNum = prettilyNum + " " + strRevNum.slice(i - 3)
        }
        prettilyNum = (prettilyNum + "").split("").reverse().join("")
        prettilyNum = " +" + prettilyNum + " p."
        
      }
      return prettilyNum;
    },

// creates infinite checkboxes and tracks their clicks
    endlessField: function (iAnswer, iSubAns) {
      var subAnswers = this.answers[iAnswer].subAnswers;
      var lastId = subAnswers.length - 1
      if (subAnswers[lastId].text != 0) {
        subAnswers[iSubAns].active = true
        subAnswers.push(
          {
            id: lastId + 1,
            text: "",
            active: false,
            isLabel: false,
            msg: [],
          }
        )
      } else if (subAnswers[iSubAns].text != 0) {
        subAnswers[iSubAns].active = true
      } else if (subAnswers[iSubAns].text.length == 0) {
        subAnswers[iSubAns].active = false
        subAnswers.splice(iSubAns, 1); 
      }  
    },

// sets the price for the number of users
    maintFun: function() {
      var sum = 0;
      if(this.users[0].maintenance >= 1 && this.users[0].maintenance <= 2000000000){
        sum = this.users[0].maintenance * 500;
      }
      return sum;
    },
   
// sets the price for technical support
    userFun: function() {
      var sum = 0;
      if(this.users[0].user >= 0 && this.users[0].user <= 5){
        sum = 0
      } else if(this.users[0].user >= 6 && this.users[0].user <= 10){
        sum = this.users[0].user * 500;
      } else if(this.users[0].user >= 11 && this.users[0].user <= 100){
        sum = this.users[0].user * 700;
      } else if(this.users[0].user >= 101 && this.users[0].user <= 500){
        sum = this.users[0].user * 600;
      } else if(this.users[0].user >= 501 && this.users[0].user <= 20000000000){
        sum = this.users[0].user * 400;
      }
      return sum;
    },

// calculating the monthly payment

    monthlySumFun: function() {
      let sum = this.maintFun () + this.userFun ();
      return sum
    },
// сохранить джейсон при нажатии 
  async saveJS () {

 // работает   

    // var url = "http://localhost:3000/api/records"
    // var data = {
    //   answers: this.answers,
    //   users: this.users,
    //   forma: this.forma,
    //   }

    //  fetch(url, {
    //     method: "POST", // *GET, POST, PUT, DELETE, etc.
    //     mode: "no-cors", // no-cors, cors, *same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: "same-origin", // include, *same-origin, omit
    //     headers: {
    //       // "Accept": "application/json", 
    //       // "Content-Type": "application/x-www-form-urlencoded; charset=utf-8", // будет отправлять не красиво, но в файлик запишется 
    //       // "Content-Type": "text/plain; charset=utf-8",  // будет отправлять красиво, но мозги не смогут обработать 
    //       // "Accept": "text/plain; charset=utf-8",
          
    //     },
    //     redirect: "follow", // manual, *follow, error
    //     referrer: "no-referrer", // no-referrer, *client
    //     body:JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
    //   })
    //   .then(response => response.json()); 
     

    
// Работает 

      axios({
        url: "http://localhost:3000/api/records",
        method: "post",
        // headers: {
        //   "Accept": "application/json", 
        //   "Content-Type": "text/plain; charset=utf-8",  
        // },
        data:
          {
            "answers": this.answers,
            "forma": this.forma,
            "users": this.users,
          }
      });
      

 /* не работает
      var qs = require("qs");
      //axios.post("/foo", qs.stringify({ "bar": 123 });
      axios.post("http://192.168.0.199:3000/api/records", qs.stringify(
        {
          "answers": this.answers,
          "forma": this.forma,
          "users": this.users,
        }
        //{1: "kazaboza"}
      ))
      */ 

/*
// не работает
      axios({
        url: "http://localhost:3000/api/records",
        method: "post",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          data
        ),
        data: {},
      });
      
*/
/*
     
      const rawResponse = await fetch(url, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin": "*",
          //"Access-Control-Allow-Methods": "POST",
          //"Access-Control-Allow-Headers": "Authorization, Content-Type",
        },
        body: JSON.stringify(
          {
            "n": "kazaboza",
          }
          
        )
      })
      const content = await rawResponse.json();
      alert(content);
      */

      /*
      const configHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      };
      */

      /*
      {
        "answers": this.answers,
        "forma": this.forma,
        "users": this.users,
      }
      */

      //.then(res => {
      //  alert(res)
      //})
      //.then(res => {
      //  if (res.ok) {
      //    alert ("Данные сохранены")
      //  } else {
      //    alert ("Ошибка сохранения!");
      //  }
      //})
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only li {
  display: inline-block;
  margin: 0 10px;
}-->
<style scoped>
h1 {
  font-size: 200%;
 

}

h2 {
  font-size: 150% 
}

h3 {
  font-size: 130%;
  color: #ffffff;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  text-align: right;
  color: #42b983;
}

p {
  text-align: left;
  margin-bottom: 0px;
  margin-top: 10px;
}

label {
  font-size: 120%;
  padding-left: 2%;
}
.long {
  width: 60%;
}
.color {
  border-radius: 0px !important ;
  border-color:white white rgb(10, 10, 10) !important;
  padding-bottom: 0px;
  padding-top: 0px;
  border-top-width: 0px;
  border-left-width: 0px;
  padding-left: 0px;
  padding-right: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px !important; 
}

.button {
  width: 50%;
  height: 30px;
  color: rgb(255, 255, 255);
  font-weight: 300;
  position: relative;
  letter-spacing: 2px;
  background: #1a1a1a
  }

.info {
  background: #232323;
  padding-left: 20%;
  padding-right: 0;
  padding-top: 16px;
  padding-bottom: 10px;
  text-align: left;
  margin-top: 10px;

}

.message {
  border: #1a1a1a;
  background: rgb(255, 255, 255);
  padding-left: 20px;
  padding-right: 20px;
}

</style>



