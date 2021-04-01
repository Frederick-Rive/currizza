document.addEventListener("DOMContentLoaded", function(event){
  //Setup the navigation class at the top of the page
  class NavPage
  {
    constructor(nav, page)
    {
      this.nav = nav;
      this.page = page;
      this.color = nav.style.backgroundColor;
    }
  }

  //Get references for the navs
  var homeNav = document.getElementById('homenav');
  var signNav = document.getElementById('signnav');
  var logNav = document.getElementById('lognav');
  var bioNav = document.getElementById('bionav');
  var shopNav = document.getElementById('shopnav');
  var monthlySpecial = document.querySelector('article');

  //Get references for all the 'pages'
  var homePage = document.getElementById('homepage');
  var account = document.getElementById('account');
  var bio = document.getElementById('bio');
  var shop = document.getElementById('store');
  var checkOut = document.getElementById('checkout');

  //Setup the initial state
  signNav.style.backgroundColor = "#F3D362";
  logNav.style.backgroundColor = "#F3D362";
  bioNav.style.backgroundColor = "#F3D362";
  shopNav.style.backgroundColor = "#D95252";
  signNav.style.cursor = "pointer";
  logNav.style.cursor = "pointer";
  bioNav.style.cursor = "pointer";
  shopNav.style.cursor = "pointer";
  monthlySpecial.style.cursor = "pointer";
  homePage.style.display = "block";
  account.style.display = "none";
  bio.style.display = "none";
  shop.style.display = "none";
  checkOut.style.display = "none";

  var home = new NavPage(signNav, account);

  //Setup the navigation array and the order dictionary
  const navigation = [new NavPage(homeNav, homePage), new NavPage(signNav, account), new NavPage(logNav, account), new NavPage(bioNav, bio), new NavPage(shopNav, shop)];
  const orderDict = {
    "bollywoodBomb9": 12.99,
    "bollywoodBomb12": 18.99,
    "desiVidesi9": 11.99,
    "desiVidesi12": 17.99,
    "margherita": 13.99,
    "paneerGoNuts9": 13.99,
    "paneerGoNuts12": 19.99,
    "paneerMangoTango9": 12.99,
    "paneerMangoTango12": 18.99,
    "paneerOnFire9": 12.99,
    "paneerOnFire12": 18.99,
    "popeyeLover9": 12.99,
    "popeyeLover12": 18.99,
    "chickenWellington9": 12.99,
    "chickenWellington12": 18.99,
    "currizza'sFavourite9": 13.99,
    "currizza'sFavourite12": 19.99,
    "desiPepperoni9": 12.99,
    "desiPepperoni12": 19.99,
    "fireyVindaloo9": 13.99,
    "fireyVindaloo12": 19.99,
    "hotDehli-belly9": 12.99,
    "hotDehli-belly12": 18.99,
    "kiwi'sFavourite9": 11.99,
    "kiwi'sFavoruite12": 17.99,
    "meatMasala9": 13.99,
    "meatMasala12": 19.99,
    "modiPremee9": 12.99,
    "modiPremee12": 18.99,
    "nutDelight9": 13.99,
    "nutDelight12": 19.99,
    "pepperizo9": 11.99,
    "pepperizo12": 15.99,
    "slumDog9": 13.99,
    "slumDog12": 20.99,
    "tandooriChicken9": 11.99,
    "tandooriChicken12": 17.99,
    "7up": 2.99,
    "gatorade": 4.99,
    "gingerBeer": 3.50,
    "orangeJuice": 3.99,
    "blueberryKombucha": 3.50,
    "cherryPlumKombucha": 3.50,
    "feijoaKombucha": 3.50,
    "pepsi": 4.50,
    "pepsiMax": 4.50,
    "monsterEnergy": 3.99,
    "garlicBread": 6.49,
    "spicyChips": 5.99,
    "tandooriChickenBites": 6.49,
    "wonderBomb": 6.49,
    "curlyFries": 4.99,
    "brownie": 4.49,
    "passionfruitPeachCheesecake": 4.49,
    "tiramisuSlice": 4.49
  };

  //Get the navigation working
  homeNav.addEventListener('click', function(){
    navigate(homeNav);
  });
  signNav.addEventListener('click', function(){
    navigate(signNav);
  });
  logNav.addEventListener('click', function(){
    navigate(logNav);
  });
  bioNav.addEventListener('click', function(){
    navigate(bioNav);
  });
  shopNav.addEventListener('click', function(){
    navigate(shopNav);
  });

  //navigation function. to navigate
  function navigate(nav){
    for (var i = 0; i < navigation.length; i++) {
      if (nav == navigation[i].nav) {
        navigation[i].page.style.display = "block";
        if (nav != document.getElementById('homenav')){
          navigation[i].nav.style.backgroundColor = "#FAA669";
      }
        navigation[i].nav.style.cursor = "default";
      } else {
        navigation[i].page.style.display = "none";
        if (navigation[i].nav != document.getElementById('homenav')){
          navigation[i].nav.style.backgroundColor = navigation[i].color;
        }
        navigation[i].nav.style.cursor = "pointer";
      }
    }
  }
});
