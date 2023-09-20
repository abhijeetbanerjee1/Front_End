window.onload = function(){
    const minutes = document.getElementById("minutes");
    const tens = document.getElementById("tens");
    const seconds = document.getElementById("seconds");

    const startBtn = document.getElementById("start-btn");
    const stoptBtn = document.getElementById("stop-btn");
    const resetBtn = document.getElementById("reset-btn");

    let minutesSet = 00;
    let secondsSet = 00;
    let tensSet = 00;
    let Interval;

    // Start Button
    startBtn.onclick = function(){
        // clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        dimEffect();
    };

    // Stop Button
    stoptBtn.onclick = function() {
        clearInterval(Interval);

        const lap = document.getElementById("laps");
        const li = document.createElement("li");
        li.innerHTML = `lap: <span>${minutes.innerHTML} : ${seconds.innerHTML} : ${tens.innerHTML}</span>`;

        lap.appendChild(li);
        dimEffect();
    };

    // Reset Button
    resetBtn.onclick = function(){
        clearInterval(Interval);
        minutesSet = "00";
        secondsSet = "00";
        tensSet = "00";
        minutes.innerHTML = minutesSet;
        seconds.innerHTML = secondsSet;
        tens.innerHTML = tensSet;

        document.getElementById("laps").innerHTML = "";
    };

    // Create Start Timer Function
    function startTimer(){
        tensSet++;
        // console.log(tens++);
        if(tensSet < 9){
            tens.innerHTML = "0" + tensSet;
        }
        if(tensSet > 9){
            tens.innerHTML = tensSet;
        }
        if(tensSet > 99){
            secondsSet++;
            seconds.innerHTML = "0" + secondsSet;
            tensSet = 0;
            tens.innerHTML = "0" + 0;
        }

        if(secondsSet > 9){
            seconds.innerHTML = secondsSet;
        }
        if(secondsSet == 60){
            minutesSet++;
            minutes.innerHTML = '0' + minutesSet;
            secondsSet = 0;
        }

        if (minutesSet > 9){
            minutes.innerHTML = minutesSet;
        }
    };

    // Dimming Effect Function
    function dimEffect(){
        const lapTime = document.querySelector(".lap-time");
        lapTime.classList.toggle("dimming-effect");
    };
};

