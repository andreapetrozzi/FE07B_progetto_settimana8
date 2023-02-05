# FE07B_progetto_settimana8
Designing a Smartphone interface using typescript

### Description
Design an interface named "Smartphone", to represent a mobile phone with "contract" to "recharge".
This interface has "two instance variables":

1. The first instance variable is defined as "number -> load",
   and represents the amount of euros available for calls;
2. The second instance variable is defined as "number -> number of calls",
   and represents the number of calls made with the mobile phone.
    
    
The "FirstUser-SecondUser-ThirdUser" classes must implement the interface with the following methods:

1. A method defined as "public void recharge(double(number) aRecharge), recharging the phone;
2. A method defined as public void call(double minutesDuration),
   which makes a call of duration in minutes specified by the explicit parameter.

This method will have to:
1. Update available charge,
2. And "increment" the variable containing the number of calls made from the mobile phone
   (assume a cost of 0.20 euro for each call minute),
   
            *********
             METHODS:
             recharge(credit number, double unaRecharge)
             call(credit number, double minutesDuration)
             number404()
             getNumber of Calls()
             resetCalls()

             a method public number number404(),
             which returns the value of the available charge.
            
             A public number getNumberCall() method,
             which returns the value of the instance variable numberCalls.
            
             Finally, a public void method clearsCall(),
             which resets the variable containing the number of calls made from the mobile phone.

             *********
             Check the remaining balance of each user and how many calls have been made.
