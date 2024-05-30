// for...of ループ
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}






// 標準的な for ループ
for (let i = 1; i < 10; i++) {
  const newResult = `${i} x ${i} = ${i * i}`;
  results.textContent += `${newResult}\n`;
}
results.textContent += "\n完了!\n\n";








// while と do...while
let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}


do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

