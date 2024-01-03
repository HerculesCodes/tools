document.addEventListener('DOMContentLoaded', function() {
    // Check if there is saved data in localStorage
    var savedData = localStorage.getItem("myToDoList");
    if (savedData) {
      document.getElementById("myUL").innerHTML = savedData;
    }
  
    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
  
    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        saveToLocalStorage();
      };
    }
  
    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        saveToLocalStorage();
      }
    }, false);
  
    // Add an event listener for the "keydown" event on the input field
    var inputField = document.getElementById("myInput");
    inputField.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        newElement();
      }
    });
    // Focus on the input field when the page loads
    inputField.focus();
    // Create a new list item when clicking on the "Add" button
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";
  
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
  
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          saveToLocalStorage();
        };
      }
  
      saveToLocalStorage();
    }
  
    // Function to save the to-do list to localStorage
    function saveToLocalStorage() {
      var listHtml = document.getElementById("myUL").innerHTML;
      localStorage.setItem("myToDoList", listHtml);
    }
  });