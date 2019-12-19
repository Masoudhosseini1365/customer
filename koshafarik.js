$(document).on('click', function (e) {
    if ($(e.target).closest('input, button, select').length === 0) {
        if ($('#listOfCar').length) {
            if ($('#listOfCar').find('button').length) {
                $('#listOfCar').find('button')[0].click();
            } else {
                window.location = "https://esale.ikco.ir/#!/searchcars?cca=0&csb=1&ccc=0&cpd=0";
                window.location = "https://esale.ikco.ir/#!/searchcars?cca=0&csb=3&ccc=0&cpd=0";
            }
        }
        if ($('[name=loginForm]').length) {
            if ($('[name=firstName]').val() == '') {
                $('[name=firstName]').sendkeys('رضا') // name
            }
            if ($('[name=lastName]').val() == '') {
                $('[name=lastName]').sendkeys('قاسمی روشناوند') // family
            }
            if ($('[name=userName]').val() == '') {
                $('[name=userName]').sendkeys('0910138443')// shomare melli
            }
            if ($('[name=password]').val() == '') {
                $('[name=password]').sendkeys('0910138443')// sehnasname
            }
            if ($('[name=birthDate]').val() == '') {
                $('[name=birthDate]').sendkeys('1374/01/01')// birth
            }
            if ($('[name=cellPhoneNo]').val() == '') {
                $('[name=cellPhoneNo]').sendkeys('09158203803')// mobile number
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
