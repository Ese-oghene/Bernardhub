import React from "react";

const WhatsAppFloat = () => {
  const phoneNumber = "2347059210213"; // Change to your business number
  const message = "Hello, I'm interested in your services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 transition-all duration-300 
        w-14 h-14 rounded-full flex items-center justify-center 
        shadow-lg hover:scale-110">
        
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.887.76 5.597 2.09 7.948L0 32l7.88-2.06A15.91 15.91 0 0016 32c8.837 0 16-7.164 16-16S24.837.396 16 .396zm0 29.134a13.03 13.03 0 01-6.63-1.8l-.474-.28-4.676 1.223 1.246-4.56-.308-.495A13.024 13.024 0 013 16.396c0-7.197 5.804-13 13-13s13 5.803 13 13-5.804 13-13 13zm7.293-9.707c-.4-.2-2.37-1.17-2.74-1.303-.37-.134-.64-.2-.91.2-.27.4-1.04 1.303-1.275 1.57-.234.268-.468.3-.868.1-.4-.2-1.69-.623-3.22-1.987-1.19-1.06-1.99-2.37-2.22-2.77-.23-.4-.025-.616.174-.815.18-.18.4-.468.6-.7.2-.234.27-.4.4-.668.134-.268.067-.5-.034-.7-.1-.2-.91-2.19-1.25-3-.33-.8-.66-.7-.91-.71h-.78c-.27 0-.7.1-1.07.5s-1.4 1.37-1.4 3.34c0 1.97 1.43 3.87 1.63 4.14.2.268 2.82 4.3 6.84 6.03.96.41 1.71.65 2.3.83.97.31 1.85.27 2.55.16.78-.12 2.37-.97 2.7-1.91.33-.94.33-1.75.23-1.91-.1-.16-.37-.27-.77-.47z"/>
        </svg>

      </div>
    </a>
  );
};

export default WhatsAppFloat;