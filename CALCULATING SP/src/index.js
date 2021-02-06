//A man buys a cycle for Rs. a and sells it at a loss of b%. What is the selling price of the cycle?
// Write a Function to compute the roundof selling price.

// Write a Function to return compute the doundof selling price.
function find_SellingPrice(a,b){
    let lost_price = b/100*a;
    let selling_price=Math.round(a-lost_price);
    return selling_price;
}
//Use SpecRunner to check the Test Cases.
