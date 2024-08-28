function timeConversion(s) {
  const modifier = s.slice(-2); //sliced the last two elements
  const time = s.slice(0, -2); // sliced all elements except last two
  let [hours, minutes, seconds] = time.split(':'); // split in to hours, minutes and seconds
  hours = parseInt(hours, 10); // convert to integer
  // if the time is less than 12, it is same in 24 hour format too
  if(hours !== 12 && modifier === "PM") {
      hours += 12
  }
  if(hours === 12 && modifier ==="AM") {
      hours = 0;
  }
  
  const formattedHours = hours.toString().padStart(2, '0');
  
  return `${formattedHours}:${minutes}:${seconds}`

}
