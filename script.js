let assignTime = document.getElementsByTagName("h2")
let assignValue = document.getElementsByTagName("h1")
    function clockstart(){  
        let time = new Date();
        let hrs = time.getHours();
        let mins = time.getMinutes();
        let secs = time.getSeconds();
        let AMPM = (hrs >= 12) ? "PM" : "AM";

        if(hrs>= 5 && hrs<12){
            assignValue[1].innerHTML = `GRAB SOME HEALTHY BREAKFAST!!!`;
        }
        else if(hrs>=12 && hrs<16){
            assignValue[1].innerHTML = `LET'S HAVE SOME LUNCH !!`;
        }
        else if(hrs>=16 && hrs<20){
            assignValue[1].innerHTML = `STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!`;
        }
        else if(hrs>=20 && hrs<=23){
            assignValue[1].innerHTML = `CLOSE YOUR EYES AND GO TO SLEEP`;
        }


        if (hrs === 0) {
            hrs = 12; 
        } else if (hrs > 12) {
            hrs -= 12; 
        }

        hrs = hrs < 10 ? "0" + hrs : hrs;
        mins = mins < 10 ? "0" + mins : mins;
        secs = secs < 10 ? "0" + secs : secs;
    
        assignTime[0].innerHTML = `${hrs} </br>hours`;
        assignTime[1].innerHTML = `${mins} </br>mins`;
        assignTime[2].innerHTML = `${secs} </br>secs`;
        assignTime[3].innerHTML = `${AMPM}`;
        
    }

    setInterval(()=>{
        clockstart();
    }, 1000);

    function clockFunction() {
       
        var drop1 = document.getElementById("select_1");
        var selectedValue = drop1.value;

        var drop2 = document.getElementById("select_2");
        var selectedValue2 = drop2.value;

        var drop3 = document.getElementById("select_3");
        var selectedValue3 = drop3.value;

        var drop4 = document.getElementById("select_4");
        var selectedValue4 = drop4.value;

        var now = new Date();
        var currentHour = now.getHours();

        if(selectedValue === currentHour.toString()) {
            var textDiv = document.getElementById("content_1");
            textDiv.textContent = "GOOD MORNING!! WAKE UP !!";

            var imageDiv = document.getElementById("image");
            imageDiv.innerHTML = '<img src="./good_morning.svg" id="morningedit" alt=""></img>';
        }
        
        if(selectedValue2 === currentHour.toString()) {
            var textDiv = document.getElementById("content_1");
            textDiv.textContent = "GOOD AFTERNOON !! TAKE SOME SLEEP";

            var imageDiv = document.getElementById("image");
            imageDiv.innerHTML = '<img src="./Good_afternoon.svg" id="afternoonedit" alt="">';
        }

        if(selectedValue3 === currentHour.toString()) {
            var textDiv = document.getElementById("content_1");
            textDiv.textContent = "GOOD EVENING !!";

            var imageDiv = document.getElementById("image");
            imageDiv.innerHTML = '<img src="./good_evening.png" id="eveningedit" alt="">';
        }
        
        if(selectedValue4 === currentHour.toString()) {
            var textDiv = document.getElementById("content_1");
            textDiv.textContent = "GOOD NIGHT !!";

            var imageDiv = document.getElementById("image");
            imageDiv.innerHTML = '<img src="./good_night.svg" id="nightedit" alt="">';
        }
        
        var dropdown1 = document.getElementById("select_1");
        var selectedOption1 = dropdown1.options[dropdown1.selectedIndex].text;
        var selectedTextElement1 = document.getElementById("text_t1");
        selectedTextElement1.textContent = "Wake Up Time: " + selectedOption1;

        var dropdown2 = document.getElementById("select_2");
        var selectedOption2 = dropdown2.options[dropdown2.selectedIndex].text;
        var selectedTextElement2 = document.getElementById("text_t2");
        selectedTextElement2.textContent = "Lunch Time: " + selectedOption2;

        var dropdown3 = document.getElementById("select_3");
        var selectedOption3 = dropdown3.options[dropdown3.selectedIndex].text;
        var selectedTextElement3 = document.getElementById("text_t3");
        selectedTextElement3.textContent = "Nap Time: " + selectedOption3;

        var dropdown4 = document.getElementById("select_4");
        var selectedOption4 = dropdown4.options[dropdown4.selectedIndex].text;
        var selectedTextElement4 = document.getElementById("text_t4");
        selectedTextElement4.textContent = "Night Time: " + selectedOption4;
    }