export default function getDate () {
    const start = Date.now();

    const dateObj = new Date(start);
    
    return `${dateObj.getDate().toString().padStart(2, "0")}/${(dateObj.getMonth()+1).toString().padStart(2, "0")}/${dateObj.getFullYear()} ${dateObj.getHours()}:${(dateObj.getMinutes()).toString().padStart(2, "0")}`;
}
