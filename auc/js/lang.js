
/* Lang js */
$(document).ready(function () {
    var a = "en";
    null != localStorage.getItem("language") && (a = localStorage.getItem("language")),
        i18n.init({ 
            lng: a,
            // resStore: resources,
            resGetPath: "languages/__lng__/__ns__.min.json",
            fallbackLng: "en" 
        },
            function (a) {
                $(document).i18n();
        }),
        $(".lang").click(function () {
            var a = $(this).attr("data-lang");
            localStorage.setItem("language", a),
                i18n.init({ lng: a }, function (a) {
                    $(document).i18n();
                });
        });
});
