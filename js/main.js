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