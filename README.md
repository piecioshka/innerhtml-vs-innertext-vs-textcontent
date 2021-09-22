# innerhtml-vs-innertext-vs-textcontent

Comparison: `innerHTML` vs `innerText` vs `textContent`

## Demo 🚀

<https://piecioshka.github.io/innerhtml-vs-innertext-vs-textcontent/>

## Test results

```js
// Code below is execute 3000 times.
$element.innerHTML += 1;
$element.innerText += 2;
$element.textContent += 3;
```

Results:

```
[Element rendered in DOM: innerHTML] 41 ms
[Element rendered in DOM: innerText] 957 ms
[Element rendered in DOM: textContent] 10 ms
[Element does not rendered in DOM: innerHTML] 31 ms
[Element does not rendered in DOM: innerText] 9 ms
[Element does not rendered in DOM: textContent] 7 ms
```

## Conclusions

:no_entry: You should be warn when use use `innerText`.

:zap: **Performance improvement** is when element is hidden (with `display: none`).

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
