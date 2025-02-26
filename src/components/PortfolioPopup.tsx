
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Linkedin } from "lucide-react";

export function PortfolioPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 12000); // Show popup after 12 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-gradient-to-br from-purple-900/90 to-black/90 border border-purple-500/20 backdrop-blur-xl text-white animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Still Here? 👀
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <p className="text-gray-300 text-lg">
            Since you've made it this far (and clearly have great taste), why not check out more of my amazing work? I promise it's worth the click!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.tinobritty.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 rounded-lg text-white font-medium text-center group"
            >
              <span className="group-hover:scale-105 inline-block transition-transform">
                Visit My Portfolio
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/brittytino/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0077B5] hover:bg-[#006399] transition-colors rounded-lg text-white font-medium text-center"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
          <p className="text-sm text-gray-400 italic">
            P.S. Don't worry, this popup took its sweet time (12 seconds to be exact) before interrupting you! 😉
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
