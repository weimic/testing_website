document.addEventListener("DOMContentLoaded", function() {
    var noButton = document.getElementById("nope");
    var yeButton = document.getElementById("yea");
    var clickCount = 0;
    var clickCountSpan = document.getElementById("ClickCount");
    var nn = ["Please?", "You know you want to", "Come on", "I'm BEGGING you", "Last chance?", "STOP!!","It's like you don't love me anymore.", "Are you sure?", "Are you really sure?", "Are you DEFINITELY sure?", "Check one more time.", "Please?", "Please???", "Please????","PLEASE!!!!","PLEEEEAAAAAAASEEEEE", "COME OOON PLEASE", "IM DYING!!", "IM DEAD", "BYE"];
    var pxc = ["40px", "20px", "30px","18px","25px","30px","14px","14px","16px","16px","12px" , "30px","40px","35px","40px","50px","10px","10px","10px","50px"];
    
    if (noButton) {
      noButton.addEventListener("click", function() {
        if (clickCount == 20) {
            window.location.href = "fail.html";
        }
          
        var currentWidth = parseFloat(window.getComputedStyle(noButton).width);
        var currentHeight = parseFloat(window.getComputedStyle(noButton).height);
        var ycurrentWidth = parseFloat(window.getComputedStyle(yeButton).width);
        var ycurrentHeight = parseFloat(window.getComputedStyle(yeButton).height);
        var curFont = parseFloat(window.getComputedStyle(noButton).fontSize);
        var ycurFont = parseFloat(window.getComputedStyle(yeButton).fontSize);
        noButton.style.width = (currentWidth - 5)+ "px";
        noButton.style.height = (currentHeight - 5)+"px";
        noButton.style.fontSize = pxc[clickCount];
        noButton.textContent = nn[clickCount];
        
        yeButton.style.width = (ycurrentWidth + 5) + "px";
        yeButton.style.height = (ycurrentHeight + 5) + "px";
        yeButton.style.fontSize = (ycurFont + 3)+"px";
        
        clickCount++;
        clickCountSpan.textContent = clickCount;
      });
    }
    
  });
  
