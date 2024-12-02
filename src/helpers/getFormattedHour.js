export const getFormattedHour =() => {
    const currentDate = new Date()

    let hours = currentDate.getHours()

    let am_pm = 'AM'

    if (hours > 12) {
        hours = hours - 12
        am_pm = 'PM'
    }

    let minutes = currentDate.getMinutes()

    if (minutes < 10) {
        minutes = '0' + minutes
    }
    console.log(typeof(minutes))
    return `${hours}:${minutes} ${am_pm}`
}