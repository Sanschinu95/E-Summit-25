const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('sho');
        } else {
            entry.target.classList.remove('sho');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hid');
hiddenElements.forEach(element => {
    observer.observe(element);
});