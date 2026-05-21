interface CheckboxDisplayProps {
  items: string[];
  dark?: boolean;
  isSmall?: boolean;
  enabled?: number[];
}

export default function CheckboxDisplay({
  items,
  dark = false,
  isSmall = false,
  enabled,
}: CheckboxDisplayProps) {
  return (
    <ul className={`flex flex-col gap-3 ${isSmall ? "text-base" : "text-lg"}`}>
      {items.map((item, idx) => {
        const isEnabled = enabled ? enabled[idx] : true;
        return (
          <li
            key={item}
            className={`flex items-center gap-3 ${dark ? "text-text-light" : "text-text-dark"} ${!isEnabled ? "opacity-50" : ""}`}
          >
            <span
              className={`flex items-center justify-center ${isSmall ? "w-4 h-4" : "w-6 h-6"} rounded-full ${isEnabled ? "bg-primary" : "bg-gray-300"} shrink-0`}
            >
              {isEnabled ? (
                <svg
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={isSmall ? "w-2.5 h-2.5" : "w-3.5 h-3.5"}
                >
                  <path
                    d="M1 5L4.5 8.5L11 1"
                    stroke="#1e1e1e"
                    strokeWidth={isSmall ? 1.5 : 2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={isSmall ? "w-2.5 h-2.5" : "w-3.5 h-3.5"}
                >
                  <circle
                    cx="6"
                    cy="5"
                    r="3"
                    stroke="#888"
                    strokeWidth={isSmall ? 1.5 : 2}
                  />
                </svg>
              )}
            </span>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}
