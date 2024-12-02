export const getFormattedHour =() => {
    const now = new Date()

    let hours = now.getHours()

    if (hours > 12) {
        hours = hours - 12
    }

    let minutes = now.getMinutes()

    if (minutes < 10) {
        minutes = '0' + minutes
    }
    return `${hours}:${minutes}`
}

export default getFormattedHour