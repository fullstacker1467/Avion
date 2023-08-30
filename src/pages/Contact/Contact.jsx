import React from "react";

function Contact() {
  return (
    <div>
      <div className="container py-12">
        <h1 className="text-4xl my-10">Contact-AvionCorp</h1>
        <div className="flex flex-wrap items-center my-20">
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <h3>Do you have any questions?</h3>
            <h3>My operator friends always have the answers!</h3>
            <h3>Call us every day from 08:00 to 23:00</h3>
            <h3>at the number: 78 222 2222.</h3>
            <h3 className="my-4">
              We will be happy to help you place an order for take-out or
              delivery.
            </h3>
            <h3 className="my-4">
              Delivery is carried out throughout the city of Tashkent. The cost
              depends on the distance.
            </h3>
            <h3>
              The first 3 kilometers - 9,000 soums, after, each subsequent 1,500
              soums. Delivery hours: 09:00 - 22:00.
            </h3>
          </div>
          <img
            className="w-full md:w-1/2 rounded-lg"
            src="https://www.newcastle.edu.au/__data/assets/image/0010/795079/Q-Building-WEB.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
