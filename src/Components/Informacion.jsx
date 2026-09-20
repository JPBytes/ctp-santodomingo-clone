import React from "react";

export default function Informacion({ title, body, body2, body3, extra }) {
  return (
    <div className="mb-14">
      <h1 className="flex items-center gap-2 font-Poppins text-sm text-black">
        {title}
      </h1>
      <p className="mb-6 text-pretty text-xl font-bold">{body}</p>
      <p className="mb-6 text-pretty">{body2}</p>
      <p className="mb-6 text-pretty">{body3}</p>
      <div className="mt-4">{extra}</div>
    </div>
  );
}
