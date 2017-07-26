console.log('hello world');
console.log(8 * 8);
function checkout(item1, item2, coupon){
    var subtotal = item1 + item2;
    var couponValue = subtotal * coupon;
    var total = subtotal - couponValue;
    console.log(total);
};
checkout(20, 15, .1);

var bannana = 1;
var pudding = 5;
var bigCoupon = .3;
checkout(bannana, pudding, bigCoupon);
