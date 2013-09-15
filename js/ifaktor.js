console.log("init ifaktor.js");
if_width=50;

function minus10 (event) {
	if_width=if_width-10;
	$("#if-restfaktor-zeiger").css("width", if_width+"%");
	$("#if-restfaktor-zeiger").html((100-if_width)+"%");
}

function plus10 (event) {
	console.log("go60");
	if_width=if_width+10;
	$("#if-restfaktor-zeiger").css("width", if_width+"%");
	$("#if-restfaktor-zeiger").html((100-if_width)+"%");
}

function showMenu () {
	$(".if-menu").toggleClass("if-menu-ausgeklappt");
}


function goHome() {
	$("#if-home").removeClass("if-display-none")
	$("#if-kalender").addClass("if-display-none")
	$("#if-profilaxis").addClass("if-display-none")
	$("#if-einstellungen").addClass("if-display-none")
	$("#if-statistik").addClass("if-display-none")
	$("#if-kalender-neuer-eintrag").addClass("if-display-none")

	$(".if-menu").toggleClass("if-menu-ausgeklappt");

}

function goKalender() {
	$("#if-kalender").removeClass("if-display-none")
	$("#if-home").addClass("if-display-none")
	$("#if-profilaxis").addClass("if-display-none")
	$("#if-einstellungen").addClass("if-display-none")
	$("#if-statistik").addClass("if-display-none")
	$("#if-kalender-neuer-eintrag").addClass("if-display-none")

	$(".if-menu").toggleClass("if-menu-ausgeklappt");
	makeKalender();
}

function goProfilaxis() {
	$("#if-profilaxis").removeClass("if-display-none")
	$("#if-home").addClass("if-display-none")
	$("#if-kalender").addClass("if-display-none")
	$("#if-einstellungen").addClass("if-display-none")
	$("#if-statistik").addClass("if-display-none")
	$("#if-kalender-neuer-eintrag").addClass("if-display-none")

	$(".if-menu").toggleClass("if-menu-ausgeklappt");
}

function goStatistik() {
	$("#if-statistik").removeClass("if-display-none")
	$("#if-home").addClass("if-display-none")
	$("#if-kalender").addClass("if-display-none")
	$("#if-einstellungen").addClass("if-display-none")
	$("#if-profilaxis").addClass("if-display-none")
	$("#if-kalender-neuer-eintrag").addClass("if-display-none")

	$(".if-menu").toggleClass("if-menu-ausgeklappt");
}

function goEinstellungen() {
	$("#if-einstellungen").removeClass("if-display-none")
	$("#if-home").addClass("if-display-none")
	$("#if-kalender").addClass("if-display-none")
	$("#if-statistik").addClass("if-display-none")
	$("#if-profilaxis").addClass("if-display-none")
	$("#if-kalender-neuer-eintrag").addClass("if-display-none")
	$(".if-menu").toggleClass("if-menu-ausgeklappt");
}

function goNeuerEintrag(event) {
	$("#if-kalender-neuer-eintrag").removeClass("if-display-none")
	$("#if-home").addClass("if-display-none")
	$("#if-kalender").addClass("if-display-none")
	$("#if-statistik").addClass("if-display-none")
	$("#if-profilaxis").addClass("if-display-none")
	$("#if-einstellungen").addClass("if-display-none")

	$(".if-popup").toggleClass("if-popup-open");

}

function makeKalender() {
	console.log("makeKalender");
		$("#calendar").calendarWidget({
	month: 6,
	year: 2013						  
 });
}

function clickInCalendar(event) {
	var faktor=event.target;
	console.log("Tag = " + faktor.id);
	console.log( "Tag:" + $(faktor).find("span").html());
}

function openPopUpKalender(event) {
	var faktor=$(event.target);
	var zahl=0;
	if (faktor.is("span")){
		zahl=faktor.html();}
		else {zahl=faktor.find("span").html();}
	// $("faktor").addClass("if-gespritzt")
	$(".if-tag").html(zahl)
	$(".if-popup").toggleClass("if-popup-open");

	console.log("openPopUp")
}	

function changeName() {
	console.log ("name geandrert in "+
	$("#if-einstellungen-vorname").val());
}