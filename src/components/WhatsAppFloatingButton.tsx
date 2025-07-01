
import { MessageSquare } from "lucide-react";

export const WhatsAppFloatingButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Quero vender mais com campanhas no WhatsApp");
    const whatsappUrl = `https://wa.me/5551981985539?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Entrar em contato via WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
};
