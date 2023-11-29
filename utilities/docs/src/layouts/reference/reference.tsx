import { mergeClasses } from '@griffel/react';
import { PersonTile } from '@microsoft/arbutus.person-tile';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@microsoft/arbutus.tabs';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import { ResourceChip } from '@microsoft/arbutus.resource-chip';
import type { FC } from 'react';
import * as React from 'react';
import { useCopyToClipboard } from '@microsoft/arbutus.use-copy-to-clipboard';

import { ComponentRenderer } from '../../components/component-renderer';
import { Grid } from '../../components/grid';
import { useReferenceStyles } from './reference.styles';
import type { ReferenceLayoutProps } from './reference.types';

export const ReferenceLayout: FC<ReferenceLayoutProps> = ({
  title,
  definition,
  owners,
  packageName,
  tabs,
}) => {
  const space = useSpaceStyles();
  const classes = useReferenceStyles();

  const makeTeamsLink = (alias?: string) => () =>
    alias &&
    window?.open(
      `https://teams.microsoft.com/l/chat/0/0?users=${alias}@microsoft.com`,
      '_blank',
    );

  const { copy: copyPackageName } = useCopyToClipboard();
  const handleCopyPackageName = () => copyPackageName(packageName);
  const handleFigmaToolkitClick = () =>
    window.open('https://www.figma.com/@microsoft', '_blank');

  return (
    <>
      <Text block variant="jumbo" as="h1">
        {title}
      </Text>
      <div className={space.my5}>
        <ResourceChip
          text="Figma Toolkit"
          actionIconName="link"
          onClick={handleFigmaToolkitClick}
          logoName="figma"
          logoLabel="Figma"
          className={space.mr3}
        />
        <ResourceChip
          text={packageName}
          actionIconName="copy"
          onClick={handleCopyPackageName}
          className={space.mr3}
        />
      </div>
      {definition && (
        <Text
          block
          variant="leading"
          as="p"
          className={mergeClasses(space.my5, space.mb10)}
        >
          {definition}
        </Text>
      )}
      <Grid layout="small">
        {owners.map((owner, index) => (
          <PersonTile
            key={index}
            firstName={owner.firstName}
            lastName={owner.lastName ?? ''}
            role={owner.role}
            avatarSrc={owner.avatar?.url}
            onClick={makeTeamsLink(owner.alias)}
          />
        ))}
      </Grid>

      <Tabs className={space.mt12}>
        <TabList>
          {tabs.map((tab, index) => {
            const currentTab = tabs.find((t) => t.tab === tab.tab);

            return (
              <Tab key={`${index}--${currentTab?.tab ?? ''}`} className={classes.tab}>
                {currentTab?.tab}
              </Tab>
            );
          })}
        </TabList>
        <TabPanels>
          {tabs.map(({ tab, content }, index) => (
            <TabPanel key={`${index}--${tab}`}>
              {content && <ComponentRenderer content={content} />}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};
