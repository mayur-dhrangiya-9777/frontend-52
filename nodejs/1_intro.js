function printCurrenteDate() {

    let today = new Date;

    let currentDate = today.getDate() + "/" + (today.getMonth(+1)) + "/" + today.getFullYear();

    console.log(currentDate);
}
printCurrenteDate();
