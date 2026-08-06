import { ImageResponse } from "next/og";

export const alt =
  "RNK Rentals chauffeur-driven car rental FAQs in India";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 84% 17%, rgba(127,29,29,0.90), transparent 30%), radial-gradient(circle at 15% 90%, rgba(127,29,29,0.28), transparent 26%), linear-gradient(135deg, #070707 0%, #151515 58%, #080808 100%)",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.08,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -90,
            top: 55,
            display: "flex",
            width: 450,
            height: 450,
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.13)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 18,
            top: 155,
            display: "flex",
            width: 270,
            height: 270,
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.13)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 22,
            bottom: -55,
            display: "flex",
            fontSize: 220,
            fontWeight: 900,
            letterSpacing: "-18px",
            color: "rgba(255,255,255,0.04)",
          }}
        >
          RNK
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "76%",
            padding: "68px 78px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 30,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            <span
              style={{
                display: "flex",
                width: 11,
                height: 11,
                borderRadius: "999px",
                background: "#dc2626",
                boxShadow: "0 0 22px rgba(220,38,38,0.9)",
              }}
            />
            RNK Rentals · India
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              lineHeight: 0.95,
              fontWeight: 900,
              letterSpacing: "-4px",
            }}
          >
            <span>Car Rental</span>
            <span style={{ color: "#b91c1c" }}>Questions Answered.</span>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 30,
              maxWidth: 790,
              fontSize: 24,
              lineHeight: 1.48,
              color: "rgba(255,255,255,0.64)",
            }}
          >
            Chauffeur-driven cars, airport transfers, corporate mobility,
            luxury rentals, weddings, VIP travel and pricing across India.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              marginTop: 40,
              fontSize: 18,
              fontWeight: 700,
              color: "rgba(255,255,255,0.80)",
            }}
          >
            <span>Since 1969</span>
            <span style={{ color: "#b91c1c" }}>•</span>
            <span>170+ Cities</span>
            <span style={{ color: "#b91c1c" }}>•</span>
            <span>24/7 Support</span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 68,
            top: 62,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 182,
            height: 70,
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.07)",
            fontSize: 25,
            fontWeight: 900,
            letterSpacing: "2px",
          }}
        >
          RNK
        </div>
      </div>
    ),
    size,
  );
}