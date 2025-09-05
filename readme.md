Answer the following questions clearly:
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling and how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    ==> getElementById() = getElementById return a element. It is return to a null value. getElementById select a unique specific element.

            example: document.getElementById("my-title").

    ==> getElementsByClassName() = getElementsByClassName return a HTML collection. getElementsByClassName select different type of element.

            example: document.getElementsByClassName("my-paragraph") 

    ==> querySelector() = querySelector return a first element that is css selector.

            example: document.querySelector(".child-container") 

    ==> querySelectorAll() = querySelectorAll return a nodeList. It is select to multiple element. 

            example: document.querySelectorAll(".parent-container") 



2. How do you create and insert a new element into the DOM?

    const divElement = document.createElement("div")
    console.log(divElement)


3. What is Event Bubbling and how does it work?

    ==>when a event trigger on a inner element then the element to show child element before that the show child element and then show current parent element then show parent element this is called bubbling.


4. What is Event Delegation in JavaScript? Why is it useful?
     
    ==> Event delegation handling of multiple child element. This is the add every similar element  in a event listen. 

    * instant adding multiple event listener to chile element. This improve and memory save effectively. That's why it is most useful.

5. What is the difference between preventDefault() and stopPropagation() methods?

    * preventDefault() ==> The preventDefault() method to prevent the browser from executing the default action for the selected element. preventDefault() works to an HTML element default behavior stopping

    * stopPropagation() ==> stopPropagation() works to a javascript event and bubbling stop this process

