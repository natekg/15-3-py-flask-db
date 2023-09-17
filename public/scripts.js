document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("add-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const firstNumber = parseFloat(
      document.getElementById("firstNumber").value
    );
    const secondNumber = parseFloat(
      document.getElementById("secondNumber").value
    );

    fetch("/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstNumber, secondNumber }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("result").innerText = "Result: " + data.result;
      });
  });

  document
    .getElementById("multiply-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const firstNumber = parseFloat(
        document.getElementById("m-firstNumber").value
      );
      const secondNumber = parseFloat(
        document.getElementById("m-secondNumber").value
      );

      fetch("/multiply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstNumber, secondNumber }),
      })
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("multiply-result").innerText =
            "Result: " + data.result;
        });
    });

  document
    .getElementById("product-id-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const productType = document.getElementById("product-type").value;
      const productIdentifier =
        document.getElementById("product-identifier").value;

      fetch("/create_product_id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productType, productIdentifier }),
      })
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("product-id-result").innerText =
            "Result: " + data.result;
        });
    });
});
