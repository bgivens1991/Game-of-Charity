$(window).scroll(function () {
  if ($(this).scrollTop() > 450 && $(this).scrollTop() < 1500) {
    $("#event-title").css({ opacity: "1" });
    $("#left-fighter").css({ opacity: "1" });
    $("#right-fighter").css({ opacity: "1" });
  } else {
    $("#event-title").css({ opacity: "0" });
    $("#left-fighter").css({ opacity: "0" });
    $("#right-fighter").css({ opacity: "0" });
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $("#myVideo").css({ opacity: "0" });
    $("#overlay-text").css({ opacity: "0" });
    $(".live-button").css({ opacity: "0" });
    $(".nav-box").css({ opacity: "0" });
  } else {
    $("#myVideo").css({ opacity: "1" });
    $("#overlay-text").css({ opacity: "1" });
    $(".live-button").css({ opacity: "1" });
    $(".nav-box").css({ opacity: "1" });
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300 && $(this).scrollTop() < 2000) {
    $(".main-event").css({ opacity: "1" });
    $(".co-event").css({ opacity: "1" });
    $(".last-event").css({ opacity: "1" });
    $(".gust-vs-smith").css({ opacity: "1" });
    $(".manuwa-vs-rakic").css({ opacity: "1" });
    $(".latifi-vs-oezdemir").css({ opacity: "1" });
  } else {
    $(".main-event").css({ opacity: "0" });
    $(".co-event").css({ opacity: "0" });
    $(".last-event").css({ opacity: "0" });
    $(".gust-vs-smith").css({ opacity: "0" });
    $(".manuwa-vs-rakic").css({ opacity: "0" });
    $(".latifi-vs-oezdemir").css({ opacity: "0" });
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1750 && $(this).scrollTop() < 3000) {
    $(".worlds").css({ opacity: "1" });
    $(".ufc-238").css({ opacity: "1" });
    $(".bell-222").css({ opacity: "1" });
    $(".tc-2").css({ opacity: "1" });
  } else {
    $(".worlds").css({ opacity: "0" });
    $(".ufc-238").css({ opacity: "0" });
    $(".bell-222").css({ opacity: "0" });
    $(".tc-2").css({ opacity: "0" });
  }
});

$(".manuwa-vs-rakic").click(function () {
  $("#left-fighter").attr("src", "FN-153 Fighters/MANUWA_JIMI_L.png");
  $("#ljust-name").text("Jimi Manuwa");
  $("#left-nickname").text("POSTER BOY");
  $(".left-name").attr("style", "left:80px");
  $(".red-record").text("17-6-0");
  $(".red-height").text("6' 1\"");
  $(".red-weight-class").text("205 lbs.");
  $(".red-reach").text("79\"");
  $(".red-stance").text("Orthodox");
  $("#red-charity").text("British Heart Foundation");
  $("#red-charity").attr("href", "https://www.bhf.org.uk/");
  $(".blue-record").text("12-2-0");
  $(".blue-height").text("6' 4\"");
  $(".blue-weight-class").text("205 lbs.");
  $(".blue-reach").text("78\"");
  $(".blue-stance").text("Orthodox");
  $("#blue-charity").text("SOS Children's Villages");
  $("#blue-charity").attr("href", "http://sos-childrensvillages.org/");
  $("#right-fighter").attr("src", "FN-153 Fighters/RAKIC_ALEKSANDAR_R_1.png");
  $("#rjust-name").text("Aleksandar Rakic");
  $("#right-nickname").text("THE SANDMAN");
  $(".gust-vs-smith").attr("style", "filter: brightness(50%)");
  $(".latifi-vs-oezdemir").attr("style", "filter: brightness(50%)");
  $(".manuwa-vs-rakic").attr("style", "filter: brightness(100%)");
});

$(".gust-vs-smith").click(function () {
  $("#left-fighter").attr("src", "FN-153 Fighters/GUSTAFSSON_ALEXANDER_L.png");
  $("#ljust-name").text("Alexander Gustafsson");
  $("#left-nickname").text("THE MAULER");
  $(".left-name").attr("style", "left:30px");
  $(".red-record").text("18-6-0");
  $(".red-height").text("6' 5\"");
  $(".red-weight-class").text("205 lbs.");
  $(".red-reach").text("79\"");
  $(".red-stance").text("Orthodox");
  $("#red-charity").text("World Childhood Foundation");
  $("#red-charity").attr("href", "https://childhood.se/");
  $(".blue-record").text("32-14-0");
  $(".blue-height").text("6' 4\"");
  $(".blue-weight-class").text("205 lbs.");
  $(".blue-reach").text("76\"");
  $(".blue-stance").text("Orthodox");
  $("#blue-charity").text("Good Samaritan");
  $("#blue-charity").attr("href", "http://goodsamcc.org/");
  $("#right-fighter").attr("src", "FN-153 Fighters/SMITH_ANTHONY_R.png");
  $("#right-nickname").text("LIONHEART");
  $("#rjust-name").text("Anthony Smith");
  $(".gust-vs-smith").attr("style", "filter: brightness(100%)");
  $(".latifi-vs-oezdemir").attr("style", "filter: brightness(50%)");
  $(".manuwa-vs-rakic").attr("style", "filter: brightness(50%)");
});

$(".latifi-vs-oezdemir").click(function () {
  $("#left-fighter").attr("src", "FN-153 Fighters/LATIFI_ILIR_L.png");
  $(".left-name").attr("style", "left:30px");
  $("#ljust-name").text("Ilir Latifi");
  $("#left-nickname").text("THE SLEDGEHAMMER");
  $(".red-record").text("15-6-0");
  $(".red-height").text("5' 8\"");
  $(".red-weight-class").text("205 lbs.");
  $(".red-reach").text("73\"");
  $(".red-stance").text("Orthodox");
  $("#red-charity").text("World Childhood Foundation");
  $("#red-charity").attr("href", "https://childhood.se/");
  $(".blue-record").text("17-4-0");
  $(".blue-height").text("6' 2\"");
  $(".blue-weight-class").text("205 lbs.");
  $(".blue-reach").text("75\"");
  $(".blue-stance").text("Orthodox");
  $("#blue-charity").text("The Jacobs Foundation");
  $("#blue-charity").attr("href", "https://jacobsfoundation.org/en/");
  $("#right-fighter").attr("src", "FN-153 Fighters/OEZDEMIR_VOLKAN_L.png");
  $("#rjust-name").text("Volkan Oezdemir");
  $("#right-nickname").text("NO TIME");
  $(".gust-vs-smith").attr("style", "filter: brightness(50%)");
  $(".latifi-vs-oezdemir").attr("style", "filter: brightness(100%)");
  $(".manuwa-vs-rakic").attr("style", "filter: brightness(50%)");
});
