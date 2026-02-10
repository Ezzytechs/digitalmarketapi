const credentials = require("../../../configs/credentials");

exports.credentialsSubmittedNonRegUserTemplate = ({
  buyerName,
  assetTitle,
  loginName,
  password,
  note,
  orderId,
  buyerEmail,
}) => {
  const year = new Date().getFullYear();

  const reportLink = `${credentials.appUrl}/manage-orders/fake/${orderId}/${buyerEmail}`;

  return `<!doctype html>
<html lang="en">
  <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color:#111827; color:#F9FAFB; margin:0; padding:20px;">
    <div style="max-width:600px; margin:40px auto; padding:20px;">
      <div style="background:#1F2937; border-radius:16px; padding:30px 25px; box-shadow:0 6px 20px rgba(0,0,0,0.5);">
        
        <!-- Header -->
        <h2 style="font-size:22px; color:#22C55E; margin-bottom:15px;">
          🔑 Credentials Submitted
        </h2>
        
        <!-- Greeting -->
        <p style="line-height:1.6; margin:10px 0; color:#E5E7EB;">
          Hi <strong>${buyerName}</strong>,
        </p>

        <p style="line-height:1.6; margin:10px 0; color:#E5E7EB;">
          The seller has submitted the credentials for 
          <strong style="color:#FACC15;">${assetTitle}</strong>.
          Please review them carefully.
        </p>
        
        <!-- Credentials Section -->
        <div style="background:#111827; border:1px solid #374151; border-radius:12px; padding:20px; margin:20px 0;">
          <h3 style="color:#FACC15; margin-bottom:10px;">Provided Credentials</h3>
          <p style="margin:5px 0; color:#E5E7EB;">
            <strong>Login Name:</strong> ${loginName}
          </p>
          <p style="margin:5px 0; color:#E5E7EB;">
            <strong>Password:</strong> ${password}
          </p>
          ${
            note
              ? `<p style="margin:5px 0; color:#E5E7EB;"><strong>Note:</strong> ${note}</p>`
              : ""
          }
        </div>

        <!-- Important Notice -->
        <div style="background:#111827; border:1px solid #7C2D12; border-radius:12px; padding:16px; margin:22px 0;">
          <p style="margin:0 0 10px 0; color:#F9FAFB; font-weight:600;">
            ⚠️ Important — Please Read
          </p>
          <p style="margin:0 0 12px 0; color:#D1D5DB; line-height:1.6;">
            If the provided credentials are <strong>invalid, misleading, or fake</strong>, 
            you may report this order for review.
            <br /><br />
            <strong>Reporting is only available within 48 hours of viewing this email.</strong>
            After this period, the order will be considered completed.
          </p>

          <a
            href=${reportLink}
            style="
              display:inline-block;
              background:#DC2626;
              color:#FFFFFF;
              padding:10px 18px;
              border-radius:8px;
              text-decoration:none;
              font-weight:600;
            "
          >
            🚩 Report Fake Credentials
          </a>
        </div>

        <!-- Footer -->
        <p style="font-size:12px; color:#9CA3AF; text-align:center; margin-top:25px;">
          © ${year} DigiAssets • Secure Marketplace for Digital Assets
        </p>
      </div>
    </div>
  </body>
</html>`;
};
