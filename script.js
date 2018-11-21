
var app = new Vue({
  el: '#test',

  data: {
    number1 : 1,
    number2: 1,
    number3: 1,
    number4: 1,
    number5: 1,
    number6 : 1,
    number7: 1,
    number8: 1,
    number9: 1,
    number10: 1,
    change: 0
  },

  computed: {
    result: function () {
      let num1 = this.number1;
      let num2 = this.number2;
      let num3 = this.number3;
      let num4 = this.number4;
      let num5 = this.number5;
      let num6 = this.number6;
      let num7 = this.number7;
      let num8 = this.number8;
      let num9 = this.number9;
      let num10 = this.number10;
      let change = this.change;

      let sum = 0;
      const list = document.querySelectorAll('.test__items'); 
      list.forEach(function(it) {
        if (!it.classList.contains('hidden')) {
          switch (it.id) {
            case "1": 
              sum += num1 / num2;
              break;
            case "2": 
              sum += num3 / num4;
              break;
            case "3": 
              sum += num5 / num6;
              break;
            case "4": 
              sum += num7 / num8;
              break;
            case "5": 
              sum += num9 / num10;
              break;
          };
        }
      });    

      const numbers = document.querySelectorAll('.test__number');
      numbers.forEach(function(it) {
        if (!it.checkValidity()) {
          sum = 'Диапазон цифр от 1 до 99'
        }
      });

      return sum;
    }
  },

  methods: {

    remove: function (evt) {
      evt.target.parentNode.classList.add('hidden');

      const list = document.querySelectorAll('.test__items');      
      const buttons = document.querySelectorAll('.test__delete');
      let count = 5;
      list.forEach(function(it) {
        if (it.classList.contains('hidden')) {
          count--;
        }
      });

      //Убираем кнопку удалить дробь, если дробей меншь 3-х
      if (count < 3) {
        buttons.forEach(function(it) {
          it.classList.add('hidden');
        });
      };

      //Используется для принудительного обновления результата расчета
      this.change++;
    },

    add: function() {

      const list = document.querySelectorAll('.test__items');
      const buttons = document.querySelectorAll('.test__delete');
      let flag = true;
      let count = 5;
      list.forEach(function(it) {
        if ( (flag) && (it.classList.contains('hidden')) ) {
          it.classList.remove('hidden');
          flag = false;
        };
        if (it.classList.contains('hidden')) {
          count--;
        }
      });
  
      //Показываем кнопку удалить дробь, если дробей больше 2-х
      if (count > 2) {
        buttons.forEach(function(it) {
          it.classList.remove('hidden');
        });
      };

      //Используется для принудительного обновления результата расчета
      this.change++;
    },

  }
})