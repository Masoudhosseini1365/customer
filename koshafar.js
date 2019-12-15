$(document).on('click', function (e) {
    if ($(e.target).closest('input, button, select').length === 0) {
        if ($('#listOfCar').find('button').length) {
            $('#listOfCar').find('button')[0].click();
        } else if ($('[name=loginForm]').length) {
            if ($('[name=firstName]').val() == '') {
                $('[name=firstName]').sendkeys('حجی اسماعیل')//نام
            }
            if ($('[name=lastName]').val() == '') {
                $('[name=lastName]').sendkeys('کوشافر')//نام خانوادگی
            }
            if ($('[name=userName]').val() == '') {
                $('[name=userName]').sendkeys('0919617018')//شماره ملی
            }
            if ($('[name=password]').val() == '') {
                $('[name=password]').sendkeys('48')//شماره شناسنامه
            }
            if ($('[name=birthDate]').val() == '') {
                $('[name=birthDate]').sendkeys('1360/09/10')//تاریخ تولد
            }
            if ($('[name=cellPhoneNo]').val() == '') {
                $('[name=cellPhoneNo]').sendkeys('09158203803')//شماره همراه
            }
            if ($('#directiveProvince').val() == "") {
                var provinces = document.getElementById("directiveProvince"); //استان
                provinces.value = "5";
                provinces.dispatchEvent(new Event("change"));
            }
            if ($('#directiveCity').val() == "") {
                var directiveCity = document.getElementById("directiveCity"); //شهر 
                directiveCity.value = "227";
                directiveCity.dispatchEvent(new Event("change"));
            }
            setTimeout(() => {
                $('#LoginButton').click();
            }, 100);
        } else if ($('.inner-page.portfolioContainer.row.ng-scope').length && $('.row.sd-selectBank').children().length) {
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
