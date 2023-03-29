const queue = [];

function enqueue(element) {
    queue.push(element);
}

function dequeue() {
    if (queue.length === 0) {
        return "Queue is empty";
    } else {
        return queue.shift();
    }
}

enqueue(10);
enqueue(20);
enqueue(30);

console.log(dequeue());
console.log(dequeue());
console.log(dequeue());
console.log(dequeue()); 
