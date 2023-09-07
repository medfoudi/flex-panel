const eachPanel = Array.from(document.getElementsByClassName('panel'));
console.log(eachPanel);

eachPanel.forEach(panel => {
    panel.addEventListener('click', function() {
    
    if (panel.classList.contains("open","open-active")) {
        panel.classList.remove("open" ,"open-active");
    } else {
        panel.classList.add("open","open-active");
    }
        
        
    });
});