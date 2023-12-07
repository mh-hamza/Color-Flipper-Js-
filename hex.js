function generateRandomHexColor() {
    // Generate a random hexadecimal color code
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  
    return randomColor;
  }

  const btn = document.querySelector(".btn")
  const colorText = document.querySelector(".color-text")

  btn.addEventListener("click", function(){
    const randomColorCode = generateRandomHexColor();
    document.body.style.backgroundColor=randomColorCode;
    colorText.innerHTML= randomColorCode;
    colorText.style.color=randomColorCode;
  })