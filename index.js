function $(elid) {
    return document.getElementById(elid);
  }
  
var cursor;
window.onload = init;

function init() {
  cursor = $("cursor");
  cursor.style.left = "0px";
}

function nl2br(txt) {
  return txt.replace(/\n/g, '');
}

function typeIt(from, e) {
  e = e || window.event;
  var w = $("typer");
  var tw = from.value;
  if (!pw){
    w.innerHTML = nl2br(tw);
  }
}

function moveIt(count, e) {
  e = e || window.event;
  var keycode = e.keyCode || e.which;
  if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
}

function alert(txt) {
  console.log(txt);
}


var discord = "https://discord.com/channels/@me/mushroom990/";
// var spotify = "https://open.spotify.com/user/syog7dqyl6traoo16ptiremah";
var instagram = "https://instagram.com/m9631singh?igshid=OGQ5ZDc2ODk2ZA==";
var email = 'mailto:workmanmeet7@gmail.com';

whois = [
"<br>",
"Hey, I'm Manmeet Singh.",
"I'm a frontend developer with 4 years of experience,",
"primarily in the FINTECH industry.",
"I've had the opportunity to work on various projects" ,
"that involve creating seamless and user-friendly interfaces for financial applications.",
"I'm passionate about staying up-to-date with the latest technologies and trends in web development.",
"Throughout my career, I've been fortunate to collaborate with talented professionals",
"who have helped shape my expertise.",
"If you're interested in discussing anything related to frontend development,",
"web technologies, or the FINTECH sector, feel free to connect!",
"<br>"
];

whoami = [
  "<br>",
  "Well, WHOAMI? That's a tough one.",
  "Maybe you should ask yourself that question while you try to figure out",
  "<br>"
];

social = [
  "<br>",
  // 'spotify        <a href="' + spotify + '" target="_blank">spotify/syog7dqyl6traoo16ptiremah' + "</a>",
  'instagram      <a href="' + instagram + '" target="_blank">instagram/m9631singh' + '</a>',
  'discord        <a href="' + discord + '" target="_blank">Add Me mushroom990' + "</a>",
  "<br>"
];

help = [
  "<br>",
  '<span class="command">whois</span>          Who is Manmeet?',
  '<span class="command">whoami</span>         Good question who are you?',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           What you just used lol',
  '<span class="command">email</span>          My public email address',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">banner</span>         Display the header',
  "<br>",
];

banner = [
  '<span class="index">Manmeet Singh (MS) Not A Corporation. All prints reserved.</span>',
  "      __  ___             ",
  "     /  |/  /    _____   ",
  "    / /|_/ /    / ___/   ",
  "   / /  / /    (__  )  ",
  "  /_/  /_/    /____/   ",
  '<span class="color2">Microsoft Windows [Version 10.0.19045.2251]</span>',
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];

var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
    else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("C:\\Users\\Manmeet>" + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:workmanmeet7@gmail.com">workmanmeet7@gmail.com</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // socials
    case "spotify":
      addLine("Opening Spotify...", "color2", 80);
      newTab(spotify);
      break;
    case "steam":
      addLine("Opening Steam...", "color2", 0);
      newTab(steam);
      break;
    case "discord":
      addLine("Add Me Mushroom990", "color2", 0);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
