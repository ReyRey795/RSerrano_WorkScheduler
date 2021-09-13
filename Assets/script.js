const currentHour = moment().hour();
const allTimeBlocks = document.querySelector('#container');
const arrayOfObjects = [{time:'9:00 AM', mtime:9}, {time:'10:00 AM', mtime:10}, {time:'11:00 AM', mtime:11}, {time:'12:00 PM', mtime:12},
 {time:'1:00 PM', mtime:13}, {time:'2:00 PM', mtime:14}, {time:'3:00 PM', mtime:15}, {time:'4:00 PM', mtime:16}, {time:'5:00 PM', mtime:17}];
$('#currentDay').text(moment().format("dddd " + "MMMM Do, YYYY, h:m A"));

for (let i = 0; i < arrayOfObjects.length; i++){

    const timeBlocks = arrayOfObjects[i]
    console.log(i);
    const timeBlockHour = timeBlocks.mtime;
    const timeBlock = document.createElement('div');
    const textAreas = document.createElement('textarea');
    const saveBtns = document.createElement('button');

    timeBlock.textContent = timeBlocks.time;
    timeBlock.appendChild(textAreas);
    timeBlock.appendChild(saveBtns);

    if (currentHour > timeBlockHour) {
        $(this).addClass('past')
    }
    else if (currentHour < timeBlockHour) {
        $(this).addClass('future')
    }
    else if (currentHour === timeBlockHour){
        $(this).addClass('current')
    }

    allTimeBlocks.appendChild(timeBlock);

    $('div').each(
        function(){
            $(this).addClass('hour')
        }
    )
$('button').each(
    function(){
        $(this).addClass('saveBtn')
    }
)

    $('button').each(
        function(){
            $(this);document.createElement('i')
            $('i').each(
                function(){
                    $(this).addClass('fas fa-save')
                }
            )
        }
    )

    


function hTrail(){
    console.log(arrayOfObjects, currentHour)
    if (arrayOfObjects[i] == currentHour)
    $(this).addClass('present')
    
}};
hTrail();