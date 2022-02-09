$(document).ready(function(){
    $(".success").hide();
    $(".error").hide();
    $('#update_product').hide();
})
$(".close2").click(function(){
    $(".error").hide();
});
$(".close1").click(function(){
    $(".success").hide();
});
arr=[];
temp=0;
function myFunction () {
    var sku = document.getElementById('product_sku').value;
    var price = document.getElementById('product_price').value;
    var name = document.getElementById('product_name').value;
    var qua = document.getElementById('product_quantity').value;
    logic (sku, price, name, qua);
    display(arr);
}

function logic(id, price, name, quantity) 
{
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i].sku == id)
        {
            $(".error").show();
            return;
        }
    }
    obj = {};
    obj["sku"] = id;
    obj["name"] = name;
    obj["Price"] = price;
    obj["Quantity"] = quantity; 
    arr.push(obj);
    $(".success").show();
}

function display(result) {
    var text=document.getElementById("table1");
    text.innerHTML="<tr>\
    <td>SKU</td>\
    <td>Name</td>\
    <td>Price</td>\
    <td>Quantity</td>\
    <td>Action</td>\
    </tr>";
    for (let i=0; i<result.length; i++) {
        text.innerHTML+='<tr>\
        <td>' + result[i].sku + '</td>\
        <td>' + result[i].name + '</td>\
        <td>' + result[i].Price + '</td>\
        <td>' + result[i].Quantity + '</td>\
        <td><a href="#" id="edit" class="edit" onclick=editForm("'+result[i].sku+'")>Edit</a><a href="#" class="delete" onclick=deleteForm(\"'+result[i].sku+'\")>Delete</a></td>\
    </tr>';
    }
    $('#product_sku').val("");
    $('#product_price').val("");
    $('#product_name').val("");
    $('#product_quantity').val("");
    
}


function editForm(id)
{
    $('#add_product').hide();
    $('#update_product').show();
    for (var i = 0; i < arr.length; i++)
    {
        console.log(typeof(arr[i].sku), typeof(id));
        if (arr[i].sku == id)
        {
            $('#product_sku').val(arr[i].sku);
            // document.getElementById('product_sku').value = arr[i].sku;
            // document.getElementById('product_price').value = arr[i].Price;
            $('#product_price').val(arr[i].Price);
            // document.getElementById('product_name').value = arr[i].name;
            $('#product_name').val(arr[i].name);
            // document.getElementById('product_quantity').value = arr[i].Quantity;
            $('#product_quantity').val(arr[i].Quantity);
            temp=i;
        }
    }
}

$("#update_product").click(function(){
    $('#add_product').show();
    $('#update_product').hide();
    console.log(arr);
    // arr[temp].sku = document.getElementById('product_sku').value;
    arr[temp].sku = $('#product_sku').val();
    // arr[temp].Price = document.getElementById('product_price').value;
    arr[temp].Price = $('#product_price').val();
    // arr[temp].name = document.getElementById('product_name').value;
    arr[temp].name = $('#product_name').val();
    // arr[temp].Quantity = document.getElementById('product_quantity').value;
    arr[temp].Quantity = $('#product_quantity').val();

    $(".success").show();
    display(arr);
})

function deleteForm(id)
{ 
    if (confirm("Are your sure you want to delete this product from the list?")) {
        for (var i = 0; i < arr.length; i++)
        {
            if (arr[i].sku == id)
            {   
                arr.splice(i,1);
            }
        }
    }
    display(arr);
}
