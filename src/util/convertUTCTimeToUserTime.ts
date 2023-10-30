export default function convertUTCTimeToUserTime(utcTimeString: string): string {
  // Create a Date object from the UTC timestring
  const utcDate = new Date(utcTimeString);

  // Define options for formatting the date and time
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  // Convert the UTC time to user's local time and format it
  const userTime = utcDate.toLocaleDateString('en-US', options);

  return userTime;
}