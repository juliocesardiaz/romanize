var romanize = function(unit){
  var output = "";
  if(unit >= 4000) {
    return output = "Sorry the Romans couldn't Count higher than 3,999 Try again.";
  } else {
    if((Math.floor(unit / 1000) > 0) && (Math.floor(unit / 1000) < 4)) {
      return Array((Math.floor(unit / 1000) + 1)).join("M") + romanize((unit % 1000));

    }else if((Math.floor(unit / 900) === 1)) {
      return "CM" + romanize((unit % 100));

    } else if((Math.floor(unit / 500) > 0) && (Math.floor(unit / 500) < 4)) {
      return Array((Math.floor(unit / 500) + 1)).join("D") + romanize((unit % 500));

    } else if((Math.floor(unit / 400) === 1)) {
      return "CD" + romanize((unit % 100));

    } else if((Math.floor(unit / 100) > 0) && (Math.floor(unit / 100) < 4)) {
      return Array((Math.floor(unit / 100) + 1)).join("C") + romanize((unit % 100));

    } else if((Math.floor(unit / 90) === 1)) {
      return "XC" + romanize((unit % 10));

    } else if((Math.floor(unit / 50) > 0) && (Math.floor(unit / 50) < 4)) {
      return Array((Math.floor(unit / 50) + 1)).join("L") + romanize((unit % 50));

    } else if((Math.floor(unit / 40) === 1)) {
      return "XL" + romanize((unit % 10));

    } else if((Math.floor(unit / 10) > 0) && (Math.floor(unit / 10) < 4)) {
      return Array((Math.floor(unit / 10) + 1)).join("X") + romanize((unit % 10));

    } else if((Math.floor(unit / 9) === 1)) {
      return "IX";

    } else if((Math.floor(unit / 5) > 0) && (Math.floor(unit / 5) < 4)) {
      return Array((Math.floor(unit / 5) + 1)).join("V") + romanize((unit % 5));

    } else if((Math.floor(unit / 4) === 1)) {
      return "IV";

    } else if ((Math.floor(unit / 1) > 0) && (Math.floor(unit / 1) < 4)) {
      return Array((Math.floor(unit / 1) + 1)).join("I") + romanize((unit % 1));
    }
    else if(unit == 0){
      return "";
    }
  }
};







// $(document).ready(function(){
//   $("form#multipleCounter").submit(function(event){
//     var multiple = parseInt($("input#multiple").val());
//     var limit = parseInt($("input#limit").val());
//     var result = multipleCounter(multiple, limit);
//
//     $(".multiple").text(multiple);
//     $(".limit").text(limit);
//     $(".counter").text(result.join(", "));
//     $("#result").show();
//     event.preventDefault();
//   });
// });
