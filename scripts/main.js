// obtains a reference to the article with the ID of messages
const messagesID = document.querySelector("#messages")



// creates a section element
const section1 = document.createElement('section')
// gives the section elememt a class and content
section1.className = "message"
section1.textContent = "Are we doing fireworks this year?"
// appends the section element to the article element
messagesID.appendChild(section1)


// creates a section element
const section2 = document.createElement('section')
// gives the section elememt a class and content
section2.className = "message"
section2.textContent = 'After last year\'s "tree incident", should we?'
// appends the section element to the article element
messagesID.appendChild(section2)


// creates a section element
const section3 = document.createElement('section')
// gives the section elememt a class and content
section3.className = "message"
section3.textContent = "The fire fighters put it out in like a minute. Wasn't even a real fire."
// appends the section element to the article element
messagesID.appendChild(section3)

// creates a section element
const section4 = document.createElement('section')
// gives the section elememt a class and content
section4.className = "message"
section4.textContent = "We can set them off in the street."
// appends the section element to the article element
messagesID.appendChild(section4)

// creates a section element
const section5 = document.createElement('section')
// gives the section elememt a class and content
section5.className = "message"
section5.textContent = "Our neighbors' houses are flammable, too."
// appends the section element to the article element
messagesID.appendChild(section5)