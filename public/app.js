function something()
{
    var x = window.localStorage.getItem('aaa');//x=hh['aaa']
    x = x * 1 + 1;

    window.localStorage.setItem('aaa', x); //hh['aaa']=x

    alert(x);
}

function add_to_cart(id)
{
    var key = 'product_' + id;

    var x = window.localStorage.getItem(key);
    x = x * 1 + 1;

    window.localStorage.setItem(key, x);

    //вывод кол-во товара в корзине
    update_orders_input();
}

function cart_get_number_of_items()
{
    var cmt = 0;

    for(var i = 0; i < window.localStorage.length; i++)
    {
        var key = window.localStorage.key(i); //получаем ключ
        var value = window.localStorage.getItem(key); //получаем значение

        if(key.indexOf('product_') == 0)
        {
            cnt = cnt + value * 1;
        }
    }
    return orders;
}

function update_orders_input()
{
    var orders = cart_get_orders();
    $('#orders_input').val(orders);

}

function cart_get_orders()
{
    var orders = 0;

    for(var i = 0; i < window.localStorage.length; i++)
    {
        var key = window.localStorage.key(i); //получаем ключ
        var value = window.localStorage.getItem(key); //получаем значение

        if(key.indexOf('product_') == 0)
        {
            orders = orders + key + '=' + value + ',';
        }
    }
    return orders;
}