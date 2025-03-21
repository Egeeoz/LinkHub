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

  console.log(companyInfo);
  return (
    <section className={styles.infoContainer}>
      <h1>Company Info</h1>
      {!companyInfo.services &&
        !companyInfo.hourOpen &&
        !companyInfo.hourClose &&
        !companyInfo.address &&
        !companyInfo.phoneNumber && (
          <p>Please Add Company Information to be visible in browse page!</p>
        )}
      <div className={styles.viewCompanyInfoContainer}>
        <p>Services: {companyInfo.services}</p>
        <p>
          Open Hours: {`${companyInfo.hourOpen} to ${companyInfo.hourClose}`}
        </p>
        <p>Address: {companyInfo.address}</p>
        <p>Phone Number: {companyInfo.phoneNumber}</p>
      </div>
    </section>
  );
};

export default ViewCompanyInfo;
