import { Parallax } from 'react-parallax';
import React, { CSSProperties } from 'react';
import './Vote.css';
import ReactFitText from 'react-fittext';
import { DaisyCard } from './daisy/Card';
const cardHeaderStyles: CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  padding: 20,
  textAlign: 'center',
  textTransform: 'uppercase',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(2px)',
};

const Vote = () => {

  return (
    <div>
      <div className="container">
        <div className="flex justify-around place-items-center flex-col gap-4">
          <picture className="max-w-fit self-center">
            <img
              sizes="(max-width: 851px) 100vw, 851px"
              srcSet="
  /assets/images/votewall/votewall_i41cju_c_scale,w_200.jpg 200w,
  /assets/images/votewall/votewall_i41cju_c_scale,w_311.jpg 311w,
  /assets/images/votewall/votewall_i41cju_c_scale,w_402.jpg 402w,
  /assets/images/votewall/votewall_i41cju_c_scale,w_480.jpg 480w,
  /assets/images/votewall/votewall_i41cju_c_scale,w_551.jpg 551w,
  /assets/images/votewall/votewall_i41cju_c_scale,w_619.jpg 619w,
  /assets/images/votewall/votewall_i41cju_c_scale,w_851.jpg 851w"
              src="/assets/images/votewall/votewall_i41cju_c_scale,w_851.jpg"
              alt="" />
          </picture>
          <div className="w-3/4">
            <DaisyCard className='w-full bg-base-100 shadow-xl'>
              VOTE mural, in collaboration with the Eau Claire Public  Council and Chippewa Valley Votes, was created by Clark Stoeckley and is located on Ramone's Ice Cream Parlor, facing North Farwell St. downtown Eau Claire. Photo by Kevin Stoner
            </DaisyCard>
          </div>
        </div>
      </div >
      <Parallax bgImageSizes="100vw"
        bgImageSrcSet="
        /assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
        /assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_1_1,c_fill,g_auto__c_scale,w_413.jpg 413w,
        /assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_1_1,c_fill,g_auto__c_scale,w_567.jpg 567w,
        /assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_1_1,c_fill,g_auto__c_scale,w_687.jpg 687w,
        /assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w,
/assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_4_3,c_fill,g_auto__c_scale,w_768.jpg 768w,
/assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_4_3,c_fill,g_auto__c_scale,w_891.jpg 891w,
/assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_4_3,c_fill,g_auto__c_scale,w_979.jpg 979w,
/assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_4_3,c_fill,g_auto__c_scale,w_991.jpg 991w,
/assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_16_9,c_fill,g_auto__c_scale,w_992.jpg 992w,
/assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_16_9,c_fill,g_auto__c_scale,w_1119.jpg 1119w,
/assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_16_9,c_fill,g_auto__c_scale,w_1199.jpg 1199w,
/assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_c_scale,w_1200.jpg 1200w,
/assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_c_scale,w_1295.jpg 1295w,
/assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_c_scale,w_1396.jpg 1396w,
/assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_c_scale,w_1400.jpg 1400w"
        bgImage="/assets/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_c_scale,w_1400.jpg"
        className='w-full my-4'
        strength={500}>
        <div className="container my-4">
          <DaisyCard className='glass  shadow-xl w-full' slotActions={<a className='btn btn-warning btn-lg btn-wide' href="https://myvote.wi.gov/en-US/PreviewMyBallot" target="_blank" rel="noopener noreferrer"><ReactFitText minFontSize={18} maxFontSize={35} compressor={1.5}><h2>What's On My Ballot</h2></ReactFitText></a>}>
            <div className='items-center text-center'>
              <ReactFitText maxFontSize={55} compressor={1.5}><h2>  <span className="line">Eau Claire's</span> <span className="line">Next Election is</span></h2></ReactFitText>
              <ReactFitText minFontSize={30} maxFontSize={85}><h1><span className="line">TUESDAY,</span> <span className="line">APRIL 6</span></h1></ReactFitText>
            </div>
          </DaisyCard>
        </div>
      </Parallax>
      <div className="container flex justify-around place-items-center flex-col gap-4">
        <DaisyCard className='glass shadow-xl w-full'
          slotTitle={<div className='items-center text-center'><ReactFitText minFontSize={30} maxFontSize={60}><h1><span className="line">REGISTER TO VOTE</span></h1></ReactFitText></div>}>
          <div className='items-center text-center'>
            <ReactFitText maxFontSize={30} minFontSize={18} compressor={1.5}><h2>
              <span className="line">Deadline to register: </span><br />
              <span className="line">MARCH 17 online</span><br />
              <span className="line">APRIL 2 in person</span></h2></ReactFitText>
          </div>
        </DaisyCard>
        <DaisyCard className='bg-base-100 shadow-xl w-3/4'>
          <div className='items-center text-center'>
            <p>Check your registration <a href="https://myvote.wi.gov/en-US/RegisterToVote" target="_blank" rel="noopener noreferrer">here</a>.</p>
            <div className='flex gap-2 justify-between'>
              <a className='btn btn-warning flex-grow' rel="noreferrer" target="_blank" href="https://myvote.wi.gov/en-us/RegisterToVote">ONLINE</a>
              <a className='btn btn-warning flex-grow' rel="noreferrer" target="_blank" href="https://myvote.wi.gov/en-US/MyMunicipalClerk">IN PERSON</a>
              <div className='flex flex-col gap-1 flex-grow'>
               <a className='btn btn-warning flex-grow' rel="noreferrer" target="_blank" href="https://elections.wi.gov/forms/el-131-fillable">BY MAIL</a>
              <p className="subtext">Mail to <a href="https://myvote.wi.gov/en-US/MyMunicipalClerk" target="_blank" rel="noopener noreferrer">your clerk</a>.</p>
              </div>
            </div>
          </div>
        </DaisyCard>
        {/* 
        <IonGrid className="ion-no-padding section" style={{ backgroundColor: 'rgba(60,59,210,0.3)' }}>
          <IonRow className="ion-justify-content-around">
            <IonCol className="ion-no-padding" size="11" sizeMd="9" sizeLg="7">
              <IonCard >
                <IonCardContent>
                 
                  <IonGrid>
                    <IonRow>
                      <IonCol>
                        <IonButton size="large" strong expand="block" target="_blank" href="https://myvote.wi.gov/en-us/RegisterToVote">ONLINE</IonButton>
                      </IonCol>
                      <IonCol>
                        <IonButton size="large" strong expand="block" target="_blank" href="https://myvote.wi.gov/en-US/MyMunicipalClerk">IN PERSON</IonButton>
                      </IonCol>
                      <IonCol>
                        <IonButton size="large" strong expand="block" target="_blank" href="https://elections.wi.gov/forms/el-131-fillable">BY MAIL</IonButton>
                        <p className="subtext">Mail to <a href="https://myvote.wi.gov/en-US/MyMunicipalClerk" target="_blank" rel="noopener noreferrer">your clerk</a>.</p>
                      </IonCol> 
                    </IonRow>
                  </IonGrid>
                  <p>
                    You can also register in person at Drive Thru In-Person Absentee Voting sites or at your <span className="line">at your <a href="https://myvote.wi.gov/en-us/FindMyPollingPlace" target="_blank" rel="noopener noreferrer">polling place</a> on Election Day.</span>
                  </p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-no-padding section" style={{ backgroundColor: 'rgba(204,12,37,0.3)' }}>
          <IonRow className="ion-justify-content-around">
            <IonCol className="ion-no-padding" size="12" sizeMd="10" sizeLg="8">
              <IonCard style={cardHeaderStyles} className="heading">
                <IonCardHeader>
                  <IonCardTitle><ReactFitText minFontSize={30} maxFontSize={60}><h1><span className="line">Vote Early in Person</span></h1></ReactFitText></IonCardTitle>
                  <IonCardSubtitle><ReactFitText maxFontSize={30} minFontSize={18} compressor={1.5}><h2>  <span className="line">March 23 -</span> <span className="line">April 2</span></h2></ReactFitText></IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-around">
            <IonCol className="ion-no-padding" size="11" sizeMd="9" sizeLg="7">
              <IonCard>
                <IonCardContent>
                  <p>
                    Photo ID <strong>is required </strong>to receive a ballot. To learn more about acceptable Photo ID visit <a href="http://www.bringitwisconsin.com/" target="_blank" rel="noopener noreferrer">Bring It to the Ballot</a>.
              </p>
                  <IonCard className="secondary">
                    <IonCardHeader>
                      <IonCardTitle>Eau Claire City Residents</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="ion-text-start">
                      <p>Drive Thru In-Person Absentee Voting for the Spring Election will be available (for City of Eau Claire Residents) as follows</p>
                      <br />
                      <p><strong>Location:</strong> City Hall parking lot, 203 S. Farwell St. </p><br />
                      <p><strong>Dates:</strong> Tuesday, March 23, 2021 through Friday, April 2, 2021 </p> <br />
                      <p><strong>Hours:</strong> Monday through Friday: 9 a.m. to 4 p.m.</p>                    <br />
                      <p> Enter the parking lot from Dewey Street only.   To allow for social distancing and to help keep poll workers and voters safe, a system has been created in the parking lot which will allow people to "drive-thru" , receive and cast their ballot.  A vehicle is not required to vote - walk-ups, bicycles, scooters, any mode of transportation can use this system to obtain and cast a ballot.  You may also register at this site.  You must be a City of Eau Claire resident.</p>
                    </IonCardContent>
                  </IonCard>
                  <IonCard className="secondary">
                    <IonCardHeader>
                      <IonCardTitle>Non Eau Claire Residents</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>Dates and hours vary, see your <a href="#footer">local election info website</a> or check with your <a href="https://myvote.wi.gov/en-US/MyMunicipalClerk" target="_blank" rel="noopener noreferrer">municipal clerk</a>.</p>
                    </IonCardContent>
                  </IonCard>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-no-padding section" style={{ backgroundColor: 'rgba(60,59,210,0.3)' }}>
          <IonRow className="ion-justify-content-around">
            <IonCol className="ion-no-padding" size="12" sizeMd="10" sizeLg="8">
              <IonCard style={cardHeaderStyles} className="heading">
                <IonCardHeader>
                  <IonCardTitle><ReactFitText minFontSize={30} maxFontSize={60}><h1><span className="line">Return Your Absentee Ballot</span></h1></ReactFitText></IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-around">
            <IonCol className="ion-no-padding" size="11" sizeMd="9" sizeLg="7">
              <IonCard>
                <IonCardContent>
                  <IonCard className="secondary">
                    <IonCardHeader>
                      <IonCardTitle>Fill Out Your Ballot</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="ion-text-start">
                      <p>Follow<a href="https://elections.wi.gov/sites/elections.wi.gov/files/2020-09/Uniform%20Absentee%20Instructions%20-%20Current%20-%20By-Mail%20Voters.pdf" target="_blank" rel="noopener noreferrer"> directions</a> carefully and be sure to sign where indicated.</p>
                      <p>You need one witness signature with the witness signature AND witness address. If you are having trouble finding a witness, contact <a href="https://myvote.wi.gov/en-US/MyMunicipalClerk" target="_blank" rel="noopener noreferrer">your municipal clerk</a>.</p>
                    </IonCardContent>
                  </IonCard>
                  <IonCard className="secondary">
                    <IonCardHeader>
                      <IonCardTitle>Return Your Ballot</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>Your completed absentee ballot must be received by Elections staff no later than 8 p.m. on Election Day</p>
                      <ul className="ion-text-start">
                        <li><p>By mail in the postage paid envelope provided</p></li>
                        <li><p>Directly to the Elections Office at 203 S. Farwell St., Monday - Friday 8 a.m. to 5 p.m.</p></li>
                        <li><p>Dropped off at Absentee Voting site during its operational hours</p></li>
                        <li><p>Placed in City of Eau Claire Ballot Drop Box. Locations of boxes:</p>
                          <ul>
                            <li>
                              <p>City Hall, 203 S Farwell St. (Located on south side of building on Grand Ave.)</p>
                            </li>
                            <li>
                              <p>Festival, 2615 N. Clairemont Ave.</p>
                            </li>
                            <li>
                              <p>Festival, 2717 Birch St.</p>
                            </li>
                            <li>
                              <p>Festival, 3007 Mall Dr.</p>
                            </li>
                          </ul>
                        </li>
                        <li><p>Directly to your <a href="https://myvote.wi.gov/en-US/FindMyPollingPlace" target="_blank" rel="noopener noreferrer">polling place</a> on Election Day, polls are open 7 a.m. to 8 p.m.</p>
                        </li>
                      </ul>
                    </IonCardContent>
                  </IonCard>
                  <IonButton href="https://myvote.wi.gov/en-us/TrackMyBallot" target="_blank" rel="noopener noreferrer">Check Ballot Status</IonButton>

                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-no-padding section" style={{ backgroundColor: 'rgba(204,12,37,0.3)' }}>

          <IonRow className="ion-justify-content-around">
            <IonCol className="ion-no-padding" size="12" sizeMd="10" sizeLg="8">
              <IonCard style={cardHeaderStyles} className="heading">
                <IonCardHeader>
                  <IonCardTitle><ReactFitText minFontSize={30} maxFontSize={60}><h1><span className="line">Vote Tuesday April 6</span></h1></ReactFitText></IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-around">
            <IonCol className="ion-no-padding" size="11" sizeMd="9" sizeLg="7">
              <IonCard>
                <IonCardContent>
                  <p>Find your <a href="https://myvote.wi.gov/en-us/FindMyPollingPlace" target="_blank" rel="noopener noreferrer">polling place</a>, you can register in person if you haven't yet.</p><br />
                  <p><span className="line">Polling places are open on Election Day from 7:00 am to 8:00 pm.</span> <span className="line"> All eligible voters in line at 8:00 pm get to vote.</span></p><br />
                  <p>
                    Photo ID <strong>is required </strong>to receive a ballot. To learn more about acceptable Photo ID visit <a href="http://www.bringitwisconsin.com/" target="_blank" rel="noopener noreferrer">Bring It to the Ballot</a>.
                    </p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>


        <IonCard className="footer" id="footer">
          <IonCardHeader>
            <IonCardTitle>
              <ReactFitText minFontSize={30} maxFontSize={60}><h1><span className="line">Reference Info</span></h1></ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}><h1><p><a href="https://www.eauclairewi.gov/government/our-divisions/elections" target="_blank" rel="noopener noreferrer">Eau Claire City Election Info </a></p></h1></ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}><h1><p><a href="https://www.co.eau-claire.wi.us/our-government/departments-and-facilities/department-directory/county-clerk/elections" target="_blank" rel="noopener noreferrer">Eau Claire County Election Info </a></p></h1></ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}><h1><p><a href="https://www.ci.altoona.wi.us/residents.phtml/voting/#voting" target="_blank" rel="noopener noreferrer">Altoona Election Info </a></p></h1></ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}><h1><p><a href="https://lakehallie.us/election-information/" target="_blank" rel="noopener noreferrer">Lake Hallie Election Info </a></p></h1></ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}><h1><p><a href="http://www.chippewafalls-wi.gov/your-government/city-clerk/elections" target="_blank" rel="noopener noreferrer">Chippewa Falls Election Info </a></p></h1></ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}><h1><p><a href="https://myvote.wi.gov/en-us/" target="_blank" rel="noopener noreferrer">Wisconsin Election Info </a></p></h1></ReactFitText><br />
              <ReactFitText minFontSize={10} maxFontSize={12} compressor={1.5}><h1><p>VoteEC.com is provided by an individual for informational purposes and is not affiliated with the city or county of Eau CLaire or the state of Wisconsin</p></h1></ReactFitText>
            </IonCardTitle>
          </IonCardHeader>
        </IonCard> */}
      </div>
      <div className="container flex justify-around place-items-center flex-col gap-4">
        <DaisyCard className='glass shadow-xl w-full'
          slotTitle={<div className='items-center text-center'><ReactFitText minFontSize={30} maxFontSize={60}><h1><span className="line">Vote Early in Person</span></h1></ReactFitText></div>}>
          <div className='items-center text-center'>
          <ReactFitText maxFontSize={30} minFontSize={18} compressor={1.5}><h2>  <span className="line">March 23 -</span> <span className="line">April 2</span></h2></ReactFitText>
          </div>
        </DaisyCard>
        <DaisyCard className='bg-base-100 shadow-xl w-3/4'>
          <div className='items-center text-center'>
            <p>Check your registration <a href="https://myvote.wi.gov/en-US/RegisterToVote" target="_blank" rel="noopener noreferrer">here</a>.</p>
            <div className='flex gap-2 justify-between'>
              <a className='btn btn-warning flex-grow' rel="noreferrer" target="_blank" href="https://myvote.wi.gov/en-us/RegisterToVote">ONLINE</a>
              <a className='btn btn-warning flex-grow' rel="noreferrer" target="_blank" href="https://myvote.wi.gov/en-US/MyMunicipalClerk">IN PERSON</a>
              <div className='flex flex-col gap-1 flex-grow'>
               <a className='btn btn-warning flex-grow' rel="noreferrer" target="_blank" href="https://elections.wi.gov/forms/el-131-fillable">BY MAIL</a>
              <p className="subtext">Mail to <a href="https://myvote.wi.gov/en-US/MyMunicipalClerk" target="_blank" rel="noopener noreferrer">your clerk</a>.</p>
              </div>
            </div>
          </div>
        </DaisyCard>
        {/* 
        
        <IonGrid className="ion-no-padding section" style={{ backgroundColor: 'rgba(204,12,37,0.3)' }}>
          <IonRow className="ion-justify-content-around">
            <IonCol className="ion-no-padding" size="12" sizeMd="10" sizeLg="8">
              <IonCard style={cardHeaderStyles} className="heading">
                <IonCardHeader>
                  <IonCardTitle><ReactFitText minFontSize={30} maxFontSize={60}><h1><span className="line">Vote Early in Person</span></h1></ReactFitText></IonCardTitle>
                  <IonCardSubtitle><ReactFitText maxFontSize={30} minFontSize={18} compressor={1.5}><h2>  <span className="line">March 23 -</span> <span className="line">April 2</span></h2></ReactFitText></IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-around">
            <IonCol className="ion-no-padding" size="11" sizeMd="9" sizeLg="7">
              <IonCard>
                <IonCardContent>
                  <p>
                    Photo ID <strong>is required </strong>to receive a ballot. To learn more about acceptable Photo ID visit <a href="http://www.bringitwisconsin.com/" target="_blank" rel="noopener noreferrer">Bring It to the Ballot</a>.
              </p>
                  <IonCard className="secondary">
                    <IonCardHeader>
                      <IonCardTitle>Eau Claire City Residents</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="ion-text-start">
                      <p>Drive Thru In-Person Absentee Voting for the Spring Election will be available (for City of Eau Claire Residents) as follows</p>
                      <br />
                      <p><strong>Location:</strong> City Hall parking lot, 203 S. Farwell St. </p><br />
                      <p><strong>Dates:</strong> Tuesday, March 23, 2021 through Friday, April 2, 2021 </p> <br />
                      <p><strong>Hours:</strong> Monday through Friday: 9 a.m. to 4 p.m.</p>                    <br />
                      <p> Enter the parking lot from Dewey Street only.   To allow for social distancing and to help keep poll workers and voters safe, a system has been created in the parking lot which will allow people to "drive-thru" , receive and cast their ballot.  A vehicle is not required to vote - walk-ups, bicycles, scooters, any mode of transportation can use this system to obtain and cast a ballot.  You may also register at this site.  You must be a City of Eau Claire resident.</p>
                    </IonCardContent>
                  </IonCard>
                  <IonCard className="secondary">
                    <IonCardHeader>
                      <IonCardTitle>Non Eau Claire Residents</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>Dates and hours vary, see your <a href="#footer">local election info website</a> or check with your <a href="https://myvote.wi.gov/en-US/MyMunicipalClerk" target="_blank" rel="noopener noreferrer">municipal clerk</a>.</p>
                    </IonCardContent>
                  </IonCard>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="ion-no-padding section" style={{ backgroundColor: 'rgba(60,59,210,0.3)' }}>
          <IonRow className="ion-justify-content-around">
            <IonCol className="ion-no-padding" size="12" sizeMd="10" sizeLg="8">
              <IonCard style={cardHeaderStyles} className="heading">
                <IonCardHeader>
                  <IonCardTitle><ReactFitText minFontSize={30} maxFontSize={60}><h1><span className="line">Return Your Absentee Ballot</span></h1></ReactFitText></IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-around">
            <IonCol className="ion-no-padding" size="11" sizeMd="9" sizeLg="7">
              <IonCard>
                <IonCardContent>
                  <IonCard className="secondary">
                    <IonCardHeader>
                      <IonCardTitle>Fill Out Your Ballot</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="ion-text-start">
                      <p>Follow<a href="https://elections.wi.gov/sites/elections.wi.gov/files/2020-09/Uniform%20Absentee%20Instructions%20-%20Current%20-%20By-Mail%20Voters.pdf" target="_blank" rel="noopener noreferrer"> directions</a> carefully and be sure to sign where indicated.</p>
                      <p>You need one witness signature with the witness signature AND witness address. If you are having trouble finding a witness, contact <a href="https://myvote.wi.gov/en-US/MyMunicipalClerk" target="_blank" rel="noopener noreferrer">your municipal clerk</a>.</p>
                    </IonCardContent>
                  </IonCard>
                  <IonCard className="secondary">
                    <IonCardHeader>
                      <IonCardTitle>Return Your Ballot</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>Your completed absentee ballot must be received by Elections staff no later than 8 p.m. on Election Day</p>
                      <ul className="ion-text-start">
                        <li><p>By mail in the postage paid envelope provided</p></li>
                        <li><p>Directly to the Elections Office at 203 S. Farwell St., Monday - Friday 8 a.m. to 5 p.m.</p></li>
                        <li><p>Dropped off at Absentee Voting site during its operational hours</p></li>
                        <li><p>Placed in City of Eau Claire Ballot Drop Box. Locations of boxes:</p>
                          <ul>
                            <li>
                              <p>City Hall, 203 S Farwell St. (Located on south side of building on Grand Ave.)</p>
                            </li>
                            <li>
                              <p>Festival, 2615 N. Clairemont Ave.</p>
                            </li>
                            <li>
                              <p>Festival, 2717 Birch St.</p>
                            </li>
                            <li>
                              <p>Festival, 3007 Mall Dr.</p>
                            </li>
                          </ul>
                        </li>
                        <li><p>Directly to your <a href="https://myvote.wi.gov/en-US/FindMyPollingPlace" target="_blank" rel="noopener noreferrer">polling place</a> on Election Day, polls are open 7 a.m. to 8 p.m.</p>
                        </li>
                      </ul>
                    </IonCardContent>
                  </IonCard>
                  <IonButton href="https://myvote.wi.gov/en-us/TrackMyBallot" target="_blank" rel="noopener noreferrer">Check Ballot Status</IonButton>

                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-no-padding section" style={{ backgroundColor: 'rgba(204,12,37,0.3)' }}>

          <IonRow className="ion-justify-content-around">
            <IonCol className="ion-no-padding" size="12" sizeMd="10" sizeLg="8">
              <IonCard style={cardHeaderStyles} className="heading">
                <IonCardHeader>
                  <IonCardTitle><ReactFitText minFontSize={30} maxFontSize={60}><h1><span className="line">Vote Tuesday April 6</span></h1></ReactFitText></IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-around">
            <IonCol className="ion-no-padding" size="11" sizeMd="9" sizeLg="7">
              <IonCard>
                <IonCardContent>
                  <p>Find your <a href="https://myvote.wi.gov/en-us/FindMyPollingPlace" target="_blank" rel="noopener noreferrer">polling place</a>, you can register in person if you haven't yet.</p><br />
                  <p><span className="line">Polling places are open on Election Day from 7:00 am to 8:00 pm.</span> <span className="line"> All eligible voters in line at 8:00 pm get to vote.</span></p><br />
                  <p>
                    Photo ID <strong>is required </strong>to receive a ballot. To learn more about acceptable Photo ID visit <a href="http://www.bringitwisconsin.com/" target="_blank" rel="noopener noreferrer">Bring It to the Ballot</a>.
                    </p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>


        <IonCard className="footer" id="footer">
          <IonCardHeader>
            <IonCardTitle>
              <ReactFitText minFontSize={30} maxFontSize={60}><h1><span className="line">Reference Info</span></h1></ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}><h1><p><a href="https://www.eauclairewi.gov/government/our-divisions/elections" target="_blank" rel="noopener noreferrer">Eau Claire City Election Info </a></p></h1></ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}><h1><p><a href="https://www.co.eau-claire.wi.us/our-government/departments-and-facilities/department-directory/county-clerk/elections" target="_blank" rel="noopener noreferrer">Eau Claire County Election Info </a></p></h1></ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}><h1><p><a href="https://www.ci.altoona.wi.us/residents.phtml/voting/#voting" target="_blank" rel="noopener noreferrer">Altoona Election Info </a></p></h1></ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}><h1><p><a href="https://lakehallie.us/election-information/" target="_blank" rel="noopener noreferrer">Lake Hallie Election Info </a></p></h1></ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}><h1><p><a href="http://www.chippewafalls-wi.gov/your-government/city-clerk/elections" target="_blank" rel="noopener noreferrer">Chippewa Falls Election Info </a></p></h1></ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}><h1><p><a href="https://myvote.wi.gov/en-us/" target="_blank" rel="noopener noreferrer">Wisconsin Election Info </a></p></h1></ReactFitText><br />
              <ReactFitText minFontSize={10} maxFontSize={12} compressor={1.5}><h1><p>VoteEC.com is provided by an individual for informational purposes and is not affiliated with the city or county of Eau CLaire or the state of Wisconsin</p></h1></ReactFitText>
            </IonCardTitle>
          </IonCardHeader>
        </IonCard> */}
      </div>
    </div>

  );
};

export default Vote;
