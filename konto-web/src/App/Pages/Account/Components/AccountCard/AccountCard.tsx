import React from 'react';
import styles from './AccountCard.module.scss';

interface AccountProps {
  name?: string;
  delete: () => void;
}

const AccountCard: React.FC<AccountProps> = (props: AccountProps) => {
  return (
    <div className={styles.accountCard}>
      <div>
        {props.name || 'NO NAME'}{' '}
        <button
          className={styles.deleteBtn}
          onClick={() => {
            props.delete();
          }}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
