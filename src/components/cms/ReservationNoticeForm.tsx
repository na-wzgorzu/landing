"use client";

import type { ReservationNotice } from "@/app/cms/data";

type Props = {
  notice: ReservationNotice;
  onChange: (patch: Partial<ReservationNotice>) => void;
};

export default function ReservationNoticeForm({ notice, onChange }: Props) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-4">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        <input
          type="checkbox"
          checked={notice.enabled}
          onChange={(e) => onChange({ enabled: e.target.checked })}
        />
        Pokaż komunikat na stronie rezerwacji
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium text-gray-700">
          Treść komunikatu
        </span>
        <textarea
          value={notice.text}
          onChange={(e) => onChange({ text: e.target.value })}
          rows={6}
          className="border border-gray-300 rounded px-2 py-1 text-sm resize-y"
        />
      </label>
    </div>
  );
}
