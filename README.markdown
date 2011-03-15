= Unrandom - a repeatable random number generator

== Description

You know how other languages have an option you can pass to the random number generator to set its seed? You know, so that you have repeatable random numbers for testing. Well, javascript doesn't. But it does have Unrandom!

Unrandom will save your random numbers to a list as it's run, and replay them back in the same order.

Unrandom is written in coffeescript, but pre-compiled to javascript for your convenience.

== Usage

In NodeJS:
	var util = require('util');
	var Unrandom = require('./unrandom').Unrandom;
	var un = new Unrandom();
	//var un = new Unrandom([0.5,0.6,0.7,0.1]); //to add a little determinism 

	Math.random = un.random;

	var x;
	try {
		while (x = Math.random()) {
			if (x < 0.1) {
				throw "oops!";
			}
		}
	}
	catch (e) {
		util.log("Oh no! Random numbers were " + JSON.stringify(un.history));
	}

	
