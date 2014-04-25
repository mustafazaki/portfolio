//GlobalVariables

var windowWidth = $(window).width(), windowHeight = $(window).height(), divsToShowVert = 16, divsToShowHorz = 10, divsToGenerate = divsToShowVert * divsToShowHorz, gridWidth = windowWidth / divsToShowVert, gridHeight = windowHeight / divsToShowHorz, li = $("nav> ul> li"), contactGrid = $(".ConGrid"), contactGridlength = contactGrid.length, contactForm = $(".ContactForm"), socailIco = $(".SocailIcons li"), workLi = $(".WorkIcons li"), workPre = $(".Work");
//GlobalVariables ends

generateGrids();
setCssAndPosOfLi();
//workPreview();
setPosOfContact();
contactFormAllign();
setCssOfSocailIco();
bindEvents();

function generateGrids() {
    for (var i = 0; i < Math.floor(divsToGenerate); i++) {
        $("#Grids").append('<div class="Grid"/>');
        $(".Grid").css({
            "width": gridWidth + "px",
            "height": gridHeight + "px"
        });
    }


}

function pickRandomPos() {
    var randomIndex = [],
        gridLenght = $(".Grid").length;
    for (var i = 0; i < li.length; i++) {
        randomIndex[i] = Math.floor(Math.random() * gridLenght) + 1
    }
    return randomIndex
}

function setCssAndPosOfLi() {
    var indexOfGrid = pickRandomPos(),
        grid = $(".Grid");
    //  console.log(indexOfGrid)
    for (var i = 0; i < li.length; i++) {
        var top = grid.eq(indexOfGrid[i]).position().top,
            left = grid.eq(indexOfGrid[i]).position().left;
        //var top = 800,
        li.eq(i).css({
            "left": left + "px",
            "top": top + "px",
            "width": gridWidth + "px",
            "height": gridHeight + "px"
        })
    }
}

function setPosOfContact() {
    var contact = $("#Contact"),
        left = contact.css("left"),
        top = contact.css("top");
    //  console.log(Math.random() + "s")
    contactGrid.css({
        "width": gridWidth + "px",
        "height": gridHeight + "px",
        "left": left,
        "top": top
        // "-webkit-transform": "translate3d(" + left + "," + top + ",0px) rotate(" + Math.floor((Math.random() * 10) + 1) + "deg)"
        //  "-webkit-transform":"
    });
}

function contactGridAnim() {
    var x = -1,
        y = 0;
    tl = new TimelineLite({
        onComplete: function () {
            contactForm.show();
            contactGrid.hide();


            //menutl.reverse()
        }
    });
    for (var i = 0; i < contactGridlength; i++) {
        x += 1;
        if (x > 5) {
            y += gridHeight;
            x = 0;
        }

        contactGrid.eq(i).css({
            "background-position": "-" + gridWidth * x + "px -" + y + "px"
        });
        //  console.log()
        tl.add(TweenLite.to(contactGrid.eq(i), 0.1, {
            left: gridWidth * x,
            top: y,
            rotation: "+=360",
            yoyo: true
            //ease: Back.easeOut,
            //immediateRender: true
        }, "spin"));
    }
}

function bindEvents() {
    $("#Contact").bind("click", function () {
        //  li.hide();
        contactGridAnim();
        menuAnimation($(this));
    });
    $(".ContactForm .Close").bind("click", function () {
        contactGrid.show();
        contactForm.hide();
        tl.reverse();
        menutl.reverse()
    });
    $("#Follow").bind("click", function () {
        socialIcoAnim($(this));
    });

    $("#Work").bind("click", function () {


        workli();
    })


    workLi.bind("click", function () {
      //  workGriAnim();
    })

}

function contactFormAllign() {
    contactForm.width(gridWidth * 5).height(gridHeight * 3);
    //css("margin-left",gridWidth+"px")
}

function menuAnimation(elem) {
    menutl = new TimelineLite({
        onComplete: function () {
        }
    });
    menutl.add(TweenLite.to(li.not(elem), 0.6, {
        //  left: gridWidth * x,
        top: -500,
        yoyo: true,
        rotation: "+=360"
        //ease: Back.easeOut,
        //immediateRender: true
    }, "spin"));
}

function setCssOfSocailIco() {
    var follow = $("#Follow"),
        left = follow.css("left"),
        top = follow.css("top");
    socailIco.css({
        width: gridWidth + "px",
        height: gridHeight + "px"
    });
}

function socialIcoAnim(elem) {
    var icons = $(".SocailIcons li"),
        sitl = new TimelineLite({
            onComplete: function () {
                menuAnimation(elem);
            }
        }),
        speed = 0.05,
        option = {
            rotation: "+=360",
            yoyo: true
        };
    icons.show();
    sitl.add(TweenLite.to(icons.eq(1), speed, {
        left: "-" + gridWidth,
        top: 0,
        rotation: option.rotation,
        yoyo: option.yoyo
        //ease: Back.easeOut,
        //immediateRender: true
    }, "spin"));
    sitl.add(TweenLite.to(icons.eq(2), speed, {
        left: 0,
        top: "-" + gridHeight,
        rotation: option.rotation,
        yoyo: option.yoyo,
        delay: 0.04
        //ease: Back.easeOut,
        //immediateRender: true
    }, "spin"));
    sitl.add(TweenLite.to(icons.eq(3), speed, {
        left: 0,
        top: gridHeight,
        delay: 0.08,
        rotation: option.rotation,
        yoyo: option.yoyo
        //ease: Back.easeOut,
        //immediateRender: true
    }, "spin"));
    sitl.add(TweenLite.to(icons.eq(4), speed, {
        left: gridWidth,
        top: 0,
        delay: 0.1,
        rotation: option.rotation,
        yoyo: option.yoyo
        //ease: Back.easeOut,
        //immediateRender: true
    }, "spin"));
    $(".SocailIcons .Close").bind("click", function () {
        sitl.reverse();
        menutl.reverse();
        return false;
    });
}

function workli() {

    workLi.css({
        width: gridWidth + "px",
        height: gridHeight + "px"
    });

    var easing = Elastic.easeOut,
        delay = 0.15;


    worktl = new TimelineLite({
        onComplete: function () {
        }
    });


    workLi.show();


    worktl.add(TweenLite.to(workLi.eq(1), delay, {
        top: -gridHeight,
        ease: easing

    }, "spin"));

    worktl.add(TweenLite.to(workLi.eq(2), delay, {
        left: gridWidth,
        top: -gridHeight,
        ease: easing

    }, "spin"));
    worktl.add(TweenLite.to(workLi.eq(3), delay, {
        left: gridWidth,
        ease: easing

    }, "spin"));

    worktl.add(TweenLite.to(workLi.eq(4), delay, {
        left: gridWidth,
        top: gridHeight,
        ease: easing

    }, "spin"));


    worktl.add(TweenLite.to(workLi.eq(5), delay, {
        top: gridHeight,
        left: 0,

        ease: easing

    }, "spin"));

    worktl.add(TweenLite.to(workLi.eq(6), delay, {
        left: -gridWidth,
        top: gridHeight,
        ease: easing

    }, "spin"));
    worktl.add(TweenLite.to(workLi.eq(7), delay, {
        top: 0,
        left: -gridWidth,
        ease: easing

    }, "spin"));

    worktl.add(TweenLite.to(workLi.eq(8), delay, {
        left: -gridWidth,
        top: -gridHeight,
        ease: easing

    }, "spin"));


}


function workPreview() {

    var img = workPre.find("img"),
        workDiv = $("#Work"),
        imgSrc = img.attr("src"),
        gridLength = $(".Grid").length,
        x = -1,
        y = 0;

    img.remove();


    for (var i = 0; i < gridLength; i++) {
        $(".Work").append("<span class='WorkGrid'></span>");
        workGrid = $(".WorkGrid");
        x += 1;

        if (x > divsToShowVert - 1) {
            y += gridHeight;
            x = 0;
        }
        // .css()
        workGrid.eq(i).css({
            "background-image": "url(" + imgSrc + ")",
            "background-position": "-" + gridWidth * x + "px -" + y + "px",
            "background-size": windowWidth + "px " + windowHeight + "px",
            "width": gridWidth + "px",
            "height": gridHeight + "px",

            "left": workDiv.position().left,

            "top": workDiv.position().top


        });


    }


//        workPre.css({
//
//
//
//    });


}

function workGriAnim() {


    var x = -1,
        y = 0,
        delay = 0.002;


    workPre.show()


    workGridtl = new TimelineLite({
        onComplete: function () {
        }
    });


    for (var i = 0; i < workGrid.length; i++) {
        x += 1;

        if (x > divsToShowVert - 1) {
            y += gridHeight;
            x = 0;
        }


//        workGrid.eq(i).css({
//                "left": "0",
//                "top": "0",
//                "-webkit-transform": "translate3d(" + gridWidth * x + "px," + y + "px,0)",
//                "transition-timing-function":Math.random()+"s"
//
//
//
//            }
//        );


    workGridtl.add(TweenLite.to(workGrid.eq(i), delay, {
            left: gridWidth * x,
            top: y,
            yoyo: true
          //  ease: Elastic.easeInOut
            //immediateRender: true
        }, "spin"));


    }
//use scale trick

}