import React from "react";

export default function Contact({ clase, body, label }) {
  return (
    <div className="flex items-center gap-4">
      <i className={clase}></i>
      <p>
        <span className="flex flex-col font-bold text-Blue-Dianne dark:text-Atlantis">
          {label}
        </span>
        {body}
      </p>
    </div>
  );
}
