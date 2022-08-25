console.log("one");

function callback() {
    console.log("four");
    setTimeout(() => {
        
        console.log("two");
    }, 1000);
    
}
callback()
console.log("three");
