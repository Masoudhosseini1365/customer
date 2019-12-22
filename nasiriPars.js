$(document).on('click', function (e) {
    if ($(e.target).closest('input, button, select').length === 0) {
        if ($('#listOfCar').length) {
            
                window.location = "https://esale.ikco.ir/#!/searchcars?cca=0&csb=1&ccc=0&cpd=0";
                window.location = "https://esale.ikco.ir/#!/searchcars?cca=0&csb=3&ccc=0&cpd=0";
            
        }
        if ($('[name=loginForm]').length) {
            if ($('[name=firstName]').val() == '') {
                $('[name=firstName]').sendkeys('عاطفه') // name
            }
            if ($('[name=lastName]').val() == '') {
                $('[name=lastName]').sendkeys('نصیری') // family
            }
            if ($('[name=userName]').val() == '') {
                $('[name=userName]').sendkeys('0850093392')// shomare melli
            }
            if ($('[name=password]').val() == '') {
                $('[name=password]').sendkeys('0850093392')// sehnasname
            }
            if ($('[name=birthDate]').val() == '') {
                $('[name=birthDate]').sendkeys('1371/04/29')// birth
            }
            if ($('[name=cellPhoneNo]').val() == '') {
                $('[name=cellPhoneNo]').sendkeys('09156556182')// mobile number
            }
            if ($('#directiveProvince').val() == "") {
                var provinces = document.getElementById("directiveProvince"); // ostan
                provinces.value = "5";
                provinces.dispatchEvent(new Event("change"));
            }
            if ($('#directiveCity').val() == "") {
                setTimeout(() => {
                    var directiveCity = document.getElementById("directiveCity"); // city
                    directiveCity.value = "227";
                    directiveCity.dispatchEvent(new Event("change"));
                }, 70);
            }
            setTimeout(() => {
                $('#LoginButton').click();
            }, 100);
        }
       
    }
});
