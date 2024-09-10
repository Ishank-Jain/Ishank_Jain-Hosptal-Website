function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
    document.getElementById("hm").style.display = 'none';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    document.getElementById("hm").style.display = 'flex';
    sidebar.style.display = 'none';
}