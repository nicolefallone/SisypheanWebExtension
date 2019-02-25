(function() {
// put your extension code inside here – do not delete 
// the lines above or the last line either!

	/*
	SISYPHEAN WEB
	Nicole Fallone | 2019

	A browser extension that collages web pages, removing their
    usability for art.

	*/

    
    $('p, h1, h2, h3, h4, h5, li, a').css( {
                   'transform': 'scale(10,10)'
                  });

    
    var count = 0;
    
    $('img').each( function() {
                  count +=1;
                  });
    
    console.log('There are ' + count + ' images on this site');
    
    if (count > 0 && count < 6) {
        $('img').css( {
                   'transform': 'scale(12,12)'
                  });
    }
    
     if (count > 5 && count < 11) {
        $('img').css( {
                   'transform': 'scale(10,10)'
                  });
    }
    
    if (count > 10 && count < 16) {
        $('img').css( {
                   'transform': 'scale(8,8)'
                  });
    }
    
    if (count > 15 && count < 21) {
        $('img').css( {
                   'transform': 'scale(6,6)'
                  });
    }
    
    if (count > 20) {
        $('img').css( {
                   'transform': 'scale(4,4)'
                  });
    }
    
    
//    var randLetters = ['a','b','c','d','e','f','g','h','i','j','k',
//                      'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
//    $('p, h1, h2, h3, h4, h5, li').each( function() {
//		var letters = $(this).text().split('');	// split letters into an array
//		var output = '';
//        for (i=0; i<letters.length; i++) {
//            var which = Math.floor(Math.random() * randLetters.length);
//			output += randLetters[which];
//		}
//        console.log(output);
//		$(this).html(output);					// update the paragraph text
//	});
    
    
// do not delete the line below!
})();
