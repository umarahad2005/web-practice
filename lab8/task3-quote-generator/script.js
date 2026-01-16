// ================================
// Quote Generator - JavaScript
// Lab 8 - Random Quotes
// ================================

// Quotes Array
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        text: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "If you really look closely, most overnight successes took a long time.",
        author: "Steve Jobs"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        text: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi"
    }
];

// DOM Elements
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyBtn = document.getElementById('copyBtn');
const tweetBtn = document.getElementById('tweetBtn');
const toast = document.getElementById('toast');

// Track last quote index to avoid repeats
let lastQuoteIndex = -1;

// Generate new random quote
function generateQuote() {
    // Add fade out effect
    quoteText.classList.add('fade-out');

    setTimeout(() => {
        // Get random index different from last
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (randomIndex === lastQuoteIndex && quotes.length > 1);

        lastQuoteIndex = randomIndex;
        const quote = quotes[randomIndex];

        // Update content
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `— ${quote.author}`;

        // Remove fade out, add fade in
        quoteText.classList.remove('fade-out');
        quoteText.classList.add('fade-in');

        setTimeout(() => {
            quoteText.classList.remove('fade-in');
        }, 500);
    }, 300);
}

// Copy quote to clipboard
async function copyQuote() {
    const quote = `"${quoteText.textContent}" — ${quoteAuthor.textContent.replace('— ', '')}`;

    try {
        await navigator.clipboard.writeText(quote);
        showToast('Copied to clipboard!');
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = quote;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Copied to clipboard!');
    }
}

// Tweet quote
function tweetQuote() {
    const quote = `"${quoteText.textContent}" — ${quoteAuthor.textContent.replace('— ', '')}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(tweetUrl, '_blank');
}

// Show toast notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Event Listeners
newQuoteBtn.addEventListener('click', generateQuote);
copyBtn.addEventListener('click', copyQuote);
tweetBtn.addEventListener('click', tweetQuote);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        generateQuote();
    } else if (e.ctrlKey && e.code === 'KeyC' && !window.getSelection().toString()) {
        copyQuote();
    }
});

// Generate initial quote on load
generateQuote();
