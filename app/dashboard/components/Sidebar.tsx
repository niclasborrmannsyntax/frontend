export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r flex flex-col p-6 min-h-screen">
      <div className="flex items-center mb-8">
        <span className="text-2xl font-bold text-[#1a2b3c] flex items-center gap-2">
          <span className="inline-block w-7 h-7 bg-lime-400 rounded-full"></span>
          SecureSend
        </span>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="mb-4 px-4 py-2 rounded-lg border bg-[#f7fafd] text-sm focus:outline-none"
      />
      <nav className="flex-1">
        <ul className="space-y-1">
          <li className="bg-lime-100 rounded-lg">
            <a
              href="#"
              className="flex items-center px-4 py-2 font-medium text-[#1a2b3c]"
            >
              <span className="mr-3">🏠</span> Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600">
              <span className="mr-3">💳</span> Transactions
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600">
              <span className="mr-3">💸</span> Payments
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600">
              <span className="mr-3">📂</span> Subaccounts
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600">
              <span className="mr-3">💰</span> Save-as-you-earn
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600">
              <span className="mr-3">📈</span> Invest
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 text-gray-600">
              <span className="mr-3">🎁</span> Refer & earn
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <a href="#" className="flex items-center px-4 py-2 text-gray-500">
          <span className="mr-3">🛟</span> Support
        </a>
        <a href="#" className="flex items-center px-4 py-2 text-gray-500">
          <span className="mr-3">⚙️</span> Settings
        </a>
      </div>
    </aside>
  );
}
