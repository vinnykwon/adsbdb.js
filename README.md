# adsbdb.js
Web-API for [adsbdb.com](https://www.adsbdb.com/) an Public API for aircraft, airlines, &amp; flightroutes

## Example
```JavaScript
async function main() {
	const { Adsbdb } = require("./adsbdb.js")
	const adsbdb = new Adsbdb()
	const status = await adsbdb.checkOnline()
	console.log(status)
}

main()
```
