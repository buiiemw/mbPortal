import React from 'react';
import { useTranslation } from 'react-i18next';
import { Campaign } from '@app/components/apps/campaign/Campaign';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const CampaignPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('Campaign')}</PageTitle>
      <Campaign />
    </>
  );
};

export default CampaignPage;
