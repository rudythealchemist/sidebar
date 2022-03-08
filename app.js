const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// target sidebar btn
toggleBtn.addEventListener('click', function () {
    // console.log(sidebar.classList);//view targeted DOM class
    // if (sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar');
    // }
    // else {
    //     sidebar.classList.add('show-sidebar');
    // }
    sidebar.classList.toggle('show-sidebar'); //Longer way above
});

// target closebtn 
closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
});