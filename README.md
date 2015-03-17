### more-jquery.js - when you don't have enough jquery...

## This plugin will call every possible jquery function on an element

## Getting started

Include more-jquery.js after jquery.js: 
```html
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="more-jquery.js"/></script>
```

Call the plugin with this command:

```js
$('element').moreJquery()
```
## Options

You're also able to use some of the options that let you customize it as you wish:


```js
$('element').moreJquery({
	dontRemove: true //for you protection the plugin doesn't call the functions that delete your element, but if you're feeling reckless, go ahead and set it to 'false' 
})
```


## Examples
* [alertify.js 0.3](http://fabien-d.github.com/alertify.js/) - Stable version
* [alertify.js 0.4](http://fabien-d.github.com/alertify.js/0.4.0rc1) - (Deprecated)
* alertify.js 0.5 - Development version

## Credit where credit is due

See all list of [contributors](https://github.com/balasan/more-jquery.js/contributors)

## License

more-jquery.js is licensed under MIT http://www.opensource.org/licenses/MIT
