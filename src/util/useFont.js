export async function getList(){
	let r = await fetch('https://api.fontsource.org/fontlist')
	r = await r.json()
	r = await Object.keys(r)
	return r
}

export async function fetchFont(element, name){

	let r = await fetch(`https://api.fontsource.org/v1/fonts/${name}`)
	r = await r.json()
	let c = await loadFont(element, r)
	return r
}

export async function loadFont(element, data){
	
	let weight = 400
	if(!data.weights.includes(weight)){
		weight = data.weights[0]
	}

	let subset = 'latin'
	if(!data.subsets.includes(subset)){
		subset = data.subsets[0]
	}


	fetch(data['variants'][weight]['normal'][subset]['url']['woff'])
		.then(r => r.arrayBuffer())
		.then(font => {
			const fontFace = new FontFace(data['id'], font)
			document.fonts.add(fontFace)
			element.style.fontFamily = `"${data['id']}", arial`
		})
}

function random(l, u){
	return Math.floor(Math.random()*u+l)
}

export function randomFont(fonts, previous) {
	if(fonts === undefined){
		return 'anton'
	}

	let next;
	do{
		next = fonts[random(0, fonts.length)]
	}while(next === previous);

	return next
}