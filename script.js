// Start of assignment
// Variables
let startBtn = document.getElementById('start-btn');
let quizPage = document.getElementById('quiz-page');
let timerEl = document.getElementById('timer');
let quizQuestions = document.getElementById('quiz-questions')
let btnA = document.getElementById('a');
let btnB = document.getElementById('b');
let btnC = document.getElementById('c');
let btnD = document.getElementById('d');
let resultEl = document.getElementById('timer');


// Code Quiz questions in a array
let questions = [{
question:'What does HTML stand for?',
optionA: 'Hypertest Markup Language',
optionB: 'Hyper Mark Language',
optionC: 'Hypertext Markup Language',
optionD: 'Hyperwrite Mark Language',
answer:  'c'},
{
question:'What does CSS stand for?',
optionA: 'Content Style Sheets',
optionB: 'Cascade Style Sheets',
optionC: 'Computing Style Sheets',
optionD: 'Cascading Style Sheets',
answer:  'd'},
{
question:'What language does Computer Programming Language refer to?',
optionA: 'HTML',
optionB: 'Java',
optionC: 'CSS',
optionD: 'Javascript',
answer:  'd'},
{
question:'What is the best way to check your code in JS?',
optionA: 'DOM',
optionB: 'Console.log',
optionC: 'Function',
optionD: 'Object',
answer:  'b'},
{
question: 'What does WWW stand for?',
optionA:  'Wild Wild West',
optionB:  'World Web Wide',
optionC:  'World Weather Watch',
optionD:  'World Wide Web',
answer:   'd'},
{
question:'What does DOM stand for?',
optionA: 'Digital Online Media',
optionB: 'Document Object Module',
optionC: 'Document Object Model',
optionD: 'Data Object Model',
answer:  'c'},
{
question:'In JS what does i stand for??',
optionA: 'Index',
optionB: 'Internet',
optionC: 'Input',
optionD: 'Internal',
answer:  'a'},
];

