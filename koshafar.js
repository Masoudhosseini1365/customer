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
                $('[name=firstName]').sendkeys('حجی اسماعیل') // name
            }
            if ($('[name=lastName]').val() == '') {
                $('[name=lastName]').sendkeys('کوشافر') // family
            }
            if ($('[name=userName]').val() == '') {
                $('[name=userName]').sendkeys('0919617018')// shomare melli
            }
            if ($('[name=password]').val() == '') {
                $('[name=password]').sendkeys('48')// sehnasname
            }
            if ($('[name=birthDate]').val() == '') {
                $('[name=birthDate]').sendkeys('1360/09/10')// birth
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
        if ($('.inner-page.portfolioContainer.row.ng-scope').length && $('.row.sd-selectBank').children().length) {
            $('div[style*="background-color: rgb(255, 255, 255)"]').parent().click();
            $('.row.sd-selectBank').children()[0].click();
            if (!$('[name=que1]').is(':checked')) {
                $('[name=que1]').click();
                $('[name=que2]').click();
                $('input[type=checkbox]')[2].click();
            }
            $('.sd-nextBtn').removeAttr('disabled');
        }
    }
});
