window.addEventListener("DOMContentLoaded", showTime());

function showTime(){
    let date = new Date();

    // (date.setTime(50000);

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    // if(h < 10){
    //     h = "0" + h;
    // }
    // if(m < 10){
    //     m = "0" + m;
    // }
    // if(s < 10){
    //     s = "0" + s;
    // }
    // Another way to doing the above logic
    h = h < 10 ? h = "0" + h : h;
    m = m < 10 ? m = "0" + m : m;
    s = s < 10 ? s = "0" + s : s;
    
    // Another way for "time"
    // const time = h + ":" + m + ":" + s + "" + '|' + "" +session
    // console.log(time);
    const time = `${h}:${m}:<small>${s}|${session}</small>`
    document.getElementById("DisplayClock").innerHTML = time;
    setTimeout(showTime, 1000);

    // Change Body Backgound
    let bg;
    const userName = "Abhijeet";
    const user = document.getElementById('User');
    // console.log(user);

    if(h < 8 && session === "AM") {
        bg = `url(https://images.unsplash.com/photo-1658039731956-12f8a37c2377?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;
        user.innerHTML = `Good morning, ${userName}`;
    } else if (h < 11 && session === "AM") {
       bg = `url(https://images.unsplash.com/photo-1573132223210-d65883b944aa?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;
       user.innerHTML = `Good day, ${userName}`;
    } else if (h < 6 && session === "PM") {
        bg = `url(https://images.unsplash.com/photo-1569758267239-d08deb78bb1a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;
        user.innerHTML = `Good afternoon, ${userName}`;
    } else {
        bg = `url(https://images.unsplash.com/photo-1574565087163-11e46ca637a6?q=80&w=2771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;
        user.innerHTML = `Good evening, ${userName}`;
    }

    // Insert bg image
    const Body = document.querySelector("body");

    Body.style.background = `${bg} center/cover`;
}

document.querySelector(".focus-container input").addEventListener("keypress", function (event) {
    if(event.key === "Enter") {
        const focus = document.querySelector(".focus-container input");
        document.querySelector(".focus-container").innerHTML = `<h6>Today's Focus:</h6><h1>${focus.value}</h1>`;
    }
});