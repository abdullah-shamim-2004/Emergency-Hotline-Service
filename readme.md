[Live-link](https://abdullah-shamim-2004.github.io/Emergency-Hotline-Service/)

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

#getElementById

1. It used to select element with ID from HTML
2. It returns unique one element because id is always unique

#getElementsByClassName

1. It used to select all elements according to it's class name
2. It can retuns more than one element because class can be used on different element

#querySelector

1. It mainly used to get any kind of elements like id, class , tag etc.
2. It retuns first element of selector.

#querySelectorAll

1.  It used to selects all elements with selector
2.  It retuns a nodelist

2.How do you create and insert a new element into the DOM?

To create new element I use createElement() like this: document.createElement("p")
and to insert this element on a parent container I use appendChild(), prepend(),before() , after()

3.What is Event Bubbling and how does it work?
Event Bubbling means when an event happens on a child element then it run on this element first then it run it's parent element and then it's parent like this it end on the document(root) element.

4.What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is mainly used to add event lisener on the parent element insted of using it so many child element.

5.What is the difference between preventDefault() and stopPropagation() methods?

#preventDefault()

1. It used to prevent default action that will be done without it.

#stopPropagation()

1. It used to parent the event to Bubbling up to the parent element.
