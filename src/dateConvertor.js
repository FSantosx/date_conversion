class DateConvertor {
    static gregoryDate(day, month, year) {
        var a, b, c, d, e, f;
        const date = new Date(`${year}/${month}/${day}`)
        const gregory = new Date('October 15, 1582')

        if (month < 3) {
            year = year - 1
            month = month + 12
        }

        if (date >= gregory) { // Gregory calendar
            a = parseInt(year / 100);
            b = parseInt(a / 4);
            c = 2 - a + b;
        } else { // Julian calendar
            c = 0;
        }

        d = parseInt(365.25 * (year + 4716))
        e = parseInt(30.6001 * (month + 1))
        f = parseInt(d + e + day + 0.5 + c - 1524.5)
        return f
    }

    static diferenceBetweenDays(day, month, year) {
        const
            today = new Date(),
            arr = today.toLocaleDateString().split('/'),
            d = parseInt(arr[1]),
            m = parseInt(arr[0]),
            y = parseInt(arr[2]),
            dateDiference1 = this.gregoryDate(day, month, year),
            dateDiference2 = this.gregoryDate(d, m, y)
            ;;
        return dateDiference2 - dateDiference1
    }

    static leapYear(year) {
        if (year % 4 != 0) {
            if (year % 100 == 0 && year % 400 == 0) {
                console.log("Ano bissexto")
            } else {
                console.log("Ano não é bissexto")
            }
        } else {
            console.log("Ano bissexto")
        }
    }

    // static julianDate(num) {
    //     var
    //         a = num,
    //         b, c, d, e, f, g, h, i, j, k
    //         ;

    //     if (num > 2299160) {
    //         b = parseInt((a - 1867216.25) / 36524.25)
    //         c = a + 1 + b - parseInt(b / 4)
    //     } else {
    //         c = a
    //     }

    //     d = c + 1524
    //     e = parseInt((d - 122.1) / 365.25)
    //     f = parseInt(e * 365.25)
    //     g = parseInt((d - f) / 30.6001)
    //     h = d - f - parseInt(g * 30.6001)

    //     if (g < 14) {
    //         i = g - 1
    //     } else {
    //         i = g - 13
    //     }

    //     if (i > 2) {
    //         j = e - 4716
    //     } else {
    //         j = e - 4715
    //     }

    //     if (j > 0) {
    //         k = j
    //     } else {
    //         k = Math.abs(j)
    //     }

    //     const dia = h
    //     const mes = i
    //     const ano = k
    //     return dia, mes, ano
    // }
}

module.exports = DateConvertor;