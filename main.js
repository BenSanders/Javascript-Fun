const root = document.querySelector(":root"),
      inputs = document.querySelectorAll("input[name='theme']");

for(const input of inputs) {
	input.onchange = e => {
		root.style.setProperty("--theme-color", `var(--${value})`);
	}
}

// Inspiration for this https://youtu.be/Klveg8tsY54