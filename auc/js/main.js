$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4'],
        sectionsColor: ['', '#fafafa', '#fafafa', '#51bec4', '#51bec4'],
        scrollingSpeed: 700,
        navigation: {
            'position': 'right',
            'tooltips': ['HOME', 'AUC COIN', 'TOKEN PLAN', 'TEAM ADVISORS', 'PARTNERS']
        },
        verticalCentered: false,
        css3: true,
        onLeave: function (index, nextIndex, direction) {
            //fading out the txt of the leaving section
            $('.section').eq(index - 1).find('h1, p').fadeOut(700, 'easeInQuart');
            //fading in the text of the destination (in case it was fadedOut)
            $('.section').eq(nextIndex - 1).find('h1, p').fadeIn(700, 'easeInQuart');
            //reaching our last section? The one with our normal site?
            if (nextIndex == 6) {
                $('#section6').find('.content').animate({
                    top: '0%'
                }, 700, 'easeInQuart');
            }
            //leaving our last section? The one with our normal site?
            if (index == 6) {
                $('#section6 .content').animate({
                    top: '100%'
                }, 700, 'easeInQuart');
            }
        }
    });

    var a = "en";
    null != localStorage.getItem("language") && (a = localStorage.getItem("language")),
        i18n.init({
                lng: a,
                // resStore: resources,
                resGetPath: "/languages/__lng__/__ns__.min.json",
                fallbackLng: "en"
            },
            function (a) {
                $(document).i18n();
            }),
        $(".lang").click(function () {
            var a = $(this).attr("data-lang");
            localStorage.setItem("language", a),
                i18n.init({
                    lng: a
                }, function (a) {
                    $(document).i18n();
                });
        });
});

$(document).ready(function () {
    $('#pagepiling02').pagepiling({
        menu: '#menu',
        anchors: ['page01', 'page02', 'page03', 'page04'],
        sectionsColor: ['', '#fafafa', '#fafafa', '#51bec4', '#51bec4'],
        scrollingSpeed: 700,
        navigation: {
            'position': 'right'
        },
        verticalCentered: false,
        css3: true,
        onLeave: function (index, nextIndex, direction) {
            //fading out the txt of the leaving section
            $('.section').eq(index - 1).find('h1, p').fadeOut(700, 'easeInQuart');
            //fading in the text of the destination (in case it was fadedOut)
            $('.section').eq(nextIndex - 1).find('h1, p').fadeIn(700, 'easeInQuart');
            //reaching our last section? The one with our normal site?
            if (nextIndex == 6) {
                $('#section6').find('.content').animate({
                    top: '0%'
                }, 700, 'easeInQuart');
            }
            //leaving our last section? The one with our normal site?
            if (index == 6) {
                $('#section6 .content').animate({
                    top: '100%'
                }, 700, 'easeInQuart');
            }
        }
    });
});
