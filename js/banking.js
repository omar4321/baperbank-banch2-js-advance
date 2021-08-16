document
  .getElementById('deposit-button')
  .addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // get current Deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const preDepositeTotal = parseFloat(depositTotalText);
    depositTotal.innerText = preDepositeTotal + depositAmount;
    //update blnace total
    const blanceTotal = document.getElementById('balance-total');
    const blanceTotalText = blanceTotal.innerText;
    const preBlanceTotal = parseFloat(blanceTotalText);
    blanceTotal.innerText = preBlanceTotal + depositAmount;
    // clear input field
    depositInput.value = '';
  });

// // handle withdrow button
// document
//   .getElementById('withdraw-button')
//   .addEventListener('click', function () {
//     const withdrowInput = document.getElementById('withdraw-input');
//     const withdrowAmountText = withdrowInput.value;
//     const withdrawAmount = parseFloat('withdrowAmountText');
//     //update withdrowTotal
//     const withdrowTotal = document.getElementById('withdraw-total');
//     const preViouseWithdrowTotalText = withdrowTotal.innerText;
//     const preViouseWithdrowTotal = parseFloat('preViouseWithdrowTotalText');
//     withdrowTotal.innerText = preViouseWithdrowTotal + withdrawAmount;
//     // clear input field
//     withdrowInput.value = '';
//   });
document
  .getElementById('withdraw-button')
  .addEventListener('click', function () {
    const WithdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = WithdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    // get current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const prewithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = prewithdrawTotal + withdrawAmount;
    //update blnace total
    const blanceTotal = document.getElementById('balance-total');
    const blanceTotalText = blanceTotal.innerText;
    const preBlanceTotal = parseFloat(blanceTotalText);
    blanceTotal.innerText = preBlanceTotal - withdrawAmount;

    // clear input field
    depositInput.value = '';
  });
