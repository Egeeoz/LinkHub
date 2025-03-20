'use client';
import { useState } from 'react';
import AddCompanyInfoModal from '../addCompanyInfoModal/AddCompanyInfoModal';
import styles from './companyInfo.module.css';

const CompanyInfo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className={styles.companyInfoContainer}>
      <button className={styles.openModalButton} onClick={openModal}>
        Add Company Info
      </button>
      {modalOpen && <AddCompanyInfoModal onClose={closeModal} />}
    </div>
  );
};

export default CompanyInfo;
