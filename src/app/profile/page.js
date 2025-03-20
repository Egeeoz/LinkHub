import { cookies } from 'next/headers';
import styles from './profilePage.module.css';
import Link from 'next/link';
import CompanyInfo from '@/components/companyInfo/CompanyInfo';
import ViewCompanyInfo from '@/components/companyInfo/ViewCompanyInfo';

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('session')?.value;

  let profileData = {
    email: 'Unknown',
    companyName: 'Unknown',
    organizationNumber: 'Unknown',
  };

  if (sessionCookie) {
    try {
      const userData = JSON.parse(sessionCookie);
      profileData = {
        email: userData.email || 'Not available',
        companyName: userData.data.companyInfo.companyName || 'Not available',
        organizationNumber: userData.data.organizationNumber || 'Not available',
      };
    } catch (error) {
      console.error('Error parsing session cookie:', error);
    }
  }

  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <h2 className={styles.profileTitle}>Company Profile</h2>

        <div className={styles.profileDetails}>
          <div className={styles.profileItem}>
            <h3>Email Address</h3>
            <p>{profileData.email}</p>
          </div>

          <div className={styles.profileItem}>
            <h3>Company Name</h3>
            <p>{profileData.companyName}</p>
          </div>

          <div className={styles.profileItem}>
            <h3>Organization Number</h3>
            <p>{profileData.organizationNumber}</p>
          </div>
        </div>

        <div className={styles.profileActions}>
          <Link href="/browse" className={styles.backButton}>
            Back to browse
          </Link>
          <CompanyInfo />
        </div>
      </div>
      <ViewCompanyInfo />
    </section>
  );
}
