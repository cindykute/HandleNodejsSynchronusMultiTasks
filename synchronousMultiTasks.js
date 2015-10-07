var arr1 = new Array();
var arr2 = new Array();

// Which we then observe, specifying an array of change 
// types weâ€™re interested in

Object.observe(arr1, observer1add, ['add']);
Object.observe(arr2, observer2add, ['add']);
Object.observe(arr2, observer2delete, ['delete']);


function observer1add(changes){
  changes.forEach(function(change, i){
    console.log("observer1add -",change);
    //console.log("arr2.count", arr2.length)
    if(arr2.length==0){
    	arr2.push(arr1.shift());
    }
  })

};

function observer2add(changes){
  //changes.forEach(function(change, i){
    console.log("observer2add -",changes);
    if(arr2.length>=1){
    	send(changes);
    }
    // else{

    // }
  //})

};

function observer2delete(changes){
  changes.forEach(function(change, i){
    console.log("observer2delete -",change);
    if(arr2.length == 0){
    	if(arr1.length>0){
    		arr2.push(arr1.shift());
    	}
    }
  })

};

function send(change){
	console.log('send arr2',
			arr2
		);
	setInterval(function(){ 
		arr2.shift()
	}, 2000);
}


// Test data
var count=0;

var interval = setInterval(function(){ 
	arr1.push(++count); 
	if(count === 10){
        clearInterval(interval);
    }
}, 500);



