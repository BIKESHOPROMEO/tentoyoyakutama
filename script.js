document.getElementById("submitBtn").addEventListener("click", () => {
const resultEl = document.getElementById('result'); // ← これが必要！
  
const data = {
  action: "storeReservation",
  date: document.getElementById("dateInput").value,
  start: document.getElementById("startTime").value,  // ← 追加
  end: document.getElementById("endTime").value,      // ← 追加
  name: document.getElementById("customerName").value,
  phone: document.getElementById("phoneNumber").value,
  email: "",
  carModel: document.getElementById("vehicleModel").value,
  workType: document.getElementById("workType").value,
  note: document.getElementById("note").value,
};

  try {
    const res = await fetch('/api/store-reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('登録に失敗しました');
    const msg = await res.json();
    resultEl.textContent = msg.message || '予約不可を登録しました';
    resultEl.style.color = 'green';
    document.getElementById('date').value = '';
    document.getElementById('start').value = '10:00';
    document.getElementById('end').value = '10:00';
    document.getElementById('name').value = '名前';
    document.getElementById('phone').value = '09011111111';
    document.getElementById('email').value = 'email';
    document.getElementById('carModel').value = 'バイク';
    document.getElementById('workType').value = '点検';
    document.getElementById('note').value = '';
  } catch (err) {
    console.error('登録エラー:', err);
    resultEl.textContent = '登録に失敗しました';
    resultEl.style.color = 'red';
  } finally {
    //hideLoading(); // ← クルクル終了！
  }

});


