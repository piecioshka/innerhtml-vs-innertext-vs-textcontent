# innerhtml-vs-innertext-vs-textcontent

Comparison: `innerHTML` vs `innerText` vs `textContent`

## Demo 🚀

<https://piecioshka.github.io/innerhtml-vs-innertext-vs-textcontent/>

## Test results

Code below is execute 3_000 times.

```js
$element.innerHTML += 1;
$element.innerText += 2;
$element.textContent += 3;
```

Results:

```
[Element exists in DOM: innerHTML] 41 ms
[Element exists in DOM: innerText] 957 ms
[Element exists in DOM: textContent] 10 ms
[Element does not exists in DOM: innerHTML] 31 ms
[Element does not exists in DOM: innerText] 9 ms
[Element does not exists in DOM: textContent] 7 ms
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
