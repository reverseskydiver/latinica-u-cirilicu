function reset() {
  document.getElementById("latinica").value = "";
  document.getElementById("cirilica").value = "";
}

function convert(lat) {
  var map = [
    ["lj", "љ"],
    ["nj", "њ"],
    ["dž", "џ"],
    ["Lj", "Љ"],
    ["Nj", "Њ"],
    ["Dž", "Џ"],
    ["a", "а"],
    ["b", "б"],
    ["v", "в"],
    ["g", "г"],
    ["d", "д"],
    ["đ", "ђ"],
    ["e", "е"],
    ["ž", "ж"],
    ["z", "з"],
    ["i", "и"],
    ["j", "ј"],
    ["k", "к"],
    ["l", "л"],
    ["m", "м"],
    ["n", "н"],
    ["o", "о"],
    ["p", "п"],
    ["r", "р"],
    ["s", "с"],
    ["t", "т"],
    ["ć", "ћ"],
    ["u", "у"],
    ["f", "ф"],
    ["h", "х"],
    ["c", "ц"],
    ["č", "ч"],
    ["š", "ш"]
  ];
  var toBeReplaced = lat ? 0 : 1;
  var replacer = lat ? 1 : 0;
  var inputid = lat ? "latinica" : "cirilica";
  var outputid = lat ? "cirilica" : "latinica";

  var text = document.getElementById(inputid).value;

  var regex;

  for (var i = 0; i < map.length; i++) {
    regex = new RegExp(map[i][toBeReplaced], "gm");
    text = text.replace(regex, map[i][replacer]);

    regex = new RegExp(map[i][toBeReplaced].toLocaleUpperCase(), "gm");
    text = text.replace(regex, map[i][replacer].toLocaleUpperCase());
  }

  document.getElementById(outputid).value = text;
}
