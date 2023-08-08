module.exports = function toReadable (number) {
    let result = ""
    if(number == 0 )
    return "zero"
    while (number > 0) {
        let first = number%10;
        switch (first) {
            case 1: result = "one" + result
            break
            case 2: result = "two"+ result
            break
            case 3: result = "three" + result
            break
            case 4: result = "four" + result
            break
            case 5: result = "five" + result
            break
            case 6:  result = "six" + result
            break
            case 7:  result ="seven" + result
            break
            case 8:  result = "eight" + result
            break
            case 9: result = "nine" + result
            case 0: result = result+""
            break
            default: break
        }
        number = (number-number%10)/10
        let second = number%10
        if (result.length != 0 && second != 0) {
            result = " " + result
        }
        switch (second) {
            case 1:{ 
                switch(first){
                    case 1: result = "eleven"
                    break;
                    case 2: result = "twelve"
                    break;
                    case 3: result = "thirteen"
                    break
                    case  4: result = "fourteen"
                    break
                    case 5: result = "fifteen"
                    break;
                    case 6: result = "sixteen"
                    break
                    case 7: result = "seventeen"
                    break
                    case 8: result = "eighteen"
                    break
                    case 9: result = "nineteen"
                    break;
                    case 0: result = "ten" 
                    default: break
                }
                
            }
            break
            case 2: result = "twenty"+ result
            break
            case 3: result = "thirty" + result
            break
            case 4: result = "forty" + result
            break
            case 5: result = "fifty" + result
            break
            case 6:  result = "sixty" + result
            break
            case 7:  result ="seventy" + result
            break
            case 8:  result = "eighty" + result
            break
            case 9: result = "ninety" + result
            break
            default: break
        } 
        number = (number-number%10)/10
        let three = number%10
        if ((second != 0 && three != 0) || (first != 0 &&three != 0 && second == 0)) {
            result = " " + result
        }
        switch (three) {
            case 1: result = "one hundred" + result
            break
            case 2: result = "two hundred"+ result
            break
            case 3: result = "three hundred" + result
            break
            case 4: result = "four hundred" + result
            break
            case 5: result = "five hundred" + result
            break
            case 6:  result = "six hundred" + result
            break
            case 7:  result ="seven hundred" + result
            break
            case 8:  result = "eight hundred" + result
            break
            case 9: result = "nine hundred" + result
            break
            default: break
        } 
        number = (number-number%10)/10
        
        
    }
    return result
  
}
