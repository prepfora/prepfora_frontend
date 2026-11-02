"use client";

import React, { useMemo } from "react";
import { ExamHistoryItem } from "./mockExamTypes";
import { CustomTable, CustomText, Column } from "@/components/ui";

interface ExamHistoryTableProps {
    items: ExamHistoryItem[];
    onViewAnalysis: (item: ExamHistoryItem) => void;
}

export default function ExamHistoryTable({
    items,
    onViewAnalysis,
}: ExamHistoryTableProps) {
    const columns: Column<ExamHistoryItem>[] = useMemo(
        () => [
            {
                id: "examTitle",
                name: "EXAM TITLE",
                render: (_, item) => (
                    <CustomText type="body-sm-bold" className="text-neutral-900">
                        {item.examTitle}
                    </CustomText>
                ),
            },
            {
                id: "date",
                name: "DATE",
                render: (_, item) => (
                    <CustomText type="body-sm" className="text-neutral-600 font-normal">
                        {item.date}
                    </CustomText>
                ),
            },
            {
                id: "score",
                name: "SCORE",
                render: (_, item) => (
                    <CustomText
                        type="body-sm-bold"
                        className={
                            item.scoreColor === "green"
                                ? "!text-[#10B981]"
                                : "!text-[#EF4444]"
                        }
                    >
                        {item.score}
                    </CustomText>
                ),
            },
            {
                id: "action",
                name: "ACTION",
                render: (_, item) => (
                    <button
                        type="button"
                        onClick={() => onViewAnalysis(item)}
                        className="text-[#2563EB] font-semibold hover:underline cursor-pointer transition-colors"
                    >
                        <CustomText type="body-sm" className="!text-[#2563EB] font-semibold">
                            View Analysis
                        </CustomText>
                    </button>
                ),
            },
        ],
        [onViewAnalysis]
    );

    return (
        <section className="w-full flex flex-col gap-4 mt-8 pb-10">
            <CustomText type="headline-sm" className="!text-xl font-bold text-neutral-900">
                Recent Exam History
            </CustomText>

            <div className="w-full bg-white rounded-2xl border border-[#E2EAF4] shadow-xs overflow-x-auto">
                <CustomTable<ExamHistoryItem>
                    columns={columns}
                    rows={items}
                    rowKey="id"
                />
            </div>
        </section>
    );
}
