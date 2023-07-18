let current_time = document.getElementById('current-time');
let alarm_hour = document.getElementById('hour');
let alarm_min = document.getElementById('min');
let alarm_sec = document.getElementById('sec');
let alarm_am_pm = document.getElementById('am-pm');
let alarm_setup = document.getElementById('alarm-setup');
let alarm_array = [];
let alarm_list = document.getElementById('alarm-list');
let alarm_title = document.getElementById('alarm-title');

//get the current time & refresh it for every second & also set off alarm
function showTimeAlarm() {
    let time = new Date();
    current_time.innerText = time.toLocaleTimeString();

    //check the alarm array for upcomming alarms
    for(let i = 0; i< alarm_array.length; i++){
        if(time.getHours() == alarm_array[i].alarm_time.getHours() && time.getMinutes() == alarm_array[i].alarm_time.getMinutes() && time.getSeconds() == alarm_array[i].alarm_time.getSeconds())
        {
            alert("Alarm");
        }
    }

    //refresh time every second
    setTimeout(showTimeAlarm, 1000);
}

//handling keyboard input range of values
alarm_hour.addEventListener('keydown', function(event){
    typeRange(event,12,alarm_hour);
});

alarm_min.addEventListener('keydown', function(event){
    typeRange(event,59,alarm_min);
});
alarm_sec.addEventListener('keydown', function(event){
    typeRange(event,59,alarm_sec);
});

alarm_am_pm.addEventListener('click',function(){
    if(alarm_am_pm.value == 'AM'){
        alarm_am_pm.value= 'PM';
    }else{
        alarm_am_pm.value= 'AM';
    }
})

//range to control the limit of values that can be input into the fields
function typeRange(e,upper_limit,element){
    let targetValue = element.value;
    let c = String.fromCharCode(e.which);
    let val = parseInt(c);
    let textVal = parseInt(targetValue || "0");
    let result = textVal*10 + val;
    if (result < 0 || result > upper_limit) {
        e.preventDefault();
    }
}


//setting up alarm
alarm_setup.addEventListener('submit',function(e){
    e.preventDefault();
    let hour = alarm_hour.value;
    let min = alarm_min.value;
    let sec = alarm_sec.value;
    let am_pm = alarm_am_pm.value;

    //add alarm to alarm_array in 24hr format
    let alarm_time = new Date();
    if(am_pm == 'PM'){
        if(hour < 12){
            let val = parseInt(hour);
            hour = val + 12;
        }
    }else{
        if(hour == 12){
            hour = 0
        }
    }
    alarm_time.setHours(hour);
    alarm_time.setMinutes(min);
    alarm_time.setSeconds(sec);

    const alarm = {
        id: Date.now().toString(),
        alarm_time: alarm_time
    }
    alarm_array.push(alarm);

    //add alarm to list
    addAlarmToDOM(alarm);

})


//add event listner to delete button of alarms
alarm_list.addEventListener('click', function(event){
    if(event.target.className == 'delete'){
        deleteAlarm(event);
    }
});


//deleteting the alarm from the alarm_array
function deleteAlarm(e){
    //let newAlarmArray = alarm_array.filter(alarms => alarms.id!=e.target.id);
    //alarm_array = newAlarmArray;
    alarm_array.pop(alarms => alarms.id==e.target.id);
    renderList();
}

//re-rendering the list after deletion
function renderList(){
    alarm_list.innerHTML = '';

    if(alarm_array.length==0){
        alarm_title.style.visibility = "hidden";
    }

    for(let i of alarm_array)
    {
        addAlarmToDOM(i);
    }

}


//adding the alarm to the list in DOM
function addAlarmToDOM(alarm){
    const li = document.createElement('li');
    alarm_title.style.visibility = "visible";

    li.innerHTML = `<div class="show-alarms"><span class="alarm-time"><b>${alarm.alarm_time.toLocaleTimeString()}</b></span>
                    <span class="delete-alarm"><input type="button" class="delete" id="${alarm.id}" value="Delete"></span></div>`;
    alarm_list.append(li);
}




showTimeAlarm();



