    //things in here will show up, when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    // is called in here so it activates when page is loaded    
    incrementCount()

//See the timer increment every second once the page has loaded.
    //step 4.) create the timer count up automatically when refreshed
    let interval = setInterval(incrementCount, 1000)

//Manually increment and decrement the counter using the plus and minus buttons.
    //step 2.) activates the plus button
    const plusButton = document.getElementById("plus")
    plusButton.addEventListener('click', incrementCount)
    //step 3.) activates the minus button
    const minusButton = document.getElementById("minus")
    minusButton.addEventListener('click', () => {
        let count = document.getElementById("counter")
        count.textContent = parseInt(count.textContent) - 1
    })
    const heart = document.getElementById('heart')
    let heartObj = {}
    heart.addEventListener('click', () => {
        let likeValue = document.getElementById('counter').textContent
        if(heartObj[likeValue] > 0) {
            heartObj[likeValue] += 1
        } else {
            heartObj[likeValue] = 1
        }
//using querySelector b/c it gives us access to that one element - this is going to allow us to heart a number unlimited amount of times
        let li = document.createElement('li')
        let heartUL = document.querySelector(".likes")
        li.innerText = `${likeValue} has been liked ${heartObj[likeValue]} times.`
        heartUL.appendChild(li)
        
    })
    const submit = document.getElementById('submit')
    //step 5.) creating and modifying the pause button
    const pause = document.querySelector("#pause")
//Click the "restart" button to restart the counter and re-enable the buttons.
    pause.addEventListener('click', () => {
        if(pause.innerText === 'resume') {
            pause.innerText = 'pause'
            interval = setInterval(incrementCount, 1000)
        } else {
//switch the label on the button from "pause" to "resume"
            pause.innerText = 'resume'
            clearInterval(interval)
        }
//adding a !(not) means it equals the opposite i.e. minus.disabled = true or false - this section prevents you from clicking these buttons when pause is enabled and allows you to click them when pause is disabled
        minus.disabled = !minus.disabled
        plus.disabled = !plus.disabled
        heart.disabled = !heart.disabled 
        submit.disabled = !submit.disabled
    })
//step 6.) Leave comments on my gameplay, such as: "Wow, what a fun game this is."
    let commentForm = document.querySelector('#comment-form')
    commentForm.addEventListener('submit', (e) => {
//adding in a console.log with text to make sure it is the result we are looking for
        e.preventDefault()
        const list = document.getElementById('list')
        let li = document.createElement('li')
        li.innerText = e.target[0].value
        list.appendChild(li)
    //this resets the text once you hit submit    
        commentForm.reset()
        //commentForm.innerText = ""
    })
});


//step 1.) created this to grab the counter ID and manipulate it to count up when we call on it
function incrementCount() {
    let count = document.getElementById("counter")
    //using parseInt to convert it from a string to an integer, so it is adding an integer to and integer and not a integer to a string- otherwise it will catinate
    count.textContent = parseInt(count.textContent) + 1
}

//step 7.) "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.




// can't figure out how to log the likes with each number in the same line 