// Lazy Load Images with Intersection Observer
(function () {
   const images = document.querySelectorAll('img');
   const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
   };

   const observer = new IntersectionObserver(imageObserver, options);

   function imageObserver(entries, observer) {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            const img = entry.target;
            const imgSource = img.dataset.src;
            img.src = imgSource;
            observer.unobserve(img);
         }
      });
   }

   images.forEach((img) => {
      observer.observe(img);
   });
})();
