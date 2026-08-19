import { useState } from "react";
import { Download, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export const CV_PATH = "/Thanuka.pdf";
export const CV_FILENAME = "Thanuka_CV.pdf";

interface CvPreviewDialogProps {
  className?: string;
  label?: string;
  iconSize?: number;
  showIcon?: boolean;
}

const CvPreviewDialog = ({
  className,
  label = "Download CV",
  iconSize = 14,
  showIcon = true,
}: CvPreviewDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {showIcon && <Eye size={iconSize} />}
        {label}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl w-[95vw] h-[75vh] max-h-[calc(100vh-8rem)] flex flex-col p-0 gap-0 overflow-hidden z-[10000]">
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-border shrink-0">
            <DialogTitle>CV Preview</DialogTitle>
            <DialogDescription>
              Review the resume before downloading.
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 min-h-0 bg-muted/30 p-4">
            <iframe
              src={`${CV_PATH}#toolbar=0&navpanes=0`}
              title="Thanuka Sachith CV Preview"
              className="w-full h-full rounded-lg border border-border bg-background"
            />
          </div>

          <DialogFooter className="px-6 py-4 border-t border-border shrink-0 sm:justify-between gap-3">
            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Open in new tab
            </a>
            <a
              href={CV_PATH}
              download={CV_FILENAME}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF0087] text-white text-sm font-medium hover:opacity-90 transition"
            >
              <Download size={16} />
              Download CV
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CvPreviewDialog;
