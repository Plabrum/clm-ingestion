Office.onReady(() => {
  document.getElementById("scan-button")?.addEventListener("click", () => {
    const item = Office.context.mailbox.item;
    item.body.getAsync(Office.CoercionType.Text, (result) => {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
        const emailData = {
          subject: item.subject,
          sender: item.from.emailAddress,
          body: result.value,
        };

        fetch("/api/classify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailData),
        })
          .then((response) => response.json())
          .then((data) => {
            const resultDiv = document.getElementById("result");
            if (data.is_contract) {
              resultDiv!.textContent =
                "✅ This email is related to a contract.";
            } else {
              resultDiv!.textContent =
                "❌ No contract-related content detected.";
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } else {
        console.error("Failed to get email body:", result.error);
      }
    });
  });
});
