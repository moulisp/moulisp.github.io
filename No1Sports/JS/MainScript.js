$(document).ready(function() {
    // navigation click actions
    $('.navbar li a').on('click', function(event) {
        event.preventDefault();
        var sectionID = $(this).attr("data-mapping");
        scrollToID('#' + sectionID, 950);
    });

    // scroll function
    function scrollToID(id, speed) {
        var targetOffset = $(id).offset().top;
        $('html,body').animate({
            scrollTop: targetOffset
        }, speed);
    }
	
    var category = [];
    var uniqueCategory = [];
    var rowDiv = createTag("<div>", "gallery-img");
	
    $.each(imgList, function(index, obj) {
        aTag = $("<a>", {
            class: "fancybox imgContainer",
            href: obj.url,
            title: obj.caption,
            rel: "fancyBox",
            "data-fancybox-group": "gallery",
            "data-filter": obj.category
        });
        imgTag = $("<img>", {
            class: "img-thumbnail",
            src: obj.url,
            alt: obj.caption,
            title: obj.caption,
            width: "200px",
            height: "200px"
        });
        aTag.append(imgTag);
        rowDiv.append(aTag);
        category.push(obj.category);
 
    });

    uniqueCategory = category.filter(function(item, pos) {
        return category.indexOf(item) == pos;
    });

    $.each(uniqueCategory, function(index, obj) {
        catATag = $("<a>", {
            class: "filter",
            "data-rel": obj
        });
        catATag.append(obj);
        $("#galleryTab").append(catATag)
    });

    $("#gallery .container").append(rowDiv);
    function createTag(name, className) {
        return $(name, {
            class: className
        })
    }

    //Fancy box for gallery 
    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        transitionIn: 'elastic',
        transitionOut: 'elastic'
    });

    // filter selector
    $(".filter").on("click", function() {
        var $this = $(this);
        // if we click the active tab, do nothing
        if (!$this.hasClass("active")) {
            $(".filter").removeClass("active");
            $this.addClass("active"); // set the active tab
            // get the data-rel value from selected tab and set as filter
            var $filter = $this.data("rel");
            // if we select view all, return to initial settings and show all
            $filter == 'all' ?
                $(".fancybox")
                .attr("data-fancybox-group", "gallery")
                .not(":visible")
                .fadeIn() : // otherwise
                $(".fancybox")
                .fadeOut(0)
                .filter(function() {
                    // set data-filter value as the data-rel value of selected tab
                    return $(this).data("filter") == $filter;
                })
                // set data-fancybox-group and show filtered elements
                .attr("data-fancybox-group", $filter)
                .fadeIn(1000);
        } // if
    }); // on
});