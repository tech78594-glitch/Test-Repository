import React, { useState } from 'react';
import { Copy, Check, ShieldCheck, CreditCard, Landmark, ArrowRight, Flame } from 'lucide-react';

export const GivingSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [givingAmount, setGivingAmount] = useState<number>(50);
  const [category, setCategory] = useState<string>('Tithe');
  const [giftAid, setGiftAid] = useState<boolean>(true);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [receipt, setReceipt] = useState<{ id: string; amount: number; category: string; date: string } | null>(null);

  const bankDetails = {
    accountName: 'Mountain of Fire and Miracles Ministries Edinburgh',
    bank: 'Bank of Scotland',
    sortCode: '80-22-60',
    accountNumber: '10459281',
    iban: 'GB29 BOFS 8022 6010 4592 81',
  };

  const handleCopy = (field: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSimulateGive = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setReceipt({
        id: `MFM-EDIN-${Math.floor(100000 + Math.random() * 900000)}`,
        amount: givingAmount,
        category,
        date: new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      });
    }, 1200);
  };

  return (
    <section id="giving" className="py-20 bg-purple-50/30 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-purple-800 tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>06. Online Giving &amp; Stewardship</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Honour the Lord with Your Substance &amp; Firstfruits
          </h2>
          <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            “Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, 
            saith the Lord of hosts, if I will not open you the windows of heaven, and pour you out a blessing...” — Malachi 3:10
          </p>
        </div>

        {/* 2-Column Giving Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct UK Bank Transfer */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-purple-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-purple-100">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center shrink-0">
                <Landmark className="w-5 h-5 text-purple-800" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-purple-950">Direct UK Bank Transfer</h3>
                <p className="text-xs text-slate-500">Fast, fee-free standing order or instant online banking</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {/* Account Name */}
              <div className="bg-purple-50/50 p-3.5 rounded-xl border border-purple-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-purple-800 uppercase tracking-wider block">
                    Account Name
                  </span>
                  <span className="text-sm font-extrabold text-purple-950">
                    {bankDetails.accountName}
                  </span>
                </div>
                <button
                  onClick={() => handleCopy('name', bankDetails.accountName)}
                  className="p-2 text-purple-700 hover:text-purple-950 hover:bg-purple-100 rounded-lg transition-colors"
                  title="Copy account name"
                >
                  {copiedField === 'name' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Bank & Sort Code */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50/50 p-3.5 rounded-xl border border-purple-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-purple-800 uppercase tracking-wider block">
                      Bank
                    </span>
                    <span className="text-sm font-extrabold text-purple-950">{bankDetails.bank}</span>
                  </div>
                </div>

                <div className="bg-purple-50/50 p-3.5 rounded-xl border border-purple-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-purple-800 uppercase tracking-wider block">
                      Sort Code
                    </span>
                    <span className="text-sm font-extrabold font-mono tabular-nums text-purple-950">
                      {bankDetails.sortCode}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy('sortCode', bankDetails.sortCode)}
                    className="p-1.5 text-purple-700 hover:text-purple-950 rounded-lg"
                    title="Copy sort code"
                  >
                    {copiedField === 'sortCode' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Account Number */}
              <div className="bg-purple-50/50 p-3.5 rounded-xl border border-purple-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-purple-800 uppercase tracking-wider block">
                    Account Number
                  </span>
                  <span className="text-sm font-extrabold font-mono tabular-nums text-purple-950">
                    {bankDetails.accountNumber}
                  </span>
                </div>
                <button
                  onClick={() => handleCopy('accountNumber', bankDetails.accountNumber)}
                  className="p-2 text-purple-700 hover:text-purple-950 rounded-lg"
                  title="Copy account number"
                >
                  {copiedField === 'accountNumber' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Reference Advice */}
              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950">
                <p className="font-bold mb-1">Recommended Transfer Reference:</p>
                <p className="text-amber-900">
                  Please specify your purpose in your bank reference (e.g., <code>SURNAME-TITHE</code>, <code>SURNAME-OFFERING</code>, or <code>SURNAME-BUILDING</code>).
                </p>
              </div>
            </div>

            {/* UK Gift Aid Explanation */}
            <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 text-xs text-slate-700">
              <div className="flex items-center gap-2 font-bold text-purple-950 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>UK Taxpayer Gift Aid Scheme</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                If you pay UK income tax or Capital Gains Tax, MFM Edinburgh can reclaim 25p on every £1 you give from HMRC at no extra cost to you.
              </p>
            </div>
          </div>

          {/* Right Column: Quick Online Contribution Portal */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-purple-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-purple-100">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5 text-purple-800" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-purple-950">Online Card Giving</h3>
                <p className="text-xs text-slate-500">Secure donation portal with instant tax receipt</p>
              </div>
            </div>

            {receipt ? (
              <div className="p-6 bg-purple-50 rounded-2xl border border-purple-200 text-center animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-purple-900 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-lg font-bold text-purple-950 mb-1">
                  Thank You for Your Generosity!
                </h4>
                <p className="text-xs text-purple-800 mb-4">
                  May the God of Mountain of Fire bless and open the windows of heaven upon you.
                </p>

                <div className="bg-white p-4 rounded-xl border border-purple-200 text-left text-xs space-y-2 mb-5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Receipt Ref:</span>
                    <span className="font-mono font-bold text-purple-950">{receipt.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Purpose:</span>
                    <span className="font-semibold text-purple-950">{receipt.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Amount:</span>
                    <span className="font-bold text-purple-950 font-mono">£{receipt.amount}.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date:</span>
                    <span className="text-slate-700">{receipt.date}</span>
                  </div>
                </div>

                <button
                  onClick={() => setReceipt(null)}
                  className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-xs"
                >
                  Give Another Seed
                </button>
              </div>
            ) : (
              <form onSubmit={handleSimulateGive} className="space-y-4">
                {/* Purpose Selection */}
                <div>
                  <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-2">
                    Giving Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {['Tithe', 'Sunday Offering', 'Building Fund', 'PMCH Sacrifice', 'Missions', 'Needy Care'].map(
                      (cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setCategory(cat)}
                          className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all text-center ${
                            category === cat
                              ? 'bg-purple-900 text-white border-purple-900 font-bold shadow-xs'
                              : 'bg-white text-purple-950 border-purple-200 hover:border-purple-300'
                          }`}
                        >
                          {cat}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-2">
                    Select Amount (GBP £)
                  </label>
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    {[20, 50, 100, 250].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setGivingAmount(amt)}
                        className={`py-2 text-xs font-mono font-bold rounded-xl border transition-all ${
                          givingAmount === amt
                            ? 'bg-amber-400 text-slate-950 border-amber-400 font-extrabold shadow-xs'
                            : 'bg-white text-purple-950 border-purple-200 hover:border-purple-300'
                        }`}
                      >
                        £{amt}
                      </button>
                    ))}
                  </div>

                  <div className="relative mt-2">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-purple-700 font-bold">
                      £
                    </span>
                    <input
                      type="number"
                      min="5"
                      step="5"
                      value={givingAmount}
                      onChange={(e) => setGivingAmount(Number(e.target.value) || 0)}
                      className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-sm font-bold font-mono focus:outline-none focus:ring-2 focus:ring-purple-700 text-purple-950"
                      placeholder="Other amount"
                      required
                    />
                  </div>
                </div>

                {/* Gift Aid Checkbox */}
                <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-200">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={giftAid}
                      onChange={(e) => setGiftAid(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-purple-900 rounded border-purple-300 focus:ring-purple-700"
                    />
                    <span className="text-xs text-slate-700">
                      I am a UK taxpayer. Please add <strong className="text-purple-950">25% Gift Aid</strong> to my donation at no extra cost to me 
                      {giftAid && (
                        <span className="text-red-700 font-bold ml-1">
                          (+£{(givingAmount * 0.25).toFixed(2)} value)
                        </span>
                      )}
                    </span>
                  </label>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 px-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <span>Processing Offering...</span>
                  ) : (
                    <>
                      <span>Give £{givingAmount}.00 for {category}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
