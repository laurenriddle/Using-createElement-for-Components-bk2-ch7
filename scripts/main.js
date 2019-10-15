// obtains a reference to the article with the ID of messages
// const messagesID = document.querySelector("#messages")


// A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()


// create a section component element
const section1 = document.createElement('section')
// gives the section elememt a class and content
section1.className = "message"
section1.textContent = "Are we doing fireworks this year?"
fragment.appendChild(section1)


// create a section component element
const section2 = document.createElement('section')
// gives the section elememt a class and content
section2.className = "message"
section2.textContent = 'After last year\'s "tree incident", should we?'
fragment.appendChild(section2)


// create a section component element
const section3 = document.createElement('section')
// gives the section elememt a class and content
section3.className = "message"
section3.textContent = "The fire fighters put it out in like a minute. Wasn't even a real fire."
fragment.appendChild(section3)

// create a section component element
const section4 = document.createElement('section')
// gives the section elememt a class and content
section4.className = "message"
section4.textContent = "We can set them off in the street."
fragment.appendChild(section4)

// create a section component element
const section5 = document.createElement('section')
// gives the section elememt a class and content
section5.className = "message"
section5.textContent = "Our neighbors' houses are flammable, too."
fragment.appendChild(section5)

document.querySelector("#messages").appendChild(fragment)
