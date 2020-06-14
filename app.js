// CHAPTER 1
    // Task 1
    alert("hello world");
    // Task 2
    alert("Error! please Enter a valid password");
    // Task 3
    alert("Welcome to JS Land \nHappy Coding!...");
    // Task 4
    alert("Welcome to JS land");
    alert("Happy Coding...");
    // Task 5
    alert("Hello... I can run JS on my browser");
    
// CHAPTER 2
    // Task 1
    var username;
    // Task 2
    var myName = 'Ali Hussain'
    // Task 3
    var message = 'Hello World'
    alert(message);
    // Task 4
    var name = 'Ali hussain'
    var age = 23
    var certificate = 'Google certified tensorflow devloper';
    alert(name);
    alert(age);
    alert(certificate);
    // Task 5
    alert('PIZZA\nPIZZ\nPIZ\nPI\nP');
    // Task 6
    var email = 'ali.talha3357@gmial.com'
    alert('My Email Address is ' + email);
    // Task 7
    var x = 'A smarter way to learn JavaScript';
    alert("Im trying to learn from the book " + book);
    // Task 8
    document.write('Yay ! I can write JS code through Browser ')
    // Task 9
    var x = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬'
    alert(x);


// CHAPTER 3
    // Task 1
    var age = 23
    alert("I am " +  age + " years Old");
    // Task 2
    var x = 0;
    alert("You have visited this site " + x  + "times");
    // Task 3
    var birthYear = 1997;
    document.write("My birth Year is " + birthYear);
    document.write("Data Type of my declared variable is  " + typeOf(birthYear));
    // Task 4
    var visitorName = 'jhon Doe'
    var ProductTitle = 'T-shirt'
    var Quantity = 2
    alert(visitorName + ' has bought ' + Quantity + ProductTitle + ' on xyz clothing ');
    
// CHAPTER 4
    // Task 1
    var a,b,c;
    // Task 2
    var aa, bb , cc ,dd ,ee;
    var a@ew , 12er , sae32 , rew% ;
    // Task 3
    document.write("Rules for naming JS variables");
    document.write("Variable names can only contain numbers , $  and _ ");
    document.write("For example $my_1stVariable");
    document.write("Variables must begin with a Letter or $ . For example $name, _name or name");
    document.write("Variable names are case sensitive");
    document.write("Variable names should not be JS Keyword");
    

// CHAPTER 5
    // Task 1
    var a = 5;
    var b = 7;
    var c = a + b;
    document.write('sum of ' + a + ' and ' + b + ' is ' + c);
    // Task 2
    var a = 5;
    var b = 7;
    var c = a * b;
    document.write('product of ' + a + ' and ' + b + ' is ' + c);
    // Task 3
    var a = 5;
    var b = 7;
    var c = a - b;
    document.write('difference of ' + a + ' and ' + b + ' is ' + c);
    // Task 4
    var a = 5;
    var b = 7;
    var c = a / b;
    document.write('quotient of ' + a + ' and ' + b + ' is ' + c);
    // Task 5
    var a = 5;
    var b = 7;
    var c = a % b;
    document.write('modolus of ' + a + ' and ' + b + ' is ' + c);
    // Task 6
    var x ;
    document.write(' value of variable after declaration is ' + x);
    x = 12;
    document.write(' initial value is  ' + x);
    x = x + 1;
    document.write(' value of variable after increment is ' + x);
    x = x + 7;
    document.write(' value of variable after addition is ' + x);
    x = x - 5;
    document.write(' value of variable after decrement is ' + x);
    x = x % 3;
    document.write(' value of variable after remainder is ' + x);
    // Task 7
    var cost = 600;
    document.write(' total cost to buy 5 movie tickets is  ' + cost + ' PKR');
    // Task 8
    var x = 4;
    for(var i = 1; i <= 10; i++){ console.log(x + ' x ' + i + ' = ' + x*i)}
    // Task 9
    var celc = 40;
    var faren = 70;
    var celc_to_faren = (celc*9/5) + 32
    var faren_to_celc = (faren - 32) *5/9
    // Task 10
    var p1 = 200;
    var p2 = 300;
    var q1 = 2 ;
    var q2 = 4;
    var ship = 200;
    alert('Price of Item 1 is   : ' + p1 + ' \n Quantity of  Item 1   is   : ' + q1 + ' \n Price of Item 2  is   : ' + p2 + ' \n Quantity of Item 2  is   : ' + q2 + ' \n \n Shipping Charges : ' + ship  );
    // Task 11
    var scr = 49;
    var tot = 85;
    document.write(' Marks Obtained  : ' + scr + '\n Total Marks  : ' + tot + '\n Percentage  : ' + (scr/tot)*100 + '%');
    // Task 12
    var dol = 10;
    var riyal = 1;
    dol = dol*104.80;
    riyal = riyal * 28;
    document.write('Total currenty in PKR is : ' + (dol+riyal))
    // Task 13
    var x = 10;
    x = ((x + 5)*10)/2;
    // Task 14
    var curernYear = 2020;
    var birthYear = 1997;
    var age = curernYear - birthYear;
    document.write(' Current Year  : ' + curernYear + '\n Birth Year  : ' + birthYear + '\n Your age is   : ' + age);
    // Task 15
    var rad = 20;
    var circ  = 2*3.14*rad;
    var area = 3.14*(rad^2);
    document.write(' Radius of circle  : ' + rad + '\n Circmference of circle  : ' + circ + '\n Area of circle   : ' + area);
    // Task 16
    var snack = 'choclate';
    var max_age = 85;
    var age = 23;
    var perDay = 2;
    document.write(' Yoy will need  ' + (perDay*(max_age-age)) + snack + 's  to Last you till the ripe age of ' + max_age );



// CHAPTER 6 - 9
    // Task 1
    var x = 10;
    document.write('value of x is : ' + x)
    var x = ++x;
    document.write(' Now value of x is : ' + x)
    var x = x++;
    document.write(' Now value of x is : ' + x)
    var x = --x;
    document.write(' Now value of x is : ' + x)
    var x = x--;
    document.write(' Now value of x is : ' + x)
    var x = 10;
    document.write(' Now value of x is : ' + x)
    
    // Task 2
    var a = prompt('Enter your Name');
    alert('Hi!  ' + a);
    // Task 3
    var b = prompt('Enter a Number'); for(var i = 1; i <= 10; i++){ console.log(b + ' x ' + i + ' = ' + b*i)}
    // Task 4
    var a1 = prompt('Enter SubJect 1 marks');  var a2 = prompt('Enter SubJect 2 marks'); var a3 = prompt('Enter SubJect 3 marks'); var i = parseInt(a1) + parseInt(a2) + parseInt(a3); var j = (i/300)*100; if (j >= 80){alert('Total marks : 300 \n marks Obtained : ' + i + '\n Percentage  : ' + j + '% \n Grade : A1 \n Remarks : Excellent') ;} else if (j >= 70){alert('Total marks : 300 \n marks Obtained : ' + i + '\n Percentage : ' + j + '% \n Grade : A \n Remarks : Good') ;} else if (j >= 60){alert('Total marks : 300 \n marks Obtained : ' + i + '\n Percentage : ' + j + '% \n Grade : B \n Remarks : You Can Iprove') ;} if (j < 60){alert('Total marks : 300 \n marks Obtained : ' + i + '\n Percentage  : ' + j + '% \n Grade : Fail \n Remarks : Sorry') ;}
    

// CHAPTER 9 - 11
    // Task 1
    var c = prompt('Enter your city'); if(c =='karachi'){ alert('welcome to the city of lights')} else{ alert('Go Home')}
    // Task 2
    var d = prompt('Enter your Gender'); if(d =='male'){ alert('Good Morning Sir')} else if(d =='female') { alert('Goood Morning Mam')}
    // Task 3
    var e = prompt('Enter traffic signal color'); if(e =='red'){ alert('vehicles must stop')} else if(e =='yellow') { alert('vehicles should get ready to move')} else if(e =='green') { alert('vehicles can move now')}
    // Task 4
    var h = prompt('Enter remaining liters of fuel');  if(h <= 0.25){ alert('Please refill the fuel in your car');} else{ alert('YOUR GOOD TO GO')}
    // Task 5
    var a = 4; if (++a === 5){alert('given condition for variable a is true');} var b = 82; if (b++ === 83){alert('given condition for variable b is true');} var c = 12; if (c++ === 13){alert('condition 1 is true');}if (c === 13){alert('condition 2 is true');} if (++c < 14){alert('condition 3 is true');}if(c === 14){alert('condition 4 is true');} var materialCost = 20000;
                        var laborCost = 2000;
                        var totalCost = materialCost + laborCost;
                        if (totalCost === laborCost + materialCost){
                        alert('The cost equals');
                        }
                        if (true){
                        alert('True');
                        }
                        if (false){
                        alert('False');
                        }
                        if('car' < 'cat'){
                        alert('car is smaller than cat');
                        }
    // Task 6
    var a1 = prompt('Enter SubJect 1 marks');  var a2 = prompt('Enter SubJect 2 marks'); var a3 = prompt('Enter SubJect 3 marks'); var i = parseInt(a1) + parseInt(a2) + parseInt(a3); var j = (i/300)*100; if (j >= 80){alert('Total marks : 300 \n marks Obtained : ' + i + '\n Percentage  : ' + j + '% \n Grade : A1 \n Remarks : Excellent') ;} else if (j >= 70){alert('Total marks : 300 \n marks Obtained : ' + i + '\n Percentage : ' + j + '% \n Grade : A \n Remarks : Good') ;} else if (j >= 60){alert('Total marks : 300 \n marks Obtained : ' + i + '\n Percentage : ' + j + '% \n Grade : B \n Remarks : You Can Iprove') ;} if (j < 60){alert('Total marks : 300 \n marks Obtained : ' + i + '\n Percentage  : ' + j + '% \n Grade : Fail \n Remarks : Sorry') ;}
    // Task 7
    var a1 = prompt('Enter Youy guess'); var x = 7; if (a1 == x){alert('Bingo! correct Answer');} else if (a1 == x+1 || a1 == x-1 ){alert('Close Enough to the correct answer');} else {alert('wrong answer');}
    // Task 8
    var a1 = prompt('Enter Your Number');  if (a1 % 3 == 0){alert('The Number is Divisible by 3');} else {alert('the Number is not Divisible by 3');}
    // Task 9
    var a1 = prompt('Enter Your Number');  if (a1 % 2 == 0){alert('The Number is Even ');} else {alert('the Number is Odd  ');}
    // Task 10
    var a1 = prompt('Enter Temperature');  if (a1 > 40){alert('It is too hot outside.') ;} else if (a1 > 30){alert('The Weather today is normal') ;} else if (a1 > 20){alert('Todays weather is cool ') ;} else if (a1 > 10){alert('OMG! Todays weather is so Cool.') ;}
    // Task 11
    var a1 = prompt('Enter 1 Number'); var a2 = prompt('Enter 2 Number'); var a3 = prompt('Enter Operator'); if (a3 == '+'){alert(a1 + '  ' + '  ' + a3 + '  ' + '  ' + a2 + ' = ' + (parseInt(a1)+parseInt(a2))) ;} else if (a3 == '-'){alert(a1 + '  ' + a3 + '  ' + a2 + ' = ' + (parseInt(a1)-parseInt(a2))) ;} else if (a3 == '*'){alert(a1 + '  ' + a3 + '  ' + a2 + ' = ' + (parseInt(a1)*parseInt(a2))) ;} else if (a3 == '/'){alert(a1 + '  ' + a3 + '  ' + parseInt(a2) + ' = ' + (parseInt(a1)/parseInt(a2))) ;} else if (a3 == '%'){alert(a1 + '  ' + a3 + '  ' + a2 + ' = ' + (parseInt(a1)%parseInt(a2))) ;}
    

// CHAPTER 12 - 13
    // Task 1
    var a = prompt('Enter 1 Number');
    if(typeof(a) == 'number'){alert('type is number')} else if(a.charCodeAt(0) > 65 || a.charCodeAt(0) < 90){alert('type is Uppercase')} else if(a.charCodeAt(0) > 97 || a.charCodeAt(0) < 122){alert('type is Lowercase')}
    // Task 2
    var a = prompt('Enter 1 Number');
    var b = prompt('Enter 2 Number');
    if(a > b){alert('a is greater than b')} else if(a < b){alert('b is greater than a')} else{alert('a is equal to b')}
    // Task 3
    var a1 = prompt('Enter a Number');  if (a1 > 0){alert('positive Number');} else {alert('Negative Number');}
    // Task 4
    var a = prompt('Enter a character');
    if(a == 'a' || a == 'e' || a == 'i' || a == 'o' ||  a == 'u'){alert('Consonant');} else {alert('Vowel');}
    // Task 5
    var a = prompt('Enter Password');
    var b = prompt('Renter Password');
    if(a == None){alert('please enter password')}
    else if(a === b){alert('the two passwords match')}
    else {alert('the passwords do not match');}
    // Task 6
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
    }
    else{
greeting = "Good evening";
}

    // Task 7
    var a = prompt('Enter Time');
    if(a >= 0000 || a  < 1200){alert('Good Morning')}
    else if(a >= 1200 || a  < 1700){alert('Good Afternoon')}
    else if(a >= 1700 || a  < 2100){alert('Good evening')}
    else if(a >= 2100 || a  < 2359){alert('Good night')}
    

// CHAPTER 14 - 16
    // Task 1
    var arr = [];
    // Task 2
    var arr = [];
    // Task 3
    var arr = ['a','b'];
    // Task 4
    var arr = [1,2,3];
    // Task 5
    var arr = [True,false];
    // Task 6
    var arr = ['h',false,21];
    // Task 7
    var srr = [ 'SSC', 'HSC', 'BCS',
        'BS', 'BCOM', 'MS', 'M.','Phil.', 'PhD'];
    // Task 8
    var arr1 = ['Student_A','Student_B','Student_C'];
    var arr2 = [450,370,280];
    for(var i = 0 ; i <=2 ; i++){
        document.write('score of ' + arr1[i] + ' is ' + arr2[i] + ' and precentage is ' + ((arr2[i]/500)*100) + '%');
        document.write("<br>");
    }
    
    // Task 9   
    var i = ['red','green','blue','yellow','pink','purple'];
    var j = prompt('what color do you want to add at the start'); i.unshift(j); alert(i);
    var k = prompt('what color do you want to add at the end'); i.push(k); alert(i);
    i.unshift('new1','new2'); alert(i);
    i.shift(0,1); alert(i);
    i.pop(); alert(i);
    var l = prompt('what color do you want to add');  var m = prompt('At what index'); i.splice(m,0,l); alert(i);
    var n = prompt('how many colors do you wanrt to remove ');  var o = prompt('At what index'); i.splice(o,n); alert(i);

    // Task 10
    var arr2 = [450,370,280 , 150 , 220];
    arr2.sort();
    console.log(arr2);

    // Task 11
    var cities = ['islamabad','karachi','lahore' , 'peshawar' , 'quetta'];
    var citie_select = cities.slice(3);
    console.log(citie_select);

    // Task 11
    var arr = ["This ", " is ", " my ", " cat"];
    arr.join(',');

    // Task 12
    var arr = [];
    arr.push('keyboard');
    arr.push('mouse');
    arr.push('printer');
    arr.push('monitor');

    // Task 12
    var arr = [];
    arr.unshift('keyboard');
    arr.unshift('mouse');
    arr.unshift('printer');
    arr.unshift('monitor');

    // Task 12
    var arr = ['Apple','Samsung', 'Motorola', 'Nokia', 'Sony' , 'Haier'];
    document.write(arr);


// CHAPTER 17 - 20
    // Task 1
    var arr = [[]];
    // Task 2
    var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
    // Task 3
    for(var i = 1;i <=10;i++){console.log(i)}
    // Task 4
    var b = prompt('Enter a Number'); var c = prompt('Enter limit'); for(var i = 1; i <= c; i++){ console.log(b + ' x ' + i + ' = ' + b*i)}
    // Task 5
    var arr = ["apple", "banana", "mango", "orange","strawberry"];
    for(var i = 0; i <= arr.length ;i++){document.write('Element at index ' + i + ' is ' + arr[i])}
    // Task 6
    for(var i = 0; i <= 10 ;i++){document.write('Counting ' + i )}
    for(var i = 10; i >= 1 ;i--){document.write('Reverse Counting ' + i )}
    for(var i = 0; i <= 10 ;i++){document.write( i*2 )}
    for(var i = 0; i <= 20 ;i++){if(i%2 != 0){document.write( (i+1) );}}
    for(var i = 0; i <= 10 ;i++){document.write( i*2000 )}

    // Task 7
    var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];   var inp = prompt('enter Item to search');  var x = A.indexOf(inp.toLowerCase()); if (x >= 0){alert('item is avalible at index ' + x)} else{alert('Sorry' + inp + ' is not avalible at our bakery');}
    // Task 8
    var A = [24, 53, 78, 91, 12];
    var b = max(A);
    // Task 9
    for(var i = 0; i <= 20 ;i++){document.write( i*5 ); document.write("&nbsp")}

