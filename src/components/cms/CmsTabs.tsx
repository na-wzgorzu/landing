"use client";

import type { CmsTab } from "@/app/cms/data";

type Props = {
  activeTab: CmsTab;
  onTabChange: (tab: CmsTab) => void;
};

const tabs: { id: CmsTab; label: string }[] = [
  { id: "houses", label: "Domki" },
  { id: "rooms", label: "Pokoje" },
  { id: "reservation", label: "Rezerwacje" },
  { id: "gastro", label: "Gastronomia" },
];

export default function CmsTabs({ activeTab, onTabChange }: Props) {
  return (
    <div className="flex gap-2 mb-6 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
            activeTab === tab.id
              ? "border-brand text-brand"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
