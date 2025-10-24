// components/speaker-dialog.tsx
"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { SpeakerResponse } from "@/lib/types";
import clsx from "clsx";

export default function SpeakerDialog({ speaker, index }: { speaker: SpeakerResponse , index: number}) {
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
            <p className="mt-1 text-xs text-gray-700 line-clamp-2">{speaker.sessions[0].name}</p>
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
                'text-blue-500': index % 4 === 0,
                // 'text-pastel-green': index % 4 === 1,
                'text-[#34a853]': index % 4 === 1,

                'text-yellow-600': index % 4 === 2,
                'text-red-500': index % 4 === 3,
              })}>{speaker.tagLine}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-4 text-sm leading-relaxed space-y-2">
          <p>{speaker.bio}</p>

          <div className="border-t border-zinc-800 pt-3">
          {/* <div className="border-t border-zinc-800 pt-3"> */}
            <h4 className="text-sm font-semibold">Talk</h4>
            <p className="text-gray-300 gradient-text inline-block">{speaker.sessions[0].name}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
