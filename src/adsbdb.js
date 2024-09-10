class Adsbdb {
	constructor() {
		this.api = "https://api.adsbdb.com/v0"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getAirCraft(modeS) {
		const response = await fetch(
			`${this.api}/aircraft/${modeS}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCallSign(callSign) {
		const response = await fetch(
			`${this.api}/callsign/${callSign}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAirLine(airLineCode) {
		const response = await fetch(
			`${this.api}/airline/${airLineCode}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async checkOnline() {
		const response = await fetch(
			`${this.api}/online`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {Adsbdb}
