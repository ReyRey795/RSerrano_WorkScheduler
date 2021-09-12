const currentHour = moment().hour();
const allTimeBlocks = document.querySelector('#container');
const workHours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
$('#currentDay').text(moment().format("dddd " + "MMMM Do, YYYY, h:m A"));

for (let i = 0; i < workHours.length; i++){

    const timeBlocks = workHours[i]
    console.log(i);

    const timeBlock = document.createElement('div');
    const textAreas = document.createElement('textarea');
    const saveBtns = document.createElement('button');

    timeBlock.textContent = timeBlocks;
    timeBlock.appendChild(textAreas);
    timeBlock.appendChild(saveBtns);

    allTimeBlocks.appendChild(timeBlock);

    $('div').each(
        function(){
            $(this).addClass('hour')
        }
    )

    


function hTrail(){
    console.log(timeBlocks,currentHour)
    if (workHours[i] == currentHour)
    $(this).addClass('present')
    
}};
hTrail();