$(document).ready(function () {
    $(".toggle-btn").click(function () {
        $(".sidemenu").toggleClass("open");
        $(".sidecontent").toggleClass("open");
        $(".sidecontent-icon").toggleClass("open");
        $(".dis-play").toggleClass("open");
        $(".dis-play-img").toggleClass("open");
        $(".logo").toggleClass("open");
        $(".toggler").toggleClass("open");
        $(".toggle-btn").toggleClass("open");
        $(".bottom-box").toggleClass("open");
        $(".sidemenu-overlay").toggleClass("");
    });
    $(".sidemenu-overlay").click(function () {
        $(".sidemenu").removeClass("open");
        $(".logo").removeClass("open");
        $(".toggler").removeClass("open");
        $(".toggle-btn").removeClass("open");
        $(".bottom-box").removeClass("open");
        $(".sidemenu-overlay").removeClass("open");
    });
    $(".sidemenu .menu-list li a").click(function () {
        $(".sidemenu").removeClass("");
        $(".logo").removeClass("");
        
        $(".toggler").removeClass("");
        $(".toggle-btn").removeClass("");
        $(".bottom-box").removeClass("open");
        $(".sidemenu-overlay").removeClass("open");
    });
    $(".sidemenu .logo").click(function () {
        $(".sidemenu").removeClass("");
        $(".logo").removeClass("");
        $(".n-logo").toggleClass("open");
        $(".toggler").removeClass("");
        $(".toggle-btn").removeClass("");
        $(".bottom-box").removeClass("");
        $(".sidemenu-overlay").removeClass("");
    });
    $(".sidemenu-user-circle").click(function () {
        $(".sidemenu").removeClass("open");
        $(".logo").removeClass("open");
        $(".toggler").removeClass("open");
        $(".toggle-btn").removeClass("open");
        $(".bottom-box").removeClass("open");
        $(".sidemenu-overlay").removeClass("open");
    });


});






function fnLoadDashboard(obj) {
    try {
        $(".menu-list").find("a").removeClass("active");
        $(obj).addClass('active');
        //$(this).addClass('active');
        //BlockPage();
        $('#pageContent').html('');
        $('#pageContent').load(DashboardViewUrl + "?ticks=" + (new Date().getTime() * 10000) + 621355968000000000, function () {
            //UnBlock();
        });
    }
    catch (e) {
        //
    }
}
function fnLoadTaskboard(obj) {
    try {
        $(".menu-list").find("a").removeClass("active");
        $(obj).addClass('active');
        //BlockPage();
        $('#pageContent').html('');
        $('#pageContent').load(TaskboardViewUrl + "?ticks=" + (new Date().getTime() * 10000) + 621355968000000000, function () {
            //UnBlock();
        });
    }
        catch (e) {
        //
    }
}
function fnLoadMapView(obj) {
    try {
        $(".menu-list").find("a").removeClass("active");
        $(obj).addClass('active');
        //BlockPage();
        $('#pageContent').html('');
        $('#pageContent').load(MapViewUrl + "?ticks=" + (new Date().getTime() * 10000) + 621355968000000000, function () {
            //UnBlock();
        });
    }
        catch (e) {
        //
    }
}
function fnLoadTeamList(obj) {
    try {
        $(".menu-list").find("a").removeClass("active");
        $(obj).addClass('active');
        //BlockPage();
        $('#pageContent').html('');
        $('#pageContent').load(TeamListViewUrl + "?ticks=" + (new Date().getTime() * 10000) + 621355968000000000, function () {
            //UnBlock();
        });
    }
    catch (e) {
        //
    }
}
function fnLoadForms(obj) {
    try {
        $(".menu-list").find("a").removeClass("active");
        $(obj).addClass('active');
        //BlockPage();
        $('#pageContent').html('');
        $('#pageContent').load(FormsViewUrl + "?ticks=" + (new Date().getTime() * 10000) + 621355968000000000, function () {
            //UnBlock();
        });
    }
    catch (e) {
        //
    }
}
function fnLoadComponents(obj) {
    try {
        $(".menu-list").find("a").removeClass("active");
        $(obj).addClass('active');
        //BlockPage();
        $('#pageContent').html('');
        $('#pageContent').load(ComponentsViewUrl + "?ticks=" + (new Date().getTime() * 10000) + 621355968000000000, function () {
            //UnBlock();
        });
    }
    catch (e) {
        //
    }
}
function fnLoadKendoTools(obj) {
    try {
        $(".menu-list").find("a").removeClass("active");
        $(obj).addClass('active');
        //BlockPage();
        $('#pageContent').html('');
        $('#pageContent').load(KendoToolsViewUrl + "?ticks=" + (new Date().getTime() * 10000) + 621355968000000000, function () {
            //UnBlock();
        });
    }
    catch (e) {
        //
    }
}
function fnLoadKendoGrid(obj) {
    try {
        $(".menu-list").find("a").removeClass("active");
        $(obj).addClass('active');
        //BlockPage();
        $('#pageContent').html('');
        $('#pageContent').load(KendoGridViewUrl + "?ticks=" + (new Date().getTime() * 10000) + 621355968000000000, function () {
            //UnBlock();
        });
    }
    catch (e) {
        //
    }
}


    var elem = document.getElementById("fullscreen");
    function openFullscreen() {
  if (elem.requestFullscreen) {
      elem.requestFullscreen();
      
  } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
  }
}