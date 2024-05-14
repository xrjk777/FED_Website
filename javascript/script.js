"use strict";
var currentDay, dateStr, timeStr, i, x;

//Scroll back to top button
function backToTop(){
     window.scrollTo(top);
}

//Pledge
function pledge(){
     var pledgefood = document.getElementById("reducefoodwaste");
     var pledgeenergy = document.getElementById("reduceenergy");
     var pledgeawareness = document.getElementById("raiseawareness");
     var pledgebox = document.getElementById("pledgeinputbox").value;
     var yourPledgesArr = new Array();
     var pledgeArr = new Array (pledgefood, pledgeenergy, pledgeawareness);
     var pledgeNameArr = new Array ("Reduce Food Waste", "Reduce Energy Consumption", "Raise Awareness");

     for(i = 0; i < pledgeArr.length; i++){
          if(pledgeArr[i].checked){
               yourPledgesArr.push(pledgeNameArr[i]);
          }         
     }
     alert("THANK YOU FOR PLEDGING!\n\nYOU HAVE PLEDGED TO: " + yourPledgesArr + "\nADDITIONAL PLEDGES: " + pledgebox);
}

//Feedback Form and Query Form
function submitFeedback(){
     var fNAME = document.getElementById("firstname").value;
     var lNAME = document.getElementById("lastname").value;
     var feedbackGiven = document.getElementById("inputbox").value;
     var likecontent = document.getElementById("likeContent");
     var likedesign = document.getElementById("likeDesign");
     var likelayout = document.getElementById("likeLayout");
     var rating = document.getElementById("websiteRating").value

     var whatYouLikedArr = new Array();
     var featureArr1 = new Array(likecontent, likedesign, likelayout);
     var improvementArr = new Array();
     var featureArr2 = new Array(checkContent, checkDesign, checkLayout)
     var featureNameArr = new Array(" Content", " Design", " Layout");
     
     if(!(isNaN(fNAME)) || !(isNaN(lNAME))){
          alert("Please enter a valid name!");
     }
     else if (feedbackGiven == ""){
          alert("Please enter feedback!");
     }
     else{
          for(i = 0; i < featureArr1.length; i++){
               if(featureArr1[i].checked){
                    whatYouLikedArr.push(featureNameArr[i]);
               }
               if(featureArr2[i].checked){
                    improvementArr.push(featureNameArr[i]);
               }
         }
     alert("Thank you for your feedback\n\nSUMMARY OF FEEDBACK:\nName: " + fNAME + " " + lNAME + "\nFeedback: " + feedbackGiven + "\nWhat you liked: " + whatYouLikedArr + "\nAreas of improvement: " + improvementArr + "\nRating: " + rating);
     }
}

function submitQuery(){
     var fNAME = document.getElementById("nameFirst").value;
     var lNAME = document.getElementById("nameLast").value;
     var email = document.getElementById("email").value;
     var querycategory = document.getElementById("selectquery").value;
     var query = document.getElementById("inputquerybox").value

     if(!(isNaN(fNAME)) || !(isNaN(lNAME))){ //Check for numerical or empty input
          alert("Please enter a valid name!");
     }
     else if(email == ""){
          alert("Please enter your email!");
     }
     else if (query == ""){
          alert("Please enter a query!")
     }
    else{
          alert("Your query has been acknowledged\nI will get back to you within 5 working days.\n\nSUMMARY OF QUERY:\nName: " + fNAME + " " + lNAME + "\nEmail: " + email + "\nQuery Category: " + querycategory + "\nQuery: " + query);
     }

}

//Clock
function displayDate(){
    currentDay = new Date();
    dateStr = currentDay.toLocaleDateString("en-GB"); //en-GB changes date to british format 
    timeStr = currentDay.toLocaleTimeString();
    document.getElementById("dateNow").innerHTML = dateStr + "<br>" + timeStr;
}
setInterval(displayDate, 100); //Runs code every 100ms to display live time

function greetings(){
    currentDay = new Date();
    var TimeofDay = currentDay.getHours()

   if(TimeofDay >= 0 && TimeofDay < 12){
        alert("Good Morning, have a nice day!");
        document.getElementById("timeButton").innerHTML = "<br><div class = 'fa-cloud-sun fa-2x mt-4' id = 'dayDisplay'></div>"
   }
   else if(TimeofDay >= 12 && TimeofDay < 15){
        alert("Good Afternoon!");
        document.getElementById("timeButton").innerHTML = "<br><div class = 'fas fa-sun fa-2x mt-4' id = 'dayDisplay'></div>"
   }
   else if(TimeofDay >= 15 && TimeofDay < 19){
        alert("Good Evening!");
        document.getElementById("timeButton").innerHTML = "<br><div class = 'fas fa-sun fa-2x mt-4' id = 'dayDisplay'></div>"
   }
   else{
        alert("Good Evening, Have a good night!");
        document.getElementById("timeButton").innerHTML = "<br><div class = 'fa-solid fa-moon fa-2x mt-4' id = 'nightDisplay'></div>"
   }
}




