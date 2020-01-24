<template>
  <div class="container">
    <div class="row">
      <h1 class="col-md-12 " align="center" > Разовый платеж (Внедрение) <a>  {{ prettily(countIntegration()) }} </a> </h1>
      <div  class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left form-check">
          <h2> {{ answers[0].text }} {{ prettily(answerCost(0)) }}  </h2> 
          <br>
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
            > 
            <label v-else type="text"> {{ answers[0].subAnswers[i].text }} </label>
            <label><a> {{ prettily(answers[0].subAnswerPrise) }} </a></label>
          
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left form-check">
          <h2> {{ answers[1].text }} {{ prettily(answerCost(1)) }} </h2>
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
        <div class="text-left form-check"> 
          <h2> {{answers[2].text}}  {{ prettily(answerCost(2)) }} </h2>
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
            > 
            <label v-else type="text"> {{ answers[2].subAnswers[i].text }} </label>
            <label><a> {{ prettily(answers[2].subAnswerPrise) }} </a></label>
          
            </div>
          </div> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left form-check">
          <h2>  {{answers[3].text}}  {{ prettily(answerCost(3)) }} </h2>
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
            > 
            <label v-else type="text"> {{ answers[3].subAnswers[i].text }} </label>
            <label><a> {{ prettily(answers[3].subAnswerPrise) }} </a></label>
          
          </div>
        </div> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" > 
        <div class="text-left form-check">
          <h2> {{answers[4].text}} {{ prettily(answerCost(4)) }} </h2>
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
            > 
            <label v-else type="text"> {{ answers[4].subAnswers[i].text }} </label>
            <label><a> {{ prettily(answers[4].subAnswerPrise) }} </a></label>

          </div>
        </div> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left form-check">
          <h2> {{answers[5].text}}  {{ prettily(answerCost(5)) }} </h2>
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
            > 
            <label v-else type="text"> {{ answers[5].subAnswers[i].text }} </label>
            <label><a> {{ prettily(answers[5].subAnswerPrise) }} </a></label>
            
          </div>
        </div> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" > 
        <div class="text-left form-check">
          <h2> {{answers[6].text}}  {{ prettily(answerCost(6)) }} </h2>
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
            > 
            <label v-else type="text"> {{ answers[6].subAnswers[i].text }} </label>
            <label><a> {{ prettily(answers[6].subAnswerPrise) }} </a></label>
          
          </div>
        </div> 
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left  form-check">
        <h2>База: Разовый платеж (внедрение):  </h2> <br>
        Действует при указанном наборе опций  {{ prettily(countIntegration()) }} 
        </div>
      </div>
      <h1 class="col-md-12 " align="center" > Ежемесячный платеж <a> {{ prettily(monthlySumFun()) }} </a></h1>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left form-check">
          <h2> {{ users[0].text0 }}  </h2> 
          <input type="text"  id="E0" placeholder="Введите число пользователей" v-model="users.user"> 
          <label for="E0"><a> {{prettily(userFun())}} </a></label>
        </div>
      </div>
      <div class="col-lg-6 col-md-12" style="padding-top: 15px; padding-bottom: 15px;" >
        <div class="text-left form-check">
          <h2> {{ users[0].text1 }}  </h2> 
          <input type="text"  id="E0" placeholder="Количество пользователей" v-model="users.maintenance"> 
          <label for="E1"><a> {{ prettily(maintFun()) }}  </a></label>
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
      
        num = num.split("").reverse().join("")
        prettilyNum = " +" + num + " p."
        alert ( num )
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
      if(this.users.maintenance >= 1 && this.users.maintenance <= 2000000000){
        sum = this.users.maintenance * 500;
      }
      return sum;
    },
   
// sets the price for technical support
    userFun: function() {
      var sum = 0;
      if(this.users.user >= 0 && this.users.user <= 5){
        sum = 0
      } else if(this.users.user >= 6 && this.users.user <= 10){
        sum = this.users.user * 500;
      } else if(this.users.user >= 11 && this.users.user <= 100){
        sum = this.users.user * 700;
      } else if(this.users.user >= 101 && this.users.user <= 500){
        sum = this.users.user * 600;
      } else if(this.users.user >= 501 && this.users.user <= 20000000000){
        sum = this.users.user * 400;
      }
      return sum;
    },

// calculating the monthly payment
    monthlySumFun: function() {
      let sum = this.maintFun () + this.userFun ();
      return sum
    }
  }
}

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



