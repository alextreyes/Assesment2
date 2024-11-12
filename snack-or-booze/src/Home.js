import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
// allowed it to accept either snacks and drinks, also added p to show the counts of items
function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>
            <b>Snacks:</b> {snacks.length}
            <br />
            <b>Drinks:</b> {drinks.length}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
