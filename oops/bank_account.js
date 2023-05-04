

// selecting html tag

const depositBtn = document.getElementById("deposit")
const WithdrawBtn = document.getElementById("Withdraw")
const inputTag = document.getElementById("amount")
const curbalance = document.getElementById("balance")
const successElem = document.getElementById("success")
const errorElem = document.getElementById("error");



class BankAccount {
    constructor() {
        this.balance = 0
    }


    // deposit balance

    depositAmount(amount) {
        this.balance += amount
    }

    // withdraw balance

    withdrawBalance(amount) {
        if (this.balance < amount) {
            throw new Error("Insufficient balnce")
        } else {
            this.balance -= amount
        }
    }

    // get balance

    getBalance() {
        return this.balance
    }
}

// creating object of Bankaccount
const account = new BankAccount();


// updating dom balance

function updateCurbalance() {
    curbalance.innerText = account.getBalance()
}

// deposit functunality 👍👍👍
depositBtn.addEventListener("click", () => {
    let value = +inputTag.value;
    if (value < 1) {
        errorElem.style.display = "block";
        successElem.style.display = "none";
        errorElem.innerText = "Please add some value"
    } else {
        account.depositAmount(value)
        updateCurbalance()
        successElem.style.display = "block"
        successElem.innerText = `Successfully deposit amount of : ${value}`
        errorElem.style.display = "none";
    }

})


// withdraw amount

WithdrawBtn.addEventListener("click", () => {
    let value = +inputTag.value;
    if (value < 1) {
        errorElem.style.display = "block";
        successElem.style.display = "none";
        errorElem.innerText = "Please put some amount for withdaw"
    } else {
        try {
            account.withdrawBalance(value)
            updateCurbalance()
            successElem.style.display = "block"
            successElem.innerText = `Successfully withdrew amount of : ${value}`
            errorElem.style.display = "none";
        } catch (error) {
            successElem.style.display = "none"
            errorElem.style.display = "block";
            errorElem.innerText = error.message
        }
    }
})