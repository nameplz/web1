var Link = {
  setColor:function(color){
    //var alist = document.querySelectorAll('a');
    //var i = 0;
    //while(i < alist.length){
      //alist[i].style.color = color;
      //i = i + 1;
    //}
    $('a').css('color', color);
  }
}
var Body = {
  setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  SetBackgroundColor:function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(this.value === 'night'){
    Body.SetBackgroundColor('black');
    Body.setColor('white');
    this.value = 'day';


    Link.setColor('powderblue');
  } else {
    Body.SetBackgroundColor('white');
    Body.setColor('black');
    this.value = 'night';

    Link.setColor('blue');
  }
}
