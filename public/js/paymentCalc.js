/* global $
*/
$('#paymentCalc').click(() => {
    
    $('#calcError').html('');
    var price;
    var down;
    var rate;
    var taxes;
    var insurance;
    var error = false;
    
    if ($('#price').val())
        if ($('#price').val() == 0) {
            $('#calcError').append('<p>Purchase price cannot be $0.');
            error = true;
        }
        else price = Number($('#price').val());
    else {
        $('#calcError').append("<p>Please enter a purchase price.</p>");
        error = true;
    }
        
    if($('#down').val())
        down = Number($('#down').val());
    else {
        $('#calcError').append("<p>Please enter down payment amount.</p>");
        error = true;
    }
        
    if($('#rate').val()) 
        if($('#rate').val() < 0 || $('#rate').val() > 99) {
            $('#calcError').append("<p>Interest rate must be between 0 and .99.</p>");
            error = true;
        } else rate = Number($('#rate').val());
    else {
        $('#calcError').append('<p>Please enter an interest rate');
        error = true;
    }
    
    var term = Number($('#term').val());
    
    if (term == null) {
        $('#calcError').append('<p>Please select a mortgage term.</p>');
        error = true;
    }
        
    if($('#taxes').val())
        taxes = Number($('#taxes').val());
    else {
        $('#calcError').append('<p>Please enter your estimated annual property taxes.</p>');
        error = true;
    }
        
    if($('#insurance').val())
        insurance = Number($('#insurance').val());
    else {
        $('#calcError').append('<p>Please enter your estimated annual home insurance premium.</p>');
        error = true;
    }
    
    if (error == false) {
         
        var taxIns = Math.round((taxes + insurance) / 12);
        
        var P = price - down;
        var i = rate/1200;
        var n = term * 12;
        var D = (Math.pow(1 + i, n) - 1) / (Math.pow(1 + i, n) * i);
        var payment = Math.round(P / D * 100) / 100;
        
        
        console.log('principal:' + P);
        console.log('interest:' + i);
        console.log('payments' +  n);
        
        var result = "<table><tr><td>Monthly Taxes and Insurance:</td><td>$" + taxIns + "</td></tr>" +
                "<tr><td>Monthly Principal and Interest:</td><td>$" + Math.round(payment * 100) / 100 + "</td></tr>" +
                    "<tr><td>Total Monthly Payment:</td><td>$" + Number(payment + taxIns) + "</td></tr></table>";
    
        $('#calcResult').html(result);
    }
    
    
                    
});