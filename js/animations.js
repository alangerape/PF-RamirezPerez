function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('info1-container')) {
          entry.target.querySelector('.info1').classList.add('animate__animated', 'animate__slideInLeft');
        } else if (entry.target.classList.contains('info2-container')) {
          entry.target.querySelector('.info2').classList.add('animate__animated', 'animate__slideInRight');
        }
  
        observer.unobserve(entry.target);
      }
    });
  }
  
  let options = {
    threshold: 0.5 
  };
  
  let observer = new IntersectionObserver(animateOnScroll, options);
  
  observer.observe(document.querySelector('.info1-container'));
  observer.observe(document.querySelector('.info2-container'));
  