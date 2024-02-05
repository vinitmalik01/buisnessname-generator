let adjectives = [" crazy ", " fire ", " Amazing "];
let name = [" Engine ", "food ", " garments "];
let word = [" Bros ", "Limited ", " Hub "];
l = adjectives.length

function randrange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
z = randrange(0, l - 1);
c = randrange(0, l - 1);
r = randrange(0, l - 1);
console.log(adjectives[r] + name[c] + word[z])
