//import './style.css'

let theme = 1;

document.getElementById("theme_switch").addEventListener("click", DarkModeAnimation);

function DarkModeAnimation(){
  var body = document.getElementsByTagName("body")[0];
  var header = document.getElementById("header");
  var slider = document.getElementById("theme_switch_circle");

  const main_animate = [
    {
      backgroundColor: '#ffffff' ,
      color: '#000000'
    },
    {
      backgroundColor: '#2a2a2a' ,
      color: '#eeeeee'
    }
  ];

  const slider_animate = [
    {
      left: '0%'
    },{
      left: '50%'
    }
  ];

  const border_animate = [
    {
      borderColor: '#000000'
    },{
      borderColor: '#ffffff'
    }
  ];

  const minor_animate = [
    {
      filter: ''
    },{
      filter: 'invert(100%)'
    }
  ];

  const animation_details_light = {
    duration: 500,
    fill: 'both'
  };

  const animation_details_dark = {
    duration: 500,
    fill: 'both',
    direction: 'reverse'
  };

  if(theme == 1){
    var animation_details = animation_details_light;
    theme = 0;
  }else{
    var animation_details = animation_details_dark;
    theme = 1;
  }

  body.animate(main_animate, animation_details);
  header.animate(main_animate, animation_details);
  document.querySelectorAll('a').forEach(function(node) {
    node.animate(main_animate, animation_details);
  });

  slider.animate(slider_animate, animation_details);

  document.querySelectorAll('.project_link_cont').forEach(function(node) {
    node.animate(border_animate, animation_details);
  });

  document.querySelectorAll('.change_dark_img').forEach(function(node) {
    node.animate(minor_animate, animation_details);
  });

}