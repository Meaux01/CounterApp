   //1. Create a new variable called 'total' and assign it the div with the id of 'total'
        const total = document.getElementById('total')
        // let value = Number(total.textContent)
    //    const text = document.getElementById('text')
       let value = Number(total.textContent)
        //2. Create Six Functions (add, subtract, multiplyBy2, divideBy5, multiplyBy5, divideBy5)
        // Example: 

        function add ()  {
            // let value = total.textContent * 1
            value += 1
            total.textContent = value
            // use an alert to alert the user
            // alert(value)
            console.log(value)
        }
        function subtract ()  {
            value -= 1
            total.textContent = value
            alert(value)
            console.log(value)
        }
        function multiplyBy2 ()  {
            value *= 2
            total.textContent = value
            alert(value)
            console.log(value)
        }
        function divideBy2 ()  {
            value /= 1
            total.textContent = value
            alert(value)
            console.log(value)
        }
        function multiplyBy5 ()  {
            value *= 5
            total.textContent = value
            alert(value)
            console.log(value)
        }
        function divideBy5 ()  {
            value /= 5
            total.textContent = value
            alert(value)
            console.log(value)
        }
        
        //3. Attach Functions to Buttons
        const addBtn = document.querySelector('#add')
        addBtn.addEventListener('click', add)
        const btn2 = document.getElementById('subtract')
        btn2.addEventListener('click', subtract)
        const multTwo = document.getElementById('mult-2')
        multTwo.addEventListener('click', multiplyBy2)
        const dvdTwo = document.getElementById('div-2')
        dvdTwo.addEventListener('click', divideBy2)
        const multFive = document.getElementById('mult-5')
        multFive.addEventListener('click', multiplyBy5)
        const dvdFive = document.getElementById('div-5')
        dvdFive.addEventListener('click', divideBy5)
    