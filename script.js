document.getElementById("submitBtn").addEventListener("click", () => {
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