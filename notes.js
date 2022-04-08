var canvas = document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    /* 

    for (i = 0; i < 101; i = i + 1) {
  
    console.log(i)
    
    if (i === 100){
     for (i = 100; i > 0; i = i - 1){
   
    console.log(i)
    }
  }
}


    
    1. var canvas = document.getelementbyid('_') grabs whatever is linked in the brackets usaly a canvas element

    2. x is speed left and right

    3. y is speed up and down

    4. Xspeed is the variable for what x equals

    5. Yspeed is the variable for what y equals
    
    6. pres is the bind to the key that is being pressed defalut is false to say that it is not being pressed 

    7. doc.addeventlistener('keyup/keydown', keyDownPress) is the line for determing if the event is being triggerd 

    8. set interval ? runs a function on a loop that waits for an interval that is set in milliseconds, so setInerval(update,1000) would run the function update every thousand milliseconds, which is every second.

    9. function keydownpress(e) the 'e' stands for event in the function which links to the event listener, the function is calling on if the key is being pressed so in this function if key pressed is true the function reads if the key given matches the one being pressed if they match then it equals true 

    10. if statments call if the key provided matches the key pressed then _pres is true 

    11. function key up press(e) same as above 'e' stands for event and everything else except this function calls for when the key is relased then it is false so if a key is relaesed and it matches the one in the code the it complets the system and equals false 

    12. function update(){} callls on the clear rectangle to clear everything after the rect moves so it doesnt leav copyies behind 

    13. x = x + Xspeed is assinging the value from x that is given to x and assings it to Xspeed 

    14. y = y + Yspeed does the same as x = x + Xspeed does but just to the y variable

    15. ctx.clearRect() when called clears the rectangle given with the variables put in in this code it is used to clear the screen to show the rectangle moving without it the rectangle moves but just leaves a copy of its self behind

    16. if(/pres === true ){yspeed = yspeed - 1} ?
    
    17. for(i = 0; i < 5 ; i = i + 1){} 'i' is the count variable '0' is where we start '</>' is to check if we need to stop 'i = i + 1' how much to increas the count 

    18. for(i = 0 creates the variable and sets the start point 
    
    19. i < 5 before each loop , if it is true continue, if it is false stop the loop
    
    20. i = i + 1 at the end of the loop the const is increased by ONE 

    21. for (i = 0 ; i < 101 ; i = i + 1){
        if (i % 2 === 0){
            console.log('even')
        }
        if (i % 2 === 0){
            console.log('odd')
        }
}
    22. iteration using a for loop to go through each element in an array

    23. problem solving in code 

    24. simply state the problem

    25. split into parts

    26. start asking questions

    27.start looking for programing concepts

    28. 1.num 2 minus num one is your multipler 

        2. 

        objects 
        to creat an object you use {}
        objects are made up of properties 
        properties are made up of keys and values

        var car = {
            color: 'blue'
            speed; 'very'
            doors: '4'
        }

        to get an object its object name.what you want it has to be defined in the object itselef
    */