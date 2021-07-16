//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address,distanceFromTown,hasNeighbours){
    let addresstype = typeof address 
    let distancetype = typeof distanceFromTown 
    let neighbourstype = typeof hasNeighbours;
    return addresstype+distancetype+neighbourstype;
}
//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {
    if ((typeof parents === "string") && (typeof noOfSiblings === "number") && (typeof isNuclearFamily === "boolean")) {
    return true;
    } else {
    return false;
    }
    }s
//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(ageInText,ageInNumber){
    if (isNaN(ageInText) ==true )
        return ageInText
    else
        return ageInNumber
}
//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel){
    let NoOfSweets=typeof totalNoOfSweets , ConsumedByKaren=typeof sweetsConsumedByKaren , ConsumedInNMeters=typeof sweetsConsumedInNMeters , meterstotravel=typeof metersToTravel;
    if(isNaN(totalNoOfSweets))
            return "No sweets for Karen's friend"
    else if(totalNoOfSweets==0 && sweetsConsumedByKaren==0 && sweetsConsumedInNMeters==0 && metersToTravel==0)
        return 0
    else    (sweetsConsumedByKaren==totalNoOfSweets && metersToTravel==0)
        return 0
}
//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit){
    let f=typeof fahrenheit;
    if(f=='number'){
        var cel=(fahrenheit-32)*(5/9)
        return cel;
    }
    else if(f=="string" || f=='undefined' || f=="object")
        return 'Technical Error!'
}
//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice){
    ct=typeof choice
    if(choice==1)
        return "Take her daughter to a doctor"
    else if(choice==-1)
        return "Break down and give up all hope"
    else if(typeof choice=="undefined")
        return "Wasn't able to decide"
    else if(choice=="I give up")
        return "Refused to do anything for Karen"
    
}
//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
