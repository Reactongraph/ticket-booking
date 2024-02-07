export const getHourIn24HoursFormat = (date) => {
    date = new Date(date)
    let hour = date.getHours();
    let minutes = date.getMinutes();
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hour}:${minutes}`;
};
