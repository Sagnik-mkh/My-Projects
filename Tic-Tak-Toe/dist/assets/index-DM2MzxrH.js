(function () {
	const o = document.createElement("link").relList;
	if (o && o.supports && o.supports("modulepreload")) return;
	for (const t of document.querySelectorAll('link[rel="modulepreload"]')) s(t);
	new MutationObserver((t) => {
		for (const r of t)
			if (r.type === "childList")
				for (const d of r.addedNodes)
					d.tagName === "LINK" && d.rel === "modulepreload" && s(d);
	}).observe(document, { childList: !0, subtree: !0 });
	function e(t) {
		const r = {};
		return (
			t.integrity && (r.integrity = t.integrity),
			t.referrerPolicy && (r.referrerPolicy = t.referrerPolicy),
			t.crossOrigin === "use-credentials"
				? (r.credentials = "include")
				: t.crossOrigin === "anonymous"
				? (r.credentials = "omit")
				: (r.credentials = "same-origin"),
			r
		);
	}
	function s(t) {
		if (t.ep) return;
		t.ep = !0;
		const r = e(t);
		fetch(t.href, r);
	}
})();
const p = "./assets/ting-C0YA9TLH.mp3",
	A = "./assets/gameover-DQUrfT6u.mp3";
let l = "X",
	i = "",
	c = new Array();
const u = document.querySelector("[data-turn-ind]"),
	x = document.querySelectorAll("[data-box]"),
	m = Array.from(x),
	f = new Audio(p),
	L = document.querySelector("[data-reset]"),
	n = document.querySelector("[data-game-over]"),
	C = document.querySelector("[data-play-again]"),
	y = document.querySelector("[data-win-card]"),
	g = new Audio(A);
function h() {
	m.forEach((e, s) => {
		c[s] = e.textContent.trim();
	});
	const a = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let e = 0; e < a.length; e++) {
		let s = c[a[e][0]],
			t = c[a[e][1]],
			r = c[a[e][2]];
		s != "" &&
			t != "" &&
			r != "" &&
			s == t &&
			t == r &&
			((i = s),
			(u.textContent = `${i} Wins`),
			(y.textContent = i === "Draw" ? "Draw" : `Player ${i} Wins! 🏆`),
			n.getAttribute("data-game-over") == "inactive" &&
				(g.play(),
				n.setAttribute("data-game-over", "active"),
				n.classList.remove("animate-fade-out"),
				n.classList.add("animate-fade-in"),
				(n.style.opacity = 1),
				(n.style.zIndex = "50")));
	}
	let o = !0;
	for (let e = 0; e < c.length; e++)
		if (c[e] === "") {
			o = !1;
			break;
		}
	o == !0 &&
		((i = "Draw"),
		(u.textContent = `${i}`),
		(y.textContent = i === "Draw" ? "Draw" : `Player ${i} Wins! 🏆`),
		n.getAttribute("data-game-over") == "inactive" &&
			(g.play(),
			n.setAttribute("data-game-over", "active"),
			n.classList.remove("animate-fade-out"),
			n.classList.add("animate-fade-in"),
			(n.style.opacity = 1),
			(n.style.zIndex = "50")));
}
function w(a) {
	return a === "X" ? "O" : "X";
}
function v(a) {
	a.stopPropagation(),
		m.forEach(function (e) {
			(e.textContent = ""), e.setAttribute("data-status", "active");
		}),
		(l = "X"),
		(i = ""),
		(u.textContent = `Turn for ${l}`);
}
function b(a) {
	a.addEventListener("click", function (e) {
		e.stopPropagation(),
			a.getAttribute("data-status") === "active" &&
				((a.textContent = l),
				a.setAttribute("data-status", "inactive"),
				(l = w(l)),
				(u.textContent = `Turn for ${l}`),
				f.pause(),
				(f.currentTime = 0),
				f.play()),
			h();
	});
}
function O(a) {
	n.getAttribute("data-game-over") == "active" &&
		(n.setAttribute("data-game-over", "inactive"),
		(n.style.opacity = 0),
		(n.style.zIndex = "-50"),
		n.classList.add("animate-fade-out"),
		n.classList.remove("animate-fade-in"),
		v(a));
}
m.forEach(b);
L.addEventListener("click", v);
C.addEventListener("click", O);
