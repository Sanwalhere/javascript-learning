//--------------------------------------------------|Date Object|--------------------------------------------------------------

const date = new Date(2023, 11, 5, 12, 34, 33, 0.333);
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());

//--------------------------------------------------|Date|-----------------------------------------------------

console.log(new Date());

//--------------------------------------------------|Date Formate => 6-Nov-2023|-----------------------------------------------

function formatDate(date) {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedDate = `${day}-${months[monthIndex]}-${year}`;
  return formattedDate;
}

const inputDate = new Date();

const formattedDate = formatDate(inputDate);
console.log(formattedDate);
