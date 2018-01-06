JSX is a templating language which mixes HTML-style tags with JavaScript.

JSX has a few differences from regular HTML:

We can use moustaches ({ and }) to insert JS values
It allows us to easily add event handling
All attributes must be written in camel-case, e.g. accept-charset would become acceptCharset
The class attribute (for styling with CSS) is called className
All tags should self-close if they are empty (e.g. <div />)


JSX code is converted by babel into standard JS - else the broswer could not read it

Object-destructuring is a standard part of ES6, it's not part of JSX.


STATE

What do we want to be able to change in the component?
What types would be best to track these changes?
The state object can contain as many properties as you like, but you should aim to store the least amount of information necessary to work out how to render your component.

.reduce methis 
 It will repeat the logic for each amount in the array and then return a single value.