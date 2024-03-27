// remove the slash whenever search bar is focused
$("#searchBar").focus(function() {
    $("#searchBarSlashBox").hide();
});
// restore the slash whenever search bar is blurred ie. not focused
$("#searchBar").blur(function() {
    $("#searchBarSlashBox").show();
});

// managing the drop downs in left panel for gettingstarted button
$(".gettingStartedButtonIn").addClass("hideToggleButtons");
$("#gettingStartedButton").on("click",function(){
    if($(".gettingStartedButtonIn").hasClass("hideToggleButtons")){
        $(".gettingStartedButtonIn").removeClass("hideToggleButtons");
        $(".gettingStartedButtonIn").addClass("showToggleButtons");
    }else{
        $(".gettingStartedButtonIn").removeClass("showToggleButtons");
        $(".gettingStartedButtonIn").addClass("hideToggleButtons");
    }
});

// managing the drop downs in left panel for understandingangular button
$(".understandingAngularButtonIn").addClass("hideToggleButtons");
$("#understandingAngularButton").on("click",function(){
    if($(".understandingAngularButtonIn").hasClass("hideToggleButtons")){
        $(".understandingAngularButtonIn").removeClass("hideToggleButtons");
        $(".understandingAngularButtonIn").addClass("showToggleButtons");
    }else{
        $(".understandingAngularButtonIn").removeClass("showToggleButtons");
        $(".understandingAngularButtonIn").addClass("hideToggleButtons");
    }
});

// managing the drop downs in left panel for understandingangular button
$(".developersGuidesButtonIn").addClass("hideToggleButtons");
$("#developersGuidesButton").on("click",function(){
    if($(".developersGuidesButtonIn").hasClass("hideToggleButtons")){
        $(".developersGuidesButtonIn").removeClass("hideToggleButtons");
        $(".developersGuidesButtonIn").addClass("showToggleButtons");
    }else{
        $(".developersGuidesButtonIn").removeClass("showToggleButtons");
        $(".developersGuidesButtonIn").addClass("hideToggleButtons");
    }
});