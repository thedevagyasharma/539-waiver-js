
document.addEventListener("DOMContentLoaded", function(){

    /*Problem 1
        The Variable "figures" stores all the <figure> elements in an HTMLCollection
        A "for" loop is used to iterate over all the <figure> elements and apply the class "one-third"
    */
    var figures = document.getElementsByTagName("figure");
    for(let i = 0; i<figures.length;i++){
        figures[i].classList.add("one-third");
    }

    /*Problem 2
        Adding event listener to the <footer> element that removes it on "click" event.
    */
    document.getElementsByTagName("footer")[0].addEventListener("click", function(){
        document.getElementsByTagName("footer")[0].remove(); 
    });
    
    /*Problem 3
        Adding event listener to the 5th <figure> element that hides it on "double click" event (leaving a blank space).
    */
    figures[4].addEventListener("dblclick", function(){
        figures[4].style.visibility = "hidden";
    });

    /*Problem 4
        Adding event listener to the 1st figure caption to change the font-family to "Cursive" on "mouse over" event and is restored to the original font on "mouse leave".
    */
    var firstCaption = document.querySelector("figure figcaption");
    var origFont = getComputedStyle(firstCaption).fontFamily;

    firstCaption.addEventListener("mouseover", function(){
        firstCaption.style.fontFamily = "Cursive";
    });

    firstCaption.addEventListener("mouseleave", function(){
        firstCaption.style.fontFamily = origFont;
    });

    /*Problem 5
        Adding event listener to the 1st figure caption to change the font-family to "Cursive" when it is in "focus" and is restored to "Times" when the focus state is over.
    */
    firstCaption.setAttribute("tabindex", "0");

    firstCaption.addEventListener("focus", function(){
        firstCaption.style.fontFamily = "Cursive";
    });

    firstCaption.addEventListener("blur", function(){
        firstCaption.removeEventListener("mouseleave",function(){
            firstCaption.style.fontFamily = origFont;
        });
        firstCaption.style.fontFamily = "Times";
    })

});