import styles from './viewCompanyInfo.module.css';
import { cookies } from 'next/headers';

const ViewCompanyInfo = async () => {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  if (!sessionCookie) {
    console.log('no session data found');
  }
  const companyData = JSON.parse(sessionCookie);
  const { companyInfo } = companyData.data;

  return (
    <section className={styles.infoContainer}>
      <h1>Company Info</h1>
      <div className={styles.viewCompanyInfoContainer}>
        <p>Services: {companyInfo.services}</p>
        <p>
          Open Hours: {`${companyInfo.hourOpen} to ${companyInfo.hourClose}`}
        </p>
        <p>Address: {companyInfo.address}</p>
      </div>
    </section>
  );
};

export default ViewCompanyInfo;
