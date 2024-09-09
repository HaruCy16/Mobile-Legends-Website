const lyrics =
  "Ibibigay ko ang lahat.\nPati, na rin ang iyong pangarap.\nSasamahan kita kahit saan.\nKahit saan.\nIkaw lang ang nais kong makasama.\nWala na akong gusto pang balikan.\nKahit ako'y papiliin, ikaw ay umasang\nGusto kong makapiling";

function printLyrics(lyrics, index = 0) {
  if (index < lyrics.length) {
    let delay = 100;

    if (lyrics[index] === " ") delay = 1000;
    if (lyrics[index] === "\n") delay = 500;
    if (lyrics[index] === ",") delay = 600;
    if (lyrics[index] === ".") delay = 500;
    if (lyrics[index] === "Pati,") delay = 2000;
    if (lyrics[index] === "Ibibigay") delay = 5000;
    if (lyrics[index] === "saan.") delay = 3000;
    if (lyrics[index] === "-") delay = 800;

    process.stdout.write(lyrics[index]);

    setTimeout(() => printLyrics(lyrics, index + 1), delay);
  }
}

printLyrics(lyrics);
