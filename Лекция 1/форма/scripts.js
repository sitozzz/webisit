//Проверка размера загружаемого файла
function updateSize() {
  var file = document.getElementById("Photo").files[0],
    ext = "не определилось",
    parts = file.name.split('.');
  if (parts.length > 1) ext = parts.pop();
  document.getElementById("fileinfo").innerHTML = [
    "Размер файла: " + file.size + " B",
    "Расширение: " + ext,
    "MIME тип: " + file.type
  ].join("<br>");
  if (file.size > 1000000) {
    alert('Невозможно загрузить файл больше 1Мб!');
    var inp = document.querySelector("#Photo");
    inp.value = "";
    document.getElementById("fileinfo").innerHTML = [
      "Превышен допустимый размер файла!",
      "Размер файла: " + file.size + " B",
    ].join("<br>");
  }
}

function sendForm() {
  var myForm = new FormData(document.forms.myform);
  var xmlHttp = new XMLHttpRequest();
  $.blockUI();
  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      xmlHttp.open("POST", "/192.168.56.102");
      xmlHttp.send(myForm);
      $.unblockUI
    }
  }
}