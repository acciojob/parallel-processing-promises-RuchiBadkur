//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

const getImages = (images) => {
	const [img1, img2, img3] = images;
	const myPromise1 = new Promise((res, rej) => {
		res(img1.url)
	})

	const myPromise2 = new Promise((res, rej) => {
		res(img2.url)
	})

	const myPromise3 = new Promise((res, rej) => {
		res(img3.url)
	})

	Promise.all([myPromise1, myPromise2, myPromise3])
	.then((list) => {
		console.log(list);
		list.map((item) => {
			console.log(item);
			output.innerHTML = `
				<img href=${item} width="400px" height="200px"/>
			`
		})
	})
	.catch((err) => {alert(err)})
	
}

btn.addEventListener("click", ()=>getImages(images));






























