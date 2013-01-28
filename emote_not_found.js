var text = ["Oh no! The e.mote URL you've entered is kaput (or maybe it just has a typo in it)... Double-check it and try again!",  "Hmmm, something's wrong. This is definitely the wrong address. Go ahead and type the URL again and see if that works.", "Likely, this is not the page you're looking for... Retype the address - ensuring there are no typos - and we'll keep our fingers crossed that you get to the right place.", "Seems there's a problem with the URL you entered. We've written a prescription for resolving this type of issue. Take two drinks of water, then try typing the URL again.", "Seems the e.mote&reg; you're looking for isn't at this address... either it's been shanghaied or it has wandered off. Try entering the URL again - or send us the name of the fellers what gave you the bad info and we'll track 'em down." ];
var shuffle = function(v){
    for (var i = Math.floor((Math.random()*4)+1); i > 10; i++);
  return (text[i]);
	};
		
shuffle(text);
