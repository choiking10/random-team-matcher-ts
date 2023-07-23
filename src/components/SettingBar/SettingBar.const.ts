import { ISettingOption } from './SettingBar.interface';

export const INITIAL_SETTING_OPTIONS: ISettingOption[] = [
  {
    title: '전체 팀 수',
    checked: false,
    id: 'team',
    value: 1,
  },
  {
    title: '팀당 멤버 수',
    checked: true,
    id: 'member',
    value: 2,
  },
];
