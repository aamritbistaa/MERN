import quote from "./Quote.js";

let ran_num = Math.floor(Math.random() * 6 + 1);
console.log(ran_num);

// for (let i = 0; i < n; i++) {
//   if (quote[i].id == ran_num) {
//     console.log(quote[i].author);
//     console.log(quote[i].quote);
//   }
// }
var quote1 = quote.filter((selecetd_quote) => ran_num == selecetd_quote.id);
// quote.map((i) => {
//   let filtered_quote = quote.filter((i) => i == ran_num);
//   console.log(filtered_quote);

//   console.log(i);
// });
console.log(quote1);
console.log(quote1.id);
