const app = angular.module('onTheRocksApp', [])

app.controller('MainController', ['$http', function($http){

    this.showWhiskey = null;
    this.showTequila = null;
    this.showRum = null;
    this.showGin = null;
    this.showVodka = null;

    this.modal = false // Toggle Modal
    this.signUpModal = false // Toggle Sign Up Modal
    this.logInModal = false // Toggle Log In Modal
    this.userSavedDrinks = false // Show Saved Drinks

    // SHOW DRINK MODAL
    this.showDrink = (drink) => {
      this.drink = drink
      this.modal = !this.modal
        $http({
            method:'GET',
            url:'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.drink.idDrink
        }).then(response => {
            this.drink = response.data.drinks[0];
    })}

    // SHOW SAVED DRINK MODAL
    this.showSavedDrink = (drink) => {
      this.drink = drink
      this.modal = !this.modal
      console.log(drink);
    }

    // CLOSE MODALS
    this.closeModal = () => {
      this.modal = false
    }

    // WHISKEY DRINK LIST
    this.toggleWhiskey = () => {
        this.showWhiskey = !this.showWhiskey;
        this.showTequila = null;
        this.showRum = null;
        this.showGin = null;
        this.showVodka = null;
    }

    // TEQUILA DRINK LIST
    this.toggleTequila = () => {
        this.showWhiskey = null;
        this.showTequila = !this.showTequila;
        this.showRum = null;
        this.showGin = null;
        this.showVodka = null;
    }

    // RUM DRINK LIST
    this.toggleRum = () => {
        this.showWhiskey = null;
        this.showTequila = null;
        this.showRum = !this.showRum;
        this.showGin = null;
        this.showVodka = null;
    }

    // GIN DRINK LIST
    this.toggleGin = () => {
        this.showWhiskey = null;
        this.showTequila = null;
        this.showRum = null;
        this.showGin = !this.showGin;
        this.showVodka = null;
    }

    // VODKA DRINK LIST
    this.toggleVodka = () => {
        this.showWhiskey = null;
        this.showTequila = null;
        this.showRum = null;
        this.showGin = null;
        this.showVodka = !this.showVodka;
    }

    // SPECIFIC DRINK
    this.getDrinkByName = (drink) => {
        $http({
            method:'GET',
            url:'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drink.idDrink
        }).then(response => {
            console.log(response);
        }, error => {
            console.log(error);
        })
    }

    // WHISKEY DRINKS
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

    // TEQUILA DRINKS
    this.getAllTequilaDrinks = () => {
        $http({
            method:'GET',
            url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila'
        }).then(response => {
            this.allTequilaDrinks = response.data.drinks;
        }, error => {
            console.log(error);
        })
    }

    this.getAllTequilaDrinks();

    // RUM DRINKS
    this.getAllRumDrinks = () => {
        $http({
            method:'GET',
            url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum'
        }).then(response => {
            this.allRumDrinks = response.data.drinks;
        }, error => {
            console.log(error);
        })
    }

    this.getAllRumDrinks();

    // GIN DRINKS
    this.getAllGinDrinks = () => {
        $http({
            method:'GET',
            url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'
        }).then(response => {
            this.allGinDrinks = response.data.drinks;
        }, error => {
            console.log(error);
        })
    }

    this.getAllGinDrinks();

    // VODKA DRINKS
    this.getAllVodkaDrinks = () => {
        $http({
            method:'GET',
            url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka'
        }).then(response => {
            this.allVodkaDrinks = response.data.drinks;
        }, error => {
            console.log(error);
        })
    }

    this.getAllVodkaDrinks();



    // SAVE DRINKS
    this.saveDrink = (drink) => {
        $http({
            method:'GET',
            url:'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.drink.idDrink
        }).then(response => {
            this.savedDrink = response.data.drinks[0];
            $http({
                method: 'PATCH',
                url: '/saved',
                data:{
                    strDrink: this.savedDrink.strDrink,
                    strDrinkThumb: this.savedDrink.strDrinkThumb,
                    strIngredient1: this.savedDrink.strIngredient1,
                    strIngredient2: this.savedDrink.strIngredient2,
                    strIngredient3: this.savedDrink.strIngredient3,
                    strIngredient4: this.savedDrink.strIngredient4,
                    strIngredient5: this.savedDrink.strIngredient5,
                    strIngredient6: this.savedDrink.strIngredient6,
                    strIngredient7: this.savedDrink.strIngredient7,
                    strIngredient8: this.savedDrink.strIngredient8,
                    strIngredient9: this.savedDrink.strIngredient9,
                    strIngredient10: this.savedDrink.strIngredient10,
                    strIngredient11: this.savedDrink.strIngredient11,
                    strIngredient12: this.savedDrink.strIngredient12,
                    strIngredient13: this.savedDrink.strIngredient13,
                    strIngredient14: this.savedDrink.strIngredient14,
                    strIngredient15: this.savedDrink.strIngredient15,
                    strInstructions: this.savedDrink.strInstructions,
                    strMeasure1: this.savedDrink.strMeasure1,
                    strMeasure2: this.savedDrink.strMeasure2,
                    strMeasure3: this.savedDrink.strMeasure3,
                    strMeasure4: this.savedDrink.strMeasure4,
                    strMeasure5: this.savedDrink.strMeasure5,
                    strMeasure6: this.savedDrink.strMeasure6,
                    strMeasure7: this.savedDrink.strMeasure7,
                    strMeasure8: this.savedDrink.strMeasure8,
                    strMeasure9: this.savedDrink.strMeasure9,
                    strMeasure10: this.savedDrink.strMeasure10,
                    strMeasure11: this.savedDrink.strMeasure11,
                    strMeasure12: this.savedDrink.strMeasure12,
                    strMeasure13: this.savedDrink.strMeasure13,
                    strMeasure14: this.savedDrink.strMeasure14,
                    strMeasure15: this.savedDrink.strMeasure15,
                    notes: ''
                }
            }).then(response => {
                console.log(response)
                this.modal = !this.modal // closes modal
                // this.showUserSavedDrinks() // brings user to their saved drinks
            }, error => {
                console.log(error)
            })
        })
    }

    // Populate Saved Drinks for user function
    this.getSavedDrinks = () => {
        $http({
            method:'GET',
            url:'/saved',
        }).then(response => {
            this.savedDrinks = response.savedDrinks
        }, error => {
            console.log(error);
        })
    }

    // TOGGLE SAVED DRINKS
    this.showUserSavedDrinks = () => {
      this.userSavedDrinks = !this.userSavedDrinks
      this.showWhiskey = null;
      this.showTequila = null;
      this.showRum = null;
      this.showGin = null;
      this.showVodka = null;
    }

    //Add in drink notes / goes with edit route of saved drinks
    this.addDrinkNotes = (drink) => {
        $http({
            method:'PUT',
            url:'/saved/' + drink._id,
            data: {
                strDrink: drink.strDrink,
                strDrinkThumb: drink.strDrinkThumb,
                strIngredient1: drink.strIngredient1,
                strIngredient2: drink.strIngredient2,
                strIngredient3: drink.strIngredient3,
                strIngredient4: drink.strIngredient4,
                strIngredient5: drink.strIngredient5,
                strIngredient6: drink.strIngredient6,
                strIngredient7: drink.strIngredient7,
                strIngredient8: drink.strIngredient8,
                strIngredient9: drink.strIngredient9,
                strIngredient10: drink.strIngredient10,
                strIngredient11: drink.strIngredient11,
                strIngredient12: drink.strIngredient12,
                strIngredient13: drink.strIngredient13,
                strIngredient14: drink.strIngredient14,
                strIngredient15: drink.strIngredient15,
                strInstructions: drink.strInstructions,
                strMeasure1: drink.strMeasure1,
                strMeasure2: drink.strMeasure2,
                strMeasure3: drink.strMeasure3,
                strMeasure4: drink.strMeasure4,
                strMeasure5: drink.strMeasure5,
                strMeasure6: drink.strMeasure6,
                strMeasure7: drink.strMeasure7,
                strMeasure8: drink.strMeasure8,
                strMeasure9: drink.strMeasure9,
                strMeasure10: drink.strMeasure10,
                strMeasure11: drink.strMeasure11,
                strMeasure12: drink.strMeasure12,
                strMeasure13: drink.strMeasure13,
                strMeasure14: drink.strMeasure14,
                strMeasure15: drink.strMeasure15,
                notes: this.editedNotes
            }
        }).then(response => {
            this.loggedInUser = response.data
        })
        this.closeModal();
        this.editedNotes = ''
    }

    // Delete function for saved drinks
    this.deleteSavedDrink = (drink) => {
        $http({
            method:'DELETE',
            url:'/saved/' + drink._id
        }).then(response => {
            this.loggedInUser = response.data
        })
    }

    // Filter Function once we purchase key
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
  this.loggedInUser = false

  // SIGN UP FUNCTION
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
          controller.signUpModal = false
        })
        controller.signupUsername = ''
        controller.signupPassword = ''
  }

  // LOGIN FUNCTION
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
      controller.logInModal = false
      controller.loginUsername = ''
      controller.loginPassword = ''
   })
  }

  // LOG OUT FUNCTION
  this.logout = function(){
      $http({
          url:'/session',
          method: 'DELETE'
      }).then(function(){
          controller.loggedInUser = false
      })
      this.showWhiskey = null;
      this.showTequila = null;
      this.showRum = null;
      this.showGin = null;
      this.showVodka = null;
   }

   // Update Session Cookie FUNCTION
   this.updateUser = () => {
       $http({
           method:'GET',
           url:'/session'
       }).then(response => {
           this.loggedInUser = response.data
       })
   }
  // SESSION COOKIE
  $http({
      method: 'GET',
      url: '/session'
  }).then(function(response){
      if(response.data.username){
          controller.loggedInUser = response.data
      }
  })
  console.log(this.loggedInUser);

}]) // END
