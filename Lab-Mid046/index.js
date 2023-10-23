let handleClick = () => {
    $("#logoBtn").on("click", (e) => {
      console.log("Button Clicked...");
      $(".navbar").css("display", "none");
    });
  };
  