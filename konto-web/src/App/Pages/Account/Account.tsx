import React, { useEffect, useState } from 'react';
import { axiosIntance } from '../../api';

const User: React.FC = () => {
  function updateAccountList() {
    axiosIntance.post('account/getAccountList').then((response) => {
      setAccountList(response.data.data);
    });
  }
  const [accountList, setAccountList] = useState<{ id?: unknown; name?: string }[]>([]);
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

  return (
    <div>
      <div>User Page:</div>
      <div>
        {accountList.map((account, index) => (
          <div key={index}>{account.name || 'NO NAME'}</div>
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
