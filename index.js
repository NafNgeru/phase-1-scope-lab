// Write your solution in this file!
var customerName = 'bob';

function customerUpperCase(customerName){
    return customerName.toUpperCase();
}
customerUpperCase(customerName);

function setBestCustomer(){
    var bestCustomer = 'not bob';
    return bestCustomer;
}
setBestCustomer();

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob';
}
overwriteBestCustomer();

const leastFavoriteCustomer = 'me';
function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = 'someone else';
}
changeLeastFavoriteCustomer();
 