import React, { useState } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const [token, setToken] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [setData, setSetData] = useState([]);
  const [bal, setBal] = useState(0.0);
  const [connect, setConnect] = useState(true);
  let usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleLinkBankAccount = () => {
    fetch("http://localhost:3000/create_link_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const linkToken = data.link_token;
        const linkHandler = window.Plaid.create({
          token: linkToken,
          onSuccess: function (publicToken, metadata) {
            fetch("http://localhost:3000/get_access_token", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ publicToken: publicToken }),
            })
              .then((response) => response.json())
              .then((data) => {
                setToken(data.accessToken);
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
  };

  const handleGetTransactions = () => {
    fetch("http://localhost:3000/get_transactions", {
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

        setTransactions(data);
        if (Object.keys(data).length > 1) {
          const accountData = {
            accounts: [
              {
                name: data.accounts[0].name,
                balances: {
                  current: data.accounts[0].balances.current,
                  iso_currency_code:
                    data.accounts[0].balances.iso_currency_code,
                },
                account_id: data.accounts[0].account_id,
                name_dis: data.accounts[0].type,
              },
            ],
            institution_id: data.item.institution_id,
            total_transactions: data.total_transactions,
          };
          setSetData([accountData]);
          setBal(data.accounts[0].balances.current);
        } else {
          setConnect(false);
          toast.error("Connect to Account", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      });
  };

  return (
    <>
      <div className="pl-5">
        <div className="pb-5">
          <p className="text-sm font-semibold text-gray-600 pb-2">
            Total Current Balance :
          </p>
          <h1 className="text-5xl">
            {
              /* {getSymbolFromCurrency("USD") + Number.parseFloat(bal).toFixed(2)} */ usd.format(
                bal
              )
            }
          </h1>
        </div>
        <p className="text-sm pb-2">Avergae Monthly Balance : 0.0</p>
        <p className="text-sm pb-4">Avergae Yearly Balance : 0.0</p>
        <div className="flex flex-col gap-3">
          <button
            onClick={handleLinkBankAccount}
            className="p-2 rounded-md bg-[#5dc1ff] text-white font-semibold"
          >
            Link Bank Account
          </button>
          <button
            onClick={handleGetTransactions}
            className="border-2 p-2 rounded-md"
          >
            Account Details
          </button>
        </div>
        <table className="border-collapse border border-slate-50 mt-6">
          <caption className="caption-top text-xs">Account Details</caption>
          <thead>
            <tr>
              <th className="border border-slate-600 p-2">Name</th>
              <th className="border border-slate-600 p-2">Current</th>
              <th className="border border-slate-600 p-2">Currency</th>
              <th className="border border-slate-600 p-2">Account Id</th>
              <th className="border border-slate-600 p-2">Type</th>
              <th className="border border-slate-600 p-2">Institution Id</th>
              <th className="border border-slate-600 p-2">
                Number of Transactions
              </th>
            </tr>
          </thead>
          <tbody className="border-2 p-2">
            {setData.length > 0
              ? setData.map((ans, id) => (
                  <tr key={id}>
                    <td className="text-center p-2 border border-slate-700">
                      {ans.accounts[0].name}
                    </td>
                    <td className="text-center border border-slate-700">
                      {usd.format(ans.accounts[0].balances.current)}
                    </td>
                    <td className="text-center border border-slate-700">
                      {ans.accounts[0].balances.iso_currency_code}
                    </td>
                    <td className="text-center border border-slate-700">
                      {ans.accounts[0].account_id}
                    </td>
                    <td className="text-center border border-slate-700">
                      {ans.accounts[0].name_dis}
                    </td>
                    <td className="text-center border border-slate-700">
                      {ans.institution_id}
                    </td>
                    <td className="text-center border border-slate-700">
                      {ans.total_transactions}
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
      {connect ? (
        ""
      ) : (
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      )}
    </>
  );
};

export default Payment;
