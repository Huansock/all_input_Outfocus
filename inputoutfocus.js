function allBlur() {

  var inputTags = document.getElementsByTagName("input");
  var textareaInput = document.getElementsByTagName("textarea");

  var textareaInputArray = Array.from(textareaInput);

  var textInputs = [];

  function addInput(inputType) {
    if (inputType !== null) {
      textInputs.push(inputType);
    }
  }

  try {
    textareaInputArray.forEach(element => {
      if(element.style.display !== "hidden"){
        textInputs.push(element)
      }
    });
    for (var i = 0; i < inputTags.length; i++) {
      if (inputTags[i].type === "text") {
        textInputs.push(inputTags[i]);
      }
    }
    for (var j = 0; j < textInputs.length; j++) {
      textInputs[j].blur();
    }
  } catch (e) {
    console.error(e);
  }

}

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    allBlur();
  } else {
  }
});
