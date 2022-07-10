const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log(gameEvents);
// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
//. 1. Create an array 'events' of the different game events that happened (no
// duplicates)

const events = [...new Set(gameEvents.values())];
console.log(typeof events, events);

//. 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

//. 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)

let eventAvg1 = 0;
for (i of gameEvents.keys()) {
  eventAvg1 += i;
}
eventAvg1 /= 90;
console.log(eventAvg1);

//: I have to subtract time of the event from the next one that has happend and so on and then divide by events ammont
const eventTimings = [...gameEvents.keys()];
console.log(eventTimings);
let dif = 0;
for (let i = eventTimings.length - 1; i > 0; i--) {
  dif += eventTimings[i] - eventTimings[i - 1];
}
const eventAvg = dif / eventTimings.length;
console.log(`An event happened, on average, every ${eventAvg} minutes`);

//! This was tarrebly wrong because you get the everage events happening by dividing

//. 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL
// GOOD LUCK

//: Normal if satement
// for (const [timing, event] of gameEvents) {
//   if (timing < 45) {
//     console.log(`[FIRST HALF] ${timing}: ${event}`);
//   } else console.log(`[SECOND HALF] ${timing}: ${event}`);
// }

//: Ternary operator
for (const [timing, event] of gameEvents) {
  timing < 45
    ? console.log(`[FIRST HALF] ${timing}: ${event}`)
    : console.log(`[SECOND HALF] ${timing}: ${event}`);
}
