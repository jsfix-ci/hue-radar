
/**
 * Returns a formatted date string, for displaying in the report.
 */
export default function getTimeGenerated(): string {
  const newDate = new Date();
  const date = [
    newDate.getDate(),
    newDate.getMonth(),
    newDate.getFullYear(),
  ].join('/');
  const time = [
    newDate.getHours(),
    newDate.getMinutes(),
    newDate.getSeconds(),
  ].join(':');
  return `${date} at ${time}`;
}
