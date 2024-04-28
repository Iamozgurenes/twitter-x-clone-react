export const numberFormat = value => {
    let confing = {}
    if (value > 9999) {
        confing = {
            notation: 'compact',
            maximumFractionDigits: 1
        }
    }
    return Intl.NumberFormat('tr', confing).format(value)   
}