function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

function gameLoad(){
    tab = document.getElementById("suburb");
    btn = document.getElementById("m_btn1");
    tab.style.display = "block";
    btn.className += " active";
    Swal.fire({
      title: "Добро пожаловать!",
      text: "Чтобы победить вам необходмо построить Замок!",
      icon: "success"
  });
}

function showTooltip(element, text) {
  var tooltip = document.createElement('div');
  tooltip.innerHTML = text;
  tooltip.classList.add('js-tooltiptext');
  document.body.appendChild(tooltip);
  element.onmousemove = function(e) {
      tooltip.style.top = (e.pageY + 10) + 'px';
      tooltip.style.left = (e.pageX + 10) + 'px';
  };
}
function hideTooltip() {
  var tooltips = document.querySelectorAll('.js-tooltiptext');
  tooltips.forEach(function(tooltip) {
      tooltip.remove();
  });
}