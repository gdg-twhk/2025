// components/speaker-dialog.tsx
"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { SpeakerResponse, DetailedSession } from "@/lib/types";
import clsx from "clsx"; 
import type React from "react";

export default function SpeakerDialog({ speaker, sessions, index }: { speaker: SpeakerResponse , sessions: DetailedSession[], index: number}) {
  const TZ = 'Asia/Taipei';
  const fmtTime = (iso?: string) => {
    if (!iso) return "";
    try {
      const d = new Date(iso);
      return d.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: TZ });
    } catch {
      return "";
    }
  };
  const fmtDate = (iso?: string) => {
    if (!iso) return "";
    try {
      const d = new Date(iso);
      const year = d.toLocaleString('zh-TW', { year: 'numeric', timeZone: TZ });
      const month = d.toLocaleString('zh-TW', { month: 'numeric', timeZone: TZ });
      const day = d.toLocaleString('zh-TW', { day: '2-digit', timeZone: TZ });
      return `${year}${month}${day}`;
    } catch {
      return "";
    }
  };
  const formatDateRange = (start?: string, end?: string) => {
    if (!start && !end) return "";
    const dateBase = fmtDate(start || end);
    const s = fmtTime(start);
    const e = fmtTime(end);
    if (s && e) return `${dateBase} ${s} - ${e}`;
    return `${dateBase} ${s || e}`.trim();
  };

  const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 256 256" width="1.2em" height="1.2em" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8"></path>
    </svg>
  );
  return (
    <Dialog>
      {/* === The Trigger (the speaker card itself) === */}
      <DialogTrigger asChild>
        {/* <Card className="pt-0 pb-2 cursor-pointer hover:scale-[1.02] transition-transform bg-gradient-to-b from-zinc-900/60 to-black border-zinc-800 text-white"> */}
        <Card className="rounded-4xl multi-border-card pt-0 pb-2 cursor-pointer hover:scale-[1.02] bg-white">
        {/* <Card className="rounded-4xl multi-border-card pt-0 pb-2 cursor-pointer hover:scale-[1.02] bg-gray text-black"> */}
          {/* <div className="relative h-56 w-full overflow-hidden bg-gray-100"> */}
          <div className="relative w-full h-56 overflow-hidden">
            <Image
              src={speaker.profilePicture}
              alt={speaker.questionAnswers[0].answer}
              fill
              className="object-cover opacity-90 rounded-4xl"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{speaker.questionAnswers[0].answer}</h3>
            <p className={clsx("text-sm", {
              'text-blue-500': index % 4 === 0,
              // 'text-pastel-green': index % 4 === 1,
              'text-[#34a853]': index % 4 === 1,
              'text-yellow-600': index % 4 === 2,
              'text-red-500': index % 4 === 3,
                })}>{speaker.tagLine}</p>
            <p className="mt-1 text-xs text-gray-700 line-clamp-2">
              {(sessions && sessions[0]?.title) || speaker.sessions?.[0]?.name}
            </p>
            {sessions && sessions[0] && (sessions[0].startsAt || sessions[0].endsAt) && (
              <div className="mt-1 flex items-center gap-1 text-xs text-gray-600">
                <ClockIcon className="shrink-0" />
                <span>{formatDateRange(sessions[0].startsAt, sessions[0].endsAt)}</span>
              </div>
            )}
            { sessions.length > 1 && <div className="justify-center flex">...</div>}
          </div>
        </Card>
      </DialogTrigger>

      {/* === The Dialog === */}
      {/* <DialogContent className="max-w-lg bg-zinc-950/90 backdrop-blur-md border multi-border  text-white"> */}
      <DialogContent className="max-w-lg text-zinc-950/90 backdrop-blur-md border-3  multi-border bg-white">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Image
              src={speaker.profilePicture}
              alt={speaker.questionAnswers[0].answer}
              width={80}
              height={80}
              className="rounded-md object-cover"
            />
            <div>
              <DialogTitle className="text-xl font-bold">{speaker.questionAnswers[0].answer}</DialogTitle>
              <p className={clsx("text-sm", {
                // 'text-blue-500': index % 4 === 0,
                // // 'text-pastel-green': index % 4 === 1,
                // 'text-[#34a853]': index % 4 === 1,

                // 'text-yellow-600': index % 4 === 2,
                // 'text-red-500': index % 4 === 3,
              })}>{speaker.tagLine}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-4 text-sm leading-relaxed space-y-4">
          <p>{speaker.bio}</p>

          {/* Talks list (supports multiple sessions) */}
          {(sessions && sessions.length > 0) ? (

            <div className="space-y-4">
              {sessions.map((s) => {
                const title = s.title || s.name || "Untitled Session";
                const language = s.categories?.[0]?.categoryItems?.[0]?.name;
                const level = s.categories?.[1]?.categoryItems?.[0]?.name;
                // Prepare description without mutating the session object
                const DISCLAIMER = "工作坊現場報名，場次座位有限，額滿為止";
                const rawDescription = (s.description ?? "").trim();
                const cleanedDescription = rawDescription.replace(DISCLAIMER, "").trim();

                return (
                  <div key={String(s.id)} className="border-t border-zinc-200 pt-3">
                    <h4 className="text-base font-semibold gradient-text inline-block">{title}</h4>
                    {(s.startsAt || s.endsAt) && (
                      <div className="mt-1 flex items-center gap-1 text-xs text-zinc-700">
                        <ClockIcon className="shrink-0" />
                        <span>{formatDateRange(s.startsAt, s.endsAt)}</span>
                      </div>
                    )}
                      {cleanedDescription.length > 0 && (
                        <p className="mt-2 text-zinc-700 whitespace-pre-line">{cleanedDescription}</p>
                      )}
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-700">
                    {rawDescription.includes("工作坊現場報名") && (
                      
                    <span className="rounded-full bg-zinc-100 px-2 py-1">工作坊現場報名</span>
                  )}
                      {s.room && (
                        <span className="rounded-full bg-zinc-100 px-2 py-1">Room: {s.room}</span>
                      )}
                      {/* time chip removed to avoid duplicate display */}
                      {language && (
                        <span className="rounded-full bg-zinc-100 px-2 py-1">{language}</span>
                      )}
                      {level && (
                        <span className="rounded-full bg-zinc-100 px-2 py-1">{level}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="border-t border-zinc-200 pt-3">
              <h4 className="text-sm font-semibold">Talk</h4>
              {speaker.sessions.map((session) => (
                <p className="text-zinc-700 inline-block">{session.name}</p>
              ))
              }
              {/* <p className="text-zinc-700 inline-block">{speaker.sessions?.[0]?.name}</p> */}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
