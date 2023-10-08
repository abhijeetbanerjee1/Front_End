//Name: Abhijeet Banerjee
//G# 01349260
//SWE 642

//Greetings
var now = new Date();
var hour = now.getHours();
if ( hour < 12 )
  document.getElementById("greetings").innerHTML = "Good Morning, ";
else
{
  hour = hour - 12;

  if ( hour < 6 )
  document.getElementById("greetings").innerHTML = "Good Afternoon, ";
else 
  document.getElementById("greetings").innerHTML = "Good Evening, ";
}

function setCookie(cname,cvalue,exdays) 
{
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) 
{
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) 
  {
    let c = ca[i];
    while (c.charAt(0) == ' ') 
    {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) 
    {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() 
{
  let user = getCookie("username");
  if (user != "") 
  {
    document.getElementById("name").innerHTML =user + " Welcome to SWE 642 Survey";
  } 
  else 
  {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) 
     {
      document.getElementById("name").innerHTML =user + " Welcome to SWE 642 Survey";
      setCookie("username", user, 30);
     }
  }
  document.getElementById("wrong").innerHTML ="Not " +user;
}


function wrongPerson(){
  let user = prompt("Please enter your name:","");
     if (user != "" && user != null) 
     {
      document.getElementById("name").innerHTML =user + " Welcome to SWE 642 Survey";
      setCookie("username", user, 30);
     }
	location.reload();
}

//Average and Maximum
function average() 
{
  var inputString = document.getElementById( "inputVal" ).value;
  var tokens = inputString.split(',').map(Number); 
  var data = document.getElementById("p01");
  let i = 0
  var max = 0
  var total = 0
  var avg = 0
  var count = 0
  var flag = 1
  if (tokens.length !== 10)
  {
    data.innerHTML = "Error Please Enter 10 numbers";
    max = "";
    avg = "";
    return false;
  }
  while (i < tokens.length)
  {
    if(tokens[i] < 1 || tokens[i] > 100 || isNaN(tokens[i]))
    {
      data.innerHTML = "Input should have only NUMBERS between 1 and 100";
      max = "";
      avg = "";
      flag = 0
      break;
    }
    else
    {
      count++
      total = total + tokens[i]
      if (tokens[i] > max)
      {
        max = tokens[i];
      }
      data.innerHTML = "";
    }
    i++;
  }
  if(flag)
  {
    avg = total / count;
  }

  document.getElementById("array").innerHTML = avg
  document.getElementById("token").innerHTML = max
}

// Form Validation Function
function formvalidation(event) 
{

  var nameformat = /^[A-Za-z ]+$/;
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var addressformat = /^[A-Za-z0-9 ]+$/;
  var selectedcount = 1
  var checkscount = 2
  var errormsgdisp = "";

  // Validating Input Name
  if (!document.getElementById("name-id").value.match(nameformat)) 
  {
    document.getElementById("name-id").value = "";
    errormsgdisp += "&rarr; Name text box should contain only Alphabets.<br>";
  }

  // Validating Input Email
  if (!document.getElementById("email-id").value.match(emailformat)) 
  {
    document.getElementById("email-id").value = "";
    errormsgdisp += "&rarr; Email address format should be valid.<br>";    
  }

  // Validating Input Address
  if (!document.getElementById("inputstreet-id").value.match(addressformat)) 
  {
    document.getElementById("inputstreet-id").value = "";
    errormsgdisp += "&rarr; Address text boxes should contain only appropriate numeric, alphabet or alphanumeric characters.<br>";  
  }

  // Validating at least one radio button option is selected
  var selected = document.getElementsByName("source");
  var count = 0;
  var i = 0
  while(i <selected.length)
  {
    if(selected[i].checked)
    {
      count++
    }
    i++
  }
  if(count < selectedcount)
  {
    errormsgdisp += "&rarr; At least one Source(radio button) should be selected.<br>";
  }

  // Validating at least two checkboxes are checked
  var checks = document.getElementsByName("liked");
  var count = 0;
  var i = 0
  while(i < checks.length)
  {
    if(checks[i].checked)
    {
      count++
    }
    i++
  }
  if(count < checkscount)
  {
    errormsgdisp += "&rarr; At least two Likes(checkboxes) should be checked.<br>";
  }

  //Display JQ Popup dialog box
  if (errormsgdisp !== "") 
  {
    document.getElementById("box-title").innerHTML = "Error :"
    document.getElementById("box-content").innerHTML = errormsgdisp

    //$(document).ready(function(){
      //Show Popup box
      $("#popup-container").show();
      event.preventDefault();
      //Close Popup box
      $("#close-btn").click(function(){
        $("#popup-container").hide();
      })
    //})
    return false;
  } 
  else 
  { 
    document.getElementById("box-title").innerHTML = "Congratulations !"
    document.getElementById("box-content").innerHTML = "Your Feedback has been Submitted."

    //$(document).ready(function(){
      //Show Popup box
      $("#popup-container").show();
      event.preventDefault();
      
      //Close Popup box
      $("#close-btn").click(function(){
        $("#popup-container").hide();
        $("#reset-id").click();
      })
      
    //})
    return true;
  }
}

//Reset the Form
function formreset() {
  document.getElementById("city-id").innerHTML = "";
  document.getElementById("state-id").innerHTML = "";
  document.getElementById("zip-error").innerHTML = "";
  document.getElementById("array").innerHTML = "";
  document.getElementById("token").innerHTML = "";
  document.getElementById("p01").innerHTML = "";
}

// Zip code section
function validateZip(zip) {
  try {
      var asyncRequest = new XMLHttpRequest();
      asyncRequest.onreadystatechange = function () {
          callBack(zip, asyncRequest);
      };
      asyncRequest.open("GET", "zips.json", true);
      asyncRequest.withCredentials = true;
      asyncRequest.send();
  }
  catch (exception) {
      alert("Request failed.");
  }
}

function callBack(zip, asyncRequest) {
  document.getElementById("zip-error").innerHTML = "Checking zip...";
  document.getElementById('city-id').innerHTML = "";
  document.getElementById('state-id').innerHTML = "";
  if (asyncRequest.readyState == 4) {
      if (asyncRequest.status == 200 || asyncRequest.status == 304) {
          var data = JSON.parse(asyncRequest.responseText);
          result = isValid(zip, data)
          if (result.valid) {
              document.getElementById('zip-error').innerHTML = '';
              document.getElementById('city-id').innerHTML = result.city;
              document.getElementById('state-id').innerHTML = result.state;
          } else {
              document.getElementById("zip-error").innerHTML="Invalid Zip Code.";
          }
      }
  }
}

function isValid(zip, data) {
  var zipcodes = data.zipcodes;
  for (var element of zipcodes) {
      if(element.zip === zip) {
          return {
              valid: true,
              city: element.city,
              state: element.state
          };
      }
  }
  return {
      valid: false
  };
}