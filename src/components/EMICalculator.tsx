import React, { useState, useEffect } from 'react';
import { Calculator, PieChart, TrendingUp } from 'lucide-react';

const EMICalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(150000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [loanTenure, setLoanTenure] = useState(36);
  const [emi, setEMI] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 100 / 12;
    const tenure = loanTenure;

    if (rate === 0) {
      const calculatedEMI = principal / tenure;
      setEMI(calculatedEMI);
      setTotalAmount(principal);
      setTotalInterest(0);
    } else {
      const calculatedEMI = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
      const calculatedTotalAmount = calculatedEMI * tenure;
      const calculatedTotalInterest = calculatedTotalAmount - principal;

      setEMI(calculatedEMI);
      setTotalAmount(calculatedTotalAmount);
      setTotalInterest(calculatedTotalInterest);
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <Calculator className="h-8 w-8 text-blue-700" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          EMI Calculator
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your monthly EMI and plan your vehicle purchase budget
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-blue-100 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Loan Details</h3>
          
          <div className="space-y-6">
            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount: {formatCurrency(loanAmount)}
              </label>
              <input
                type="range"
                min="50000"
                max="1000000"
                step="5000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹50K</span>
                <span>₹10L</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate: {interestRate}% per annum
              </label>
              <input
                type="range"
                min="5"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Tenure: {loanTenure} months
              </label>
              <input
                type="range"
                min="6"
                max="84"
                step="1"
                value={loanTenure}
                onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>6 months</span>
                <span>84 months</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* EMI Result */}
          <div className="bg-blue-100 rounded-2xl p-8 text-center border border-blue-200">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Monthly EMI</h3>
            <p className="text-4xl font-bold text-blue-700 mb-4">
              {formatCurrency(emi)}
            </p>
            <p className="text-gray-600">
              You'll pay {formatCurrency(emi)} every month for {loanTenure} months
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-100 rounded-xl p-6 text-center border border-blue-200">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Principal Amount</h4>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(loanAmount)}
              </p>
            </div>
            <div className="bg-blue-100 rounded-xl p-6 text-center border border-blue-200">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Total Interest</h4>
              <p className="text-2xl font-bold text-red-600">
                {formatCurrency(totalInterest)}
              </p>
            </div>
          </div>

          {/* Total Amount */}
          <div className="bg-blue-100 rounded-xl p-6 text-center border border-blue-200">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Total Amount Payable</h4>
            <p className="text-3xl font-bold text-gray-900">
              {formatCurrency(totalAmount)}
            </p>
          </div>
        </div>
      </div>

      {/* Breakdown Chart */}
      <div className="mt-12 bg-blue-100 rounded-2xl p-8 border border-blue-200">
        <div className="flex items-center gap-3 mb-6">
          <PieChart className="h-6 w-6 text-blue-700" />
          <h3 className="text-xl font-semibold text-gray-900">Payment Breakdown</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="font-medium">Principal Amount</span>
                </div>
                <span className="font-semibold">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="font-medium">Interest Amount</span>
                </div>
                <span className="font-semibold">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="border-t border-blue-300 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">Total Payable</span>
                  <span className="font-bold text-lg text-blue-700">
                    {formatCurrency(totalAmount)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-48 h-48 mx-auto relative">
              <div className="w-full h-full rounded-full border-8 border-red-500"></div>
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-green-500"
                style={{
                  transform: `rotate(${(loanAmount / totalAmount) * 360}deg)`,
                  borderRightColor: 'transparent',
                  borderBottomColor: 'transparent'
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Interest</p>
                  <p className="text-lg font-bold">
                    {((totalInterest / totalAmount) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;