$(document).ready(function(){
    $("#accordion .card [data-toggle='collapse']").on('click', function(){
       $(this).children("i").toggleClass("fa-arrow-circle-down fa-arrow-circle-up").end()
       .parent().parent().toggleClass("bg-primary text-white")
    })
    // scroll spy 
    $("body").scrollspy({
        target: "#main-nav"
    })
    // smooth scrolling
    $("#main-nav a:not('.lang-switcher')").on('click', function(e){
        e.preventDefault()
        let hash = e.target.hash
        if(hash !==""){
            
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        },500, function(){
                   window.location.hash = hash 
        })
        }



    })
    // Get current year
    $("#year").text(
        new Date().getFullYear()
    )

























})