import React from 'react';

export default function Shipping() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-12 text-gray-900">
          Shipping & Payment
        </h1>

        {/* Content */}
        <div className="space-y-8 text-gray-700">
          {/* Payments Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Payments</h2>
            <p className="text-base font-light leading-relaxed mb-6">
              Payments on Vinsaraa can be made through Debit Cards, Credit Cards, Cash Cards, Net Banking and Cash On Delivery.
            </p>
          </div>

          {/* Card Payments Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Card Payments and Net Banking</h3>
            
            <div className="space-y-4 text-base font-light leading-relaxed">
              <p>We accept Master, VISA & American Express</p>
              
              <p>We also accept Net Banking through banks.</p>
              
              <p>Payments through credit cards are accepted through our secure online payment gateway partners.</p>
              
              <p>
                In a credit card transaction, you must use a credit card that is preferably in the name of the person placing the order. However, this is not a precondition for placing orders with us. We will not be liable for any card fraud because of the card being used fraudulently. The liability to prevent use of a credit card fraudulently is on you and the onus to 'prove otherwise' exclusively rests on you in event of a probable fraud.
              </p>
              
              <p>
                Vinsaraa handles and stores all personal information received from you in accordance with the provisions of applicable law. Please refer to our Privacy Policy in this regard.
              </p>
            </div>
          </div>

          {/* Cash on Delivery Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Cash on Delivery (COD)</h3>
            
            <div className="space-y-4 text-base font-light leading-relaxed">
              <p>COD is an option to pay at delivery for your product instead of, in advance.</p>
              
              <p>
                The maximum single order limit for COD is Rs. 10,000/-. There is no limit on the number of orders you can place under COD. However, each dispatch under COD will be made after receiving payment of all preceding orders.
              </p>
              
              <p>All orders placed via COD will be verified electronically or telephonically before the dispatch takes place.</p>
              
              <p>The option of COD is not available for delivery outside India.</p>
              
              <p>Vinsaraa may refuse COD transaction at its discretion.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}