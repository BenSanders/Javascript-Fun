const root = document.querySelector(":root"),
      inputs = document.querySelectorAll("input[name='theme']");

for(const input of inputs) {
	input.onchange = e => {
		root.style.setProperty("--theme-color", `var(--${value})`); // Broken by saying value is not defined
	}
}

// Inspiration for this https://youtu.be/Klveg8tsY54