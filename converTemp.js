let laço = true
while (laço) {
    //caso queira ler de forma mais facil esse texto usar a tecla alt + Z :)
    let per = parseInt(prompt("digite qual tipo de temperatura deseja transferir: \n 1 - De Celsius para Fahrenheit \n 2 - De Celsius para kelvin \n 3 - De Fahrenheit para Celsius \n 4 - De Fahrenheit para Kelvin \n 5 - De Kelvin para Celsius \n 6 - De kelvin para Fahrenheit \n 7 - Sair"))

    switch (per) {

        case 1:

            alert("você selecionou a opção: transferir temperaturas de celsius para Fahrenheit")

            var celsius = parseFloat(prompt("Qual a temperatura em Celsius"))

            var Fahrenheit = (celsius * 9 / 5) + 32

            alert("A temperatura em Fahrenheit é de " + Fahrenheit.toFixed(2))

            break

        case 2:

            alert("você selecionou a opção: transferir temperaturas de celsius para kelvin")

            var celsius = parseFloat(prompt("Qual a temperatura em grau celsius:"))

            var kelvin = celsius + 273.15

            alert("A temperatura em kelvins é igual a " + kelvin.toFixed(2))

            break

        case 3:

            alert("você selecionou a opção: transferir temperaturas de Fahrenheit para celsius")


            var Fahrenheit = parseFloat(prompt("Qual a temperatura Fahrenheit"))

            var celsius = (Fahrenheit - 32) * 3 / 9

            alert("Transferindo para celsius a temperatura é igual a " + celsius.toFixed(2))

            break

        case 4:

            alert("você selecionou a opção: transferir temperaturas de Fahrenheit para kelvin")

            var Fahrenheit = parseFloat(prompt("Qual a temperatura em fahre:"))

            var kelvin = (Fahrenheit + 459.67) * 5 / 9

            alert("transferindo esse valor para temperaturas em kelvin ele fica igual a " + kelvin.toFixed(2))


            break

        case 5:

            alert("você selecionou a opção: transferir temperaturas de kelvin para celsius")


            var kelvin = parseFloat(prompt("Qual o valor da temperatura em kelvin: "))

            var celsius = kelvin - 273.15

            alert("transferindo esse valor para celsius ele fica igual a " + celsius.toFixed(2))

            break

        case 6:

            alert("você selecionou a opção: transferir temperaturas de kelvin para Fahrenheit")


            var kelvin = parseFloat(prompt("Qual o valor da temperatura em kelvin:"))

            var Fahrenheit = kelvin * 9 / 5 - 459.67

            alert("transferindo esse valor para temperaturas em Fahrenheit ele fica igual a " + kelvin.toFixed(2))


            break

        case 7:

            alert("Saindo do programa")
            laço = false

            break

        default:

            alert("opção indisponivel")

            break

    }
}