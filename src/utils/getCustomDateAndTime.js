export default function getCustomDateAndTime(inputDate) {
  const monthNames = [
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

  const month = monthNames[inputDate.getMonth()];
  const day = inputDate.getDate();
  const hours = inputDate.getHours();
  const minutes = inputDate.getMinutes();
  const amOrPm = hours >= 12 ? "pm" : "am";

  const formattedHour = hours % 12;

  const formattedDateAndTime = `${
    formattedHour < 10 ? "0" + formattedHour : formattedHour
  }:${minutes < 10 ? "0" + minutes : minutes} ${amOrPm} | ${day} ${month}`;

  return formattedDateAndTime;
}
