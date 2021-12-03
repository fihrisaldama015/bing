import React from "react";
import "./Article.css";

const Article = () => {
  return (
    <div>
      <div id="date">
        <div class="garis"></div>
        <p className="date">3 December 2021</p>
      </div>
      <div id="article">
        <section id="main">
          <div className="Card Rounded padding Card-shadow">
            <p>Hey folks!</p>
            <p>
              Covid-19 has been going on for years now, unfortunately, there are
              some problems we found with the end of the pandemic rising on the
              horizon. Social distancing that was a part of the daily lives of
              many now seems to be missing. in public places, we often see
              people not implementing the social distancing rule. Then, how do
              we make people more and more aware of this social distancing
              issue?
            </p>
            <p>
              One of the ways to address the problem is to increase public
              awareness for social distancing. The people have to know if
              they’re implementing social distancing or not. Smartphone apps are
              seen as one solution but it’s the physical devices that may be
              more effective. Therefore, a smartwatch or smart-wearables could
              be a solution.
            </p>
            <p>
              A smartwatch can only limitedly do what a smartphone does. But,
              the smartwatch on the other hand is more practical than a phone.
              To be a solution to the social distancing problem, the smartwatch
              needs to have some required features. The first feature is to be
              able to detect or measure the distance between people. the
              smartwatch needs to be able to read, thanks to the wireless signal
              of Bluetooth frequency, the movement of the human body and monitor
              the distance to another smartwatch. If two smartwatches are in
              proximity, they will vibrate gently and emit a warning signal,
              helping people maintain the required safety distance.{" "}
            </p>
            <p>
              The smartwatch can be paired with a smartphone. Therefore, not
              only the smartwatch can measure the distance, but it can also
              monitor crowded places via the phone app and do a notification to
              the wearer if they want to go to said places. The other feature of
              the smartwatch is to be capable of detecting body parameters and
              sending an alert when the body temperature exceeds 37.5 °C. being
              light, ergonomic, and small, the smartwatch can be used at any
              time and anywhere. The smartwatch can be used indoors, in
              factories and offices, but also outdoors, in places such as
              tourist villages, sporting clubs, or entertainment parks.
            </p>
            <p>
              The other way to plant the social distancing behavior is via
              contactless deliveries. To stop the spread of Covid-19 we are all
              trying to minimize contact with others. Contactless deliveries
              mean fewer people we interact with within close distance making it
              less likely that we will be passing the virus to each other.
            </p>
            <p>
              This contactless delivery can be further enhanced by using
              delivery robots. The robot act as a courier to replace the
              interaction between the sender and receiver of the package. Robot
              designs. But generally, they’ll need to use cameras, sensors, GPS,
              and even laser scanners to navigate sidewalks and even cross
              streets autonomously.{" "}
            </p>
            <p>
              Remote operators will still be needed to keep tabs on multiple
              robots at a time. but their interference will only be needed
              rarely to hit the brakes or steer around an obstacle. When a robot
              arrives at its destination, customers type a code into their
              phones to open the lid and retrieve their food.
            </p>
            <p>
              Robots have the drawback that limits their immediate usefulness.
              They are electric and need to be recharged regularly. They are
              slow and usually stay within a small pre-assigned radius. The
              robots are also inflexible. It cannot be operated without a proper
              environment. For example, it is best not to operate the robot in
              crowded places.
            </p>
            <p>
              The robots however can be operated in a small community such as
              university complexes. It can be a connector between shops and
              students. To minimize the impact of the inflexibility of the
              robots, every building can have a designated area to receive the
              deliveries.
            </p>
            <p>
              Well that two of our ideas to address the social distancing
              problem. But at the end of the day, these technologies can only
              facilitate us to be more aware of social distancing. It is
              ourselves that implements the social distancing behavior. So keep
              your distance, folks. Thank you for reading. Have a spectacular
              day and see you next time.
            </p>
          </div>
        </section>
        <section id="credit">
          <div className="info">
            <h1>OUR MENTOR</h1>
          </div>
          <div class="info-content">Dwi Wahyuningtyas, S.Pd., M.A.</div>
          <div className="info">
            <h1>CLASS</h1>
          </div>
          <div class="info-content">G647</div>
          <div className="info">
            <h1>CATEGORY</h1>
          </div>
          <div class="info-content list">
            <ul>
              <li>Technology</li>
              <li>Robot</li>
              <li>E-Commerce</li>
              <li>Pandemic</li>
              <li>Covid-19</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Article;
