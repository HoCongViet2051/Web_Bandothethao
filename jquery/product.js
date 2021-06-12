
let product1={img:"/img/2502336reebok-yoga-re-40022-jpeg.jpg",name:"THẢM TẬP YOGA REEBOK RE-40022",price1:"999.000",price2:" 819.000/sp",kindof:"Thảm tập Yoga"};
let products=[product1];
function displayproduct(products){
    let productx=
    '<div class="product-item col-md-3 col-sm-8 col-xs-12" style="margin-right:20px;margin-bottom:10px;margin-left:10px; ">'+
    '<img src="'+products.img+'" class="img img-thumbnail">'+
    '<p style="height:50px;font-weight: bold; color:#f78438">'+products.name+'</p>'
    '<p><del style="color: rgb(148, 13, 13);">'+products.price1+'</del>'+products.price2+'</p>'+
    '<p style="font-weight:bold">Freeship Giao hàng tận nơi</p>'+
    ' </div>';
    $("#listpro").append(productx);

}
$(document).ready(function(){
    products.forEach(displayproduct);
})