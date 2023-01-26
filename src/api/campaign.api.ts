import axios from 'axios';

export interface CampaignConfig {
  id: string;
  name: string;
  type: Type;
  startDate: Date;
  endDate: Date;
  thirdPartyIndex: number;
  defaultCampaignValue: DefaultCampaignValue;
  numOfMonthForCheckReward: number;
  numOfMonthToEnroll?: number;
  startEnrollDate?: Date;
  endEnrollDate?: Date;
  sendPush?: boolean;
  pushMessageEN: string;
  pushMessageTH: string;
  openRewardID: string;
}

export enum DefaultCampaignValue {
  D = 'D',
  N = 'N',
  Y = 'Y',
}

export enum Type {
  Offline = 'Offline',
  Online = 'Online',
}

export const getCampaignConfig = async (): Promise<{ data: CampaignConfig[] } | undefined> => {
  try {
    // const response = await axios.get<{ data: CampaignConfig[] }>('http://10.136.82.52:8100/api/CampaignConfig');
    const response = await axios.get<{ data: CampaignConfig[] }>('http://localhost:5000/api/CampaignConfig');

    return response.data;
  } catch (e: any) {
    throw new Error(e);
  }
};
