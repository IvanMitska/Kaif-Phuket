import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

// =============================================================================
// МОДАЛЬНОЕ ОКНО ДЛЯ YCLIENTS ВИДЖЕТА
// =============================================================================

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  backdrop-filter: blur(4px);
`;

const ModalContainer = styled(motion.div)`
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  
  @media (max-width: 768px) {
    max-width: 95vw;
    max-height: 95vh;
    border-radius: 16px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #f1f5f9;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
  
  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`;

const ModalContent = styled.div`
  height: 600px;
  
  @media (max-width: 768px) {
    height: 500px;
  }
  
  @media (max-width: 480px) {
    height: 450px;
  }
`;

const YclientsIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: white;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.1rem;
  color: #64748b;
`;

// =============================================================================
// YCLIENTS MODAL COMPONENT
// =============================================================================

const YclientsModal = ({ 
  isOpen, 
  onClose, 
  companyId = null, // ID компании в Yclients
  customUrl = null // Кастомная ссылка на запись
}) => {
  // Формируем URL для виджета Yclients
  const getBookingUrl = () => {
    if (customUrl) {
      return customUrl;
    }
    
    if (companyId) {
      return `https://n${companyId}.yclients.com/`;
    }
    
    // Fallback - пример URL (нужно заменить на реальный)
    return 'https://example.yclients.com/';
  };

  // Закрытие по Escape
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <ModalContainer
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader>
              <ModalTitle>Онлайн-запись в KAIF SPA</ModalTitle>
              <CloseButton onClick={onClose}>
                <XMarkIcon />
              </CloseButton>
            </ModalHeader>
            
            <ModalContent>
              {companyId || customUrl ? (
                <YclientsIframe
                  src={getBookingUrl()}
                  title="Онлайн-запись Yclients"
                  allow="camera; microphone; geolocation"
                />
              ) : (
                <LoadingContainer>
                  <div>
                    <p>Для настройки онлайн-записи нужно:</p>
                    <ol style={{ textAlign: 'left', marginTop: '1rem' }}>
                      <li>ID компании в Yclients</li>
                      <li>Или прямая ссылка на виджет записи</li>
                    </ol>
                  </div>
                </LoadingContainer>
              )}
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default YclientsModal; 