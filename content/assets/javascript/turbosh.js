google.load("jquery", "1");

google.setOnLoadCallback(function () {
  var currentSelection = 1;
  var lastScreen = 1;

  while ($("#feature_" + (lastScreen + 1)).length !== 0) {
    lastScreen++;
  }

  $("a.previous").click(function () {
    $("#feature_" + currentSelection).slideUp(250);

    currentSelection--;
    if (currentSelection === 0) currentSelection = lastScreen;
    var nextSelection = $("#feature_" + currentSelection);

    nextSelection.slideDown(250);
  });

  $("a.next").click(function () {
    $("#feature_" + currentSelection).slideUp(250);

    currentSelection++;
    if (currentSelection > lastScreen) currentSelection = 1;
    var nextSelection = $("#feature_" + currentSelection);

    nextSelection.slideDown(250);
  });
});
