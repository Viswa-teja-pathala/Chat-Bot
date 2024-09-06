var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbook');  // Fixed 'textbox' instead of 'textbook'
var chatContainer = document.getElementById('chatContainer');

var user = { message: "", counter: 0};

var arrayOfPossibleMessages = [
    {"message": "hello", "response": "Hi there! How can I assist you today?"},
    {"message": "what's your name?", "response": "I'm your friendly chatbot! How can I help you today?"},
    {"message": "i need help", "response": "Sure! What do you need help with?"},
    {"message": "how are you?", "response": "I'm just a bot, but I'm here to assist you! How can I help?"},
    {"message": "thank you", "response": "You're welcome! I'm happy to help."},
    {"message": "goodbye", "response": "Goodbye! Feel free to reach out if you need further assistance."},
    {"message": "where are you located?", "response": "I'm a virtual assistant, but I can help you find any information you need."},
    {"message": "what's the weather like?", "response": "I can't access real-time weather at the moment, but you can check with your local weather service."},
    {"message": "can you help me?", "response": "Absolutely! Let me know what you need assistance with."},
    {"message": "what time is it?", "response": "I don't have the current time, but you can check your device's clock."},
    {"message": "what can you do?", "response": "I can assist with answering questions, providing information, and helping you navigate tasks."},
    {"message": "i'm bored", "response": "How about trying a new hobby or learning something new? I can suggest some ideas!"},
    {"message": "what is your purpose?", "response": "My purpose is to assist you with any questions or tasks you have. How can I help?"},
    {"message": "who created you?", "response": "I was created by a team of developers to assist users like you!"},
    {"message": "do you like humans?", "response": "I don't have feelings, but I'm here to help people as much as I can!"},
    {"message": "how does this work?", "response": "You can ask me questions, and I'll do my best to provide answers or guidance!"},
    {"message": "what's your favorite color?", "response": "I don't have preferences, but blue seems to be a popular choice!"},
    {"message": "who made you?", "response": "I was developed by a team of software engineers to assist with various tasks."},
    {"message": "can you tell me a joke?", "response": "Sure! Why don’t scientists trust atoms? Because they make up everything!"},
    {"message": "what's the meaning of life?", "response": "That's a big question! Many say it's to seek happiness and fulfillment."},
    {"message": "how old are you?", "response": "I’m as old as the code that built me!"},
    {"message": "can you do math?", "response": "Yes, I can! Just ask me any math problem and I'll solve it for you."},
    {"message": "what languages do you speak?", "response": "I can communicate in multiple languages! English is my primary one."},
    {"message": "can you sing?", "response": "I don't have a voice, but I can suggest some great songs!"},
    {"message": "what's the capital of France?", "response": "The capital of France is Paris."},
    {"message": "tell me a fun fact", "response": "Did you know? The longest time between two twins being born is 87 days!"},
    {"message": "can you help me with coding?", "response": "Absolutely! Let me know what you need assistance with, and I’ll guide you."},
    {"message": "what do you know?", "response": "I have access to a wide range of information! Feel free to ask me anything."},
    {"message": "what's your favorite food?", "response": "I don’t eat, but I’ve heard pizza is a fan favorite!"},
    {"message": "can you read my mind?", "response": "I can't read minds, but I can assist you if you tell me what's on your mind!"},
    {"message": "why are you here?", "response": "I'm here to assist you with any questions or tasks you may have!"},
    {"message": "do you sleep?", "response": "Nope! I'm always available whenever you need me."},
    {"message": "what's 2 + 2?", "response": "That's an easy one! 2 + 2 equals 4."},
    {"message": "can you recommend a movie?", "response": "Sure! How about trying 'Inception' or 'The Matrix'? They're classics."},
    {"message": "what's your favorite movie?", "response": "I don't watch movies, but I've heard people love 'The Shawshank Redemption'!"},
    {"message": "can you learn?", "response": "I'm constantly being improved, so in a way, yes! But I don’t learn the way humans do."},
    {"message": "do you have any friends?", "response": "As a bot, I don't have friends, but I'm happy to assist you whenever you need."},
    {"message": "how do I contact support?", "response": "You can usually contact support through email, phone, or live chat on the service's website."},
    {"message": "what should I do today?", "response": "How about trying something new, like reading a book or taking a walk outside?"}
    
];

var questionToAsk = [
    {"question": "What is your name?", "answer": ""},
    {"question": "Where are you located?", "answer": ""},
    {"question": "How can I help you today?", "answer": ""},
    {"question": "What time would you like to schedule your appointment?", "answer": ""},
    {"question": "Are you looking for any specific services?", "answer": ""},
    {"question": "Can I assist you with any other information?", "answer": ""},
    {"question": "Would you like to speak with a human agent?", "answer": ""},
    {"question": "Is there anything else you need help with?", "answer": ""},
    {"question": "What is the best way to contact you?", "answer": ""},
    {"question": "Would you like to receive updates or promotions?", "answer": ""}
];

askQuestion();

function askQuestion(){
    if(questionToAsk.length > user.counter){
        setTimeout(function(){
            chatbotSendMessage(questionToAsk[user.counter].question);
            user.counter++;
        }, 1000);

        console.log(questionToAsk[user.counter-1]);
    }

}

//chatbotSendMessage("Hi there");

// Chatbot message function
function chatbotSendMessage(messageText) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50', 'float-start', 'shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span>Bot:</span><span style='margin-top: 10px; padding: 10px;'>" + messageText + "</span>";
    messageElement.animate([{ opacity: 0.4 }, { opacity: 1 }], { duration: 1000, easing: "ease-in" });

    chatContainer.appendChild(messageElement);
    
    //Scroll to the last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// User message function
function sendMessage(messageText) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50', 'float-end', 'shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span>You:</span><span style='margin-top: 10px; padding: 10px;'>" + messageText + "</span>";
    messageElement.animate([{ opacity: 0.4 }, { opacity: 1 }], { duration: 1000, easing: "ease-in" });

    chatContainer.appendChild(messageElement);

    //Scroll to the last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Handle button click
sendBtn.addEventListener('click', function(e) {
    if (textbox.value === "") {
        alert('Please type in a message');
    } else {
        let messageText = textbox.value;
        user.message = messageText.toLowerCase(); 
        sendMessage(messageText);
        textbox.value = "";

        questionToAsk[user.counter-1].answer = user.message;
        askQuestion();
       // processMessage();
    }
});

function processMessage() {
    if(user.message.length >= 5){
            var result = arrayOfPossibleMessages.filter(val => val.message === user.message);  // Exact match for message

        if (result.length > 0) {
            var response = result[0].response;
            setTimeout(function() {
                chatbotSendMessage(response);
            }, 1000);
        } else {
            setTimeout(function() {
                chatbotSendMessage("Sorry, I don't understand that. Can you rephrase?");
            }, 1000);
        }
    }else if(user.message == "how" || user.message == "who"){
        setTimeout(function() {
            chatbotSendMessage("?");
        }, 1000);
        
    }else if(user.message == "hi"){
        setTimeout(function() {
            chatbotSendMessage("hi!");
        }, 1000);
    }
    else{
        setTimeout(function() {
            chatbotSendMessage("Please send me a complete sentence");
        }, 1000);
    }
    
}
