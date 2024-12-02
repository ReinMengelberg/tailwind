(function() {
	// Function to inject a CSS file into the head
	function injectCSS(href) {
	  const link = document.createElement('link');
	  link.rel = 'stylesheet';
	  link.href = href;
	  document.head.appendChild(link);
	}

	// Function to inject a JS file into the head
	function injectJS(src, defer) {
	  const script = document.createElement('script');
	  script.src = src;
	  script.defer = defer;
	  document.head.appendChild(script);
	}

	// Inject Alpine.js
	injectJS('https://cdn.tailwindcss.com', false);
	injectJS('https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js', true);
  })();