import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer } from '../components/ui/CommonComponents';
import ContactHero from '../components/contacts/ContactHero';
import ContactInfo from '../components/contacts/ContactInfo';
import ContactForm from '../components/contacts/ContactForm';

const ContactsPage = () => {
  const { t } = useTranslation();
  const contentRef = useRef(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ContactHero onScrollToContent={scrollToContent} />
      
      <div ref={contentRef}>
        <ContactInfo />
        <ContactForm />
      </div>
    </PageContainer>
  );
};

export default ContactsPage;
