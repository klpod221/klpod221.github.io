import $ from 'jquery';

$(function () {
  console.log("Hi, I'm klpod221! I'm a web developer");
  console.log('You can find me on GitHub:');
  console.log('https://github.com/klpod221');
  console.log(`
_   _               _ ___ ___ _
| |_| |_ __  ___  __| |_  )_  ) |
| / / | '_ \\/ _ \\/ _\` |/ / / /| |
|_\\_\\_| .__/\\___/\\__,_/___/___|_|
      |_|
`);
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const hash = this.hash;

      // check if have hash element
      if (!$(`${hash}`).length) {
        return;
      }

      // add hash to url without refresh
      window.history.pushState(null, null, hash);

      // Using jQuery to scroll to the hash
      $('html, body').scrollTop($(`${hash}`).offset().top - 50);
    }
  });

  // check if hash is in url
  if (window.location.hash) {
    // Using jQuery to scroll to the hash
    $('html, body').scrollTop($(window.location.hash).offset().top - 50);
  }
});
