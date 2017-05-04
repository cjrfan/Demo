function nTabs(thisObj, Num) {
    if (thisObj.className == "active") return;
    var tabObj = thisObj.parentNode.id;
    var tabList = document.getElementById(tabObj).getElementsByTagName("li");
    for (i = 0; i < tabList.length; i++) {
        if (i == Num) {
            thisObj.className = "active";
            document.getElementById(tabObj + "_Content" + i).style.display = "block";
        } else {
            tabList[i].className = "normal";
            document.getElementById(tabObj + "_Content" + i).style.display = "none";
        }
    }
}
function MM_jumpMenu(targ, selObj, restore) { //v3.0
    eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'");
    if (restore) selObj.selectedIndex = 0;
}
function nTabs1(thisObj, Num) {
    if (thisObj.className == "active") return;
    var tabObj = thisObj.parentNode.id;
    var tabList = document.getElementById(tabObj).getElementsByTagName("li");
    for (i = 0; i < tabList.length; i++) {
        if (i == Num) {
            thisObj.className = "active";
            document.getElementById(tabObj + "_Content" + i).style.display = "block";
        } else {
            tabList[i].className = "normal";
            document.getElementById(tabObj + "_Content" + i).style.display = "none";
        }
    }
}

function tabChange(obj, classOver, classOut, count, idName) {
    var i;
    var cstype = "";
    for (i = 1; i <= count; i++) {
        cstype = "";
        if (typeof (document.getElementById(idName + "_" + i.toString()).attributes["cstype"]) != "undefined") {
            cstype = document.getElementById(idName + "_" + i.toString()).attributes["cstype"].nodeValue;
        }
        document.getElementById(idName + "_" + i.toString()).className = (cstype == "") ? classOut : classOut + "_" + cstype; ;
        document.getElementById(idName + "_" + i.toString() + "_info").style.display = "none";
    }
    cstype = "";
    if (typeof (obj.attributes["cstype"]) != "undefined") {
        cstype = obj.attributes["cstype"].nodeValue;
    }
    obj.className = (cstype == "") ? classOver : classOver + "_" + cstype;
    var id = obj.id;
    document.getElementById(id + "_info").style.display = "block";
}
function tabChange1(obj, classOver, classOut, count, idName) {
    var i;
    var cstype = "";
    for (i = 1; i <= count; i++) {
        cstype = "";
        if (typeof (document.getElementById(idName + "_" + i.toString()).attributes["cstype"]) != "undefined") {
            cstype = document.getElementById(idName + "_" + i.toString()).attributes["cstype"].nodeValue;
        }
        document.getElementById(idName + "_" + i.toString()).className = (cstype == "") ? classOut : classOut + "_" + cstype; ;
        document.getElementById(idName + "_" + i.toString() + "_info").style.display = "none";
        document.getElementById(idName + "_" + i.toString() + "1_info").style.display = "none";
    }
    cstype = "";
    if (typeof (obj.attributes["cstype"]) != "undefined") {
        cstype = obj.attributes["cstype"].nodeValue;
    }
    obj.className = (cstype == "") ? classOver : classOver + "_" + cstype;
    var id = obj.id;
    document.getElementById(id + "_info").style.display = "block";
    document.getElementById(id + "1_info").style.display = "block";
}

