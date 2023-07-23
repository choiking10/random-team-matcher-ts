import Members from '@components/Members/Members';
import * as S from './App.style';
import SettingBar from '@components/SettingBar/SettingBar';
import Teams from '@components/Teams/Teams';
import { useState } from 'react';

function App() {
  const [members, setMembers] = useState<string[]>([]);

  return (
    <>
      <S.H1>🪄 RANDOM TEAM MATCHER</S.H1>
      <S.Layout>
        <S.LNB>
          <Members members={members} setMembers={setMembers} />
        </S.LNB>
        <S.Content>
          <SettingBar />
          <Teams members={members} />
        </S.Content>
      </S.Layout>
    </>
  );
}

export default App;
