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
document.getElementById("finalBtn").addEventListener("click", function () {
  alert(`🎉 One Last Surprise 🎉

Dear Cherry 🍒,

Thank you for being the most wonderful friend.

Every smile,
every laugh,
and every memory with you
means so much to me.

No matter where life takes us,
I hope our friendship stays forever. ❤️

🌸 You are truly special. 🌸

Love,
Sobia 💖`);
});
