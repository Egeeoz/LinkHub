import { fetchAllCompanyInfo } from '@/lib/util/fetchAllCompaniesInfo';
import styles from './browsePage.module.css';
import CompanyItem from '@/components/companyItem/CompanyItem';

export default async function BrowsePage() {
  const companies = await fetchAllCompanyInfo();

  return (
    <section className={styles.browseContainer}>
      <h1 className={styles.title}>Browse Companies</h1>
      <div className={styles.companyItemContainer}>
        {companies
          .filter((company) => {
            const { services, hourOpen, hourClose, address, phoneNumber } =
              company.companyInfo ?? {};

            return services && hourOpen && hourClose && address && phoneNumber;
          })
          .map((company, index) => (
            <CompanyItem key={index} company={company} />
          ))}
      </div>
    </section>
  );
}
