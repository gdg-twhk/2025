import { DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'

interface SpeakerDialogContentProps {
  name: number
}

export function SpeakerDialogContent({ name }: SpeakerDialogContentProps) {
  return (
    <DialogContent>
      <DialogTitle className="sr-only">Speaker Info</DialogTitle>
      <DialogDescription className="sr-only">This is the speaker information dialog.</DialogDescription>
      <div className="size-12 overflow-clip rounded-full bg-gray-50">
        <img className="size-full" src="https://i.pravatar.cc/300?img=1" />
      </div>
      講者 {name} 資料待加入
    </DialogContent>
  )
}
