export function timeAgo(date: string):string {
    const now = new Date()
    const time = now.getTime() - new Date(date).getTime()

    const sec = Math.floor(time/ 1000)
    const min = Math.floor(sec / 60)
    const hours = Math.floor(min / 60)
    const days = Math.floor(hours / 24)


    if (sec < 60) {
        return sec + 's'
    }
    else if (min < 60) {
        return min + 'min'
    }
    else if (hours < 24) {
        return hours + 'h'
    }
    else if (days === 1) {
        return 'Yesterday'
    }
    else {
        return days + 'days'
    }
}