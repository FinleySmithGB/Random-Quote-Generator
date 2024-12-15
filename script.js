const quotes = [
    "An unexamined life is not worth living, Socrates.",
    "Courage is knowing it is not the absence of fear, but the mastery of it -  King Leonidas",
    "Do every act of your life as though it were the last act of your life - Marcus Aurelius",
    "True happiness is to enjoy the present, without anxious dependence upon the future - Seneca",
    "The harder the conflict, the greater the triumph - King Leonidas",
    "Experience is the teacher of all things - Julius Ceasar",
    "Imagination rules the world - Napoleon Bonaparte",
    "Great ambition is the passion of a great character - Napoleon Bonaparte",
    "Impossible is a word to be found only in the dictionary of fools - Napoleon Bonaparte",
    "The impediment to action advances action. What stands in the way becomes the way - Marcus Aurelius",
]


const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length)

        if  (usedIndexes.has(randomIdx)) continue

    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    break
    }
}