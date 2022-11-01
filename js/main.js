if(document.querySelector(".header__search .input")) {
    var input = document.querySelector(".header__search .input input");
    document.querySelector("body").addEventListener('click', function() {
        if(input.value === "") {
            input.classList.remove("active");
        } else {
            input.classList.add("active");
        };
    });
};
if(document.querySelector(".header__search")) {
    $(".header__search").click(function() {
        $(this).addClass("active");
    });
    $(".main").click(function() {
        $(".header__search").removeClass("active");
    });
};
if(document.querySelector(".mobile_search")) {
    $(".mobile_search").click(function() {
        $(".header__search__wrap").addClass("active");
        $(".header__search").addClass("active");
    });
    $(".main").click(function() {
        $(".header__search__wrap").removeClass("active");
        $(".header__search").removeClass("active");
    });
};
if(document.querySelector(".catalog_2__aside")) {
    $(".catalog_2__aside .item").click(function() {
        $(this).toggleClass("active");
    });
};
if(document.querySelector(".accordion__title")) {
    $(".accordion__title").click(function() {
        $(this).toggleClass("active");
    });
};
if(document.querySelector(".product_amount")) {
    var plus = $("#plus");
    var minus = $("#minus");
    var number = document.querySelector('#number_input');

    minus.click(function() {
        if(number.value == "1") {
        }else {
            number.value--;
        }
    });
    plus.click(function() {
        number.value++;
    });
}