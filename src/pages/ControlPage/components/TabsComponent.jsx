import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import { Config } from './ConfigComponent'
import { Connect, Disconnect } from '../../../state/gamedata/gamedataActions'
import  {ScoreboardComponent}  from './ScoreboardComponent';



export const Tabs = () => {
    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value: string) => {
      if (value === justifyActive) {
        return;
      }
  
      setJustifyActive(value);
    };
  
    return (
      <>
        <MDBTabs justify className='mb-3'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
              Active
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
              ScoreBug Preview
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
              Config
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
  
        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === 'tab1'}>
            <MDBContainer fluid>
              <MDBRow>
              <MDBCol size='2'>
              < Connect/>
              < Disconnect />
              </MDBCol>
              <MDBCol size='6'>
              < ScoreboardComponent />
              </MDBCol>
              <MDBCol size='4'>
                Sugma
              </MDBCol>
              </MDBRow>
            </MDBContainer>
            </MDBTabsPane>
          <MDBTabsPane show={justifyActive === 'tab2'}>Tab 2 content</MDBTabsPane>
          <MDBTabsPane show={justifyActive === 'tab3'}><Config /></MDBTabsPane>
        </MDBTabsContent>
      </>
    );
}