import React from "react";

export default function Page() {
  return (
    <div>
      <iframe
        src="/api/cennik"
        style={{ width: "100%", height: "100vh", border: "none" }}
        title="Cennik"
      />
    </div>
  );
}
