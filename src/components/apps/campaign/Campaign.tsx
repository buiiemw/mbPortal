import React from 'react';
import { CampaignConfigList } from './Config/CampaignConfigList';
import { useTranslation } from 'react-i18next';
import * as S from './Campaign.styles';

export const Campaign: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.TablesWrapper>
        <S.Card id="basic-table" title={t('tables.basicTable')} padding="1.25rem 1.25rem 0">
          <CampaignConfigList />
        </S.Card>
      </S.TablesWrapper>
    </>
  );
};
