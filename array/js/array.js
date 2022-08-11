var avgTemp = []
avgTemp[0] = 31.6
avgTemp[1] = 35
avgTemp[2] = 42
avgTemp[3] = 37.95
avgTemp[4] = 25

for(var i=0; i<avgTemp.length; i++){
    console.log(avgTemp[i])
}

var daysOfWeek = new Array(
    'Sunday',
    'Monday',
    'Tuesday',
    'wednesday',
    'Thursday',
    'Friday',
    'Saturday'
)

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i])
}
console.log('------------------------------')
//Fibonacci
var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1
for(var i=3; i<20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}

for(var i=0; i<fibonacci.length; i++){
    console.log(fibonacci[i])
}
console.log('------------------------------')
// adicionando elementos
avgTemp.push(32.4) // utimo da fila
avgTemp.unshift(-24) // primeiro da fila
avgTemp[5] = 110 // sobescreve


for(var i=0; i<avgTemp.length; i++){
    console.log(avgTemp[i])
}
console.log('------------------------------')
// remover elementos da lista

avgTemp.pop() //remove o utima da lista
avgTemp.shift()// remove o primeiro da lista

for(var i=0; i<avgTemp.length; i++){
    console.log(avgTemp[i])
}
console.log('------------------------------')
//inseri e remove a partir de uma posição
var number = []
number[0] = 1
number[1] = 2
number[2] = 3
number[3] = 14
number[4] = 25
number[5] = 36
number[6] = 17
number[7] = 28
number[8] = 39
number[9] = 10

number.splice(3, 3)//apartir da posição 3 retire os proximos 3
console.log(number)
number.splice(3, 0, 100, 101, 102, 103)//a partir da posição 3 não retire nada e adicione 100...
console.log(number)
console.log('------------------------------')
//array bidimensional
var avgTempWeek = []
var avgTempWeek1 = [25, 69, 56.3, 77, 15.65, 55, 16]
var avgTempWeek2 = [11.22, 51, 84.2, 45, 33.6, 15, 41]

avgTempWeek[0] = avgTempWeek1
avgTempWeek[1] = avgTempWeek2

for(var i=0; i < avgTempWeek.length; i++){
    for(var j=0; j < avgTempWeek[i].length; j++){
        console.log(avgTempWeek[i][j])
    }
}
console.log('------------------------------')
//array multidimensional

var month = []
var firstWeek = []
var lastWeek = []

var avgTempWeek3 = [5, 69, 56.3, 77, 15.65, 55, 16]
var avgTempWeek4 = [1.22, 51, 84.2, 405, 33.6, 15, 41]
var avgTempWeek5 = [2, 6.54, 56.3, 77, 15.65, 55, 16]
var avgTempWeek6 = [110.22, 51, 84.2, 45, 303.6, 15, 41]

firstWeek = [avgTempWeek3, avgTempWeek4]
lastWeek =  [avgTempWeek5, avgTempWeek6]

month = [firstWeek, lastWeek]
console.log('------------------------------')
console.log(month[1][1][4])

for(var x=0; x < month.length; x++){
    for(var y=0; y < month[x].length; y++){
        for(var z=0; z< month[x][y].length; z++){
            console.log(month[x][y][z])
        }
    }
}
console.log('------------------------------')