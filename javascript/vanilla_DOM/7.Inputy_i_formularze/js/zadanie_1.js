/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function(){
    var invoice = document.querySelector('#invoice');
    var invoiceData = document.querySelector('#invoiceData');
    if (invoice.checked){
        invoiceData.style.visibility='visible';
    }
    else {
        invoiceData.style.visibility='hidden';
    }

    invoice.addEventListener('click', function(){
        if (invoice.checked){
            invoiceData.style.visibility='visible';
        }
        else {
            invoiceData.style.visibility='hidden';
        }
    });

});
