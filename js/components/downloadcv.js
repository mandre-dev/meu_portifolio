document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".downloadCV"); 
    buttons.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const link = document.createElement("a");
            link.href = "assets/CV_oficial.pdf"; 
            link.download = "CV_oficial.pdf";     
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});
