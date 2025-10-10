document.getElementById("submitBtn").addEventListener("click", () => {
  const payload = {
  action: "storeReservation",
  date: document.getElementById("dateInput").value,
  times: [document.getElementById("startTime").value],
  name: document.getElementById("customerName").value,      // ← 修正
  phone: document.getElementById("phoneNumber").value,
  email: "",
  carModel: document.getElementById("vehicleModel").value,  // ← 修正
  workType: document.getElementById("workType").value,      // ← 修正
  note: document.getElementById("note").value,
};

  fetch("/api/store-reservation", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then(res => res.json())
    .then(result => {
      alert(result.message || "予約送信完了！");
    })
    .catch(err => {
      alert("送信エラー：" + err.message);
    });
});