# Style CSS

## CSS

For better understanding check the [coding examples](https://jsfiddle.net/tosini13/29tkne8L/127/).

### display

- **inline-block** - **allow for** margin (even top and bottom) of the siblings and parent's siblings. Sets itself inline.
- **block** - takes margin top or bottom of the sibling and does **not apply** own if the margin is larger than its own otherwise the sibling does not apply margin and the div's is applied.
  Parent does not includes children's margin-y to its height. Instead if parent margin-y is lesser than its children's margin-y, the space between the parent's siblings will be the margin-y of the children.

### box sizing

- **content-box** - says that content of the box will have the same value as a box, so it will **not include** _padding_ and _border_ into computation - the overall box will be larger than content.
- **border-box** - indicates that box dimensions will include **border** and **padding** as well. Border and padding will be **subtracted** from the content dimensions.

[Best explanation](https://thisthat.dev/border-box-vs-content-box/#:~:text=In%20the%20content%20box%20model,same%20dimension%20as%20the%20element.&text=In%20the%20border%20box%20model,padding%20from%20the%20element's%20dimension.)

## Links

- [CODING EXAMPLES](https://jsfiddle.net/tosini13/29tkne8L/127/)
- [BEST EXPLANATION - BOX SIZING](https://thisthat.dev/border-box-vs-content-box/#:~:text=In%20the%20content%20box%20model,same%20dimension%20as%20the%20element.&text=In%20the%20border%20box%20model,padding%20from%20the%20element's%20dimension.)
