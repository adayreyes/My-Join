
let users = [
  { name: "Aday", email: "adadda@gmail.com", img: "img/profile.png" },
  { name: "Tim", email: "timtitm@gmail.com", img: "img/profile.png" },
  { name: "Eugen", email: "eegegen@gmail.com", img: "img/profile.png" }
];
let tasks = [
  {
    id: 0,
    title: "Youtube Werbung",
    category: "Marketing",
    description: "Werbungskosten ausrechnen",
    date: "12.03.2022",
    urgency: "low",
    status: "to-do",
    assigned: [users[0],users[1],users[2]]
  },
  {
    id: 1,
    title: "Windows installieren",
    category: "IT",
    description: "Windows 11 muss unbedingt installiert werden",
    date: "10.03.2022",
    urgency: "high",
    status: "in-progress",
    assigned: [users[1],users[2]]
  }
];


function deleteTask(i) {
  tasks.splice(tasks.indexOf(tasks.filter((ele) => {
    if(ele['id'] === i) return true;
    return false;
  })[0]),1);
}


function showNavBar(){
  document.getElementById('main-header').style.display = "flex";
  document.getElementById('resp-img').classList.add('d-none');
  document.getElementById('hidebar').classList.remove('d-none');
}

function hideMenu(){
  document.getElementById('main-header').style.display = "none"
  document.getElementById('resp-img').classList.remove('d-none')
  document.getElementById('hidebar').classList.add('d-none');
}



function saveInFirebase(){
  setDoc(doc(db,"Join","users"),users[0])
}



/* ##############################################*/

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
