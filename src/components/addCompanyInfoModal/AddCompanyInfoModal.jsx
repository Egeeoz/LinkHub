'use client';
import styles from './addCompanyInfoModal.module.css';
import { useState } from 'react';
import { handleAddCompanyInfo } from '@/lib/util/util';

const AddCompanyInfoModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    services: '',
    hourOpen: '',
    hourClose: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await handleAddCompanyInfo(formData);

    if (result.success) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Services</label>
            <input
              type="text"
              className={styles.input}
              id="services"
              value={formData.services}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Open Hours</label>
            <div className={styles.openHoursContainer}>
              <input
                type="time"
                id="hourOpen"
                className={styles.input}
                value={formData.hourOpen}
                onChange={handleChange}
              />
              <label>To</label>
              <input
                type="time"
                id="hourClose"
                className={styles.input}
                value={formData.hourClose}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Address</label>
            <input
              type="text"
              id="address"
              className={styles.input}
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Add info
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCompanyInfoModal;
