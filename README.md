# innerhtml-vs-innertext-vs-textcontent

Comparison: `innerHTML` vs `innerText` vs `textContent`

## Test results

```js
// Code below is execute 1000 times.
// In inline comment you can see duration of execution each line.
$el1.innerHTML += 1;    // 20 ms
$el2.innerText += 2;    // 318 ms
$el3.textContent += 3;  // 5 ms
```

## Conclusions

:no_entry: You should be warn when use use `innerText`.

:zap: **Performance improvement** is when element is hidden (with `display: none`).

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
