function aType() {
    let money = (100 * Math.abs(Math.abs(Math.sin(2 * 5 - 1.5) + 3 * Math.sin(5 ** 2)) + 2.38)).toFixed(2)
    let tax = (money * 0.1).toFixed(2)
    let sum = (money - tax).toFixed(2)
    return [money, tax, sum]
}

function bType() {
    let money = (100 * Math.abs(Math.cos(5 ** 2) - Math.sin(2 * 5 - 1) + 4.29)).toFixed(2)
    let tax = (money * 0.15).toFixed(2)
    let sum = (money - tax).toFixed(2)
    return [money, tax, sum]
}

function cType() {
    let money = (100 * Math.abs(Math.cos(5 ** 2 + 1) - Math.abs(Math.sin(2 * 5) - 5.76))).toFixed(2)
    let tax = (money * 0.2).toFixed(2)
    let sum = (money - tax).toFixed(2)
    return [money, tax, sum]
}

const wType = prompt('Enter type of work (А, Б або В)')
if (wType === 'А' || wType === 'Б' || wType === 'В') {
    let money, tax, sum
    switch (wType) {
        case 'А':
            [money, tax, sum] = aType()
            break
        case 'Б':
            [money, tax, sum] = bType()
            break
        case 'В':
            [money, tax, sum] = cType()
            break
    }
    document.write(`Нарахованна сума: ${money}<br>Податок: ${tax}<br>До видачі: ${sum}`)
} else {
    document.write('Wrong type of work, try again')
}