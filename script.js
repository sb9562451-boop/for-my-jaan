function showMessage() {
  alert(`💖 Dear Cherry 💖

You are not just my best friend...

You are my happiness,
my smile,
my safe place,
and one of the best people I have ever met.

Thank you for always being with me.

No matter what happens,
I will always care about you.

🌸 You will always be my Cherry. 🍒

❤️ Made with Love by Sobia ❤️`);
}

document.querySelector("button").addEventListener("click", showMessage);

const text = "Every friendship has a story... and you are my favorite chapter. 💖";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}

window.onload = function () {
  typeWriter();
};
