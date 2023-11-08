// Q 1:-

function findGrades(num){

    switch(true){

        case num >= 41 && num <= 50:
            return "A";

        case num >= 31 && num <= 40:
            return "B";
                
        case num >= 21 && num <= 30:
            return "C";
    
        case num >= 11 && num <= 20:
            return "D"

        case num >= 0 && num <= 10:
            return "E"

        default:
            grade = "invalid number"
    }
}
console.log(findGrades(41));


// Q 2 :-

function getValue(C) {
    const values = {
        'p': 'PrepBytes',
        'P': 'PrepBytes',
        'Z': 'Zenith',
        'z': 'Zenith',
        'E': 'Expert Coder',
        'e': 'Expert Coder',
        'D': 'Data Structure',
        'd': 'Data Structure'
    };

    return values[C] || 'Invalid Value';
}

console.log(getValue('p'));


// Q 3 :-

function Max_out_of_three(a,b,c) {

    if (a === b && b === c) {
        return -1;
    }
    else {
        return Math.max(a,b,c);
    }
}

var num1 = 1;
var num2 = 7;
var num3 = 3;

var marks = Max_out_of_three(num1, num2, num3);
console.log(marks);


// Q 4 :-

function find2ndsmallest(p,q,r)
{
   if(p > q)
   {
    if(p>r)
    {
        return q > r? q:r;
    }
    else
    {
        return p;
    }
   }
   else{
    if(q>r)
    {
        return p>r?p:r;
    }
    else{
        return q;
    }
   }
}
console.log(find2ndsmallest(10,3,4));


// Q 5 :-

function Triangle_check(A, B, C) {

    if (A <= 90 && B <= 90 && C <= 90) 
    {
        return 'Acute Triangle';
    }

    else if (A > 90 || B > 90 || C > 90)
    {
        return 'Obtuse Triangle';
    }

    else{
        return 'NOt a Triangle';
    }

}
console.log(Triangle_check(60, 80, 20));

