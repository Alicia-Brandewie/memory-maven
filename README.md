![Bright pink background with white, centered text. The text begins with four unique unicode symbols on the left and ends with four unicode symbols on the right. The text reads: Heart-outline, solid-flower, four-point-star-outline, solid-sun "Memory Maven" outline-sun, solid-four-point-star, flower-outline, solid-heart](image-1.png)

# Background on the Memory Maven Game
Memory Maven is a classic "memory" game. 

I had a physical memory game as a preschooler, matching cardboard pictures of parent and baby animals. It's the first game I remember playing with my twin brother and gleefully collecting pairs. 

The simple white text on bright pink background and unicode symbols give the game a child-like feel, but the limited number of tries gives the game a level of challenge that adults can appreciate. 


## Getting started
***[Play Memory Maven here].***

[Play Memory Maven here]:https://alicia-brandewie.github.io/memory-maven/ 

The game begins with sixteen identical, blank white circles, and the goal of the game is to flip them over and find the 8 matching pairs of symbols.

The user clicks one white circle at a time to reveal a symbol, then clicks another circle to reveal another symbol. If the symbols match, the game tallies up a pair. The user has 12 tries, or the ability to reveal 24 symbols, to win, and the game tracks the number of user's tries.

The game announces when the user has won or lost. Then the user can choose to reset the game to play again. 

Only minor changes were made from the [Planning Document] to the deployed game, mainly changing theme so the game was text-based rather than image-based, increasing the number of tries to make the game more enjoyable, and realigning next steps along the way.

[Planning Document]: https://docs.google.com/document/d/1y2zRwp0pqoKZ_ahZ5sBqaEN7oNKfmZ_VyZODInrNL5s/edit?usp=sharing

## Technologies used
* HTML
* CSS
* JavaScript

## Attributions

### Tries Counter feature
 Materials referenced to create the Tries Counter feature, including the `tries++` increment operator, are proprietary General Asseembly course content [here] and [here], in conjunction with the [MDN] for counting `click_events`. 

[here]: https://generalassembly.instructure.com/courses/821/pages/dom-events-video?module_item_id=75306/

   [here]: https://generalassembly.instructure.com/courses/821/pages/intro-to-the-dom?module_item_id=75305/ 
    
[MDN]: https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

### Flipping cards over feature
I began with [this flip cards tutorial], indluding finding the [cursor], and did use the same `toggle` class, but did not use anything else from this tutorial. In a "next steps" capacity, I will use this tutorial to incorporate images into the cards.   

[this flip cards tutorial]: https://dev.to/mugas/flip-cards-with-javascript-2ad0/

[cursor]: https://github.com/mugas/Movie-hero/commit/88af22692ea09d10aad00e5600fe9c479d1876ab#diff-b78be019f1dc6d57753ea900c3805b114cd53ab7c0db836cc081836df1b99b7aR26-R70

Thanks to Sharon Lee for the additional [W3schools material].

[W3schools material]: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_class

### RANDAMIZING CARD ARRAY FOR SHUFFLE CARDS 
To 'shuffle' the array of 'cards' with each intial load and press of the reset button, I used the `.random` method. While I referenced multiple articles like [this] proprietary General Asseembly course content and the [MDN] to begin, I ultimately modified the below version of the [Fisher-Yeats algorithm] from [GeekforGeeks]. 
 
```// JavaScript Program to shuffle a given array 

// A function to print an array 
function printArray (arr)
{ 
    let ans = '';
    for (let i = 0; i < arr.length; i++)
    {
        ans += arr[i] + " "; 
    }
    console.log(ans); 
} 

// A function to generate a random 
// permutation of arr
function randomize (arr) 
{

    // Start from the last element and swap 
    // one by one. We don't need to run for 
    // the first element that's why i > 0 
    for (let i = arr.length - 1; i > 0; i--)
    {
    
        // Pick a random index from 0 to i inclusive
        let j = Math.floor(Math.random() * (i + 1)); 

        // Swap arr[i] with the element 
        // at random index 
        [arr[i], arr[j]] = [arr[j], arr[i]];
    } 
} 

// Driver Code
let arr = [1, 2, 3, 4, 5, 6, 7, 8]; 
randomize (arr); 
printArray(arr); 

// This code is contributed by rohitsingh07052.
```


Thanks to Ashley Sands for pointing me in the direction of the Fischer-Yeats algorithm for shuffling cards.


[this]: https://generalassembly.instructure.com/courses/821/pages/javascript-browser-game-rock-paper-scissors?module_item_id=75307

[MDN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

[Fisher-Yeats algorithm]: https://www.geeksforgeeks.org/dsa/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/

[GeekforGeeks]: https://www.geeksforgeeks.org/javascript/javascript-program-to-shuffle-deck-of-cards/


 




### Displaying shuffled cards to the user
Many, many thanks to Devin Macedo for walking me through the 
Devin walked me through the peices of the `.forEach` I'd started & teaching me `array.from` to transform a string into an array. 

```
cardEls.forEach((card, banana) => {
    CARDS = Array.from(ans) // array.from makes a string into an array 
    card.textContent = CARDS[banana]
    if(banana === 0){console.dir(Array.from(ans))}
}) 
```

### Reset button
I referenced [this] proprietary General Asseembly course content and the [MDN] to style my reset button, as well as the hover actions. 

Thank you again to Devin Macedo fro helping me clean up and understand `resetButtonElement.addEventListener('click', resetGame);.`

[this]: https://generalassembly.instructure.com/courses/821/pages/javascript-browser-game-rock-paper-scissors?module_item_id=75307

[MDN]:https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button 


### Board setup 
Grateful thanks to Oliver Levine & Randall Wolfe for helping me understand the concept of layering the `.start-board` over the `.board` in CSS for the initial set up. 


### Visual card matches feature
Additional gratitude to Randall Wolfe, the MVP(layer) of my MVP(game) for spending quite the afternoon battleing through the logic of visually displaying the paired cards' logic with me. To quote Randall on the collaboration,  "it was an alley-oop".

### General collaboration
Earnest thanks for the emotional support from Sharon Lee and Morgan Stewart of debugging three different versions of a match game amounst ourselves. 

### Boundless thanks 
To Chris Kellogg for suggesting [`user-select`] in CSS to solve the highlighing-to cheat issue on the MVP, and attempting to find a solution to make the matched cards disappear. 

[`user-select`]: https://developer.mozilla.org/en-US/docs/Web/CSS/user-select

And for always being my rubber duckey, the most patient API/backend enginer, and the Link to my Navi.  

## Next steps
Planned future enhancements: 
* Correct edge cases, like clicking the same card after it's matched
* Make matched cards 'disappear'
* ~~Make counters instant rather than on the beginning of the next 'try'~~
* ~~Mobile & tablet versions, with `touch_event` listeners~~
