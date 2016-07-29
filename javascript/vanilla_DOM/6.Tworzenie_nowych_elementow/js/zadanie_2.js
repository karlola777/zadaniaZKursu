/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('addBtn');
    btn.addEventListener('click', function () {
        var orderId = document.querySelector('#orderId').value;
        var item = document.querySelector('#item').value;
        var quantity = document.querySelector('#quantity').value;
        var newTr = document.createElement('tr');//<tr></tr>
        var newTd1 = document.createElement('td');//<td></td>
        var newTd2 = document.createElement('td');//<td></td>
        var newTd3 = document.createElement('td');//<td></td>
        newTd1.innerHTML = orderId;
        newTd2.innerHTML = item;
        newTd3.innerHTML = quantity;
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTr.appendChild(newTd3);
        document.getElementById('orders').appendChild(newTr);
    });

});