# angular-external-css
Proof of Concept for dynamically fetch css and apply to Angular components without messing with ViewEncapsulation

What if you need to load a back-end provided CSS and apply its rules to your Angular components?

Yeah, we thought it would be hard, but at the end Components inherit css rules applied to index.html (*Of course, how would Bootstrap css work with Angular without this feature?*).
All I had to do here to prove that it works was to create a "Link" to the css in the header of index.html and it got instantly applied to my Angular component.

PS: Be careful with overriden rules. If you try to replace a rule set to your component in its own .css file with a new one in the global external fetched .css you must use `!important` in it. I don't like it, so the best way is to organize the code in a way that you have pre-defined what is fixed and what is dynamic and should be defined in the external css. For the cases in which you don't have this option, `!important` for the rescue.

Now, appreciate this picture of cat Rick.

![Cat Rick](https://i.redd.it/dlp5su6a0cbz.jpg)

[Image credits](https://www.reddit.com/r/rickandmorty/comments/6p0xjz/i_turned_myself_into_a_cat_morty_im_fickle_rick/)
