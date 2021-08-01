import React, { useEffect, useState } from 'react';
import { axiosIntance } from 'App/API';
import AccountCard from './Components/AccountCard/AccountCard';

const User: React.FC = () => {
  function updateAccountList() {
    axiosIntance.post('account/getAccountList').then((response) => {
      setAccountList(response.data.data);
    });
  }
  const [accountList, setAccountList] = useState<{ _id: string; name?: string }[]>([]);
  const [createName, setCreateName] = useState<string>('');

  useEffect(() => {
    updateAccountList();
  }, []);

  const createAccount = async () => {
    await axiosIntance.post('account/createAccount', {
      name: createName,
    });
    setCreateName('');
    updateAccountList();
  };

  const deleteAccount = async (_id: string) => {
    await axiosIntance.post('account/deleteAccount', {
      _id,
    });
    updateAccountList();
  };

  return (
    <div>
      <div>{'(<ゝω·)☆ USER PAGE:'}</div>
      <div>
        {accountList.map((account, index) => (
          // <div key={index}>{account.name || 'NO NAME'}</div>
          <AccountCard key={index} name={account.name} delete={() => deleteAccount(account._id)}></AccountCard>
        ))}
        {accountList.length ? '' : 'NO ACCOUNT'}
      </div>
      <div>
        <input
          value={createName}
          onChange={(ev) => {
            setCreateName(ev.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            createAccount();
          }}
        >
          CREATE
        </button>
      </div>
    </div>
  );
};

export default User;
