import Para3 from '../para-3/para-3';
import styles from './product-info-table.module.css';


const ProductInfoTable = () =>{
    return(
        <table className={styles.table}>
              <tbody>
                <tr className={styles.tableRow}>
                  <td className={styles.rowHeading}>
                    <Para3
                      value={
                        "Finish."
                      }
                      animate={false}
                      showIcon={false}
                      dark={true}
                      bold={true}
                    />
                  </td>
                  <td className={styles.rowValue}>
                    <Para3
                      value={
                        "Gold TPR Coated"
                      }
                      animate={false}
                      showIcon={false}
                      dark={true}
                      bold={false}
                    />
                  </td>
                </tr>
                <tr className={styles.tableRow}>
                  <td className={styles.rowHeading}>
                    <Para3
                      value={"Material."}
                      animate={false}
                      showIcon={false}
                      dark={true}
                      bold={true}
                    />
                  </td>
                  <td className={styles.rowValue}>
                    <Para3
                      value={
                        "Stainless Stell"
                      }
                      animate={false}
                      showIcon={false}
                      dark={true}
                      bold={false}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
    );
}

export default ProductInfoTable;