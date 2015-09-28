(function(w,g){w['GoogleAnalyticsObject']=g;
    w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments)};w[g].l=1*new Date();})(window,'ga');

      // TODO: replace with your Google Analytics profile ID.
      ga('create', 'UA-XXXX-Y');
      ga('send', 'pageview');
  
    // use Web Font Loader (typekit) to asynchronously load web font
    WebFontConfig = {
      google: {
        families: ['Open Sans:400,700']
      }
    };
    (function(d) {
        var wf = d.createElement('script'), s = d.scripts[0];
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
        s.parentNode.insertBefore(wf, s);
     })(document);
  // <link href="//fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">