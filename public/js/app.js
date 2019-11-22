const app = angular.module('onTheRocksApp', [])

app.controller('MainController', ['$http', function($http){

    this.getDrinkByName = (drink) => {
        $http({
            method:'GET',
            url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink
        }).then(response => {
            console.log(response);
        }, error => {
            console.log(error);
        })
    }

    this.getAllWhiskeyDrinks = () => {
        $http({
            method:'GET',
            url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey'
        }).then(response => {
            this.allWhiskeyDrinks = response.data.drinks;
        }, error => {
            console.log(error);
        })
    }

    this.getAllWhiskeyDrinks();

    this.getAllTequilaDrinks = () => {
        $http({
            method:'GET',
            url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila'
        }).then(response => {
            this.allTequilaDrinks = response.data.drinks;
            console.log(response.data);
        }, error => {
            console.log(error);
        })
    }

    this.getAllTequilaDrinks();

    this.getAllRumDrinks = () => {
        $http({
            method:'GET',
            url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum'
        }).then(response => {
            this.allRumDrinks = response.data.drinks;
            console.log(response.data);
        }, error => {
            console.log(error);
        })
    }

    this.getAllRumDrinks();

    this.getAllGinDrinks = () => {
        $http({
            method:'GET',
            url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'
        }).then(response => {
            this.allGinDrinks = response.data.drinks;
            console.log(response.data);
        }, error => {
            console.log(error);
        })
    }

    this.getAllGinDrinks();

    this.getAllVodkaDrinks = () => {
        $http({
            method:'GET',
            url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka'
        }).then(response => {
            this.allVodkaDrinks = response.data.drinks;
            console.log(response.data);
        }, error => {
            console.log(error);
        })
    }

    this.getAllVodkaDrinks();
    //Filter Function once we purchase key
    // this.getListByMultipleIngredients = (ingredients) => {
    //     $http({
    //         method:'GET',
    //         url:'https://www.thecocktaildb.com/api/json/v1/2/filter.php?i=' + ingredients
    //     }).then(response => {
    //         console.log(response);
    //     }, error => {
    //         console.log(error);
    //     })
    // }

    const controller = this
   this.loggedINUser = false

    // Sign up function
    this.signup = function(){
       $http({
            url:'/users',
            method: 'POST',
            data: {
                username: this.signupUsername,
                password: this.signupPassword
            }
        }).then(function(response){
            controller.loggedInUser = response.data
        })
    }

   //  Login function
    this.login = function(){
     $http({
         url:'/session',
         method: 'POST',
         data:{
             username: this.loginUsername,
             password: this.loginPassword
         }
     }).then(function(response){
        if(response.data.username){
            controller.loggedInUser = response.data
        } else {
            controller.loginUsername = null;
            controller.loginPassword = null;
        }
     })
    }

    // Session Cookie
   $http({
       method: 'GET',
       url: '/session'
   }).then(function(response){
       if(response.data.username){
           controller.loggedInUser = response.data
       }
   })


}])
