
// Into
let me = 'Sean Spicer';

function greetMe() {
    console.log('hello ' + me)
}
greetMe();


// Closures are good when you start a task and you want to specify something that happens when that task is done with stuff that was available to you when you started that task.
function sendRequest() {
    let requestID = '123';
    $.ajax({
        url: '/myurl',
        success: function(res) {
            console.log('Request ' + requestID + ' returned.')
        }
    });
}

