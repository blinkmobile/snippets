After a lot of research and considering all the variables, ease of installation, future compatibility, etc. I am fairly happy with the following javascript code:


<script type="text/javascript">

var mobile_url = "http://blinkm.co/infobooth";

if (screen.width < 800 || (navigator.userAgent.match(/android/i)) ) {
   // the following IF statement can be used to target particular pages (the alternative is to only include the script on the relevant pages)
   // if (location.pathname.toLowerCase() == '/default.aspx' || location.pathname.toLowerCase() == '/') { // page check IF statement
        var desktop = getQsParameterByName("desktop");
	var doRedirect = false;
        if (desktop == "1") {
            document.cookie = "desktop=1";
        } else if (desktop == "0") {
            document.cookie = "desktop =0";
            doRedirect=true;
        } else {
            if (getCookie("desktop") != "1") {
                doRedirect=true;
            }
        }
	if(doRedirect==true){
		/*
		if(confirm("Do you wish to view our mobile site?"))
			document.location = mobile_url;
		else
			document.cookie = "desktop=1";
		*/
		document.location = mobile_url;
	}
    //} // end page check IF statement
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
    return null;
}

function getQsParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null) return "";
    else return decodeURIComponent(results[1].replace(/\+/g, " "));
}

</script>


This script should redirect most mobile and table devices. An IF statement can be uncommented and edited to target specific pages only, such as the home page. Code can be uncommented to show a javascript confirm() box asking if they wish to be redirected. A session cookie is used and will reset when they close their browser.

I have bolded the main piece of logic. It matches screens that are less that 800 (so most mobile devices, inc. iPad, iPhone, etc.) and all android devices. 1 problem with this is that it will match android TVs and some day there may be Android desktop / laptops, but we can worry about that then. Also, it might not match non-Android or iPad tablets, but who cares about them.

I have added this code to our website. You can see it in action at:

http://www.blinkmobile.com.au

http://www.blinkmobile.com.au/desktop=1 will show the desktop (I have put this link on the Contact page of the answerSpace)

http://www.blinkmobile.com.au/desktop=0 will remove the cookie
