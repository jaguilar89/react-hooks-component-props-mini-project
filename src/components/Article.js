import React from "react";

function Article({
    title,
    date = "January 1, 1970",
    preview,
    minutes
}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {emojiDisplay(minutes)} {minutes} minutes to read</small>
            <p>{preview}</p>
        </article>
    )
};

export default Article;

//Display emoji's based on the time it takes to read an article
//Rounded up to the nearest 5 or 10
function emojiDisplay(minutes) {
    let emoji;
    let timeToRead;
    if (minutes < 30) {
        emoji = '☕️';
        /* Display 1 emoji for every 5 minutes it takes to read article,
        rounded up to nearest 5. 
        Ex: 7 minute read = 2 coffee cup emojis(7 rounded up to the nearest 5 is 10):
        Math.ceil(7/5) = 2
        2 * 5 = 10
        10 / 5 = *2* <- number of emojis to display */
        timeToRead = (Math.ceil(minutes / 5) * 5) / 5
        return emoji.repeat(timeToRead);
    }
    //If article takes 30 minutes or more to read, same operation as above, but round up to the nearest 10 instead.
    if (minutes >= 30) {
        emoji = '🍱'
        timeToRead = (Math.ceil(minutes / 10) * 10) / 10
        return emoji.repeat(timeToRead);
    }
}