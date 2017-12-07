function calc_zodiac(){
var year= Number(prompt("What year you are born ?"));
switch((year - 4) % 12){
    case 0 :
    document.write("Your Chinese Zodiac is: Rat");
        break; 
    
    case 1 :
        document.write("Your Chinese Zodiac is: Ox");
        break;

    case 2 :
    document.write("Your Chinese Zodiac is: Tiger");
        break;

    case 3 :
    document.write("Your Chinese Zodiac is: Rabbit");
        break;
        
    case 4 :
    document.write("Your Chinese Zodiac is: Dragon");
        break;

    case 5 :
    document.write("Your Chinese Zodiac is: Snake");
        break;

    case 6 :
    document.write("Your Chinese Zodiac is: Horse");
        break;

    case 7 : 
    document.write("Your Chinese Zodiac is: Goat");
        break;

    case 8 : 
    document.write("Your Chinese Zodiac is: Monkey");
        break;

    case 9 : 
    document.write("Your Chinese Zodiac is: Rooster")
        break;

    case 10 : 
    document.write("Your Chinese Zodiac is: Dog");
        break;

    case 11 :
    document.write("Your Chinese Zodiac is: Pig");
        break;

    default:
    document.write("Not a Year!");
        break;
}
}
calc_zodiac();



