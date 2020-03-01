function calc() {
    var a = parseInt(document.getElementById("num1").value)
    var b = parseInt(document.getElementById("num2").value)
    var x = document.getElementById('value').value
    var add = a + b
    var subt = a - b
    var multi = a * b
    var divd = a / b

    switch (x) {
        case 'add':
            document.getElementById("answer").innerHTML = add
            break
        case 'subt':
            document.getElementById("answer").innerHTML = subt
            break
        case 'multi':
            document.getElementById("answer").innerHTML = multi
            break
        case 'divd':
            document.getElementById("answer").innerHTML = divd
            break
        default:
            document.getElementById("answer").innerHTML = ''
    }
}

