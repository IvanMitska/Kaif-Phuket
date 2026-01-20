import { useEffect } from 'react';

// WhatsApp номер для записи
const WHATSAPP_NUMBER = '66624805877';

// =============================================================================
// BOOKING MODAL COMPONENT
// Теперь просто открывает WhatsApp напрямую без модального окна
// =============================================================================

const BookingModal = ({
  isOpen,
  onClose,
  service = ''
}) => {
  useEffect(() => {
    if (isOpen) {
      // Формируем сообщение
      let message = 'Здравствуйте! Хочу записаться в KAIF.';
      if (service) {
        message += `\nУслуга: ${service}`;
      }

      // Открываем WhatsApp
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      // Закрываем "модалку" (сбрасываем состояние)
      onClose();
    }
  }, [isOpen, service, onClose]);

  // Ничего не рендерим
  return null;
};

export default BookingModal;
