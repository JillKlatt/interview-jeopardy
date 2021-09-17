const QuestionList = [
    {
        question: "Instance, Class, Local, Global",
        answer: "What are the four types of variables in Ruby?"

    },
    {
        question: "JavaScript is a ___ typed language",
        answer: "What is 'dynamically'?"
    },
    {
        question:
            `<code>
            function func1(){ 
            setTimeout(()=> {    
            console.log(x);
            console.log(y);  
            },3000);   
            
            var x = 2;  let y = 12; 
            </code>}`,
        answer: `What is 
        <code>
        2
        12
        
        (Since, even though let variables are not hoisted, due to async nature of javascript, the complete function code runs before the setTimeout function. Therefore, it has access to both x and y. )
        </code>`
    },
    {
        question: "",
        answer: ""
    },
    {
        question: "",
        answer: ""
    },
    {
        question: "Using plus sign in between strings. Using a single space in between strings. Using << sign in between strings.",
        answer: "What are ways to concatenate a string?"

    },
    {
        question: "",
        answer: ""
    }
]
export default QuestionList

// ,
//     {
//         question: "",
//         answer: ""
//     }