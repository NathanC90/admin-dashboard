let windowWidth;

let sidebarEl = document.querySelectorAll('.menu ul li a');

window.onresize = window.onload = function(){
    windowWidth = this.innerWidth;
    if(windowWidth <= 876) {
        shrinkSidebar()
    } else {
        resetSidebar();
    }
}

let sidebarButton;

function shrinkSidebar() {
    for(let i = 0; i < sidebarEl.length; i++) {
        sidebarButton = sidebarEl[i];
        switch(i){
            case 0:
                sidebarButton.innerHTML = `<i class="fa-solid fa-house"></i>`;
                break;
            case 1:
                sidebarButton.innerHTML = `<i class="fa-solid fa-address-card"></i>`;
                break;
            case 2:
                sidebarButton.innerHTML = `<i class="fa-solid fa-message"></i>`;
                break;
            case 3:
                sidebarButton.innerHTML = `<i class="fa-solid fa-clock"></i>`;
                break;
            case 4:
                sidebarButton.innerHTML = `<i class="fa-solid fa-list-check"></i>`;
                break;
            case 5:
                sidebarButton.innerHTML = `<i class="fa-solid fa-people-group"></i>`;
                break;
            case 6:
                sidebarButton.innerHTML = `<i class="fa-solid fa-gear"></i>`;
                break;
            case 7:
                sidebarButton.innerHTML = `<i class="fa-solid fa-circle-question"></i>`;
                break;
            case 8:
                sidebarButton.innerHTML = `<i class="fa-solid fa-user-shield"></i>`;
                break;
            default:

        }
    }
}

function resetSidebar() {
    for(let i = 0; i < sidebarEl.length; i++) {
        sidebarButton = sidebarEl[i];
        switch(i) {
            case 0:
                sidebarButton.innerHTML = `<i class="fa-solid fa-house"></i>Home`;
                break;
            case 1:
                sidebarButton.innerHTML = `<i class="fa-solid fa-address-card"></i>Profile`;
                break;
            case 2:
                sidebarButton.innerHTML = `<i class="fa-solid fa-message"></i>Messages`;
                break;
            case 3:
                sidebarButton.innerHTML = `<i class="fa-solid fa-clock"></i>History`;
                break;
            case 4:
                sidebarButton.innerHTML = `<i class="fa-solid fa-list-check"></i>Tasks`;
                break;
            case 5:
                sidebarButton.innerHTML = `<i class="fa-solid fa-people-group"></i>Communities`;
                break;
            case 6:
                sidebarButton.innerHTML = `<i class="fa-solid fa-gear"></i>Settings`;
                break;
            case 7:
                sidebarButton.innerHTML = `<i class="fa-solid fa-circle-question"></i>Support`;
                break;
            case 8:
                sidebarButton.innerHTML = `<i class="fa-solid fa-user-shield"></i>Privacy`;
                break;
            default:
        }
    }
}