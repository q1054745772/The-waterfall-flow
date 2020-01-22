var wH = window.innerHeight
var st = document.documentElement.scrollTop 
var windowheight=window.innerHeight+500
var ImageList = [
	"image/a1.jpg",
	"image/a2.jpg",
	"image/a3.jpg",
	"image/a4.jpg",
	"image/a5.jpg",
	"image/a6.jpg",
	"image/a7.jpg",
	"image/a8.jpg",
	"image/a9.jpg",
	"image/a10.jpg"
]

function minDiv() {
	var pd1 = document.getElementById("pd1")
	var pd2 = document.getElementById("pd2")
	var pd3 = document.getElementById("pd3")
	var pd4 = document.getElementById("pd4")

	var pd_imgs1 = pd1.children
	var pd_imgs2 = pd2.children
	var pd_imgs3 = pd3.children
	var pd_imgs4 = pd4.children


	var pd1Height = jisuan(pd_imgs1)
	var pd2Height = jisuan(pd_imgs2)
	var pd3Height = jisuan(pd_imgs3)
	var pd4Height = jisuan(pd_imgs4)

	var minH = Math.min(pd1Height, pd2Height, pd3Height, pd4Height)

	if (minH == pd1Height) {
		return pd1
	}
	if (minH == pd2Height) {
		return pd2
	}
	if (minH == pd3Height) {
		return pd3
	}
	if (minH == pd4Height) {
		return pd4
	}
}

function jisuan(pd) {
	var imgheight = 0
	if (pd == null || pd.length == 0) {
		return 0
	} else {
		for (var i = 0; i < pd.length; i++) {
			var img = pd[i]
			var h = img.height
			imgheight += h
		}
		return imgheight
	}
}

function insetr(){
	var timer = setInterval(function() {
		if (document.documentElement.scrollHeight>windowheight) {
			clearInterval(timer)
		}
		var min = minDiv()
		var sui = Math.floor(Math.random() * ImageList.length)
		var img = document.createElement("img")
		img.setAttribute("src", ImageList[sui])
		min.appendChild(img)
	}, 100)
}



window.onload=function(){
	insetr()
	window.addEventListener("scroll",function(){
		if(document.documentElement.scrollTop+window.innerHeight>=document.documentElement.scrollHeight){
			windowheight+=500
			insetr()
		}
	})
}