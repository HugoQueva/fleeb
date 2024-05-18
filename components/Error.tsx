import { AlertCircle } from "lucide-react";
import React from "react";

const Error = ({
  code,
  description,
  className,
}: {
  code: number;
  description: string;
  className: string;
}) => {
  return (
    <div className={`w-fit h-fit ${className}`}>
      <div className="flex items-center gap-2 text-red-500">
        <AlertCircle />
        <h1 className="text-3xl font-bold">Erreur {code}</h1>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default Error;
