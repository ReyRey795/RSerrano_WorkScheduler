const currentHour = moment().hour();
$('#today').text(moment().format("dddd" + "MMMM Do, YYYY, h:m A"));

function appendTimeBlocks(){
    const allTimeBlocks = $('.container');
    const timeBlock = $('<div></div>').text['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']; //.addClass('.hour');
    const textAreas = $('<textarea></textarea>').attr('Placeholder', 'Enter event here...');
    const saveBtns = $('<button></button>').addClass('.saveBtn');

    $('body').append(allTimeBlocks, timeBlock, textAreas, saveBtns);


for (let i = 0; i < 9; i++){
    const eachTimeBlock = timeBlock[i];
    console.log(i);


}}