"use client";

interface CustomTextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "password";
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  helperText?: string;
}

export default function CustomTextField({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  autoComplete,
  helperText,
}: CustomTextFieldProps) {
  return (
    <div className="flex w-full flex-col gap-2 text-left">
      <label htmlFor={id} className="text-sm font-semibold text-text-dark">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-2xl border border-text-dark/15 bg-white px-4 py-3 text-base text-text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
      {helperText && <p className="text-sm text-text-dark/70">{helperText}</p>}
    </div>
  );
}
