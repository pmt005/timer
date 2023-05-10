
const times = process.argv.slice(2);

for (let time of times) {
  if ((Number(time) > 0) && (!Number.isNaN(Number(time)))) {
    setTimeout(() => {
      process.stdout.write(`\x07`);
    }, time * 1000);
  }
}