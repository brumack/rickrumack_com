/* global $ location localStorage Materialize */

$('#mortCalc').click(() =>{
    
    var income = 0;
    var expenses = 0;
    var ratioValid = true;
    var incomeValid = true;
    
    $('#qualError').html('');
    
    if ($('#pretax').val())
        income += Number($('#pretax').val());
    if ($('#self').val())
        income += Number($('#self').val());
    if ($('#second').val())
        income += Number($('#second').val());
    if ($('#second').val)
        income += Number($('#div').val());
    if ($('#interest').val())
        income += Number($('#interest').val());
    if ($('#pen').val())
        income += Number($('#pen').val());
    if ($('#social').val())
        income += Number($('#social').val());
    if ($('#rental').val())
        income += Number($('#rental').val());
    if ($('#child').val())
        income += Number($('#child').val());
    if ($('#otherInc').val())
        income += Number($('#otherInc').val());
        
    if ($('#car').val())
        expenses += Number($('#car').val());
    if ($('#furniture').val())
        expenses += Number($('#furniture').val());
    if ($('#appliances').val())
        expenses += Number($('#appliances').val());
    if ($('#boat').val())
        expenses += Number($('#boat').val());
    if ($('#cards').val())
        expenses += Number($('#cards').val());
    if ($('#student').val())
        expenses += Number($('#student').val());
    if ($('#otherExp').val())
        expenses += Number($('#otherExp').val());
    
    var ratioSelect = $('#ratio').val();
    var ratio1;
    var ratio2;
    
    switch (ratioSelect) {
        case null:
            $('#qualError').append('<p>Please select a calculation ratio.</p>');
            $('#qualResult').html();
            ratioValid = false;
            break;
        case '1':
            ratio1 = .28;
            ratio2 = .36;
            break;
        case '2':
            ratio1 = .29;
            ratio2 = .41;
    }
    
    
    if (income == 0) {
        $('#qualError').append('<p>Income can not be $0');
        $('#qualResult').html();
        incomeValid = false;
    }

    if (ratioValid && incomeValid) {
        
        var ratiocalc1 = Math.round(income * ratio1 * 100) / 100;
        var ratiocalc2 = Math.round((income * ratio2 - expenses) * 100) / 100;
        
        var result = "<table><tr><td>Income</td><td>$" + income + "</td></tr><tr><td>Expenses</td><td>$" + expenses + "</td></tr>" +
                    "<tr><td>Ratio 1 Maximum Monthly Payment</td><td>$" + ratiocalc1 + "</td></tr>" +
                    "<tr><td>Radio 2 Maximum Monthly Pyament</td><td>$" + ratiocalc2 + "</td></table>";
        $('#qualResult').html(result);
    }
});