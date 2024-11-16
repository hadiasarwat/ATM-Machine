function pin() {
    var userinput = document.getElementById("input").value;

    if (userinput == "") {
        alert("Please enter your pin")
    }
    else {
        document.getElementById("mainheading").innerHTML = `<div class="screen"> <p id="showingAmount">Congratulations you entered correct PIN</p> </div>
           <div class="tabs">
            <input type="text" id="amountInput" placeholder="Enter amount" readonly />
            <div class="clickTabs" onclick="enterDigit(1)">1</div>
            <div class="clickTabs" onclick="enterDigit(2)">2</div>
            <div class="clickTabs" onclick="enterDigit(3)">3</div>
            <div class="clickTabs" onclick="enterDigit(4)">4</div>
            <div class="clickTabs" onclick="enterDigit(5)">5</div>
            <div class="clickTabs" onclick="enterDigit(6)">6</div>
            <div class="clickTabs" onclick="enterDigit(7)">7</div>
            <div class="clickTabs" onclick="enterDigit(8)">8</div>
            <div class="clickTabs" onclick="enterDigit(9)">9</div>
            <div class="clickTabs" onclick="clearAmount()">C</div>
            <div class="clickTabs" onclick="enterDigit(0)">0</div>
            <div class="clickTabs" onclick="confirmTransaction()">OK</div>
        </div>
         <div class="atmButtons">
            <button onclick="showBalance()">Balance</button>
            <button onclick="enterAmount('deposit')">Deposit</button>
            <button onclick="enterAmount('withdraw')">Withdraw</button>
        </div>
            `
        document.getElementById("mainmessage").style.display = "none"
        document.getElementById("input").style.display = "none"
        document.getElementById("pin").style.display = "none"
        // document.getElementById("balance").style.display = "block"
        // document.getElementById("Withdrawal").style.display = "block"
        // document.getElementById("deposit").style.display = "block"
        // document.getElementById("back").style.display = "block"
    

    }
}




var balance = 50000; 
var transactionType = ''; 
var inputAmount = '';


function showBalance() {
    document.getElementById("showingAmount").textContent = `Balance: $${balance}`;
}


function enterAmount(type) {
    transactionType = type;
    document.getElementById("showingAmount").textContent = `Enter amount to ${type}`;
    clearAmount();
}


function enterDigit(digit) {
    inputAmount += digit;
    document.getElementById("amountInput").value = inputAmount;
}


function clearAmount() {
    inputAmount = '';
    document.getElementById("amountInput").value = '';
}


function confirmTransaction() {
    var amount = parseFloat(inputAmount);
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("showingAmount").textContent = "Invalid amount.";
        return;
    }

    if (transactionType === 'withdraw') {
        if (amount > balance) {
            document.getElementById("showingAmount").textContent = "Insufficient balance.";
        } else {
            balance -= amount;
            document.getElementById("showingAmount").textContent = `Withdraw $${amount}. New balance: $${balance}`;
        }
    } else if (transactionType === 'deposit') {
        balance += amount;
        document.getElementById("showingAmount").textContent = `Deposit $${amount}. New balance: $${balance}`;
    }

    clearAmount();
}
