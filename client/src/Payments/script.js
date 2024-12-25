let token;
document.getElementById("transactions").addEventListener("click", function () {
  fetch("http://localhost:3010/get_transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      document.getElementById("transactionsList").textContent = JSON.stringify(
        data.transactions,
        null,
        2
      );
    });
});

document.getElementById("auth").addEventListener("click", function () {
  fetch("http://localhost:3010/create_link_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const linkToken = data.link_token;

      const linkHandler = Plaid.create({
        token: linkToken,
        onSuccess: function (publicToken, metadata) {
          fetch("http://localhost:3010/get_access_token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ publicToken: publicToken }),
          })
            .then((response) => response.json())
            .then((data) => {
              token = data.accessToken;
            });
        },

        onExit: function (err, metadata) {
          if (err) {
            console.error("Error:", err);
          }
        },
      });
      linkHandler.open();
    });
});
