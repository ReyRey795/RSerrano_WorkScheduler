const currentHour = moment().hour();
const timeBlocks = $('#container');
const arrayOfObjects = [{time:'9:00 AM', mtime:9}, {time:'10:00 AM', mtime:10}, {time:'11:00 AM', mtime:11}, {time:'12:00 PM', mtime:12},
 {time:'1:00 PM', mtime:13}, {time:'2:00 PM', mtime:14}, {time:'3:00 PM', mtime:15}, {time:'4:00 PM', mtime:16}, {time:'5:00 PM', mtime:17}];
$('#currentDay').text(moment().format("dddd " + "MMMM Do, YYYY, h:m A"));

for (let i = 0; i < arrayOfObjects.length; i++){

    const timeBlock = arrayOfObjects[i]
    console.log(i);
    const timeBlockHour = timeBlock.mtime;
    const timeBlockContainer = $('<div>');
    const textArea = $('<textarea>');
    const saveBtn = $('<button>');

    let iCon = $('<i>').addClass('fas fa-save');
    
    timeBlockContainer.addClass('hour');

    timeBlockContainer.text(timeBlock.time);
    saveBtn.addClass('saveBtn');
    saveBtn.append(iCon);
    saveBtn.val(timeBlock.mtime);
    textArea.attr('id', `textarea-${timeBlock.mtime}`)
    saveBtn.click(function(){
        const btnValue = $(this).val()
        const txtValue = $(`#textarea-${btnValue}`).val()
        console.log(btnValue)
        console.log(txtValue)
        localStorage.setItem(btnValue, txtValue)
    })

    //if (localStorage.getItem(timeBlock.mtime)) {
        const xVal = localStorage.getItem(timeBlock.mtime)
        textArea.val(xVal)
    //}
    
    timeBlockContainer.append(textArea);

    timeBlockContainer.append(saveBtn);

    if (currentHour > timeBlockHour) {
        timeBlockContainer.addClass('past')
    }
    else if (currentHour < timeBlockHour) {
        timeBlockContainer.addClass('future')
    }
    else if (currentHour === timeBlockHour){
        timeBlockContainer.addClass('current')
    }

    timeBlocks.append(timeBlockContainer);

function hTrail(){
    console.log(arrayOfObjects, currentHour)
    if (arrayOfObjects[i] == currentHour)
    $(this).addClass('present')
    
}};
hTrail();