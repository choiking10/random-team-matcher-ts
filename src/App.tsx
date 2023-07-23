import Members from '@components/Members/Members';
import * as S from './App.style';
import SettingBar from '@components/SettingBar/SettingBar';
import Teams from '@components/Teams/Teams';

function App() {
  return (
    <>
      <S.H1>🪄 RANDOM TEAM MATCHER</S.H1>
      <S.Layout>
        <S.LNB>
          <Members />
        </S.LNB>
        <S.Content>
          <SettingBar />
          <Teams />
        </S.Content>
      </S.Layout>
    </>
  );
}

export default App;
