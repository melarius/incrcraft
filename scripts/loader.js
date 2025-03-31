function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

function gameLoad(){
    loadScript('scripts/gamedata.js')
    loadScript('scripts/game.js');
    loadScript('scripts/ui.js')
    loadScript('scripts/listeners.js')
    loadScript('scripts/page.js')
    loadScript('scripts/upgrades.js')

    // tab = document.getElementById("upgrades");
    // btn = document.getElementById("m_btn4");
    // tab.style.display = "block";
    // btn.className += " active";

    tab = document.getElementById("city");
    btn = document.getElementById("m_btn1");
    tab.style.display = "block";
    btn.className += " active";
    Swal.fire({
      title: "Добро пожаловать!",
      html: `Наконец-то мы прибыли. Это место подойдёт для строительства нового города.\n 
      Необходимо начать заготавливать бревна и строить дома.\n 
      Страрый торговец сказал, что у него есть возможность продать наши излишки на рынке Королевства.`.replace(/\n/g, '<br>'),
      icon: "success"
  });
}