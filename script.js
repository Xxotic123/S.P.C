{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('calculateButton').addEventListener('click', function() \{\
  const priceInput = parseFloat(document.getElementById('priceInput').value);\
  const amountInput = parseFloat(document.getElementById('amountInput').value);\
\
  if (!priceInput || !amountInput) \{\
    alert("Please enter both stock price and amount.");\
    return;\
  \}\
\
  // Calculate number of shares the user can purchase\
  const sharesCount = Math.floor(amountInput / priceInput);\
\
  // Calculate take profit levels and stop loss\
  const tp1Quantity = Math.floor(sharesCount / 2);\
  const tp2Quantity = Math.floor(tp1Quantity / 2);\
  const tp3Quantity = Math.floor(tp2Quantity / 2);\
\
  const stopLossPrice = (priceInput * 0.9).toFixed(2); // 10% below purchase price\
  const takeProfit1 = (priceInput * 1.1).toFixed(2); // 10% above purchase price\
  const takeProfit2 = (priceInput * 1.2).toFixed(2); // 20% above purchase price\
\
  // Display results\
  document.getElementById('sharesCount').textContent = sharesCount;\
  document.getElementById('tp1Quantity').textContent = tp1Quantity;\
  document.getElementById('tp2Quantity').textContent = tp2Quantity;\
  document.getElementById('tp3Quantity').textContent = tp3Quantity;\
  document.getElementById('stopLossPrice').textContent = stopLossPrice;\
  document.getElementById('takeProfit1').textContent = takeProfit1;\
  document.getElementById('takeProfit2').textContent = takeProfit2;\
\});\
}