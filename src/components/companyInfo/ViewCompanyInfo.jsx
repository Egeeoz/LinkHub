import styles from './viewCompanyInfo.module.css';
import { cookies } from 'next/headers';

const ViewCompanyInfo = async () => {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  const companyData = JSON.parse(sessionCookie);

  return (
    <section className={styles.infoContainer}>
      <h1>Company Info</h1>
      <div className={styles.viewCompanyInfoContainer}>
        <p>Services: {companyData.data.services}</p>
        <p>
          Open Hours:{' '}
          {`${companyData.data.hourOpen} to ${companyData.data.hourClose}`}
        </p>
        <p>Address: {companyData.data.address}</p>
      </div>
    </section>
  );
};

export default ViewCompanyInfo;
