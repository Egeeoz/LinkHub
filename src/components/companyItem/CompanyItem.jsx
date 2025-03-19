import styles from './companyItem.module.css';

const CompanyItem = ({ company }) => {
  const {
    companyInfo: { companyName, services, hourOpen, hourClose, address } = {},
  } = company;

  return (
    <div className={styles.companyBox}>
      <h2>{companyName}</h2>
      <p>
        <strong>Services:</strong> {services}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Hours:</strong> {hourOpen} - {hourClose}
      </p>
    </div>
  );
};

export default CompanyItem;
