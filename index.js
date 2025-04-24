
// 1. Write a program that takes an array of days like "Mon", "Tue", and "Fri" and 
// uses a switch statement to print what type of delivery is scheduled on each day.


const delivery = (days)=>{
    days.forEach(day=>{
        switch(day){
            case 'Mon':
                console.log(` ${day}: Groceries delivery`);
                break;
                case 'Tue':
                    console.log(` ${day}: Parcel delivery`);
                    break;
                    case 'Fri':
                        console.log(`${day}: Food delivery`);
                        break;
                        default:
                            console.log('Package not scheduled');
                            break;

        }
    });
};
const days = ["Mon","Tue","Fri"];
delivery(days)

// 2. Create a program that loops through an array of book statuses and 
// prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".


const checkStatus = (statuses)=>{
    statuses.forEach(status=> {
        switch (status){
            case 'available':
                console.log('Ready to lend');
                break;
                case 'borrowed':
                    console.log('Checked out');
                    break;
                    default:
                        console.log('Does not exist');
                        break;

        }
});
};
const statuses = ['available','borrowed','Not available'];
checkStatus(statuses)

// 3. Given an array of customer ages, write a program that checks each age and 
// prints "Adult" if the age is 18 or above, and "Minor" otherwise.

function legalAges(ages){
    ages.forEach(age=>{
        if(age>=18){
            console.log('Adult')
        }
        else{console.log('Minor');

        }
    });
};
legalAges(['20','12','35','10','18']);

// 4. Write a program using a while loop that simulates a countdown of lives in a game 
// starting from 5 and prints "You have X lives left" on each loop until it reaches 0.

 function liveCountdown(){
let lives = 5;
while(lives<=5 && lives>=0){
    console.log(`You have ${lives} lives left`);
    lives--
}
 }

  liveCountdown()

//   5. Using a do...while loop, write a program that loops through an array of user feedback and 
// prints each comment until the array is empty.

function userFeedback(feedback){
do{
    console.log(feedback.pop());
}
while(feedback.length !==0){

}
};
userFeedback(["bad","good","easy","poor"]);

// 6. Write a program that loops through an array of user login statuses and 
// prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.

function loginStatus(status){
    status.forEach(status=>{
        if(status=="logged in"){
            console.log("Welcome back!");
        }
        else{console.log("Please log in")}
    });
};
loginStatus(["logged in","not logged in"]);

// 7.Write a program that processes an array of support ticket priorities using a switch 
// statement to print how quickly each one should be addressed based on whether 
// the priority is "low", "medium", or "high".

function addressTicket(tickets){
    tickets.forEach(ticket=>{
        switch (ticket){
            case 'Regular':
                console.log("low priority");
                break;
                case 'VVIP':
                    console.log("High priority");
                    break;
                    case 'VIP':
                        console.log("Medium priority");
                        break;
                        default:
                            console.log("Get yourself a ticket");
                            break;
        }
    });
};


addressTicket(['Regular','VVIP','VIP']);

// 8. Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
