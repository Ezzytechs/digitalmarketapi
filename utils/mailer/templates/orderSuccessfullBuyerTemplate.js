const credentials = require("../../../configs/credentials");

exports.orderSuccessfullBuyerTemplate = ({
  buyerName,
  assetTitle,
  price,
  orderId,
  buyerEmail,
}) => {
  const year = new Date().getFullYear();

  return `<!doctype html>
<html lang="en">
  <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color:#111827; color:#F9FAFB; margin:0; padding:20px;">
    <div style="max-width:600px; margin:40px auto; padding:20px;">
      <div style="background:#1F2937; border-radius:16px; padding:30px 25px; box-shadow:0 6px 20px rgba(0,0,0,0.5);">
        
        <!-- Header -->
        <h2 style="font-size:22px; color:#10B981; margin-bottom:15px;">
          ✅ Order Confirmed
        </h2>
        
        <!-- Greeting -->
        <p style="line-height:1.6; margin:10px 0; color:#E5E7EB;">
          Hi <strong>${buyerName}</strong>,
        </p>

        <!-- Order Info -->
        <p style="line-height:1.6; margin:10px 0; color:#E5E7EB;">
          Your purchase of <strong style="color:#FACC15;">${assetTitle}</strong> was successful 🎉
          <br />
          <strong>Total paid:</strong> <span style="color:#FACC15;">$${price}</span>
        </p>
        
        <!-- Credentials Info -->
        <p style="line-height:1.6; margin:14px 0; color:#E5E7EB;">
          The seller is expected to provide the required credentials shortly. 
          You’ll receive another notification as soon as they are submitted.
        </p>

        <!-- Cancellation Notice -->
        <div style="background:#111827; border:1px solid #374151; border-radius:12px; padding:16px; margin:20px 0;">
          <p style="margin:0 0 10px 0; color:#F9FAFB; font-weight:600;">
            Need to cancel your order?
          </p>
          <p style="margin:0 0 12px 0; color:#D1D5DB; line-height:1.6;">
            You may cancel this order <strong>only if the seller has not yet provided the credentials</strong>.
            Once credentials are submitted, cancellation will no longer be possible.
          </p>

          <a
            href="${credentials.appUrl}/manage-orders/cancel/${orderId}/${buyerEmail}"
            style="
              display:inline-block;
              background:#EF4444;
              color:#FFFFFF;
              padding:10px 18px;
              border-radius:8px;
              text-decoration:none;
              font-weight:600;
            "
          >
            Cancel Order
          </a>
        </div>

        <!-- Footer -->
        <p style="font-size:12px; color:#9CA3AF; text-align:center; margin-top:25px;">
          © ${year} DigiAssets • Order Confirmation
        </p>
      </div>
    </div>
  </body>
</html>`;
};
