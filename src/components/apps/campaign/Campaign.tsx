import React from 'react';
import { CampaignConfigList } from './Config/CampaignConfigList';
import { useTranslation } from 'react-i18next';
import * as S from './Campaign.styles';

export const Campaign: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.TablesWrapper>
        <S.Card id="camapgin-table" title={t('Campaign Configs')} padding="1.25rem 1.25rem 0">
          <CampaignConfigList />
        </S.Card>
      </S.TablesWrapper>
    </>
  );
};
