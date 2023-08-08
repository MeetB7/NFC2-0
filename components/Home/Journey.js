import Image from "next/image";
import Card from "../Card";
import SectionLayout from "../SectionLayout";

const Journey = () => {
  return (
    <SectionLayout
      Title={"JOURNEY OF NEED FOR CODE"}
      Classname={"venue-section-container built-section"}
    >
      {/* <div className="super-outer-circle">
        <div className="text text-1">
          <h2>20+</h2>
          <p>Successful Events</p>
        </div>
        <div className="outer-outer-circle">
          <div className="text text-2">
            <h2>24+</h2>
            <p>Hack Hours</p>
          </div>
          <div className="text text-3">
            <h2>150+</h2>
            <p>Projects</p>
          </div>
          <div className="outer-circle">
            <div className="text text-4">
              <h2>200+</h2>
              <p>Team Registeration</p>
            </div>
            <div className="text text-5">
              <h2>50+ Team</h2>
              <p>Participanting</p>
            </div>
            <div className="inner-circle">
              <div className="center-circle">
                <div className="planet">
                  <Image
                    src={"/images/built/planet.svg"}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        className="cloud cloudOne"
        src={"/images/built/cloudOne.svg"}
        alt="Hack the space"
        width={80}
        height={50}
      />
      <Image
        className="cloud cloudTwo"
        src={"/images/built/cloudTwo.svg"}
        alt="Hack the space"
        width={50}
        height={40}
      />
      <div className="stars">
        <Image
          src="/images/stars.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
      <div className="pattern3">
        <Image
          src="/images/pattern3.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
      <div className="pattern4">
        <Image
          src="/images/pattern4.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div> */}
      <div
        id="journey"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Card
          heading={"Total Registrations"}
          content={"150+ teams registered"}
        />
        <Card heading={"Total Teams"} content={"45+ teams registered"} />
      </div>
    </SectionLayout>
  );
};

export default Journey;
