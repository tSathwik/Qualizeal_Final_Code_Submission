import React, { useState } from 'react';

const PaymentTestingInfo = () => {
    // State for dropdowns and checkboxes
    const [ewallet, setEwallet] = useState('Select');
    const [mobileWallet, setMobileWallet] = useState('Select');
    const [alternatePayments, setAlternatePayments] = useState('Select');
    const [refunds, setRefunds] = useState('');
    const [passiveTesting, setPassiveTesting] = useState('');
    const [noEwallet, setNoEwallet] = useState(false);
    const [noMobileWallet, setNoMobileWallet] = useState(false);
    const [noAlternatePayment, setNoAlternatePayment] = useState(false);
    const [noBankAccount, setNoBankAccount] = useState(false);
    const [noCreditDebit, setNoCreditDebit] = useState(false);

    return (
        <div className="p-8 bg-blue-50 min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Payment Testing</h2>

                {/* E-Wallets */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">E-Wallets</label>
                    <select
                        value={ewallet}
                        onChange={(e) => {
                            setEwallet(e.target.value);
                            if (e.target.value === 'Select') {
                                setNoEwallet(false);
                            }
                        }}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    >
                        <option>Select</option>
                        <option>Pay Pal</option>
                        <option>Google Pay</option>
                    </select>
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            checked={noEwallet}
                            onChange={() => {
                                setNoEwallet(!noEwallet);
                                if (!noEwallet) {
                                    setEwallet('Select'); // Reset dropdown when checked
                                }
                            }}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have any</label>
                    </div>
                </div>

                {/* Mobile Wallets */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Mobile Wallets</label>
                    <select
                        value={mobileWallet}
                        onChange={(e) => {
                            setMobileWallet(e.target.value);
                            if (e.target.value === 'Select') {
                                setNoMobileWallet(false);
                            }
                        }}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    >
                        <option>Select</option>
                        <option>Airtel</option>
                        <option>Bitcoin Wallet</option>
                    </select>
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            checked={noMobileWallet}
                            onChange={() => {
                                setNoMobileWallet(!noMobileWallet);
                                if (!noMobileWallet) {
                                    setMobileWallet('Select'); // Reset dropdown when checked
                                }
                            }}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have any</label>
                    </div>
                </div>

                {/* Alternate Payments */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Alternate Payments</label>
                    <select
                        value={alternatePayments}
                        onChange={(e) => {
                            setAlternatePayments(e.target.value);
                            if (e.target.value === 'Select') {
                                setNoAlternatePayment(false);
                            }
                        }}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    >
                        <option>Select</option>
                        <option>BHIM</option>
                        <option>CASH Plus</option>
                    </select>
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            checked={noAlternatePayment}
                            onChange={() => {
                                setNoAlternatePayment(!noAlternatePayment);
                                if (!noAlternatePayment) {
                                    setAlternatePayments('Select'); // Reset dropdown when checked
                                }
                            }}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have any</label>
                    </div>
                </div>

                {/* Willing to do purchases */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Willing to do purchases (with refunds)</label>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            value="yes"
                            checked={refunds === 'yes'}
                            onChange={() => setRefunds('yes')}
                            className="mr-2"
                        />
                        <label className="mr-4">Yes</label>
                        <input
                            type="radio"
                            value="no"
                            checked={refunds === 'no'}
                            onChange={() => setRefunds('no')}
                            className="mr-2"
                        />
                        <label>No</label>
                    </div>
                </div>

                {/* Passive Payment Testing */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Are you willing to participate in Passive Payment Testing?</label>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            value="yes"
                            checked={passiveTesting === 'yes'}
                            onChange={() => setPassiveTesting('yes')}
                            className="mr-2"
                        />
                        <label className="mr-4">Yes</label>
                        <input
                            type="radio"
                            value="no"
                            checked={passiveTesting === 'no'}
                            onChange={() => setPassiveTesting('no')}
                            className="mr-2"
                        />
                        <label>No</label>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                        Passive PI testing requires adding a real payment method to an account or providing encrypted credentials, for use in purchase testing by a customer engineer.
                    </p>
                </div>

                {/* Bank Account */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Bank Account</label>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={noBankAccount}
                            onChange={() => {
                                setNoBankAccount(!noBankAccount);
                            }}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have a bank account</label>
                    </div>
                    <button className="mt-2 bg-gray-500 text-white py-1 px-4 rounded">Add</button>
                </div>

                {/* Credit & Debit Cards */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Credit & Debit Cards</label>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={noCreditDebit}
                            onChange={() => {
                                setNoCreditDebit(!noCreditDebit);
                            }}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have a credit or debit card</label>
                    </div>
                    <button className="mt-2 bg-gray-500 text-white py-1 px-4 rounded">Add</button>
                </div>

                {/* Don't see your payment method? */}
                <div className="mt-6">
                    <p className="text-sm">Don't see your payment method?</p>
                    <button className="mt-2 text-blue-600 underline">Contact Support to request that it be added to the system</button>
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-6">
                    <button className="bg-gray-300 text-black py-2 px-4 rounded-md mr-2">Cancel</button>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Save</button>
                </div>
            </div>
        </div>
    );
}

export default PaymentTestingInfo;
