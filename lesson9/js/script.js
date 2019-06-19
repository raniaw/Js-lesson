      ////////////////////////////////////////////////////////////////////////////////////
      function dummy() {
          alert("Hi there!");
      }

      function greetUser(name) {
          if (typeof(name) != "undefined") {
              alert("Hi " + name + " " + surname);
          } else {
              alert("Please enter your name")
          }
      }
      ////////////////////////////////////////////////////////////////////////////////////
      //standard function declaration
      function square(number) {
          return number * number;
      }
      ///////////////////////////////////////////////////////////////////////////////////
      // using anonymous function
      var sum = function(number) {
              return number + 10;
          }
          //Exercise - return full name.
      var exer = function(name, surname) {
              return name + " " + surname;
          }
          // Exercise - return weekday from number.
      function whatDay(number) {
          var weekday
          switch (number) {
              case 0:
                  weekday = "Sunday";
                  break;
              case 1:
                  weekday = "Monday";
                  break;
              case 2:
                  weekday = "Tuesday";
                  break;
              case 3:
                  weekday = "Wednesday";
                  break;
              case 4:
                  weekday = "Thursday";
                  break;
              case 5:
                  weekday = "Friday";
                  break;
              case 6:
                  weekday = "Saturday";
                  break;
              default:
                  alert("Please give the right number")
          }
          return weekday
      }
      ///////////////////////////////////////////////////////////////////////////
      //Using for....
      // for (let i = 0; i <= 6; i++) {
      //     alert(whatDay(i) + ' is the day number ' + i );
      // }
      //Using while.....
      let i = 0;
      while (i < 7) {
          console.log(whatDay(i) + ' is the day number ' + i);
          i++;
      }
      ///////////////////////////////////////////////////////////////////////////////

      function f(x) {
          let s = x * x;
          return (s);
      }
      console.log(f(7));
      let intArr = [12, 13, 14];

      function map(fun, array) {
          let y = [];
          for (let i = 0; i < array.length; i++) {
              y[i] = fun(array[i]);
              console.log((i + 1) + ": " + array[i] + " * " + array[i] + " = " + y[i]);
          }
      }
      map(f, intArr);

      /**
       * 144 
       * 169 
       * 196
       */
      /**
       * Using objects (cars)
       */

      let car = {
          name: "BMW",
          year: "2018",
          color: "rot"
      };
      console.log("Ihr Auto ist \'" + car.name + "\' wurde am " + car.year + " gebaut, hat Farbe \'" + car.color + "\'."); //will call name/year/color.
      //example using countries - alert a country specified in an [array]
      let countries = ["germany", "UK", "china", "italy", "spain"];
      for (let i = 0; i < countries.length; i++) {
          if (countries[i] == "spain") {
              console.log(countries[i]);
          }
      }
      //Exercise - Find which country the car is from
      let car1 = {
          name: "BMW",
          country: "Germany"
      };
      let car2 = {
          name: "Ford",
          country: "USA"
      };
      let car3 = {
          name: "Fiat",
          country: "Italy"
      };
      let cars = [car1, car2, car3];

      function findCarCountry(name) {
          let country;
          for (let i = 0; i < cars.length; i++) {
              if (cars[i].name == name) {
                  country = cars[i].country;
              }
          }
          return country;
      }
      console.log(findCarCountry("Fiat"));

      // in console - findCarCountry ("BWW") will print "Germany" etc.
      ////////////////////////////////////////////////////////////////////////////////
      let newCars = ["bmw", "ford", "ferrari"];

      function findYourCar(car) {
          let found = false;
          for (let i = 0; i < newCars.length; i++) {
              if (newCars[i] == car) {
                  found = true;
              }
          }
          if (found) {
              console.log("Your Car: \'" + car + "\' is found");
          } else {
              console.log("Your Car: \'" + car + "\' is not found");
          }
      }

      console.log(findYourCar("bmw"));
      console.log(findYourCar("mercedes"));

      //Console will confirm which if your car is there
      ////////////////////////////////////////////////////////////////////////////////
      //square of stars with for loop
      for (let i = 0; i <= 10; i++) {
          for (let c = 0; c <= 10; c++) {
              document.write('* ');
          }
          document.write('<br>');
      }
      /////////////////////////////////////////////////////////////////////////////////
      //square of stars with while loop
      document.write('<hr>');
      let height = 0;
      let width = 0;
      while (height <= 10) {
          width = 0;
          while (width <= 10) {
              document.write("* ");
              width++;
          }
          height++;
          document.write("<br>");
      }
      /**
       * Exercise - print triangle of stars form h line and j columns
       * @param {*} h 
       */
      //
      function tri(h) {
          let shape = prompt("Type symbol");
          for (let i = 0; i < h; i++) {
              for (let j = i; j < h; j++) {
                  document.write(shape + " ");
              }
              document.write('<br>');
          }
      }
      console.log(tri(3));