import { Parallax } from "react-parallax";
import ReactFitText from "react-fittext";
import { DaisyCard } from "./daisy/Card";
import { s3url } from "~/config";
import { VoteSection } from "~/components/VoteSection";

const Vote = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="container">
        <div className="flex flex-col place-items-center justify-around gap-4">
          <picture className="max-w-fit self-center">
            <img
              sizes="(max-width: 851px) 100vw, 851px"
              srcSet={`
  ${s3url}/vote/images/votewall/votewall_i41cju_c_scale,w_200.jpg 200w,
  ${s3url}/vote/images/votewall/votewall_i41cju_c_scale,w_311.jpg 311w,
  ${s3url}/vote/images/votewall/votewall_i41cju_c_scale,w_402.jpg 402w,
  ${s3url}/vote/images/votewall/votewall_i41cju_c_scale,w_480.jpg 480w,
  ${s3url}/vote/images/votewall/votewall_i41cju_c_scale,w_551.jpg 551w,
  ${s3url}/vote/images/votewall/votewall_i41cju_c_scale,w_619.jpg 619w,
  ${s3url}/vote/images/votewall/votewall_i41cju_c_scale,w_851.jpg 851w`}
              src={`${s3url}/vote/images/votewall/votewall_i41cju_c_scale,w_851.jpg`}
              alt="Eau Claire Vote Mural"
            />
          </picture>
          <div className="w-3/4">
            <DaisyCard className="w-full bg-base-100 shadow-xl">
              VOTE mural, in collaboration with the Eau Claire Public Council
              and Chippewa Valley Votes, was created by Clark Stoeckley and is
              located on Ramone's Ice Cream Parlor, facing North Farwell St.
              downtown Eau Claire. Photo by Kevin Stoner
            </DaisyCard>
          </div>
        </div>
      </div>
      <Parallax
        bgImageSizes="100vw"
        bgImageSrcSet={`
        ${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
        ${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_1_1,c_fill,g_auto__c_scale,w_413.jpg 413w,
        ${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_1_1,c_fill,g_auto__c_scale,w_567.jpg 567w,
        ${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_1_1,c_fill,g_auto__c_scale,w_687.jpg 687w,
        ${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w,
${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_4_3,c_fill,g_auto__c_scale,w_768.jpg 768w,
${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_4_3,c_fill,g_auto__c_scale,w_891.jpg 891w,
${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_4_3,c_fill,g_auto__c_scale,w_979.jpg 979w,
${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_4_3,c_fill,g_auto__c_scale,w_991.jpg 991w,
${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_16_9,c_fill,g_auto__c_scale,w_992.jpg 992w,
${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_16_9,c_fill,g_auto__c_scale,w_1119.jpg 1119w,
${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_ar_16_9,c_fill,g_auto__c_scale,w_1199.jpg 1199w,
${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_c_scale,w_1200.jpg 1200w,
${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_c_scale,w_1295.jpg 1295w,
${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_c_scale,w_1396.jpg 1396w,
${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_c_scale,w_1400.jpg 1400w`}
        bgImage={`${s3url}/vote/images/clark-van-der-beken-Tk0B3Dfkf_4-unsplash/clark-van-der-beken-Tk0B3Dfkf_4-unsplash_udkirh_c_scale,w_1400.jpg`}
        className="my-4 w-full px-4"
        strength={500}
      >
        <div className="container my-4">
          <DaisyCard
            className="glass w-full shadow-xl"
            slotActions={
              <div className="flex w-full place-content-center">
                <a
                  className="btn btn-warning btn-lg btn-wide"
                  href="https://myvote.wi.gov/en-US/PreviewMyBallot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ReactFitText
                    minFontSize={18}
                    maxFontSize={35}
                    compressor={1.5}
                  >
                    <h2>What's On My Ballot</h2>
                  </ReactFitText>
                </a>
              </div>
            }
          >
            <div className="items-center text-center text-black">
              <ReactFitText maxFontSize={55} compressor={1.5}>
                <h2>
                  <span className="line font-semibold">
                    Eau Claire's Next Election is the 2022 Partisan Primary on
                  </span>
                </h2>
              </ReactFitText>
              <ReactFitText minFontSize={30} maxFontSize={85}>
                <h1>
                  <span className="line font-extrabold">TUESDAY, AUGUST 9</span>
                </h1>
              </ReactFitText>
            </div>
          </DaisyCard>
        </div>
      </Parallax>
      <div className="flex flex-col place-items-center justify-around">
        <div className="w-full bg-blueTransparent py-8 px-4">
          <VoteSection
            slotTitle="REGISTER TO VOTE"
            slotSubtitle={
              <span>
                <a
                  href="https://myvote.wi.gov/en-US/RegisterToVote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link "
                >
                  Check your registration
                </a>
              </span>
            }
          >
            <span>
              Check your registration{" "}
              <a
                href="https://myvote.wi.gov/en-US/RegisterToVote"
                target="_blank"
                rel="noopener noreferrer"
                className="link "
              >
                here
              </a>
            </span>
            <div className="flex justify-between gap-4">
              <div className="flex basis-1/3 flex-col gap-1">
                <a
                  className="btn btn-warning"
                  rel="noreferrer"
                  target="_blank"
                  href="https://myvote.wi.gov/en-us/RegisterToVote"
                >
                  ONLINE
                </a>
                <p className="subtext text-center">By July 20</p>
              </div>
              <div className="flex basis-1/3 flex-col gap-1">
                <a
                  className="btn btn-warning"
                  rel="noreferrer"
                  target="_blank"
                  href="https://myvote.wi.gov/en-US/MyMunicipalClerk"
                >
                  IN PERSON
                </a>
                <p className="subtext text-center">
                  Up to and including on election day
                </p>
              </div>
              <div className="flex basis-1/3 flex-col gap-1">
                <a
                  className="btn btn-warning"
                  rel="noreferrer"
                  target="_blank"
                  href="https://elections.wi.gov/forms/el-131-fillable"
                >
                  BY MAIL
                </a>
                <p className="subtext text-center">
                  Mail to{" "}
                  <a
                    href="https://myvote.wi.gov/en-US/MyMunicipalClerk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link "
                  >
                    your clerk
                  </a>{" "}
                  by July 20.
                </p>
              </div>
            </div>
          </VoteSection>
        </div>
        <div className="w-full bg-redTransparent py-8 px-4">
          <VoteSection
            slotTitle="Vote Early in Person"
            slotSubtitle="Dates to be determined"
          >
            <div className="items-center text-center">
              <p>
                Photo ID <strong>is required </strong>to receive a ballot. To
                learn more about acceptable Photo ID visit{" "}
                <a
                  href="https://bringit.wi.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link "
                >
                  Bring It to the Ballot
                </a>
                .<br /> <br />
              </p>
              <DaisyCard
                title="City of Eau Claire Residents"
                className="min-w-full bg-base-100 shadow-xl"
              >
                <div className="text-left">
                  <p>Drive Thru In-Person Absentee Voting</p>
                  <br />
                  <p>To be determined</p>
                  {/* <p>
                    <strong>Location:</strong> City Hall parking lot, 203 S.
                    Farwell St.
                  </p>
                  <br />
                  <p>
                    <strong>Dates:</strong> Tuesday, March 22, 2022 through
                    Friday, April 1, 2022
                  </p>
                  <br />
                  <p>
                    <strong>Hours:</strong> Monday through Friday: 9 a.m. to 4
                    p.m.
                  </p> */}
                </div>
              </DaisyCard>
              <DaisyCard
                title="Non Eau Claire Residents"
                className="mt-4 min-w-full bg-base-100 shadow-xl"
              >
                <p className="text-left">
                  Dates and hours vary, see your{" "}
                  <a href="#footer" className="link">
                    local election info website
                  </a>{" "}
                  or check with your{" "}
                  <a
                    href="https://myvote.wi.gov/en-US/MyMunicipalClerk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    municipal clerk
                  </a>
                  .
                </p>
              </DaisyCard>
            </div>
          </VoteSection>
        </div>
        <div className="w-full bg-blueTransparent py-8 px-4">
          <VoteSection slotTitle="VOTING ABSENTEE">
            <div className="flex flex-col items-center gap-4 text-center">
              <DaisyCard
                title="REQUEST A BALLOT"
                className="min-w-full bg-base-100 shadow-xl"
              >
                <div className="text-left">
                  If you will be out of town on an election day and still want
                  to vote, learn about{" "}
                  <a
                    href="/home/showpublisheddocument/34475/637461332985700000"
                    target="_blank"
                    className="link"
                  >
                    absentee voting
                  </a>
                  . You may also{" "}
                  <a
                    className="link"
                    href="http://myvote.wi.gov/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <strong>request an absentee ballot</strong>
                  </a>{" "}
                  at{" "}
                  <a
                    className="link"
                    href="http://myvote.wi.gov/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    myvote.wi.gov
                  </a>
                  .
                </div>
              </DaisyCard>
              <DaisyCard
                title="FILL OUT YOUR BALLOT"
                className="min-w-full bg-base-100 shadow-xl"
              >
                <div className="text-left">
                  <p>
                    Follow{" "}
                    <a
                      href="https://www.eauclairewi.gov/home/showpublisheddocument/34475/637461332985700000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link "
                    >
                      directions
                    </a>{" "}
                    carefully and be sure to sign where indicated.
                  </p>
                  <p>
                    You need one witness signature with the witness signature
                    AND witness address. If you are having trouble finding a
                    witness, contact{" "}
                    <a
                      href="https://myvote.wi.gov/en-US/MyMunicipalClerk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link "
                    >
                      your municipal clerk
                    </a>
                    .
                  </p>
                </div>
              </DaisyCard>
              <DaisyCard
                title="RETURN YOUR BALLOT"
                className="min-w-full bg-base-100 shadow-xl"
              >
                <div className="text-left">
                  <p className="py-2">
                    Your completed absentee ballot must be received by Elections
                    staff no later than 8 p.m. on Election Day
                  </p>
                  <ul className="list-inside list-disc">
                    <li>By mail in the postage paid envelope provided</li>
                    <li>
                      Directly to the Elections Office at 203 S. Farwell St.,
                      Monday - Friday 8 a.m. to 5 p.m.
                    </li>
                    <li>
                      Dropped off at Absentee Voting site during its operational
                      hours
                    </li>
                    <li>
                      Directly to your{" "}
                      <a
                        href="https://myvote.wi.gov/en-US/FindMyPollingPlace"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link "
                      >
                        polling place
                      </a>{" "}
                      on Election Day, polls are open 7 a.m. to 8 p.m.
                    </li>
                  </ul>
                </div>
              </DaisyCard>
            </div>
          </VoteSection>
        </div>
        <div className="w-full bg-redTransparent py-8 px-4">
          <VoteSection slotTitle="VOTE TUESDAY AUGUST 9">
            <p>
              Find your{" "}
              <a
                href="https://myvote.wi.gov/en-us/FindMyPollingPlace"
                target="_blank"
                rel="noopener noreferrer"
                className="link "
              >
                polling place
              </a>
              , you can register in person if you haven't yet.
            </p>
            <p>
              <span className="line">
                Polling places are open on Election Day from 7:00 am to 8:00 pm.
              </span>{" "}
              <span className="line">
                All eligible voters in line at 8:00 pm get to vote.
              </span>
            </p>
            <p>
              Photo ID <strong>is required </strong>to receive a ballot. To
              learn more about acceptable Photo ID visit{" "}
              <a
                href="https://bringit.wi.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="link "
              >
                Bring It to the Ballot
              </a>
              .
            </p>
          </VoteSection>
        </div>
        <div className="w-full bg-blueTransparent py-8 px-4" id="footer">
          <DaisyCard className="container flex flex-col place-items-center items-center justify-around bg-base-100 text-center shadow-xl">
            <div>
              {" "}
              <ReactFitText minFontSize={30} maxFontSize={60}>
                <h1>
                  <span className="uppercase">Reference Info</span>
                </h1>
              </ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}>
                <h1>
                  <p>
                    <a
                      href="https://www.eauclairewi.gov/government/our-divisions/elections"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link "
                    >
                      Eau Claire City Election Info{" "}
                    </a>
                  </p>
                </h1>
              </ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}>
                <h1>
                  <p>
                    <a
                      href="https://www.co.eau-claire.wi.us/our-government/departments-and-facilities/department-directory/county-clerk/elections"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link "
                    >
                      Eau Claire County Election Info{" "}
                    </a>
                  </p>
                </h1>
              </ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}>
                <h1>
                  <p>
                    <a
                      href="https://www.ci.altoona.wi.us/residents.phtml/voting/#voting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link "
                    >
                      Altoona Election Info{" "}
                    </a>
                  </p>
                </h1>
              </ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}>
                <h1>
                  <p>
                    <a
                      href="https://lakehallie.us/election-information/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link "
                    >
                      Lake Hallie Election Info{" "}
                    </a>
                  </p>
                </h1>
              </ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}>
                <h1>
                  <p>
                    <a
                      href="http://www.chippewafalls-wi.gov/your-government/city-clerk/elections"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link "
                    >
                      Chippewa Falls Election Info{" "}
                    </a>
                  </p>
                </h1>
              </ReactFitText>
              <ReactFitText minFontSize={16} maxFontSize={24} compressor={1.5}>
                <h1>
                  <p>
                    <a
                      href="https://myvote.wi.gov/en-us/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link "
                    >
                      Wisconsin Election Info{" "}
                    </a>
                  </p>
                </h1>
              </ReactFitText>
              <br />
              <ReactFitText minFontSize={10} maxFontSize={12} compressor={1.5}>
                <h1>
                  <p>
                    VoteEC.com is provided by an individual for informational
                    purposes and is not affiliated with the city or county of
                    Eau CLaire or the state of Wisconsin
                  </p>
                </h1>
              </ReactFitText>
            </div>
          </DaisyCard>
        </div>
      </div>
    </div>
  );
};

export default Vote;
