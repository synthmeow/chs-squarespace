// clear existing form input if back browser button used
$(window).bind("pageshow", function () {
  $("form").each(function () {
    this.reset();
  });

  try {
    // set defaults
    document.getElementById(
      "textarea-yui_3_17_2_1_1615135663161_80183-field"
    ).value = "";
  } catch (error) {}
});

// disable autoscrolling to prevent jumping with Donorbox form
window.scrollTo = function () {};

// handle old redirects
if (window.location.href == "https://www.coppellhumanesociety.org/adopt.html") {
  window.location.href = "https://www.coppellhumanesociety.org/adopt";
}
if (
  window.location.href == "https://www.coppellhumanesociety.org/contact-us.html"
) {
  window.location.href = "https://www.coppellhumanesociety.org/contact-us";
}
if (
  window.location.href == "https://www.coppellhumanesociety.org/donate.html"
) {
  window.location.href = "https://www.coppellhumanesociety.org/donate";
}
if (
  window.location.href == "https://www.coppellhumanesociety.org/about-us.html"
) {
  window.location.href = "https://www.coppellhumanesociety.org/about";
}
if (
  window.location.href == "https://www.coppellhumanesociety.org/foster.html"
) {
  window.location.href = "https://www.coppellhumanesociety.org/foster";
}
if (
  window.location.href ==
  "https://www.coppellhumanesociety.org/calendar-of-events.html"
) {
  window.location.href = "https://www.coppellhumanesociety.org/events";
}
if (
  window.location.href ==
  "https://www.coppellhumanesociety.org/north-texas-giving-day.html"
) {
  window.location.href =
    "https://www.coppellhumanesociety.org/events/north-texas-giving-day-2019";
}
if (
  window.location.href ==
  "https://www.coppellhumanesociety.org/bark-in-the-park.html"
) {
  window.location.href = "https://www.coppellhumanesociety.org/events";
}
if (
  window.location.href ==
  "https://www.coppellhumanesociety.org/supporting-bussinesses.html"
) {
  window.location.href = "https://www.coppellhumanesociety.org/our-supporters";
}
