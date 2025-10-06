document.getElementById("submitBtn").addEventListener("click", () => {
  const data = {
    action: "storeReservationMulti", // ← ここがポイント！
    date: document.getElementById("dateInput").value,
    times: [document.getElementById("startTime").value], // ← 単枠でも配列にしておくと安心
    customer: document.getElementById("customerName").value,
    phone: document.getElementById("phoneNumber").value,
    email: "", // ← メール未使用なら空でOK
    car: document.getElementById("vehicleModel").value,
    task: document.getElementById("workType").value,
    note: document.getElementById("note").value,
  };

  fetch("/api/store-reservation", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(result => {
      alert(result.message || "予約送信完了！");
    })
    .catch(err => {
      alert("送信エラー：" + err.message);
    });
});