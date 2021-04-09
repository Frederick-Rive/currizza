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

  //declare the price var
  var price = 0.00;

  //Setup the navigation array and the order dictionary
  const mainNavigation = [new NavPage(homeNav, homePage), new NavPage(signNav, account), new NavPage(logNav, account), new NavPage(bioNav, bio), new NavPage(shopNav, shop)];
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
    navigate(homeNav, mainNavigation);
    document.getElementsByTagName("footer")[0].style.marginTop = "1000px";
  });
  signNav.addEventListener('click', function(){
    navigate(signNav, mainNavigation);
    document.getElementsByTagName("footer")[0].style.marginTop = "1000px";
  });
  logNav.addEventListener('click', function(){
    navigate(logNav, mainNavigation);
    document.getElementsByTagName("footer")[0].style.marginTop = "1000px";
  });
  bioNav.addEventListener('click', function(){
    navigate(bioNav, mainNavigation);
    document.getElementsByTagName("footer")[0].style.marginTop = "1000px";
  });
  shopNav.addEventListener('click', function(){
    navigate(shopNav, mainNavigation);
    document.getElementsByTagName("footer")[0].style.marginTop = "1500px";
  });

  //navigation function. to navigate
  function navigate(nav, navArray){
    for (var i = 0; i < navArray.length; i++) {
      if (nav == navArray[i].nav) {
        navArray[i].page.style.display = "block";
        if (nav != document.getElementById('homenav')){
          navArray[i].nav.style.backgroundColor = "#FAA669";
      }
        navArray[i].nav.style.cursor = "default";
      } else {
        if (!(navArray[i].page == account && (nav == signNav || nav == logNav)))
        {
          navArray[i].page.style.display = "none";
        }
        if (navArray[i].nav != document.getElementById('homenav')){
          navArray[i].nav.style.backgroundColor = navArray[i].color;
        }
        navArray[i].nav.style.cursor = "pointer";
      }
    }
  }

  function AddCustomPrice (input, customBox)
  {
    var output = 0.00;
    if (document.getElementById("apricotsauce").checked)
    {
      output += document.getElementById("apricotsauce").value;
    }
    if (document.getElementById("buttersauce").checked)
    {
      output += document.getElementById("buttersauce").value;
    }
    if (document.getElementById("cheesesauce").checked)
    {
      output += document.getElementById("cheesesauce").value;
    }
    if (document.getElementById("coriander").checked)
    {
      output += document.getElementById("coriander").value;
    }
    if (document.getElementById("garlicaioli").checked)
    {
      output += document.getElementById("garlicaioli").value;
    }
    if (document.getElementById("hotchillisauce").checked)
    {
      output += document.getElementById("hotchillisauce").value;
    }
    if (document.getElementById("indianhotchilli").checked)
    {
      output += document.getElementById("indianhotchilli").value;
    }
    if (document.getElementById("lamb").checked)
    {
      output += document.getElementById("lamb").value;
    }
    if (document.getElementById("mozzarella").checked)
    {
      output += document.getElementById("mozzarella").value;
    }
    if (document.getElementById("onion").checked)
    {
      output += document.getElementById("onion").value;
    }
    if (document.getElementById("pepperoni").checked)
    {
      output += document.getElementById("pepperoni").value;
    }
    if (document.getElementById("pineapple").checked)
    {
      output += document.getElementById("pineapple").value;
    }
    if (document.getElementById("seasonedchicken").checked)
    {
      output += document.getElementById("seasonedchicken").value;
    }
    if (document.getElementById("smokeybbq").checked)
    {
      output += document.getElementById("smokeybbq").value;
    }
    if (document.getElementById("sweetchili").checked)
    {
      output += document.getElementById("sweetchili").value;
    }
    if (document.getElementById("tikkamasalasauce").checked)
    {
      output += document.getElementById("tikkamasalasauce").value;
    }
    if (document.getElementById("beef").checked)
    {
      output += document.getElementById("beef").value;
    }
    if (document.getElementById("capsicum").checked)
    {
      output += document.getElementById("chorizo").value;
    }
    if (document.getElementById("chorizo").checked)
    {
      output += document.getElementById("creamybbq").value;
    }
    if (document.getElementById("creamybbq").checked)
    {
      output += document.getElementById("ham").value;
    }
    if (document.getElementById("ham").checked)
    {
      output += document.getElementById("hotperiperisauce").value;
    }
    if (document.getElementById("hotperiperisauce").checked)
    {
      output += document.getElementById("jalapenos").value;
    }
    if (document.getElementById("jalapenos").checked)
    {
      output += document.getElementById("mangosauce").value;
    }
    if (document.getElementById("mangosauce").checked)
    {
      output += document.getElementById("olives").value;
    }
    if (document.getElementById("olives").checked)
    {
      output += document.getElementById("paneer").value;
    }
    if (document.getElementById("onion").checked)
    {
      output += document.getElementById("onion").value;
    }
    if (document.getElementById("pepperoni").checked)
    {
      output += document.getElementById("pepperoni").value;
    }
    if (document.getElementById("pineapple").checked)
    {
      output += document.getElementById("pineapple").value;
    }
    if (document.getElementById("seasonedchicken").checked)
    {
      output += document.getElementById("seasonedchicken").value;
    }
    if (document.getElementById("smokeybbq").checked)
    {
      output += document.getElementById("smokeybbq").value;
    }
    if (document.getElementById("sweetchili").checked)
    {
      output += document.getElementById("sweetchili").value;
    }
    if (document.getElementById("tikkamasalasauce").checked)
    {
      output += document.getElementById("tikkamasalasauce").value;
    }
  }
});
