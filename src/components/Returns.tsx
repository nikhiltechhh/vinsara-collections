import React from 'react';

export default function Returns() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-12 text-gray-900">
          Returns & Exchanges
        </h1>

        {/* Content */}
        <div className="space-y-8 text-gray-700">
          {/* Cancellation, Return and Exchange Section */}
          <div>
            <h2 className="text-lg font-semibold mb-6 text-gray-900 underline">
              Cancellation, Return and Exchange
            </h2>
            
            {/* Cancellation */}
            <div className="mb-6">
              <h3 className="text-base font-semibold mb-3 text-gray-900">Cancellation</h3>
              <div className="space-y-4 text-base font-light leading-relaxed">
                <p>
                  Cancellations can be made within 24 hours of placing an order. The order may be cancelled by addressing an email to us or by calling and cancelling the order at the given customer care number.
                </p>
                <p>
                  In the event an order is cancelled, which is accepted as cancelled then we will refund the money sent to us by you with in 15 working days.
                </p>
              </div>
            </div>

            {/* Online Return Policy */}
            <div className="mb-6">
              <h3 className="text-base font-semibold mb-3 text-gray-900">Online Return Policy</h3>
              <div className="space-y-4 text-base font-light leading-relaxed">
                <p>
                  Our return policy is clearly defined for each product on its page. Not all products are eligible for returns. Many items are "Final Sale." Products that are not eligible for returns are clearly marked as "Final Sale" on the Product page for that Product. Please make sure to note if the product ordered is eligible for return at the time of purchasing a . Only products that are not labeled as "Final Sale" at the time they are purchased can be returned as per the return policy, set for returned.
                </p>
                <p>
                  In case you receive a product with a manufacturing defect request you to touch with us immediately. We will request you to kindly email us the photographs of the defective product and appropriate action will be taken by our customer care team thereafter.
                </p>
                <p>
                  You may return any eligible product you have ordered within 7 days from receipt of delivery of merchandise. Eligible products for return will be indicated on the product page. If your item is returnable, please note 'Items arriving after the 7 day return policy will not be accepted and will be returned to sender.
                </p>
                <p>
                  Please write to us by e-mail - on <span className="font-medium">contact@vinsaraa.com</span> or call us at the customer care number and state the reason of your return in the subject line of the email . Our customer care team will authorise the return and issue you the courier details.
                </p>
                <p>
                  Our store administrators on receiving the products may approve or reject your return request, regarding which you will be notified by email . Our Customer Care team must receive and approve your return request. Once your request is received and approved, we will issue a return authorization number and a courier packing label for you to use.
                </p>
                <p>
                  <span className="font-semibold">IMPORTANT:</span> Please note that any items returned without an authorization number will not be processed . Returns of goods that are not in their original packaging will not be accepted and refused . Please note that goods should be in original condition for them to be eligible for return. The product should be unused, unsown, unwashed and undamaged and all packaging, labels and tags must remain intact and be attached with the item. If these are not available the product will not be eligible for return.
                </p>
                <p>
                  Once the goods have been received by us and if the goods are as per our return policy we will then process your refund. Please note the refund takes about 15days to be processed and returned to your account.
                </p>
                <p>
                  All returns are subject to the discretion of Vinsaraa.
                </p>
              </div>
            </div>

            {/* Exchange */}
            <div>
              <h3 className="text-base font-semibold mb-3 text-gray-900">Exchange</h3>
              <p className="text-base font-light leading-relaxed">
                At present, we do not have an exchange policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}