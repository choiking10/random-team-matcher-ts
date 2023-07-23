import { ChangeEvent, FormEvent, useState } from 'react';
import * as S from './Members.style';

interface IProps {
  members: string[];
  setMembers: (members: string[]) => void;
}

const Members = ({ members, setMembers }: IProps) => {
  const [member, setMember] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMembers([...members, member]);
    setMember('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: newMember } = event.target;
    setMember(newMember);
  };

  return (
    <S.MembersWrapper>
      {members.length > 0 ? (
        <S.Members>
          {members.map((member, index) => (
            <S.Member key={index}>{member}</S.Member>
          ))}
        </S.Members>
      ) : (
        <S.EmptyMembers>멤버를 추가해주세요.</S.EmptyMembers>
      )}
      <S.Form onSubmit={handleSubmit}>
        <input type="text" value={member} onChange={handleChange} />
        <button type="submit">추가</button>
      </S.Form>
    </S.MembersWrapper>
  );
};

export default Members;
