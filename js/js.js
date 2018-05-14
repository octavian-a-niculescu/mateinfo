$(function () {
    /*Pagina principala - jQuery*/
    $("#mate").hover(function () {
        $("#mate").removeClass(); //stergem toate clasele div-urilor mate si info inainte, prevenind "stack"-area claselor
        $("#info").removeClass();
        $("#mate").toggleClass("hover");
        $("#info").toggleClass("not-hovered-on");
    }); //in cazul in care cursorul intra in document si ajunge deasupra primei jumatati, ea se va extinde
    $("#info").hover(function () {
        $("#mate").removeClass(); //stergem toate clasele div-urilor mate si info inainte, prevenind "stack"-area claselor
        $("#info").removeClass();
        $("#info").toggleClass("hover");
        $("#mate").toggleClass("not-hovered-on");
    }); //in cazul in care cursorul intra in document si ajunge deasupra celei de a doua jumatati, ea se va extinde
    $(document.body).mouseleave(function () {
        $("#mate").removeClass(); //stergem toate clasele div-urilor mate si info inainte, prevenind "stack"-area claselor
        $("#info").removeClass();
        $("#info").toggleClass("default");
        $("#mate").toggleClass("default");
    })
    //in cazul in care cursorul iese din interiorul documentului, cele 2 domenii revin la forma initiala
    $("#mate").click(function () {
        window.location.href = 'pagina-mate.html';
        return false;
    }); /*cand dam click pe prima jumatate, vom fi redirectionati spre pagina dedicata matematicii*/
    $("#info").click(function () {
        window.location.href = 'pagina-info.html';
        return false;
    }); /*cand dam click pe a doua jumatate, vom fi redirectionati spre pagina dedicata informaticii*/
    /*Portal MATE - jQuery - SE POATE FOLOSI .HOVER() CU 2 FUNCTII PT IN SI OUT, INSA PREFER FOLOSIREA A 2 EVENIMENTE SEPARATE, MOUSEENTER, MOUSELEAVE (este exact acelasi lucru), hover = mouseenter + mouseleave*/
    /*Portal MATE - jQuery*/
    $("#cursuri-mate").mouseenter(function () {
        $(".cursuri-text-mate").stop(false, true).animate({
            opacity: 0.0,
            top: "-=50",
        }, 600);
        $(".fa-book").stop(true, true).animate({
            opacity: 0.0,
            top: "-=50",
        }, 600);
        $(".selectie-clasa-mate-cursuri").stop(true, true).animate({
            opacity: 1.0,
            top: "-=50",
        }, 600);
        $(".hidden-cursuri").stop(true, true).animate({
            opacity: 1.0,
            top: "-=50",
        }, 600);
    });
    $("#cursuri-mate").mouseleave(function () {
        $(".cursuri-text-mate").stop(true, true).animate({
            opacity: 1,
            top: "+=50",
        }, 300);
        $(".fa-book").stop(true, true).animate({
            opacity: 1,
            top: "+=50",
        }, 300);
        $(".selectie-clasa-mate-cursuri").stop(true, true).animate({
            opacity: 0.0,
            top: "+=50",
        }, 300);
        $(".hidden-cursuri").stop(true, true).animate({
            opacity: 0.0,
            top: "+=50",
        }, 300);
    });
    $("#exercitii-mate").mouseenter(function () {
        $(".exercitii-text-mate").stop(true, true).animate({
            opacity: 0.0,
            top: "-=50",
        }, 600);
        $(".fa-pencil-alt").stop(true, true).animate({
            opacity: 0.0,
            top: "-=50",
        }, 600);
        $(".selectie-clasa-mate-exercitii").stop(true, true).animate({
            opacity: 1.0,
            top: "-=50",
        }, 600);
        $(".hidden-exercitii").stop(true, true).animate({
            opacity: 1.0,
            top: "-=50",
        }, 600);
    });
    $("#exercitii-mate").mouseleave(function () {
        $(".exercitii-text-mate").stop(true, true).animate({
            opacity: 1.0,
            top: "+=50",
        }, 300);
        $(".fa-pencil-alt").stop(true, true).animate({
            opacity: 1.0,
            top: "+=50",
        }, 300);
        $(".selectie-clasa-mate-exercitii").stop(true, true).animate({
            opacity: 0.0,
            top: "+=50",
        }, 300);
        $(".hidden-exercitii").stop(true, true).animate({
            opacity: 0.0,
            top: "+=50",
        }, 300);
    });
    $("#quiz-mate").mouseenter(function () {
        $(".quiz-text-mate").stop(true, true).animate({
            opacity: 0.0,
            top: "-=50",
        }, 600);
        $(".fa-question").stop(true, true).animate({
            opacity: 0.0,
            top: "-=50",
        }, 600);
        $(".selectie-clasa-mate-quiz").stop(true, true).animate({
            opacity: 1.0,
            top: "-=50",
        }, 600);
        $(".hidden-quiz").stop(true, true).animate({
            opacity: 1.0,
            top: "-=50",
        }, 600);
    });
    $("#quiz-mate").mouseleave(function () {
        $(".quiz-text-mate").stop(true, true).animate({
            opacity: 1.0,
            top: "+=50",
        }, 300);
        $(".fa-question").stop(true, true).animate({
            opacity: 1.0,
            top: "+=50",
        }, 300);
        $(".selectie-clasa-mate-quiz").stop(true, true).animate({
            opacity: 0.0,
            top: "+=50",
        }, 300);
        $(".hidden-quiz").stop(true, true).animate({
            opacity: 0.0,
            top: "+=50",
        }, 300);
    }); 
    $("#variante-mate").click(function () {
        window.location.href = 'variante-mate.html';
        return false;
    });
    /*Schimbarea butoanelor cu clasa cand se trece cu mouse-ul deasupra lor*/
    $(".9-cursuri-mate").mouseenter(function () {
        $(".9-hov-cursuri-mate").show();
        $(".9-img-cursuri-mate").hide();
    });
    $(".9-cursuri-mate").mouseleave(function () {
        $(".9-hov-cursuri-mate").hide();
        $(".9-img-cursuri-mate").show();
    });
    $(".10-cursuri-mate").mouseenter(function () {
        $(".10-hov-cursuri-mate").show();
        $(".10-img-cursuri-mate").hide();
    });
    $(".10-cursuri-mate").mouseleave(function () {
        $(".10-hov-cursuri-mate").hide();
        $(".10-img-cursuri-mate").show();
    });
    $(".11-cursuri-mate").mouseenter(function () {
        $(".11-hov-cursuri-mate").show();
        $(".11-img-cursuri-mate").hide();
    });
    $(".11-cursuri-mate").mouseleave(function () {
        $(".11-hov-cursuri-mate").hide();
        $(".11-img-cursuri-mate").show();
    });
    $(".12-cursuri-mate").mouseenter(function () {
        $(".12-hov-cursuri-mate").show();
        $(".12-img-cursuri-mate").hide();
    });
    $(".12-cursuri-mate").mouseleave(function () {
        $(".12-hov-cursuri-mate").hide();
        $(".12-img-cursuri-mate").show();
    });
    $(".9-exercitii-mate").mouseenter(function () {
        $(".9-hov-exercitii-mate").show();
        $(".9-img-exercitii-mate").hide();
    });
    $(".9-exercitii-mate").mouseleave(function () {
        $(".9-hov-exercitii-mate").hide();
        $(".9-img-exercitii-mate").show();
    });
    $(".10-exercitii-mate").mouseenter(function () {
        $(".10-hov-exercitii-mate").show();
        $(".10-img-exercitii-mate").hide();
    });
    $(".10-exercitii-mate").mouseleave(function () {
        $(".10-hov-exercitii-mate").hide();
        $(".10-img-exercitii-mate").show();
    });
    $(".11-exercitii-mate").mouseenter(function () {
        $(".11-hov-exercitii-mate").show();
        $(".11-img-exercitii-mate").hide();
    });
    $(".11-exercitii-mate").mouseleave(function () {
        $(".11-hov-exercitii-mate").hide();
        $(".11-img-exercitii-mate").show();
    });
    $(".12-exercitii-mate").mouseenter(function () {
        $(".12-hov-exercitii-mate").show();
        $(".12-img-exercitii-mate").hide();
    });
    $(".12-exercitii-mate").mouseleave(function () {
        $(".12-hov-exercitii-mate").hide();
        $(".12-img-exercitii-mate").show();
    });
    $(".9-quiz-mate").mouseenter(function () {
        $(".9-hov-quiz-mate").show();
        $(".9-img-quiz-mate").hide();
    });
    $(".9-quiz-mate").mouseleave(function () {
        $(".9-hov-quiz-mate").hide();
        $(".9-img-quiz-mate").show();
    });
    $(".10-quiz-mate").mouseenter(function () {
        $(".10-hov-quiz-mate").show();
        $(".10-img-quiz-mate").hide();
    });
    $(".10-quiz-mate").mouseleave(function () {
        $(".10-hov-quiz-mate").hide();
        $(".10-img-quiz-mate").show();
    });
    $(".11-quiz-mate").mouseenter(function () {
        $(".11-hov-quiz-mate").show();
        $(".11-img-quiz-mate").hide();
    });
    $(".11-quiz-mate").mouseleave(function () {
        $(".11-hov-quiz-mate").hide();
        $(".11-img-quiz-mate").show();
    });
    $(".12-quiz-mate").mouseenter(function () {
        $(".12-hov-quiz-mate").show();
        $(".12-img-quiz-mate").hide();
    });
    $(".12-quiz-mate").mouseleave(function () {
        $(".12-hov-quiz-mate").hide();
        $(".12-img-quiz-mate").show();
    });
    /*Portal INFO - jQuery*/
    /*Portal INFO - jQuery*/
    $("#cursuri-info").mouseenter(function () {
        $(".cursuri-text-info").stop(false, true).animate({
            opacity: 0.0,
            top: "-=50",
        }, 600);
        $(".fa-book").stop(true, true).animate({
            opacity: 0.0,
            top: "-=50",
        }, 600);
        $(".selectie-clasa-info-cursuri").stop(true, true).animate({
            opacity: 1.0,
            top: "-=50",
        }, 600);
        $(".hidden-cursuri").stop(true, true).animate({
            opacity: 1.0,
            top: "-=50",
        }, 600);
    });
    $("#cursuri-info").mouseleave(function () {
        $(".cursuri-text-info").stop(true, true).animate({
            opacity: 1,
            top: "+=50",
        }, 300);
        $(".fa-book").stop(true, true).animate({
            opacity: 1,
            top: "+=50",
        }, 300);
        $(".selectie-clasa-info-cursuri").stop(true, true).animate({
            opacity: 0.0,
            top: "+=50",
        }, 300);
        $(".hidden-cursuri").stop(true, true).animate({
            opacity: 0.0,
            top: "+=50",
        }, 300);
    });
    $("#exercitii-info").mouseenter(function () {
        $(".exercitii-text-info").stop(true, true).animate({
            opacity: 0.0,
            top: "-=50",
        }, 600);
        $(".fa-pencil-alt").stop(true, true).animate({
            opacity: 0.0,
            top: "-=50",
        }, 600);
        $(".selectie-clasa-info-exercitii").stop(true, true).animate({
            opacity: 1.0,
            top: "-=50",
        }, 600);
        $(".hidden-exercitii").stop(true, true).animate({
            opacity: 1.0,
            top: "-=50",
        }, 600);
    });
    $("#exercitii-info").mouseleave(function () {
        $(".exercitii-text-info").stop(true, true).animate({
            opacity: 1.0,
            top: "+=50",
        }, 300);
        $(".fa-pencil-alt").stop(true, true).animate({
            opacity: 1.0,
            top: "+=50",
        }, 300);
        $(".selectie-clasa-info-exercitii").stop(true, true).animate({
            opacity: 0.0,
            top: "+=50",
        }, 300);
        $(".hidden-exercitii").stop(true, true).animate({
            opacity: 0.0,
            top: "+=50",
        }, 300);
    });
    $("#quiz-info").mouseenter(function () {
        $(".quiz-text-info").stop(true, true).animate({
            opacity: 0.0,
            top: "-=50",
        }, 600);
        $(".fa-question").stop(true, true).animate({
            opacity: 0.0,
            top: "-=50",
        }, 600);
        $(".selectie-clasa-info-quiz").stop(true, true).animate({
            opacity: 1.0,
            top: "-=50",
        }, 600);
        $(".hidden-quiz").stop(true, true).animate({
            opacity: 1.0,
            top: "-=50",
        }, 600);
    });
    $("#quiz-info").mouseleave(function () {
        $(".quiz-text-info").stop(true, true).animate({
            opacity: 1.0,
            top: "+=50",
        }, 300);
        $(".fa-question").stop(true, true).animate({
            opacity: 1.0,
            top: "+=50",
        }, 300);
        $(".selectie-clasa-info-quiz").stop(true, true).animate({
            opacity: 0.0,
            top: "+=50",
        }, 300);
        $(".hidden-quiz").stop(true, true).animate({
            opacity: 0.0,
            top: "+=50",
        }, 300);
    }); 
    $("#variante-info").click(function () {
        window.location.href = 'variante-info.html';
        return false;
    });
    /*Schimbarea butoanelor cu clasa cand se trece cu mouse-ul deasupra lor*/
    $(".9-cursuri-info").mouseenter(function () {
        $(".9-hov-cursuri-info").show();
        $(".9-img-cursuri-info").hide();
    });
    $(".9-cursuri-info").mouseleave(function () {
        $(".9-hov-cursuri-info").hide();
        $(".9-img-cursuri-info").show();
    });
    $(".10-cursuri-info").mouseenter(function () {
        $(".10-hov-cursuri-info").show();
        $(".10-img-cursuri-info").hide();
    });
    $(".10-cursuri-info").mouseleave(function () {
        $(".10-hov-cursuri-info").hide();
        $(".10-img-cursuri-info").show();
    });
    $(".11-cursuri-info").mouseenter(function () {
        $(".11-hov-cursuri-info").show();
        $(".11-img-cursuri-info").hide();
    });
    $(".11-cursuri-info").mouseleave(function () {
        $(".11-hov-cursuri-info").hide();
        $(".11-img-cursuri-info").show();
    });
    $(".12-cursuri-info").mouseenter(function () {
        $(".12-hov-cursuri-info").show();
        $(".12-img-cursuri-info").hide();
    });
    $(".12-cursuri-info").mouseleave(function () {
        $(".12-hov-cursuri-info").hide();
        $(".12-img-cursuri-info").show();
    });
    $(".9-exercitii-info").mouseenter(function () {
        $(".9-hov-exercitii-info").show();
        $(".9-img-exercitii-info").hide();
    });
    $(".9-exercitii-info").mouseleave(function () {
        $(".9-hov-exercitii-info").hide();
        $(".9-img-exercitii-info").show();
    });
    $(".10-exercitii-info").mouseenter(function () {
        $(".10-hov-exercitii-info").show();
        $(".10-img-exercitii-info").hide();
    });
    $(".10-exercitii-info").mouseleave(function () {
        $(".10-hov-exercitii-info").hide();
        $(".10-img-exercitii-info").show();
    });
    $(".11-exercitii-info").mouseenter(function () {
        $(".11-hov-exercitii-info").show();
        $(".11-img-exercitii-info").hide();
    });
    $(".11-exercitii-info").mouseleave(function () {
        $(".11-hov-exercitii-info").hide();
        $(".11-img-exercitii-info").show();
    });
    $(".12-exercitii-info").mouseenter(function () {
        $(".12-hov-exercitii-info").show();
        $(".12-img-exercitii-info").hide();
    });
    $(".12-exercitii-info").mouseleave(function () {
        $(".12-hov-exercitii-info").hide();
        $(".12-img-exercitii-info").show();
    });
    $(".9-quiz-info").mouseenter(function () {
        $(".9-hov-quiz-info").show();
        $(".9-img-quiz-info").hide();
    });
    $(".9-quiz-info").mouseleave(function () {
        $(".9-hov-quiz-info").hide();
        $(".9-img-quiz-info").show();
    });
    $(".10-quiz-info").mouseenter(function () {
        $(".10-hov-quiz-info").show();
        $(".10-img-quiz-info").hide();
    });
    $(".10-quiz-info").mouseleave(function () {
        $(".10-hov-quiz-info").hide();
        $(".10-img-quiz-info").show();
    });
    $(".11-quiz-info").mouseenter(function () {
        $(".11-hov-quiz-info").show();
        $(".11-img-quiz-info").hide();
    });
    $(".11-quiz-info").mouseleave(function () {
        $(".11-hov-quiz-info").hide();
        $(".11-img-quiz-info").show();
    });
    $(".12-quiz-info").mouseenter(function () {
        $(".12-hov-quiz-info").show();
        $(".12-img-quiz-info").hide();
    });
    $(".12-quiz-info").mouseleave(function () {
        $(".12-hov-quiz-info").hide();
        $(".12-img-quiz-info").show();
    });
    /*Cursuri Mate - jQuery*/
    /*Cursuri Mate - jQuery*/
    $(".cursuri-mate-1").click(function () {
        $(".fereastra-mate-curs-1").show();
        $(".fereastra-mate-curs-2").hide();
        $(".fereastra-mate-curs-3").hide();
    });
    $(".cursuri-mate-2").click(function () {
        $(".fereastra-mate-curs-1").hide();
        $(".fereastra-mate-curs-2").show();
        $(".fereastra-mate-curs-3").hide();
    });
    $(".cursuri-mate-3").click(function () {
        $(".fereastra-mate-curs-1").hide();
        $(".fereastra-mate-curs-2").hide();
        $(".fereastra-mate-curs-3").show();
    });
    /*Exercitii Mate - jQuery*/
    /*Exercitii Mate - jQuery*/
    $(".exercitii-mate-1").click(function () {
        $(".fereastra-mate-exercitii-1").show();
        $(".fereastra-mate-exercitii-2").hide();
        $(".fereastra-mate-exercitii-3").hide();
    });
    $(".exercitii-mate-2").click(function () {
        $(".fereastra-mate-exercitii-1").hide();
        $(".fereastra-mate-exercitii-2").show();
        $(".fereastra-mate-exercitii-3").hide();
    });
    $(".exercitii-mate-3").click(function () {
        $(".fereastra-mate-exercitii-1").hide();
        $(".fereastra-mate-exercitii-2").hide();
        $(".fereastra-mate-exercitii-3").show();
    });
    /*Cursuri Info - jQuery*/
    /*Cursuri Info - jQuery*/
    $(".cursuri-info-1").click(function () {
        $(".fereastra-info-curs-1").show();
        $(".fereastra-info-curs-2").hide();
        $(".fereastra-info-curs-3").hide();
    });
    $(".cursuri-info-2").click(function () {
        $(".fereastra-info-curs-1").hide();
        $(".fereastra-info-curs-2").show();
        $(".fereastra-info-curs-3").hide();
    });
    $(".cursuri-info-3").click(function () {
        $(".fereastra-info-curs-1").hide();
        $(".fereastra-info-curs-2").hide();
        $(".fereastra-info-curs-3").show();
    });
    /*Exercitii info - jQuery*/
    /*Exercitii info - jQuery*/
    $(".exercitii-info-1").click(function () {
        $(".fereastra-info-exercitii-1").show();
        $(".fereastra-info-exercitii-2").hide();
        $(".fereastra-info-exercitii-3").hide();
    });
    $(".exercitii-info-2").click(function () {
        $(".fereastra-info-exercitii-1").hide();
        $(".fereastra-info-exercitii-2").show();
        $(".fereastra-info-exercitii-3").hide();
    });
    $(".exercitii-info-3").click(function () {
        $(".fereastra-info-exercitii-1").hide();
        $(".fereastra-info-exercitii-2").hide();
        $(".fereastra-info-exercitii-3").show();
    });
    /*Variante mate - jQuery*/
    /*Variante mate - jQuery*/
    $(".variante-bacalaureat-mate-1").hover(function () {
        $(".fereastra-mate-variante-bacalaureat-1").show();
        $(".fereastra-mate-variante-bacalaureat-2").hide();
        $(".fereastra-mate-variante-bacalaureat-3").hide();
    });
    $(".variante-bacalaureat-mate-2").hover(function () {
        $(".fereastra-mate-variante-bacalaureat-1").hide();
        $(".fereastra-mate-variante-bacalaureat-2").show();
        $(".fereastra-mate-variante-bacalaureat-3").hide();
    });
    $(".variante-bacalaureat-mate-3").hover(function () {
        $(".fereastra-mate-variante-bacalaureat-1").hide();
        $(".fereastra-mate-variante-bacalaureat-2").hide();
        $(".fereastra-mate-variante-bacalaureat-3").show();
    });
    /*Variante info - jQuery*/
    /*Variante info - jQuery*/
    $(".variante-bacalaureat-info-1").hover(function () {
        $(".fereastra-info-variante-bacalaureat-1").show();
        $(".fereastra-info-variante-bacalaureat-2").hide();
        $(".fereastra-info-variante-bacalaureat-3").hide();
    });
    $(".variante-bacalaureat-info-2").hover(function () {
        $(".fereastra-info-variante-bacalaureat-1").hide();
        $(".fereastra-info-variante-bacalaureat-2").show();
        $(".fereastra-info-variante-bacalaureat-3").hide();
    });
    $(".variante-bacalaureat-info-3").hover(function () {
        $(".fereastra-info-variante-bacalaureat-1").hide();
        $(".fereastra-info-variante-bacalaureat-2").hide();
        $(".fereastra-info-variante-bacalaureat-3").show();
    });
}); 